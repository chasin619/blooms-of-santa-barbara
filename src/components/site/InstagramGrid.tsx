"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE } from "@/data/site";
import { PlayIcon } from "./Icons";

export interface FeedPost {
  id?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
}

export interface FallbackImage {
  src: string;
  alt: string;
}

/**
 * The "Follow along" grid. It asks /api/instagram-feed for the latest posts and shows them when the
 * feed is configured; otherwise, and while loading, it shows the site's own photos linking to the
 * profile, so the section is never empty and crawlers always see real images.
 */
export function InstagramGrid({ fallback, count = 8 }: { fallback: FallbackImage[]; count?: number }) {
  const [posts, setPosts] = useState<FeedPost[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/instagram-feed")
      .then((r) => (r.ok ? r.json() : { data: [] }))
      .then((d: { data?: FeedPost[] }) => {
        if (cancelled) return;
        const list = (d.data ?? []).filter((p) => p && p.media_url && p.permalink);
        setPosts(list.length ? list : []);
      })
      .catch(() => !cancelled && setPosts([]));
    return () => {
      cancelled = true;
    };
  }, []);

  const live = posts && posts.length > 0;
  const tiles = live ? posts.slice(0, count) : fallback.slice(0, count);

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4" data-feed={live ? "live" : "static"}>
      {tiles.map((t, i) => {
        if (live) {
          const p = t as FeedPost;
          const caption = p.caption ? p.caption.replace(/\s+/g, " ").slice(0, 120) : `Instagram post ${i + 1} from ${SITE.social.instagramHandle}`;
          return (
            <a key={p.id ?? p.permalink} href={p.permalink} target="_blank" rel="noopener noreferrer" className="frame group relative aspect-square rounded-[4px]" aria-label={caption}>
              {p.media_type === "VIDEO" ? (
                <>
                  <video src={p.media_url} poster={p.thumbnail_url} className="h-full w-full object-cover" muted playsInline autoPlay loop />
                  <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-plum-950/70 text-petal" aria-hidden="true">
                    <PlayIcon className="h-5 w-5 translate-x-[1px]" />
                  </span>
                </>
              ) : (
                // Instagram media lives on rotating CDN hosts, so it is served as-is rather than through the image optimizer.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.media_url} alt={caption} loading="lazy" className="h-full w-full object-cover" />
              )}
            </a>
          );
        }
        const f = t as FallbackImage;
        return (
          <a key={f.src} href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="frame group relative aspect-square rounded-[4px]" aria-label={`${f.alt} on Instagram`}>
            <Image src={f.src} alt={f.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </a>
        );
      })}
    </div>
  );
}
