import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { Container } from "@/components/site/Section";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Blooms of Santa Barbara handles the information you share through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-24 md:pt-44">
      <Container narrow>
        <Breadcrumbs items={[{ name: "Privacy" }]} />
        <h1 className="display-title mt-8 text-[2.4rem] text-plum-900">Privacy Policy</h1>
        <p className="mt-3 text-xs uppercase tracking-wide2 text-muted">Last updated {SITE.lastModified}</p>
        <div className="prose-bsb mt-10">
          <p>{SITE.legalName} (&quot;we&quot;) respects your privacy. This policy explains what information this website collects and how it is used.</p>
          <h2 className="mt-10 font-display text-[1.7rem] tracking-[0.04em] text-plum-900">What we collect</h2>
          <p>
            When you send an inquiry, we receive the details you enter: your name, email address, phone number and anything you tell us about your event. We use them to reply to you, prepare a proposal and, if you hire us, deliver our services. We do not sell or rent this information.
          </p>
          <p>
            The website also records anonymous usage statistics, such as which pages are viewed and whether a visitor tapped the call, text or email button, together with the page a visit started on and the site that referred it. These statistics are kept by our website provider, Velour Web, and are shown to us so we can understand how couples find us. They contain no names, no cookies and no IP addresses.
          </p>
          <h2 className="mt-10 font-display text-[1.7rem] tracking-[0.04em] text-plum-900">Email</h2>
          <p>
            Inquiries are delivered to our inbox and a confirmation is sent to the address you provide. Your inquiry, with the page it was sent from, is also stored in the dashboard our website provider maintains for us, so it is never lost if an email fails.
          </p>
          <h2 className="mt-10 font-display text-[1.7rem] tracking-[0.04em] text-plum-900">Instagram and links</h2>
          <p>
            The &quot;Follow along&quot; section may show our latest Instagram posts, loaded from Instagram&apos;s servers. Links to Instagram, The Knot, WeddingWire, Yelp and venues lead to websites we do not control; their own privacy policies apply there.
          </p>
          <h2 className="mt-10 font-display text-[1.7rem] tracking-[0.04em] text-plum-900">Your choices</h2>
          <p>To see, correct or delete the information we hold about you, call or text {SITE.phone} or send a note through the inquiry form.</p>
        </div>
      </Container>
    </section>
  );
}
