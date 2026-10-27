import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { ButtonLink } from "@/components/site/Buttons";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ServiceTile } from "@/components/site/Cards";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FaqList } from "@/components/site/FaqList";

export const metadata: Metadata = {
  title: "Wedding & Event Floral Services in Santa Barbara",
  description:
    "Blooms of Santa Barbara services: full-service wedding florals, bridal bouquets and personal flowers, ceremony arches and installations, reception centerpieces, private event and party flowers, and corporate event florals across Santa Barbara County and the Santa Ynez Valley.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Services | Blooms of Santa Barbara", description: "Wedding, event and party florals for Santa Barbara and the Central Coast.", url: "/services", images: ["/og.jpg"] },
};

const faqs = [
  {
    question: "Can we book one piece, or do you only take full weddings?",
    answer: "Either. Many elopements order only a bouquet and a boutonnière, and many couples book every flower on the day. We will tell you honestly which pieces are worth it for your venue and your budget.",
  },
  {
    question: "How is a wedding quoted?",
    answer: "From your guest count, your venue and the pieces you choose. You receive one written proposal with every item and one total, and that is the number you pay. Delivery, setup and cleanup are included in the quote.",
  },
  {
    question: "Do you supply the vases, candles and arch frames?",
    answer: "Yes. Vessels, candle holders, tapers and arch structures are ours, included as rentals in the proposal and collected at the end of the night.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "Services", path: "/services" }]), faqSchema(faqs)]} />
      <PageHero image="/images/ceremony-church-aisle.webp" imageAlt="Lavender, white and pink aisle arrangements inside a historic stone church" eyebrow="Services" title="Every flower on the day, from one small studio." lede="Bouquets, ceremonies, tables and the celebrations around them, designed by Sandy and delivered, set and collected by our own team." crumbs={[{ name: "Services" }]} position="50% 50%" />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) as 0 | 1 | 2}>
                <ServiceTile service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-plum-900 py-24 text-petal md:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="frame arch aspect-[4/5] max-w-md">
                <Image src="/images/reception-centerpiece.webp" alt="A reception centerpiece of burgundy, blush and pink blooms with taper candles" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <SectionHeading light eyebrow="How it is quoted" title="One proposal, one total, no surprises." lede="There is no price list because there is no typical wedding. Tell us your guest count, your venue and the pieces you want, and the proposal lists every flower with one number. Reviews describe it the same way: transparent, flexible and honest about what is worth the money." />
              <Reveal delay={1} className="mt-10 grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
                {[
                  ["Bouquets", "Garden-gathered"],
                  ["Ceremony", "Arches & meadows"],
                  ["Tables", "Compotes & candles"],
                  ["Vessels", "Ours, included"],
                  ["Setup", "Always included"],
                  ["Cleanup", "Always included"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-petal/20 pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-luxe text-gold-300">{k}</p>
                    <p className="mt-1 font-display text-xl tracking-[0.04em]">{v}</p>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={2} className="mt-10">
                <ButtonLink href="/contact" variant="light">
                  Request a proposal
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Questions" title="About our services" />
              <Reveal delay={1} className="mt-6 text-sm text-muted">
                More on the{" "}
                <Link href="/faq" className="text-plum-900 underline decoration-gold-400 underline-offset-4">
                  FAQ page
                </Link>
                .
              </Reveal>
            </div>
            <Reveal delay={1} className="lg:col-span-8">
              <FaqList faqs={faqs} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
