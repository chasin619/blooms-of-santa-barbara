import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/data/site";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Container, Eyebrow } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { InstagramIcon } from "@/components/site/Icons";

export const metadata: Metadata = {
  title: "Inquire | Wedding & Event Flowers in Santa Barbara",
  description:
    "Tell Blooms of Santa Barbara about your wedding or event: date, venue, guest count, colors and the flowers you need. We reply within 24 hours with next steps and a proposal.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Inquire | Blooms of Santa Barbara", description: "Tell us about your day and we will reply within 24 hours.", url: "/contact", images: ["/og.jpg"] },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Inquire", path: "/contact" }])} />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <Breadcrumbs items={[{ name: "Inquire" }]} />
          <div className="mt-10 grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Begin a conversation</Eyebrow>
                <h1 className="display-title mt-5 text-[2.2rem] text-plum-900 md:text-[3rem]">Tell us about your day.</h1>
                <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.8] text-muted">
                  Share what you know so far, even if it is only a date and a color. We will reply {SITE.responseTime} with next steps, and a written proposal follows once we know your venue and guest count.
                </p>
              </Reveal>
              <Reveal delay={1} className="relative mt-12">
                <InquiryForm />
              </Reveal>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={1} className="frame arch aspect-[4/5] shadow-soft">
                <Image src="/images/contact-side.webp" alt="A bouquet of roses and eucalyptus by a sunlit window" fill sizes="(max-width: 1024px) 90vw, 30vw" className="object-cover" />
              </Reveal>
              <Reveal delay={2} className="mt-10 space-y-8 text-sm leading-relaxed text-muted">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-luxe text-rose-600">Contact</p>
                  <p className="mt-2">
                    <a href={`tel:${SITE.phoneTel}`} className="text-plum-900 hover:text-rose-600">
                      {SITE.phone}
                    </a>
                    <span className="text-muted"> (call or text)</span>
                    {SITE.email && (
                      <>
                        <br />
                        <a href={`mailto:${SITE.email}`} className="text-plum-900 hover:text-rose-600">
                          {SITE.email}
                        </a>
                      </>
                    )}
                  </p>
                  <div className="mt-3 flex items-center gap-5">
                    <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-plum-900 hover:text-rose-600">
                      <InstagramIcon className="h-4 w-4" /> {SITE.social.instagramHandle}
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-luxe text-rose-600">Studio</p>
                  <p className="mt-2">
                    {SITE.address.locality}, {SITE.address.region} {SITE.address.postalCode}
                    <br />
                    {SITE.studioNote}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-luxe text-rose-600">Replies</p>
                  <p className="mt-2">Within 24 hours. On wedding days we are on site with the flowers, so a weekend message may be answered the next morning.</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-luxe text-rose-600">What helps most</p>
                  <p className="mt-2">Your date, your venue, your guest count, your colors, and a link to the Pinterest board or the three photographs you keep coming back to. From those we can design the whole day.</p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
