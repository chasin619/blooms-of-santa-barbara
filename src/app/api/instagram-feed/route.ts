import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * The latest posts from @bloomsofsantabarbara for the "Follow along" grid, in the same { data: [...] }
 * shape the CHIC Flowers site renders. Two sources, the first configured one wins:
 *
 * 1. INSTAGRAM_FEED_ORIGIN + INSTAGRAM_VENDOR_SLUG: the florist platform (Fiory / florist.app)
 *    where the business connects Instagram once and the token is refreshed for it.
 * 2. INSTAGRAM_ACCESS_TOKEN: a long-lived Instagram API token used directly.
 *
 * With neither, the route answers an empty list and the grid shows the site's own photos.
 */

interface Post {
  id?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
}

const EMPTY = { data: [] as Post[] };
const CACHE = { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600" };

function valid(p: unknown): p is Post {
  if (!p || typeof p !== "object") return false;
  const x = p as Record<string, unknown>;
  return typeof x.media_url === "string" && /^https:\/\//.test(x.media_url) && typeof x.permalink === "string" && /^https:\/\/(www\.)?instagram\.com\//.test(x.permalink) && ["IMAGE", "VIDEO", "CAROUSEL_ALBUM"].includes(String(x.media_type));
}

async function fromPlatform(origin: string, vendor: string): Promise<Post[]> {
  const url = `${origin.replace(/\/+$/, "")}/api/instagram-feed?vendor=${encodeURIComponent(vendor)}`;
  const res = await fetch(url, { next: { revalidate: 900 }, signal: AbortSignal.timeout(8_000) });
  if (!res.ok) throw new Error(`Feed platform answered ${res.status}`);
  const data = (await res.json()) as { data?: unknown[] };
  return (data.data ?? []).filter(valid);
}

async function fromInstagram(token: string): Promise<Post[]> {
  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink";
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url, { next: { revalidate: 900 }, signal: AbortSignal.timeout(8_000) });
  if (!res.ok) throw new Error(`Instagram answered ${res.status}`);
  const data = (await res.json()) as { data?: unknown[] };
  return (data.data ?? []).filter(valid);
}

export async function GET() {
  const origin = process.env.INSTAGRAM_FEED_ORIGIN?.trim();
  const vendor = process.env.INSTAGRAM_VENDOR_SLUG?.trim();
  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  try {
    let posts: Post[] = [];
    if (origin && vendor) posts = await fromPlatform(origin, vendor);
    else if (token) posts = await fromInstagram(token);
    return NextResponse.json({ data: posts.slice(0, 12).map((p) => ({ id: p.id, media_type: p.media_type, media_url: p.media_url, thumbnail_url: p.thumbnail_url, permalink: p.permalink, caption: p.caption?.slice(0, 300) })) }, { headers: CACHE });
  } catch (err) {
    console.error("Instagram feed unavailable", err);
    return NextResponse.json(EMPTY, { headers: { "Cache-Control": "public, s-maxage=120" } });
  }
}
