import Image from "next/image";
import Link from "next/link";
import type { Service, ServiceOption } from "@/data/services";
import type { Review } from "@/data/reviews";
import { ArrowIcon, StarIcon } from "./Icons";

/** A square photo tile with the title on hover, in the manner of the CHIC Flowers portfolio grid. */
export function ServiceTile({ service, index = 0, sizes = "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" }: { service: Service; index?: number; sizes?: string }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <div className="frame aspect-square rounded-[4px] shadow-soft">
        <Image src={service.image} alt={service.imageAlt} fill sizes={sizes} className="object-cover" />
        <div className="tile-overlay">
          <span className="display-title text-[clamp(1.1rem,2.2vw,1.6rem)] text-petal">{service.title}</span>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-luxe text-rose-600">0{index + 1}</p>
          <h3 className="mt-1 font-display text-[1.45rem] leading-tight tracking-[0.04em] text-plum-900 transition-colors group-hover:text-rose-600">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{service.blurb}</p>
        </div>
        <span className="mt-6 shrink-0 text-gold-500 transition-transform duration-300 group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export function ReviewCard({ review, light = false, className = "" }: { review: Review; light?: boolean; className?: string }) {
  const month = new Date(`${review.date}-15`).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  return (
    <figure className={`flex h-full flex-col justify-between rounded-[4px] border p-7 md:p-8 ${light ? "border-petal/15 bg-petal/[0.04]" : "border-plum-900/10 bg-white/60"} ${className}`}>
      <div>
        <div className={`flex gap-1 ${light ? "text-gold-300" : "text-gold-500"}`} aria-label="Five stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <blockquote className={`mt-5 font-serif text-[1.35rem] font-medium leading-snug ${light ? "text-petal" : "text-plum-900"}`}>
          <p>“{review.quote}”</p>
        </blockquote>
        {review.detail && <p className={`mt-4 text-sm leading-relaxed ${light ? "text-petal/75" : "text-muted"}`}>{review.detail}</p>}
      </div>
      <figcaption className={`mt-6 text-[11px] font-semibold uppercase tracking-wide2 ${light ? "text-gold-300" : "text-rose-600"}`}>
        {review.author}
        <span className={`block font-normal normal-case tracking-normal ${light ? "text-petal/60" : "text-muted"}`}>
          {review.source}, {month}
        </span>
      </figcaption>
    </figure>
  );
}

export function OptionCard({ option, light = false }: { option: ServiceOption; light?: boolean }) {
  return (
    <div className={`rounded-[4px] border p-6 ${light ? "border-petal/15 bg-petal/[0.04]" : "border-plum-900/10 bg-white/50"}`}>
      <h3 className={`font-display text-[1.3rem] leading-tight tracking-[0.04em] ${light ? "text-petal" : "text-plum-900"}`}>{option.name}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${light ? "text-petal/75" : "text-muted"}`}>{option.detail}</p>
    </div>
  );
}

export function IncludesList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className={`space-y-2.5 text-[0.95rem] leading-snug ${light ? "text-petal/90" : "text-plum-800"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className={`mt-[0.6em] h-px w-3 shrink-0 ${light ? "bg-gold-300" : "bg-gold-500"}`} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
