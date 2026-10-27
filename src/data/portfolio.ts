export type PortfolioCategory = "Bouquets" | "Ceremony" | "Reception" | "Details" | "Events";

export interface PortfolioImage {
  src: string;
  alt: string;
  category: PortfolioCategory;
  /** width / height, so the masonry grid reserves the right space before the image loads. */
  ratio: number;
}

export const portfolioCategories: PortfolioCategory[] = ["Bouquets", "Ceremony", "Reception", "Details", "Events"];

/**
 * The gallery. Placeholder photography until the studio's own photos replace it; see
 * IMAGE-SOURCES.md and scripts/import-images.mjs, which prints lines in exactly this shape.
 */
export const portfolio: PortfolioImage[] = [
  { src: "/images/bouquet-ribbon.webp", alt: "A loose bridal bouquet of white roses and peonies with greenery and a silk ribbon", category: "Bouquets", ratio: 0.67 },
  { src: "/images/rose-wall.webp", alt: "A wall of blush garden roses, peonies and carnations in every shade of pink", category: "Details", ratio: 0.75 },
  { src: "/images/arch-garden-chairs.webp", alt: "A wooden ceremony arch dressed with flowers beside white chairs in a garden", category: "Ceremony", ratio: 0.67 },
  { src: "/images/table-candlelight.webp", alt: "A long reception table set with flowers and warm candlelight", category: "Reception", ratio: 0.67 },
  { src: "/images/bouquet-pink-white.webp", alt: "A round bouquet of pink and white roses, close up", category: "Bouquets", ratio: 0.75 },
  { src: "/images/peonies-fabric.webp", alt: "Pink peonies and white roses resting on soft fabric", category: "Details", ratio: 0.75 },
  { src: "/images/arch-lush-garden.webp", alt: "A floral arch with white drapery in a lush garden", category: "Ceremony", ratio: 1.59 },
  { src: "/images/bride-roses-peonies.webp", alt: "A bride holding a bouquet of pink and white roses and peonies", category: "Bouquets", ratio: 0.67 },
  { src: "/images/reception-outdoor.webp", alt: "Outdoor reception tables with floral arrangements under open sky", category: "Reception", ratio: 1.5 },
  { src: "/images/peonies-closeup.webp", alt: "Pale pink and white peonies, close up", category: "Details", ratio: 1.5 },
  { src: "/images/bouquet-peony-held.webp", alt: "A bride holding a bouquet of blush peonies", category: "Bouquets", ratio: 0.67 },
  { src: "/images/arch-greenery-white.webp", alt: "A ceremony arch of greenery and white blooms outdoors", category: "Ceremony", ratio: 0.67 },
  { src: "/images/table-roses-tulips.webp", alt: "White roses, pink tulips and candles on a reception table", category: "Reception", ratio: 0.67 },
  { src: "/images/garden-roses.webp", alt: "Soft pink garden roses in bloom", category: "Details", ratio: 1.5 },
  { src: "/images/bride-white-peonies.webp", alt: "A bride in a lace gown holding white peonies", category: "Bouquets", ratio: 0.67 },
  { src: "/images/arch-pink-blossoms.webp", alt: "An arch of pink and white blossoms at an outdoor ceremony", category: "Ceremony", ratio: 0.67 },
  { src: "/images/peony-arrangements.webp", alt: "White peony arrangements on a draped table", category: "Reception", ratio: 1.5 },
  { src: "/images/ring-blush-bouquet.webp", alt: "An engagement ring resting in a blush rose bouquet", category: "Details", ratio: 0.67 },
  { src: "/images/bouquet-white-pink.webp", alt: "White and pink roses held in a hand", category: "Bouquets", ratio: 0.75 },
  { src: "/images/ceremony-beach.webp", alt: "A beach ceremony with a floral arch and white chairs on the sand", category: "Ceremony", ratio: 0.65 },
  { src: "/images/peonies-vase.webp", alt: "Peonies and roses arranged in a vase for a dinner party", category: "Events", ratio: 0.67 },
  { src: "/images/roses-blush-cream.webp", alt: "Blush pink and cream roses, close up", category: "Details", ratio: 0.75 },
  { src: "/images/bride-peach-bouquet.webp", alt: "A bride holding a peach and pink bouquet beside a stone wall", category: "Bouquets", ratio: 0.74 },
  { src: "/images/white-roses-greenery.webp", alt: "White roses and greenery, close up", category: "Details", ratio: 1.5 },
  { src: "/images/peonies-buckets.webp", alt: "Buckets of pink peonies and roses in the studio", category: "Details", ratio: 0.75 },
  { src: "/images/rings-blush-rose.webp", alt: "Wedding rings resting on a blush rose", category: "Details", ratio: 0.67 },
  { src: "/images/roses-soft-pink.webp", alt: "Soft pink roses gathered in a bouquet", category: "Details", ratio: 0.75 },
  { src: "/images/service-events-2.webp", alt: "White florals in bud vases in soft natural light", category: "Events", ratio: 0.67 },
];

/** The eight tiles of the "Follow along" grid when the live Instagram feed is not configured. */
export const instagramFallback = [portfolio[0], portfolio[1], portfolio[4], portfolio[5], portfolio[9], portfolio[13], portfolio[17], portfolio[21]].map((p) => ({ src: p.src, alt: p.alt }));
