import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/data/site";
import { ButtonLink } from "@/components/site/Buttons";
import { Container } from "@/components/site/Section";
import { Sprig } from "@/components/site/Icons";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="pt-36 pb-28 md:pt-44">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Sprig className="h-7 w-28 text-rose-400" />
            <h1 className="display-title mt-6 text-[2.2rem] text-plum-900 md:text-[3rem]">Thank you. We have your inquiry.</h1>
            <p className="mt-6 max-w-lg text-[1.0625rem] leading-[1.8] text-muted">
              We reply {SITE.responseTime}. On wedding days we are on site with the flowers, so a weekend message may be answered the next morning. A confirmation is on its way to your inbox.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              If your event is within days and something urgent comes up, call or text{" "}
              <a href={`tel:${SITE.phoneTel}`} className="text-plum-900 underline decoration-gold-400 underline-offset-4">
                {SITE.phone}
              </a>
              .
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/portfolio" variant="outline">
                Browse the portfolio
              </ButtonLink>
              <ButtonLink href="/services" variant="ghost">
                Our services
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="frame arch aspect-[4/5] max-w-sm shadow-soft">
              <Image src="/images/couple-library-bouquet.webp" alt="A couple seated in a library, the bride holding a colorful garden bouquet" fill sizes="(max-width: 1024px) 80vw, 35vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
