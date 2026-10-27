import { SITE, SERVICE_AREAS, absoluteUrl } from "@/data/site";

/** schema.org graphs as plain objects, rendered with <JsonLd /> in each page. */

export const businessId = `${SITE.url}/#business`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Florist", "LocalBusiness"],
    "@id": businessId,
    name: SITE.name,
    alternateName: ["Blooms of SB", "Blooms Santa Barbara"],
    description:
      "Blooms of Santa Barbara is a boutique, woman-owned floral design studio in Santa Barbara, California, founded by Sandy Shields in 2017. It designs bridal bouquets, ceremony flowers, arches and installations, reception centerpieces and florals for private parties and corporate events across Santa Barbara, Montecito, Goleta, Carpinteria, the Santa Ynez Valley, Ojai and the Central Coast.",
    url: SITE.url,
    telephone: SITE.phoneTel,
    ...(SITE.email ? { email: SITE.email } : {}),
    image: absoluteUrl("/og.jpg"),
    logo: absoluteUrl("/icon.svg"),
    priceRange: "$$$",
    foundingDate: SITE.founded,
    founder: { "@type": "Person", name: SITE.founder, jobTitle: SITE.founderRole },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
    sameAs: [SITE.social.instagram, SITE.social.theknot, SITE.social.weddingwire, SITE.social.yelp],
    knowsAbout: [
      "wedding floral design",
      "bridal bouquets",
      "ceremony arches and floral installations",
      "reception centerpieces",
      "event and party florals",
      "corporate event flowers",
      "garden-style and romantic floral design",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": businessId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; items?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": businessId },
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
    ...(opts.items && opts.items.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: opts.name,
            itemListElement: opts.items.map((item) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: item },
            })),
          },
        }
      : {}),
  };
}
