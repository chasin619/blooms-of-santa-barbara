/** One place for the business facts that appear on every page and in the structured data. */
export const SITE = {
  name: "Blooms of Santa Barbara",
  fullName: "Blooms of Santa Barbara",
  /** The wordmark splits into two lines on the cover and in the footer. */
  wordmark: ["Blooms", "of Santa Barbara"],
  shortName: "Blooms",
  legalName: "Blooms of Santa Barbara",
  tagline: "Wedding and event florals in Santa Barbara, California",
  /**
   * The business has no domain yet; this is the address the site is built to live at. Canonicals,
   * Open Graph and the sitemap use it. Change it here and nothing else needs to move.
   */
  url: "https://www.bloomsofsantabarbara.com",
  phone: "(805) 259-8472",
  phoneTel: "+18052598472",
  smsHref: "sms:+18052598472",
  /**
   * The studio publishes its email only on Instagram. Until it is confirmed with Sandy, inquiries
   * go through the form, which emails whichever inbox EMAIL_TO names in the environment.
   */
  email: "" as string,
  founder: "Sandy Shields",
  founderRole: "Owner & Lead Floral Designer",
  founded: "2017",
  address: {
    locality: "Santa Barbara",
    region: "CA",
    postalCode: "93101",
    country: "US",
  },
  geo: { latitude: 34.4208, longitude: -119.6982 },
  /** A design studio, not a retail flower shop: consultations by appointment, phone and video. */
  studioNote: "By appointment, phone or video",
  responseTime: "within 24 hours",
  social: {
    instagram: "https://www.instagram.com/bloomsofsantabarbara/",
    instagramHandle: "@bloomsofsantabarbara",
    theknot: "https://www.theknot.com/marketplace/blooms-of-santa-barbara-santa-barbara-ca-2041070",
    weddingwire: "https://www.weddingwire.com/biz/blooms-of-santa-barbara/415a38438010bcf0.html",
    yelp: "https://www.yelp.com/biz/blooms-of-santa-barbara-santa-barbara-3",
  },
  /** Public ratings at the time the site was built; update when they change. */
  rating: {
    value: "5.0",
    source: "The Knot",
    sourceUrl: "https://www.theknot.com/marketplace/blooms-of-santa-barbara-santa-barbara-ca-2041070",
  },
  /** Where the studio's work has appeared. */
  press: [
    { name: "Wedding Sparrow", detail: "Italian-style wedding at Allegretto Vineyards", url: "https://weddingsparrow.com/article/italianstyle-wedding-with-white-roses-at-allegretto-vineyards-ca" },
    { name: "The Knot", detail: "Five-star reviews", url: "https://www.theknot.com/marketplace/blooms-of-santa-barbara-santa-barbara-ca-2041070" },
    { name: "Better Business Bureau", detail: "A+ rating", url: "https://www.bbb.org/us/ca/goleta/profile/florist/blooms-of-santa-barbara-1236-92069260" },
  ],
  /** Ownership facts listed on the business's public profiles. */
  ownership: ["Woman-owned", "Founded in 2017", "Based in Santa Barbara"],
  /** Stable last-modified date for the sitemap. Bump when page content changes. */
  lastModified: "2026-10-27",
} as const;

export const SERVICE_AREAS = [
  "Santa Barbara",
  "Montecito",
  "Goleta",
  "Carpinteria",
  "Summerland",
  "Hope Ranch",
  "Santa Ynez Valley",
  "Solvang",
  "Los Olivos",
  "Ojai",
  "Ventura",
  "San Luis Obispo County",
] as const;

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/locations", label: "Locations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Inquire" },
] as const;

export function absoluteUrl(path = "/"): string {
  return `${SITE.url}${path === "/" ? "/" : path}`;
}
