import { SITE } from "./site";

export const founder = {
  name: SITE.founder,
  role: SITE.founderRole,
  /** Until a portrait of Sandy is added, her frames show her work. */
  image: "/images/bouquet-bride-ribbon.webp",
  imageAlt: "A bride holding a loose bouquet of white and burgundy blooms with a trailing silk ribbon, designed by Sandy Shields",
  bio: "Sandy Shields founded Blooms of Santa Barbara in 2017 as a boutique floral design studio in the heart of Santa Barbara, California. She designs every wedding herself, from the first conversation to the last arrangement placed on the day, and couples describe her the same way in their reviews: creative, talented, easy to talk to, honest about budget and there until the very end of the night.",
  /** The short lines beside the portrait. */
  facts: [
    ["Founded", "2017, Santa Barbara"],
    ["Studio", "Boutique, woman-owned"],
    ["Signature", "Garden-gathered color: peach, pink and lavender"],
    ["Known for", "Weddings, private events and parties"],
  ],
};
