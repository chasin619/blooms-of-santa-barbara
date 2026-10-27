"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/data/site";
import { BloomIcon, InstagramIcon } from "./Icons";

/**
 * Fixed header. Over the home cover it is transparent with light text; on every other page, and
 * once the visitor scrolls, it turns petal with plum text. The MENU button opens a full-screen
 * overlay with the wordmark centered and the links stacked, in the manner of the CHIC Flowers menu.
 */
export function Header() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || !overHero;
  const tone = solid ? "text-plum-900" : "text-petal on-photo";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid ? "bg-petal/90 shadow-[0_1px_0_rgba(56,37,45,0.08)] backdrop-blur-md" : "bg-transparent"}`}>
        <div className={`mx-auto flex max-w-[96rem] items-center justify-between px-5 sm:px-8 ${solid ? "py-4" : "py-6"} transition-all duration-500 ${tone}`}>
          <Link href="/" className={`group flex flex-col leading-none transition-all duration-500 ${solid ? "visible opacity-100" : "invisible opacity-0"}`} aria-label={`${SITE.name} home`}>
            <span className="brand text-[1.2rem] sm:text-[1.4rem]">Blooms</span>
            <span className={`mt-1.5 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-luxe ${solid ? "text-rose-600" : "text-petal/90"}`}>
              of Santa Barbara<span className="hidden sm:inline"> · Wedding &amp; Event Florals</span>
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <a href={`tel:${SITE.phoneTel}`} className={`hidden text-[12px] font-semibold uppercase tracking-wide2 transition-colors lg:inline ${solid ? "hover:text-rose-600" : "hover:text-blush-200"}`}>
              {SITE.phone}
            </a>
            <Link href="/contact" className={`hidden text-[12px] font-semibold uppercase tracking-luxe transition-colors sm:inline ${solid ? "hover:text-rose-600" : "hover:text-blush-200"}`}>
              Inquire
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-[12px] font-semibold uppercase tracking-luxe transition-colors duration-300 ${solid ? "border-plum-900/50 hover:bg-plum-900 hover:text-petal" : "border-petal bg-plum-950/25 backdrop-blur-[3px] hover:bg-petal hover:text-plum-900"}`}
            >
              <span className="flex flex-col gap-[5px]" aria-hidden="true">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`blush-band fixed inset-0 z-50 flex flex-col text-plum-900 transition-all duration-500 ease-out ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
      >
        <div className="flex items-center justify-between px-5 py-6 sm:px-8">
          <div className="w-24" aria-hidden="true" />
          <Link href="/" className="flex flex-col items-center leading-none" onClick={() => setOpen(false)}>
            <span className="brand text-[1.4rem] sm:text-[1.7rem]">Blooms</span>
            <span className="brand-sub mt-1 text-[0.95rem] text-rose-600 sm:text-[1.1rem]">of Santa Barbara</span>
          </Link>
          <button type="button" onClick={() => setOpen(false)} className="inline-flex w-24 items-center justify-end gap-3 text-[11px] font-semibold uppercase tracking-luxe hover:text-rose-600" aria-label="Close menu">
            <span className="relative block h-4 w-4" aria-hidden="true">
              <span className="absolute left-0 top-1/2 block h-px w-full rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 block h-px w-full -rotate-45 bg-current" />
            </span>
            Close
          </button>
        </div>
        <div className="mx-10 hairline sm:mx-24" />

        <nav aria-label="Main" className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-5 py-8">
          <ul className="flex flex-col items-center gap-4 text-center sm:gap-5">
            {NAV.map((item, i) => (
              <li key={item.href} className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`} style={{ transitionDelay: `${80 + i * 45}ms` }}>
                <Link href={item.href} className={`menu-link ${pathname === item.href || pathname.startsWith(`${item.href}/`) ? "text-rose-600" : ""}`} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <BloomIcon className="mt-10 h-5 w-5 text-rose-400" />
        </nav>

        <div className="mx-10 hairline sm:mx-24" />
        <div className="flex flex-col items-center gap-4 px-5 py-6 text-center text-sm text-muted sm:flex-row sm:justify-between sm:px-24">
          <p>
            <a href={`tel:${SITE.phoneTel}`} className="text-plum-900 hover:text-rose-600">
              {SITE.phone}
            </a>
            <span className="mx-3 text-gold-500" aria-hidden="true">
              ·
            </span>
            <span>Santa Barbara, California</span>
          </p>
          <div className="flex items-center gap-6">
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${SITE.name} on Instagram`} className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-plum-900/80 transition-colors hover:text-rose-600">
              <InstagramIcon className="h-5 w-5" /> {SITE.social.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
