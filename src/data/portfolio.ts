export type PortfolioCategory = "Bouquets" | "Ceremony" | "Reception" | "Installations";

export interface PortfolioImage {
  src: string;
  alt: string;
  category: PortfolioCategory;
  /** width / height, so the masonry grid reserves the right space before the image loads. */
  ratio: number;
}

/**
 * The studio's own photographs, supplied by the owner. Add more with scripts/import-images.mjs,
 * which prints lines in exactly this shape; the order here is the order on the portfolio page
 * and the first nine make the grid on the home page.
 */
export const portfolio: PortfolioImage[] = [
  { src: "/images/ceremony-beach-arch.webp", alt: "A circular ceremony arch of pink, peach and blue garden flowers on a wooden deck above a Santa Barbara beach", category: "Ceremony", ratio: 0.83 },
  { src: "/images/bouquets-bridal-party.webp", alt: "A bride and her bridesmaids holding colorful garden bouquets of peach, pink, lavender and white blooms", category: "Bouquets", ratio: 1.55 },
  { src: "/images/reception-centerpiece.webp", alt: "A reception centerpiece of burgundy, blush and pink blooms with taper candles on a white tablecloth", category: "Reception", ratio: 0.83 },
  { src: "/images/bouquet-bride-ribbon.webp", alt: "A bride holding a loose bouquet of white and burgundy blooms with a trailing silk ribbon", category: "Bouquets", ratio: 0.76 },
  { src: "/images/ceremony-beach-urns.webp", alt: "White urns overflowing with peach, pink and lavender flowers beside white ceremony chairs on the sand", category: "Ceremony", ratio: 0.87 },
  { src: "/images/ceremony-church-aisle.webp", alt: "Lavender, white and pink aisle arrangements inside a historic stone church", category: "Ceremony", ratio: 0.74 },
  { src: "/images/installation-blossoms.webp", alt: "Ground installations of white, peach and blossoming branches framing the entrance of a white Spanish building", category: "Installations", ratio: 0.86 },
  { src: "/images/bride-veil-door.webp", alt: "A bride lifting her veil at a carved wooden door, holding a bouquet of white blooms", category: "Bouquets", ratio: 1.36 },
  { src: "/images/couple-library-bouquet.webp", alt: "A couple seated in a library, the bride holding a colorful garden bouquet", category: "Bouquets", ratio: 0.78 },
  { src: "/images/installation-courtyard.webp", alt: "A meadow-style arrangement of white and peach blooms with lanterns in a white courtyard", category: "Installations", ratio: 0.76 },
];

/** The filter buttons on the portfolio page, in the order the categories first appear. */
export const portfolioCategories: PortfolioCategory[] = Array.from(new Set(portfolio.map((p) => p.category)));

/** The eight tiles of the "Follow along" grid when the live Instagram feed is not configured. */
export const instagramFallback = [portfolio[1], portfolio[0], portfolio[3], portfolio[2], portfolio[6], portfolio[4], portfolio[9], portfolio[8]].map((p) => ({ src: p.src, alt: p.alt }));
