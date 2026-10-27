import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/data/site";
import { founder } from "@/data/team";
import { ButtonLink } from "@/components/site/Buttons";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Blooms of Santa Barbara & Sandy Shields",
  description:
    "Meet Sandy Shields and Blooms of Santa Barbara: a boutique, woman-owned floral design studio in the heart of Santa Barbara, founded in 2017, known for garden-gathered wedding flowers, honest budgets and calm, personal service.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Blooms of Santa Barbara", description: "Meet Sandy Shields and the boutique studio behind Blooms of Santa Barbara.", url: "/about", images: ["/og.jpg"] },
};

const values = [
  { title: "Designed for the place", text: "Spanish tile, a bluff above the Pacific, a vineyard in the valley: the flowers should look as though they belong there. We design to the venue before we design to a trend." },
  { title: "Honest about budget", text: "One proposal with one total, and a steady habit of steering couples toward what adds beauty rather than cost. Reviews mention the transparency as often as the flowers." },
  { title: "In season, close to home", text: "Carpinteria and the Central Coast grow extraordinary flowers. We lean on what is blooming nearby because it looks better, lasts longer in the sun and costs less." },
  { title: "There until the end", text: "Delivery, setup, the move from ceremony to reception and the cleanup afterward are all ours. Your family never carries a vase." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <PageHero image="/images/hero-about.webp" imageAlt="A florist arranging fresh flowers in a vase at a studio work table" position="50% 40%" eyebrow="Our story" title="A boutique studio in the heart of Santa Barbara." lede="Blooms of Santa Barbara began in 2017 with one designer, a love of garden flowers and a town full of beautiful places to get married." crumbs={[{ name: "About" }]} />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="frame arch aspect-[3/4] shadow-soft">
                <Image src={founder.image} alt={founder.imageAlt} fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <SectionHeading eyebrow="The designer" title={founder.name} />
              <Reveal delay={1} className="mt-3 text-[11px] font-semibold uppercase tracking-luxe text-rose-600">
                {founder.role}
              </Reveal>
              <Reveal delay={1} className="prose-bsb mt-8">
                <p>{founder.bio}</p>
                <p>
                  The studio is small on purpose. One designer sees every wedding through, so the person you talk to on the first call is the person placing the last arrangement on the day. That is how the details stay yours: the flower your grandmother grew, the ribbon that matches the invitations, the one color you asked us to leave out.
                </p>
                <p>
                  Our style follows the coast. Soft neutrals and blush with garden roses, ranunculus, peonies and sweet peas; olive, jasmine and citrus from the gardens around us; candlelight on every table. Couples with bolder palettes, from saturated jewel tones to sun-washed brights, get the same care.
                </p>
              </Reveal>
              <Reveal delay={2} className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="/contact">Inquire</ButtonLink>
                <ButtonLink href="/reviews" variant="outline">
                  Read reviews
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="blush-band py-24 md:py-28">
        <Container>
          <SectionHeading center eyebrow="How we work" title="What couples can count on" />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) as 0 | 1} className="border-t border-gold-400/70 pt-6">
                <h3 className="font-display text-[1.5rem] tracking-[0.04em] text-plum-900">{v.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.8] text-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>At a glance</Eyebrow>
              <h2 className="display-title mt-5 text-[2rem] text-plum-900 md:text-[2.6rem]">{SITE.name}</h2>
              <dl className="mt-8 divide-y divide-plum-900/10">
                {[
                  ["Based in", "Santa Barbara, California"],
                  ["Serving", "Santa Barbara County, the Santa Ynez Valley, Ojai & Ventura"],
                  ["Owner", `${SITE.founder}, ${SITE.founderRole}`],
                  ["Founded", SITE.founded],
                  ["Ownership", "Woman-owned, sole proprietor"],
                  ["Reviews", `${SITE.rating.value} on ${SITE.rating.source}`],
                  ["Featured in", "Wedding Sparrow"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-4 py-3 text-sm">
                    <dt className="text-[10px] font-semibold uppercase tracking-luxe text-rose-600">{k}</dt>
                    <dd className="col-span-2 text-plum-900">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-6 lg:col-start-7">
              <div className="frame aspect-[4/3] rounded-[6px] shadow-soft">
                <Image src="/images/studio-peonies.webp" alt="Buckets of white peonies and garden roses in the studio" fill sizes="(max-width: 1024px) 90vw, 50vw" className="object-cover" />
              </div>
              <p className="mt-6 text-[1rem] leading-[1.8] text-muted">
                We meet couples by phone and video, and in Santa Barbara at the studio by appointment, with blooms on the table. On wedding days we are on site with the flowers, so a weekend message may be answered the next morning; otherwise we reply {SITE.responseTime}.
              </p>
              <ul className="mt-5 space-y-1 text-sm text-plum-900">
                <li>
                  <a href={`tel:${SITE.phoneTel}`} className="hover:text-rose-600">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-rose-600">
                    {SITE.social.instagramHandle}
                  </a>
                </li>
                <li className="text-muted">
                  {SITE.address.locality}, {SITE.address.region} {SITE.address.postalCode}
                </li>
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
