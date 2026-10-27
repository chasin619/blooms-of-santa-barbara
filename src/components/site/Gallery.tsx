"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { PortfolioCategory, PortfolioImage } from "@/data/portfolio";

/** A filterable masonry gallery with a lightbox. The images render server-side; only the filter and lightbox are client state. */
export function Gallery({ images, categories, showFilters = true, columns = "columns-2 md:columns-3" }: { images: PortfolioImage[]; categories?: PortfolioCategory[]; showFilters?: boolean; columns?: string }) {
  const [filter, setFilter] = useState<PortfolioCategory | "All">("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = filter === "All" ? images : images.filter((i) => i.category === filter);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: 1 | -1) => setOpen((cur) => (cur === null ? cur : (cur + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <div>
      {showFilters && categories && (
        <div className="mb-10 flex flex-wrap justify-center gap-x-7 gap-y-3">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setFilter(c);
                setOpen(null);
              }}
              className={`border-b pb-1 text-[11px] font-semibold uppercase tracking-luxe transition-colors ${filter === c ? "border-gold-500 text-plum-900" : "border-transparent text-muted hover:text-plum-900"}`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className={`${columns} gap-4 [column-fill:_balance]`}>
        {shown.map((img, i) => (
          <figure key={img.src} className="frame mb-4 break-inside-avoid rounded-[4px]">
            <button type="button" onClick={() => setOpen(i)} className="group block w-full text-left" aria-label={`Open: ${img.alt}`}>
              <div className="relative w-full" style={{ aspectRatio: String(img.ratio) }}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                <span className="absolute inset-0 bg-plum-950/0 transition-colors duration-500 group-hover:bg-plum-950/20" aria-hidden="true" />
              </div>
            </button>
            <figcaption className="sr-only">{img.alt}</figcaption>
          </figure>
        ))}
      </div>

      {open !== null && shown[open] && (
        <div role="dialog" aria-modal="true" aria-label={shown[open].alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-plum-950/95 p-4 sm:p-10" onClick={close}>
          <button type="button" onClick={close} className="absolute right-5 top-5 text-[11px] font-semibold uppercase tracking-luxe text-petal/80 hover:text-petal" aria-label="Close">
            Close ✕
          </button>
          <button type="button" onClick={(e) => (e.stopPropagation(), step(-1))} className="absolute left-3 top-1/2 -translate-y-1/2 p-3 font-serif text-3xl text-petal/70 hover:text-petal sm:left-6" aria-label="Previous image">
            ‹
          </button>
          <button type="button" onClick={(e) => (e.stopPropagation(), step(1))} className="absolute right-3 top-1/2 -translate-y-1/2 p-3 font-serif text-3xl text-petal/70 hover:text-petal sm:right-6" aria-label="Next image">
            ›
          </button>
          <figure className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={shown[open].src} alt={shown[open].alt} fill sizes="100vw" className="object-contain" priority />
            <figcaption className="absolute bottom-0 left-0 right-0 pb-2 text-center text-xs tracking-wide text-petal/70">
              {shown[open].alt} · {open + 1} / {shown.length}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
