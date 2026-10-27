import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@/data/locations";
import { SERVICE_AREAS } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ArrowIcon } from "@/components/site/Icons";

export const metadata: Metadata = {
  title: "Wedding Florist for Santa Barbara, Montecito, Goleta, Carpinteria, Santa Ynez & Ojai",
  description:
    "Blooms of Santa Barbara designs and delivers wedding and event flowers across Santa Barbara County and beyond: Santa Barbara, Montecito, Goleta, Carpinteria and Summerland, the Santa Ynez Valley, Ojai and Ventura.",
  alternates: { canonical: "/locations" },
  openGraph: { title: "Where we work | Blooms of Santa Barbara", description: "Wedding flowers across Santa Barbara County, the Santa Ynez Valley and Ojai.", url: "/locations", images: ["/og.jpg"] },
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Locations", path: "/locations" }])} />
      <PageHero image="/images/hero-locations.webp" imageAlt="The Santa Barbara coastline with palm trees at sunset" eyebrow="Where we work" title="From the courthouse steps to the vineyards over the pass." lede="Based in Santa Barbara, designing and delivering across the county, the Santa Ynez Valley, Ojai and Ventura, with the Central Coast by arrangement." crumbs={[{ name: "Locations" }]} position="50% 50%" />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((l, i) => (
              <Reveal key={l.slug} delay={(i % 3) as 0 | 1 | 2}>
                <Link href={`/locations/${l.slug}`} className="group block">
                  <div className="frame arch aspect-[4/5] shadow-soft">
                    <Image src={l.image} alt={l.imageAlt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" className="object-cover" />
                    <div className="tile-overlay">
                      <span className="text-[11px] font-semibold uppercase tracking-luxe text-petal">{l.drive}</span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-luxe text-rose-600">{l.region}</p>
                      <h2 className="mt-1 font-display text-[1.6rem] leading-tight tracking-[0.04em] text-plum-900 transition-colors group-hover:text-rose-600">{l.city}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{l.intro.split(". ")[0]}.</p>
                    </div>
                    <span className="mt-2 shrink-0 text-gold-500 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="blush-band py-20 md:py-24">
        <Container>
          <SectionHeading center eyebrow="Service area" title="And everywhere in between" lede="Delivery is quoted with the event by the venue's distance from Santa Barbara. For the farthest venues we arrive the day before when the venue allows." />
          <Reveal className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 font-display text-xl tracking-[0.04em] text-plum-900">
            {SERVICE_AREAS.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
