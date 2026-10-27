import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Italiana, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FooterGate } from "@/components/site/FooterGate";
import { Tracker } from "@/components/site/Tracker";
import { JsonLd } from "@/components/site/JsonLd";
import { businessSchema, websiteSchema } from "@/lib/schema";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const TITLE = "Santa Barbara Wedding Florist | Blooms of Santa Barbara";
const DESCRIPTION =
  "Blooms of Santa Barbara is a boutique, woman-owned floral design studio in the heart of Santa Barbara, California. Bridal bouquets, ceremony flowers, reception centerpieces and florals for private and corporate events across Santa Barbara, Montecito, Goleta, Carpinteria and the Santa Ynez Valley. Five-star reviews on The Knot.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | Blooms of Santa Barbara",
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: SITE.url,
    title: TITLE,
    description: "Boutique wedding and event florals in Santa Barbara, California, designed by Sandy Shields.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "A garden ceremony dressed in white blooms by Blooms of Santa Barbara" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Boutique wedding and event florals in Santa Barbara, California.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#38252D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const trackUrl = process.env.VELOUR_TRACK_URL?.trim();
  const trackSite = process.env.VELOUR_SITE_SLUG?.trim();
  return (
    <html lang="en" className={`${italiana.variable} ${cormorant.variable} ${nunito.variable}`}>
      <head>
        {/* Marks that scripts run, so the scroll-reveal styles never hide content when they do not. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-petal focus:px-4 focus:py-2 focus:text-plum-900">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <FooterGate withCta={<Footer cta />} plain={<Footer cta={false} />} />
        <Tracker url={trackUrl} site={trackSite} />
      </body>
    </html>
  );
}
