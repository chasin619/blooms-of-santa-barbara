import Link from "next/link";
import { SITE } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { InstagramIcon, Sprig } from "./Icons";
import { Reveal } from "./Reveal";

export function Footer({ cta = true }: { cta?: boolean }) {
  return (
    <footer className="bg-plum-950 text-petal">
      {cta && (
        <div className="relative isolate overflow-hidden border-b border-petal/10">
          <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_120%,rgba(186,110,120,0.4),transparent_70%)]" aria-hidden="true" />
          <Reveal className="relative mx-auto flex max-w-content flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32">
            <Sprig className="h-7 w-28 text-gold-300" />
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-luxe text-gold-300">Ready to plan your flowers?</p>
            <Link href="/contact" className="group mt-7 block">
              <span className="brand block pl-[0.22em] text-[clamp(2.6rem,8.5vw,6.5rem)] leading-none transition-colors duration-500 group-hover:text-rose-300">Blooms</span>
              <span className="brand-sub mt-3 block text-[clamp(1.2rem,2.6vw,1.9rem)] text-petal/85">of Santa Barbara</span>
              <span className="mt-7 inline-block border-b border-gold-400 pb-1 text-[12px] font-semibold uppercase tracking-luxe text-petal transition-colors group-hover:text-rose-300">Inquire here</span>
            </Link>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-petal/75">We reply {SITE.responseTime}. Tell us your date, your venue and the flowers you keep saving, and we will take it from there.</p>
          </Reveal>
        </div>
      )}

      {/* The address bar: the CHIC footer's border-y band, with the wordmark on the right. */}
      <div className="border-b border-petal/15">
        <div className="mx-auto flex max-w-content flex-col-reverse justify-between gap-4 px-5 py-6 sm:flex-row sm:items-center sm:px-8">
          <p className="text-[13px] font-semibold uppercase leading-[1.5] tracking-wide2 text-petal/85">
            {SITE.address.locality}, California {SITE.address.postalCode}
            <br />
            Serving Santa Barbara County &amp; the Santa Ynez Valley
          </p>
          <p className="brand text-[2rem] leading-none sm:text-[2.6rem]">Blooms</p>
        </div>
      </div>

      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-luxe text-gold-300">Contact</h3>
            <ul className="space-y-2 text-sm text-petal/85">
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-rose-300">
                  {SITE.phone}
                </a>
              </li>
              {SITE.email && (
                <li>
                  <a href={`mailto:${SITE.email}`} className="break-all hover:text-rose-300">
                    {SITE.email}
                  </a>
                </li>
              )}
              <li>
                <Link href="/contact" className="hover:text-rose-300">
                  Send an inquiry
                </Link>
              </li>
              <li>{SITE.studioNote}</li>
              <li>Replies {SITE.responseTime}</li>
            </ul>
            <div className="mt-6 flex items-center gap-5">
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-petal/80 hover:text-rose-300" aria-label={`${SITE.name} on Instagram`}>
                <InstagramIcon className="h-4 w-4" /> {SITE.social.instagramHandle}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-luxe text-gold-300">Services</h3>
            <ul className="space-y-2 text-sm text-petal/85">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-rose-300">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-luxe text-gold-300">Locations</h3>
            <ul className="space-y-2 text-sm text-petal/85">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="hover:text-rose-300">
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-luxe text-gold-300">Explore</h3>
            <ul className="space-y-2 text-sm text-petal/85">
              {[
                ["/about", "About Sandy"],
                ["/portfolio", "Portfolio"],
                ["/reviews", "Reviews"],
                ["/faq", "FAQ"],
                ["/contact", "Inquire"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-rose-300">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={SITE.social.theknot} target="_blank" rel="noopener noreferrer" className="hover:text-rose-300">
                  Reviews on The Knot
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-petal/10 pt-6 text-xs text-petal/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-rose-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-rose-300">
              Terms
            </Link>
            <a href="https://www.velourweb.com" target="_blank" rel="noopener noreferrer" className="text-petal/70 hover:text-rose-300">
              Website by Velour Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
