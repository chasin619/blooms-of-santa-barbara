import type { Metadata } from "next";
import { reviews, praise, reviewSources } from "@/data/reviews";
import { SITE } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ReviewCard } from "@/components/site/Cards";
import { ButtonLink } from "@/components/site/Buttons";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ArrowIcon, BloomIcon, StarIcon } from "@/components/site/Icons";

export const metadata: Metadata = {
  title: "Reviews | What Couples Say About Blooms of Santa Barbara",
  description:
    "What couples say about Sandy Shields and Blooms of Santa Barbara: a five-star rating on The Knot, praise for creative designs, quick communication, honest pricing and a team that handles setup and cleanup.",
  alternates: { canonical: "/reviews" },
  openGraph: { title: "Reviews | Blooms of Santa Barbara", description: "Five-star reviews on The Knot for a boutique Santa Barbara wedding florist.", url: "/reviews", images: ["/og.jpg"] },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Reviews", path: "/reviews" }])} />
      <PageHero image="/images/bouquets-bridal-party.webp" imageAlt="A bride and her bridesmaids holding colorful garden bouquets" eyebrow="Praise" title="Kind words from the couples we have designed for." lede="Blooms of Santa Barbara holds a five-star rating on The Knot. Here is what couples say most often, and where to read every review in full." crumbs={[{ name: "Reviews" }]} position="50% 55%" />

      <section className="border-b border-plum-900/10 bg-blush-50 py-14">
        <Container>
          <Reveal className="grid gap-10 text-center md:grid-cols-3 md:text-left">
            <div>
              <p className="eyebrow">Rating</p>
              <p className="mt-3 flex items-center justify-center gap-3 font-display text-[2.6rem] leading-none text-plum-900 md:justify-start">
                {SITE.rating.value}
                <span className="flex gap-0.5 text-gold-500" aria-label="Five stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </span>
              </p>
              <p className="mt-2 text-sm text-muted">On {SITE.rating.source}, from couples who hired the studio.</p>
            </div>
            <div>
              <p className="eyebrow">Recognition</p>
              <p className="mt-3 font-display text-[1.7rem] leading-tight tracking-[0.04em] text-plum-900">Featured in Wedding Sparrow</p>
              <p className="mt-2 text-sm text-muted">An Italian-style wedding at Allegretto Vineyards, with neutral florals in shades of blush.</p>
            </div>
            <div>
              <p className="eyebrow">Read them all</p>
              <p className="mt-3 font-display text-[1.7rem] leading-tight tracking-[0.04em] text-plum-900">On The Knot</p>
              <a href={SITE.social.theknot} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm text-rose-600 underline decoration-gold-400 underline-offset-4 hover:text-plum-900">
                Open the full list of reviews
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading center eyebrow="In their words" title={`Praise for ${SITE.name}`} lede="The themes that run through the public reviews, in our words. Every review in full is one click away on The Knot." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {praise.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) as 0 | 1} className="rounded-[6px] border border-plum-900/10 bg-white/60 p-8">
                <BloomIcon className="h-4 w-4 text-rose-400" />
                <h3 className="mt-4 font-display text-[1.5rem] leading-tight tracking-[0.04em] text-plum-900">{p.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.8] text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>

          {reviews.length > 0 && (
            <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [column-fill:_balance]">
              {reviews.map((r, i) => (
                <Reveal key={r.author + i} className="mb-6 break-inside-avoid">
                  <ReviewCard review={r} />
                </Reveal>
              ))}
            </div>
          )}

          <Reveal className="mt-16 grid gap-4 sm:grid-cols-3">
            {reviewSources.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-[6px] border border-plum-900/10 p-6 transition-colors hover:border-rose-400">
                <span>
                  <span className="block font-display text-[1.3rem] tracking-[0.04em] text-plum-900 group-hover:text-rose-600">{s.name}</span>
                  <span className="block text-xs text-muted">{s.rating ? `${s.rating} · ${s.note}` : s.note}</span>
                </span>
                <ArrowIcon className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </Reveal>

          <Reveal className="mt-16 text-center">
            <p className="mx-auto max-w-xl font-serif text-2xl italic text-plum-800">Ready to write the next one?</p>
            <div className="mt-6">
              <ButtonLink href="/contact">Inquire</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
