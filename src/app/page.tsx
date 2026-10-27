import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import { services } from "@/data/services";
import { portfolio, instagramFallback } from "@/data/portfolio";
import { featuredReviews, praise } from "@/data/reviews";
import { homeFaqs } from "@/data/faqs";
import { founder } from "@/data/team";
import { locations } from "@/data/locations";
import { ButtonLink } from "@/components/site/Buttons";
import { Container, Eyebrow, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ServiceTile, ReviewCard } from "@/components/site/Cards";
import { FaqList } from "@/components/site/FaqList";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import { ArrowIcon, BloomIcon, InstagramIcon, Sprig, StarIcon } from "@/components/site/Icons";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const steps = [
  { n: "01", title: "Say hello", text: "Send your date, your venue, your guest count and a few of the photographs you keep saving. We reply within 24 hours." },
  { n: "02", title: "Talk it through", text: "A call or a visit to the studio to walk through the day: the colors, the shapes, the moments that matter most to you." },
  { n: "03", title: "One proposal", text: "Every flower on the day, from bouquets to the last bud vase, listed with one total. Honest about what is worth it." },
  { n: "04", title: "We take care of it", text: "Delivery, setup, the move from ceremony to reception and the cleanup at the end of the night are ours." },
];

const proof = [
  { k: SITE.rating.value, v: `on ${SITE.rating.source}`, s: "Five-star reviews from couples", stars: true },
  { k: "Woman-owned", v: `Since ${SITE.founded}`, s: "A boutique studio, one designer" },
  { k: "Featured", v: "Wedding Sparrow", s: "Allegretto Vineyards wedding" },
  { k: "Santa Barbara", v: "to Santa Ynez", s: "Montecito, Goleta, Carpinteria, Ojai" },
];

export default function HomePage() {
  const grid = portfolio.slice(0, 9);
  return (
    <>
      <JsonLd data={[faqSchema(homeFaqs), breadcrumbSchema([])]} />

      {/* Hero: the cover. The wordmark, one soft line of what we do, two doors in. */}
      <section className="relative isolate flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden bg-plum-900 text-petal">
        {/* Two covers from the studio's own weddings: the bridal party's bouquets on wide screens, the beach arch on phones. */}
        <picture>
          <source media="(max-width: 639px)" srcSet="/images/ceremony-beach-arch.webp" />
          <img src="/images/bouquets-bridal-party.webp" alt="A bride and her bridesmaids holding colorful garden bouquets of peach, pink, lavender and white blooms" fetchPriority="high" className="hero-image absolute inset-0 h-full w-full object-cover object-[50%_40%] sm:object-[50%_55%]" />
        </picture>
        <div className="hero-overlay-cover absolute inset-0" aria-hidden="true" />
        <div className="relative flex flex-col items-center px-5 text-center">
          <p className="rise on-photo-strong text-[11px] font-bold uppercase tracking-[0.36em] text-petal sm:text-[13px]">Santa Barbara · California</p>
          {/* The left padding matches the tracking after the last letter, so the word sits truly centered. */}
          <h1 className="rise rise-1 on-photo-strong mt-6 flex flex-col items-center leading-none text-petal">
            <span className="brand pl-[0.22em] text-[clamp(3.6rem,15vw,9.5rem)] leading-[0.95]">Blooms</span>
            <span className="brand-sub mt-3 text-[clamp(1.4rem,3.6vw,2.7rem)] font-medium text-petal sm:mt-4">of Santa Barbara</span>
          </h1>
          <p className="rise rise-2 on-photo-strong mt-8 max-w-xl font-serif text-[1.4rem] font-medium italic leading-snug text-petal sm:text-[1.7rem]">Wedding and event florals, gathered with a soft hand for the Central Coast.</p>
          <div className="rise rise-3 mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <ButtonLink href="/portfolio" variant="light">
              Portfolio
            </ButtonLink>
            <ButtonLink href="/contact" variant="light">
              Inquire
            </ButtonLink>
          </div>
        </div>
        <p className="rise rise-3 on-photo-strong absolute inset-x-0 bottom-8 px-5 text-center text-[11px] font-bold uppercase tracking-[0.24em] text-petal sm:bottom-10 sm:text-[12px]">
          Santa Barbara · Montecito · Goleta · Carpinteria · Santa Ynez Valley · Ojai
        </p>
      </section>

      {/* Proof strip */}
      <section className="border-b border-plum-900/10 bg-blush-50">
        <Container>
          <Reveal className="grid grid-cols-2 divide-plum-900/10 py-8 md:grid-cols-4 md:divide-x">
            {proof.map((p) => (
              <div key={p.k} className="px-4 py-3 text-center">
                <p className="flex items-center justify-center gap-2 font-display text-[1.7rem] leading-none tracking-[0.04em] text-plum-900">
                  {p.k}
                  {p.stars && (
                    <span className="flex gap-0.5 text-gold-500" aria-hidden="true">
                      <StarIcon className="h-3.5 w-3.5" />
                    </span>
                  )}
                </p>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide2 text-rose-600">{p.v}</p>
                <p className="mt-1 text-xs text-muted">{p.s}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="frame arch mx-auto aspect-[4/5] max-w-md shadow-soft">
                <Image src="/images/couple-library-bouquet.webp" alt="A couple seated in a library, the bride holding a colorful garden bouquet" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
              </div>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <SectionHeading eyebrow="A boutique floral studio" title={<>Flowers that feel gathered, not arranged.</>} />
              <Reveal delay={1} className="prose-bsb mt-8">
                <p>
                  {SITE.name} is a boutique floral design studio nestled in the heart of Santa Barbara, California, founded by {SITE.founder} in {SITE.founded}. We design the flowers for weddings, private events and parties up and down the Central Coast: loose, garden-gathered bouquets in peach, pink and lavender, ceremony arches that frame the ocean, and reception tables lit by candles.
                </p>
                <p>
                  Every wedding is designed by Sandy herself, from the first conversation to the last vase collected at the end of the night. Couples say the same things in their reviews: she listens, she is honest about budget, she replies quickly, and the flowers were more beautiful than they imagined.
                </p>
              </Reveal>
              <Reveal delay={2} className="mt-9 flex flex-wrap gap-4">
                <ButtonLink href="/about" variant="outline">
                  Meet Sandy
                </ButtonLink>
                <ButtonLink href="/services" variant="ghost">
                  What we design <ArrowIcon />
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Services: square tiles with the title on hover */}
      <section className="blush-band py-24 md:py-32">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="What we design" title="Flowers for every part of the day" lede="Six ways we work, from a single bouquet for the courthouse steps to every flower at an estate wedding. Each one is quoted from your guest count, your venue and the pieces you choose." />
            <Reveal className="shrink-0">
              <ButtonLink href="/services" variant="outline">
                All services
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) as 0 | 1 | 2}>
                <ServiceTile service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading center eyebrow="Portfolio" title="Our portfolio" lede="Bouquets, ceremonies, tables and the small details from weddings and celebrations across Santa Barbara and the Central Coast." />
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {grid.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) as 0 | 1 | 2} className={`frame rounded-[6px] ${i === 0 ? "col-span-2 row-span-2 md:col-span-1" : ""} ${i === 4 ? "md:row-span-2" : ""}`}>
                <Link href="/portfolio" className="group block h-full">
                  <div className={`relative w-full ${i === 0 ? "h-full min-h-[18rem]" : i === 4 ? "aspect-square md:aspect-auto md:h-full md:min-h-[18rem]" : "aspect-square"}`}>
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                    <div className="tile-overlay">
                      <span className="text-[11px] font-semibold uppercase tracking-luxe text-petal">{img.category}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <ButtonLink href="/portfolio" variant="outline">
              View the full portfolio
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      {/* Praise: the dark band, in the manner of the CHIC Flowers reviews slider */}
      <section className="bg-plum-950 py-24 text-petal md:py-28">
        <Container>
          <SectionHeading center light eyebrow="Praise" title={`Praise for ${SITE.name}`} lede="What couples say about Sandy and her flowers in their public reviews on The Knot, where the studio holds a five-star rating." />
          <Reveal className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="flex items-center gap-4 font-display text-[3.4rem] leading-none tracking-[0.04em] text-petal">
              {SITE.rating.value}
              <span className="flex gap-1 text-gold-300" aria-label="Five stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </span>
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold-300">on {SITE.rating.source}</p>
          </Reveal>
        </Container>
        {featuredReviews.length > 0 ? (
          <div className="scroll-x mt-14 flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[max(2rem,calc((100vw-78rem)/2+2rem))]">
            {featuredReviews.map((r, i) => (
              <div key={r.author + i} className="w-[20rem] shrink-0 sm:w-[24rem]">
                <ReviewCard review={r} light />
              </div>
            ))}
          </div>
        ) : (
          <Container>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {praise.map((p, i) => (
                <Reveal key={p.title} delay={(i % 4 > 2 ? 2 : i % 4) as 0 | 1 | 2} className="rounded-[6px] border border-petal/15 bg-petal/[0.04] p-7">
                  <BloomIcon className="h-4 w-4 text-rose-300" />
                  <h3 className="mt-4 font-display text-[1.4rem] leading-tight tracking-[0.04em] text-petal">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-petal/75">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        )}
        <Container>
          <Reveal className="mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
            <ButtonLink href="/reviews" variant="light">
              Read the reviews
            </ButtonLink>
            <a href={SITE.social.theknot} target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold uppercase tracking-luxe text-petal/70 hover:text-rose-300">
              See them on The Knot
            </a>
          </Reveal>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <SectionHeading eyebrow="Meet the designer" title={founder.name} />
              <Reveal delay={1} className="mt-3 text-[11px] font-semibold uppercase tracking-luxe text-rose-600">
                {founder.role}
              </Reveal>
              <Reveal delay={1} className="prose-bsb mt-7">
                <p>{founder.bio}</p>
              </Reveal>
              <Reveal delay={2} className="mt-8">
                <ButtonLink href="/about" variant="ghost">
                  Our story <ArrowIcon />
                </ButtonLink>
              </Reveal>
            </div>
            <Reveal className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
              <div className="frame arch mx-auto aspect-[3/4] max-w-sm shadow-soft">
                <Image src="/images/installation-courtyard.webp" alt="A meadow-style arrangement of white and peach blooms with lanterns in a white courtyard, designed by Sandy Shields" fill sizes="(max-width: 1024px) 80vw, 35vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-blush-50 py-24 md:py-32">
        <Container>
          <SectionHeading center eyebrow="How it works" title="Four steps from your first photograph to your wedding day" />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} as="li" delay={(i % 4 > 2 ? 2 : i % 4) as 0 | 1 | 2}>
                <p className="font-display text-4xl text-rose-400">{s.n}</p>
                <h3 className="mt-4 font-display text-[1.5rem] tracking-[0.04em] text-plum-900">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Featured in */}
      <section className="border-b border-plum-900/10 py-14">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <p className="eyebrow">As featured in</p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {SITE.press.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
                    <span className="font-display text-[1.35rem] uppercase tracking-[0.12em] text-plum-900 transition-colors group-hover:text-rose-600">{p.name}</span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wide2 text-muted">{p.detail}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Why + locations */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow={`Why ${SITE.name}`} title="A Santa Barbara florist who designs for the place." />
              <Reveal delay={1} className="prose-bsb mt-8">
                <p>
                  {SITE.name} is a woman-owned wedding and event florist based in Santa Barbara, California, founded in {SITE.founded} by {SITE.founder}. The studio designs bridal bouquets and personal flowers, ceremony arches and installations, reception centerpieces and candlelight, and florals for showers, rehearsal dinners, private parties and corporate events.
                </p>
                <p>
                  We work at the Santa Barbara County Courthouse and the beachfront resorts, in Montecito&apos;s estates and gardens, on Goleta&apos;s ranches and bluffs, along the Carpinteria and Summerland coast, and in the vineyards of the Santa Ynez Valley, with Ojai, Ventura and the Central Coast by arrangement. Delivery, setup, the ceremony-to-reception transfer and cleanup are always part of the proposal.
                </p>
                <p>
                  There is no price list, because there is no typical wedding: every event is quoted from its guest count, its venue and the pieces chosen, in one written proposal with one total. <Link href="/contact">Send an inquiry</Link> with your date, your venue and the photographs you love, and we will reply {SITE.responseTime}.
                </p>
              </Reveal>
            </div>
            <Reveal delay={2} className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-[6px] border border-plum-900/10 bg-white/50 p-8">
                <Eyebrow>Where we work</Eyebrow>
                <ul className="mt-5 divide-y divide-plum-900/10">
                  {locations.map((l) => (
                    <li key={l.slug}>
                      <Link href={`/locations/${l.slug}`} className="group flex items-center justify-between py-3 font-display text-xl tracking-[0.04em] text-plum-900 transition-colors hover:text-rose-600">
                        {l.city}
                        <ArrowIcon className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-muted">And the Central Coast by arrangement. Delivery is quoted with the event by the venue&apos;s distance from Santa Barbara.</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-plum-900/10 py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Questions" title="Good to know before you inquire" />
              <Reveal delay={1} className="mt-8">
                <ButtonLink href="/faq" variant="outline">
                  All questions
                </ButtonLink>
              </Reveal>
            </div>
            <Reveal delay={1} className="lg:col-span-8">
              <FaqList faqs={homeFaqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Instagram: the blush band */}
      <section className="blush-band py-20 md:py-24">
        <Container>
          <Reveal className="flex flex-col items-center text-center">
            <Sprig className="h-7 w-28 text-rose-400" />
            <h2 className="display-title mt-6 text-[2rem] text-plum-900 md:text-[2.8rem]">Follow along</h2>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-luxe text-rose-600 hover:text-plum-900">
              <InstagramIcon className="h-4 w-4" /> {SITE.social.instagramHandle}
            </a>
          </Reveal>
          <div className="mt-12">
            <InstagramGrid fallback={instagramFallback} count={8} />
          </div>
          <Reveal className="mt-10 text-center">
            <ButtonLink href={SITE.social.instagram} external variant="outline">
              Follow on Instagram
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
