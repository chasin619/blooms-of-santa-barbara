"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Reports page views and Call / Text / Email taps to the Velour Web dashboard, and keeps the visit
 * context (id, landing page, referrer, UTM tags) in sessionStorage so the inquiry form can send it
 * with the lead. No cookies, no personal data; off entirely when the site is not configured.
 */
export interface VisitContext {
  visit: string;
  landing: string;
  referrer: string;
  utm: { source?: string; medium?: string; campaign?: string };
}

const KEY = "bsb_visit";

export function readVisit(): VisitContext | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as VisitContext) : null;
  } catch {
    return null;
  }
}

function ensureVisit(): VisitContext | null {
  try {
    const existing = readVisit();
    if (existing) return existing;
    const params = new URLSearchParams(window.location.search);
    const utm = {
      source: params.get("utm_source") || undefined,
      medium: params.get("utm_medium") || undefined,
      campaign: params.get("utm_campaign") || undefined,
    };
    const id = (crypto.randomUUID ? crypto.randomUUID().replace(/-/g, "") : Math.random().toString(36).slice(2) + Date.now().toString(36)).slice(0, 32);
    const ctx: VisitContext = { visit: id, landing: window.location.pathname, referrer: document.referrer || "", utm };
    sessionStorage.setItem(KEY, JSON.stringify(ctx));
    return ctx;
  } catch {
    return null;
  }
}

export function Tracker({ url, site }: { url?: string; site?: string }) {
  const pathname = usePathname();
  const last = useRef<string>("");

  useEffect(() => {
    if (!url || !site) return;
    const ctx = ensureVisit();
    if (!ctx) return;

    const send = (kind: "view" | "call" | "text" | "email", path: string) => {
      const body = JSON.stringify({ site, kind, path, visit: ctx.visit, landing: ctx.landing, referrer: ctx.referrer, utm: ctx.utm });
      try {
        if (navigator.sendBeacon) {
          navigator.sendBeacon(url, new Blob([body], { type: "text/plain" }));
        } else {
          fetch(url, { method: "POST", body, headers: { "Content-Type": "text/plain" }, keepalive: true }).catch(() => {});
        }
      } catch {}
    };

    if (last.current !== pathname) {
      last.current = pathname;
      send("view", pathname);
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) send("call", pathname);
      else if (href.startsWith("sms:")) send("text", pathname);
      else if (href.startsWith("mailto:")) send("email", pathname);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [url, site, pathname]);

  return null;
}
