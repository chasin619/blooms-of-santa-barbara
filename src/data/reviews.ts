import { SITE } from "./site";

export interface Review {
  quote: string;
  author: string;
  /** YYYY-MM */
  date: string;
  source: string;
  detail?: string;
}

/**
 * Verbatim quotes from public reviews. Copy each one word for word from The Knot, Yelp or Google,
 * with the reviewer's first name and the month it was posted; never paraphrase a review into a
 * quote. The reviews page and the home page show this list only when it has entries.
 */
export const reviews: Review[] = [];

export const featuredReviews: Review[] = reviews.slice(0, 6);

/**
 * What couples consistently say about Sandy in their public reviews, summarized in our words.
 * Each line is a theme that appears across several reviews, not a quotation.
 */
export const praise = [
  { title: "Creative and talented", text: "Couples say the designs went beyond what they had pictured and that Sandy understood the vision from the first call." },
  { title: "Easy to reach, easy to talk to", text: "Quick replies, clear answers and a calm presence in the months before the wedding come up again and again." },
  { title: "Honest about budget", text: "Transparent pricing and a willingness to flex the design to the number, without pressure to spend more." },
  { title: "There until the end", text: "Delivery, setup and the cleanup afterward are handled by the studio, so families never touch a vase." },
];

export const reviewSources = [
  { name: "The Knot", rating: SITE.rating.value, note: "Five-star reviews", url: SITE.social.theknot },
  { name: "Yelp", rating: "", note: "Reviews and photos", url: SITE.social.yelp },
  { name: "WeddingWire", rating: "", note: "Profile and pricing", url: SITE.social.weddingwire },
];
