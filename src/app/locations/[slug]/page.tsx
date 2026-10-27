import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocation } from "@/data/locations";
import { services } from "@/data/services";
import { SITE } from "@/data/site";
import { ButtonLink } from "@/components/site/Buttons";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FaqList } from "@/components/site/FaqList";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqSchema, businessId } from "@/lib/schema";
import { ArrowIcon } from "@/components/site/Icons";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return { title: "Location not found" };
  return {
    title: { absolute: l.metaTitle },
    description: l.metaDescription,
    alternates: { canonical: `/locations/${l.slug}` },
    openGraph: { title: l.metaTitle, description: l.metaDescription, url: `/locations/${l.slug}`, images: [l.image] },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();
  const others = locations.filter((o) => o.slug !== l.slug);
  const featured = services.slice(0, 5);

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Wedding and event flowers in ${l.city}`,
    serviceType: "Wedding and event floral design",
    description: l.metaDescription,
    url: `${SITE.url}/locations/${l.slug}`,
    provider: { "@id": businessId },
    areaServed: { "@type": "Place", name: l.city, geo: { "@type": "GeoCoordinates", latitude: l.geo.latitude, longitude: l.geo.longitude } },
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Locations", path: "/locations" }, { name: l.city, path: `/locations/${l.slug}` }]), localSchema, faqSchema(l.faqs)]} />
      <PageHero image={l.image} imageAlt={l.imageAlt} eyebrow={`${l.region} · ${l.drive}`} title={l.heading} crumbs={[{ name: "Locations", href: "/locations" }, { name: l.city }]}>
        <ButtonLink href="/contact" variant="light">
          Inquire for {l.city}
        </ButtonLink>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="lede">{l.intro}</p>
              </Reveal>
              <Reveal delay={1} className="prose-bsb mt-10">
                {l.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={1} className="rounded-[6px] border border-plum-900/10 bg-blush-50 p-7">
                <Eyebrow>Venues in {l.city}</Eyebrow>
                <p className="mt-3 text-xs text-muted">Places couples marry in and around {l.city}, where we deliver and set up.</p>
                <ul className="mt-4 space-y-2 font-serif text-lg font-medium text-plum-900">
                  {l.venues.map((v) => (
                    <li key={v} className="border-b border-plum-900/10 pb-2">
                      {v}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={2} className="mt-8 rounded-[6px] border border-plum-900/10 p-7">
                <Eyebrow>Popular in {l.city}</Eyebrow>
                <ul className="mt-4 space-y-2">
                  {featured.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="group flex items-center justify-between border-b border-plum-900/10 py-2 font-serif text-lg font-medium text-plum-900 hover:text-rose-600">
                        {s.title} <ArrowIcon className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="blush-band py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Questions" title={`Weddings in ${l.city}`} />
              <Reveal delay={1} className="mt-8">
                <ButtonLink href="/contact">Inquire</ButtonLink>
              </Reveal>
            </div>
            <Reveal delay={1} className="lg:col-span-8">
              <FaqList faqs={l.faqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="eyebrow">Also serving</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 font-display text-xl tracking-[0.04em] text-plum-900">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/locations/${o.slug}`} className="hover:text-rose-600">
                    {o.city}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
