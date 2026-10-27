import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { portfolio } from "@/data/portfolio";
import { ButtonLink } from "@/components/site/Buttons";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { OptionCard, IncludesList } from "@/components/site/Cards";
import { FaqList } from "@/components/site/FaqList";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { ArrowIcon } from "@/components/site/Icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service not found" };
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/services/${s.slug}`, images: [s.image] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const related = s.related.map((r) => getService(r)).filter(Boolean) as typeof services;
  const gallery = portfolio.filter((p) => p.src !== s.image && p.src !== s.image2).slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: s.title, path: `/services/${s.slug}` },
          ]),
          serviceSchema({ name: s.title, description: s.metaDescription, path: `/services/${s.slug}`, items: s.includes }),
          faqSchema(s.faqs),
        ]}
      />
      <PageHero image={s.image} imageAlt={s.imageAlt} eyebrow="Services" title={s.heading} crumbs={[{ name: "Services", href: "/services" }, { name: s.title }]}>
        <ButtonLink href="/contact" variant="light">
          Inquire about {s.short.toLowerCase()}
        </ButtonLink>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="lede">{s.intro}</p>
              </Reveal>
              <Reveal delay={1} className="prose-bsb mt-10">
                {s.details.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              {s.image2 && (
                <Reveal delay={1} className="frame arch aspect-[4/5] shadow-soft">
                  <Image src={s.image2} alt={s.image2Alt ?? s.title} fill sizes="(max-width: 1024px) 90vw, 30vw" className="object-cover" />
                </Reveal>
              )}
              <Reveal delay={2} className="mt-8 rounded-[6px] border border-plum-900/10 bg-blush-50 p-7">
                <Eyebrow>{s.includesTitle}</Eyebrow>
                <div className="mt-4">
                  <IncludesList items={s.includes} />
                </div>
                <div className="mt-6">
                  <ButtonLink href="/contact" variant="outline" className="w-full">
                    Request a proposal
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="options" className="blush-band py-24 md:py-28">
        <Container>
          <SectionHeading center eyebrow="Choices" title={s.optionsTitle} lede={s.optionsIntro} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.options.map((o, i) => (
              <Reveal key={o.name} delay={(i % 3) as 0 | 1 | 2}>
                <OptionCard option={o} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted">{s.cta}</p>
            <div className="mt-6">
              <ButtonLink href="/contact">Inquire</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {gallery.map((img, i) => (
              <Reveal key={img.src} delay={(i % 4 > 2 ? 2 : i) as 0 | 1 | 2} className="frame aspect-[4/5] rounded-[6px]">
                <Link href="/portfolio" aria-label={`${img.alt}: open the portfolio`}>
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-plum-900/10 py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Questions" title={`About ${s.short.toLowerCase()}`} />
            </div>
            <Reveal delay={1} className="lg:col-span-8">
              <FaqList faqs={s.faqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-blush-100 py-16">
        <Container>
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="eyebrow">Pairs well with</p>
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}`} className="group inline-flex items-center gap-2 font-display text-xl tracking-[0.04em] text-plum-900 hover:text-rose-600">
                    {r.title} <ArrowIcon className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="inline-flex items-center gap-2 font-display text-xl tracking-[0.04em] text-muted hover:text-rose-600">
                  All services
                </Link>
              </li>
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
