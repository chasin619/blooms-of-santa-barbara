import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { SITE } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FaqList } from "@/components/site/FaqList";
import { ButtonLink } from "@/components/site/Buttons";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Wedding Flowers FAQ | Pricing, Booking & Delivery in Santa Barbara",
  description:
    "Answers about how Blooms of Santa Barbara quotes wedding flowers, where it works, how far ahead to book, delivery, setup and cleanup, seasonal and local blooms, bouquets-only orders and flowers for parties and corporate events.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQ | Blooms of Santa Barbara", description: "Pricing, booking, delivery, setup and flower questions answered.", url: "/faq", images: ["/og.jpg"] },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: "FAQ", path: "/faq" }]), faqSchema(faqs)]} />
      <PageHero image="/images/installation-blossoms.webp" imageAlt="Ground installations of white and peach blooms and blossoming branches at the entrance of a white Spanish building" eyebrow="Questions" title="Good to know before you inquire." lede="How we quote, where we go, what we design and how the day runs. If your question is not here, send it in an inquiry and we will answer it directly." crumbs={[{ name: "FAQ" }]} position="50% 50%" />

      <section className="py-20 md:py-28">
        <Container narrow>
          <Reveal>
            <FaqList faqs={faqs} />
          </Reveal>
          <Reveal className="mt-16 border-t border-plum-900/10 pt-10 text-center">
            <p className="font-serif text-2xl italic text-plum-800">Still wondering about something?</p>
            <p className="mt-3 text-sm text-muted">
              Call or text{" "}
              <a href={`tel:${SITE.phoneTel}`} className="text-plum-900 underline decoration-gold-400 underline-offset-4">
                {SITE.phone}
              </a>
              , or send an inquiry.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact">Inquire</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
