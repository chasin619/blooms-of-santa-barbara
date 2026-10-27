import { NextResponse } from "next/server";
import { SITE } from "@/data/site";
import { createRateLimiter, clientIp } from "@/lib/rate-limit";
import { clean, deliverInquiry, EMAIL_RE, emailConfigured, type Inquiry } from "@/lib/leads";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  eventDate?: string;
  venue?: string;
  guests?: string;
  needs?: unknown;
  budget?: string;
  colors?: string;
  message?: string;
  page?: string;
  landing?: string;
  referrer?: string;
  utm?: { source?: string; medium?: string; campaign?: string };
  visit?: string;
  /** Honeypot: a real person never fills it. */
  bsb_hp?: string;
  /** When the form was opened; a submit under two seconds is a bot. */
  startedAt?: number;
};

const limited = createRateLimiter(10 * 60 * 1000, 5);
const NEED_RE = /^[A-Za-z0-9 &'-]{2,48}$/;
const VISIT_RE = /^[A-Za-z0-9_-]{8,64}$/;

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field or submit instantly; both get a quiet success.
  if (clean(data.bsb_hp)) return NextResponse.json({ ok: true });
  if (typeof data.startedAt === "number" && Date.now() - data.startedAt < 2000) return NextResponse.json({ ok: true });

  if (limited(clientIp(req))) {
    return NextResponse.json({ error: `Too many requests. Please call or text ${SITE.phone}.` }, { status: 429 });
  }

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const phone = clean(data.phone, 40);
  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Please add your name, email and phone number." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const needs = Array.isArray(data.needs) ? data.needs.filter((s): s is string => typeof s === "string" && NEED_RE.test(s)).slice(0, 12) : [];
  const page = clean(data.page, 300);
  const inquiry: Inquiry = {
    name,
    email,
    phone,
    eventDate: clean(data.eventDate, 40),
    venue: clean(data.venue, 200),
    guests: clean(data.guests, 20),
    needs,
    budget: clean(data.budget, 60),
    colors: clean(data.colors, 200),
    message: clean(data.message, 3000),
    page: page.startsWith("/") ? page : "/contact",
    landing: clean(data.landing, 300) || undefined,
    referrer: clean(data.referrer, 500) || undefined,
    utm: data.utm && typeof data.utm === "object" ? { source: clean(data.utm.source, 100) || undefined, medium: clean(data.utm.medium, 100) || undefined, campaign: clean(data.utm.campaign, 100) || undefined } : undefined,
    visit: typeof data.visit === "string" && VISIT_RE.test(data.visit) ? data.visit : undefined,
  };

  const delivery = await deliverInquiry(inquiry);
  // In production the email is the deliverable; without it the inquiry would be lost.
  if (emailConfigured() && !delivery.ownerSent && !delivery.dashboardSaved) {
    return NextResponse.json({ error: `We could not send your message. Please call or text ${SITE.phone}.` }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
