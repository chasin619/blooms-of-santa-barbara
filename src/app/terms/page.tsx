import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { Container } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the Blooms of Santa Barbara website and for booking our floral services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24 md:pt-44">
      <Container narrow>
        <Breadcrumbs items={[{ name: "Terms" }]} />
        <h1 className="display-title mt-8 text-[2.4rem] text-plum-900">Terms of Service</h1>
        <p className="mt-3 text-xs uppercase tracking-wide2 text-muted">Last updated {SITE.lastModified}</p>
        <div className="prose-bsb mt-10">
          <h2 className="font-display text-[1.7rem] tracking-[0.04em] text-plum-900">This website</h2>
          <p>
            The content of this website, including photographs, text and design, belongs to {SITE.legalName} or is used under license and may not be reproduced without permission. Information on the site is provided for guidance; your written proposal is the document that sets the scope and the price of our services.
          </p>
          <h2 className="mt-10 font-display text-[1.7rem] tracking-[0.04em] text-plum-900">Proposals and bookings</h2>
          <p>
            A booking is confirmed when a signed proposal and the retainer stated in it have been received. The proposal describes the pieces, the quantities, the delivery, setup and collection times, the payment schedule, and the terms for changes and cancellations. Final counts and add-ons may be adjusted up to the date stated in the proposal.
          </p>
          <h2 className="mt-10 font-display text-[1.7rem] tracking-[0.04em] text-plum-900">Rentals</h2>
          <p>
            Vases, vessels, candle holders, arch frames and other rental items remain the property of {SITE.legalName} and are collected at the end of the event. Items lost or damaged beyond normal use are charged at replacement cost as stated in the proposal.
          </p>
          <h2 className="mt-10 font-display text-[1.7rem] tracking-[0.04em] text-plum-900">Flowers and weather</h2>
          <p>
            Flowers are a natural product. We select the varieties in your proposal and may substitute a bloom of equal value and similar appearance when the season or the market requires it. Outdoor installations are built for ordinary Santa Barbara conditions and a backup placement is agreed with your venue in advance; we cannot guarantee flowers against extreme heat, wind or rain.
          </p>
          <h2 className="mt-10 font-display text-[1.7rem] tracking-[0.04em] text-plum-900">Questions</h2>
          <p>Call or text {SITE.phone} or send a note through the inquiry form.</p>
        </div>
      </Container>
    </section>
  );
}
