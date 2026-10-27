import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container, Eyebrow } from "./Section";

/** The inner-page hero: a full-width photo with a palm wash, breadcrumbs, eyebrow and H1. */
export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  lede,
  crumbs,
  children,
  position = "50% 50%",
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs: { name: string; href?: string }[];
  children?: ReactNode;
  position?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-plum-900 pt-32 pb-14 text-petal md:min-h-[68vh] md:pb-20">
      <Image src={image} alt={imageAlt} fill priority sizes="(orientation: portrait) 110vh, 100vw" className="object-cover" style={{ objectPosition: position }} />
      <div className="hero-overlay-bottom absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <div className="rise on-photo mb-6">
          <Breadcrumbs items={crumbs} light />
        </div>
        {eyebrow && (
          <div className="rise rise-1 on-photo mb-5">
            <Eyebrow light>{eyebrow}</Eyebrow>
          </div>
        )}
        <h1 className="rise rise-1 on-photo-strong display-title max-w-4xl text-[2rem] text-petal md:text-[2.9rem] lg:text-[3.4rem]">{title}</h1>
        {lede && <p className="rise rise-2 on-photo mt-6 max-w-2xl text-[1.0625rem] font-normal leading-[1.8] text-petal md:text-lg">{lede}</p>}
        {children && <div className="rise rise-3 mt-8">{children}</div>}
      </Container>
    </section>
  );
}
