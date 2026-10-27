import { SITE } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

/** A plain-text summary for AI assistants (llmstxt.org). */
export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.name} is a boutique, woman-owned wedding and event florist in Santa Barbara, California, founded in ${SITE.founded} by ${SITE.founder}. It designs bridal bouquets and personal flowers, ceremony arches and installations, reception centerpieces and candlelight, and florals for showers, rehearsal dinners, private parties and corporate events, and it delivers, sets up and cleans up. It serves Santa Barbara, Montecito, Goleta, Carpinteria and Summerland, the Santa Ynez Valley (Solvang, Los Olivos, Santa Ynez, Buellton), Ojai and Ventura, with Paso Robles and San Luis Obispo County by arrangement. ${SITE.rating.value} rating on ${SITE.rating.source}; featured in Wedding Sparrow; BBB A+ rating.`,
    "",
    `Phone: ${SITE.phone} (call or text). Instagram: ${SITE.social.instagramHandle}. Replies ${SITE.responseTime}. Every event is quoted from its guest count, venue and the pieces chosen; there is no published price list. WeddingWire lists the studio's average wedding at about $4,650.`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.title}](${SITE.url}/services/${s.slug}): ${s.blurb}`),
    "",
    "## Locations",
    ...locations.map((l) => `- [${l.city}](${SITE.url}/locations/${l.slug}): ${l.metaDescription}`),
    "",
    "## More",
    `- [Portfolio](${SITE.url}/portfolio)`,
    `- [Reviews](${SITE.url}/reviews)`,
    `- [About Sandy Shields](${SITE.url}/about)`,
    `- [FAQ](${SITE.url}/faq)`,
    `- [Inquire](${SITE.url}/contact)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" } });
}
