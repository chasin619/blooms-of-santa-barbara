import type { Metadata } from "next";
import { portfolio, portfolioCategories } from "@/data/portfolio";
import { SITE } from "@/data/site";
import { Gallery } from "@/components/site/Gallery";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ButtonLink } from "@/components/site/Buttons";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { InstagramIcon } from "@/components/site/Icons";

export const metadata: Metadata = {
  title: "Wedding Flower Portfolio | Bouquets, Ceremonies & Tables in Santa Barbara",
  description:
    "Bridal bouquets, ceremony arches, reception centerpieces and floral details from Blooms of Santa Barbara weddings and events across Santa Barbara, Montecito and the Santa Ynez Valley.",
  alternates: { canonical: "/portfolio" },
  openGraph: { title: "Portfolio | Blooms of Santa Barbara", description: "Bouquets, ceremonies, tables and details from Santa Barbara weddings.", url: "/portfolio", images: ["/og.jpg"] },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }])} />
      <PageHero image="/images/hero-portfolio.webp" imageAlt="A floral ceremony arch of greenery and white blooms above a stone balustrade with the ocean behind" eyebrow="Portfolio" title="Flowers we have had the joy to design." lede="Bouquets, ceremonies, tables and the small details from weddings and celebrations on the Central Coast. Choose a category or open any image." crumbs={[{ name: "Portfolio" }]} position="50% 45%" />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <Gallery images={portfolio} categories={portfolioCategories} />
          </Reveal>
        </Container>
      </section>

      <section className="blush-band border-t border-plum-900/10 py-16">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="display-title text-[1.6rem] text-plum-900 md:text-[2rem]">New flowers every week on Instagram</p>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-rose-600 hover:text-plum-900">
                <InstagramIcon className="h-4 w-4" /> {SITE.social.instagramHandle}
              </a>
            </div>
            <ButtonLink href="/contact">Design mine</ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
