export interface ServiceOption {
  name: string;
  detail: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  /** Short name for cards and menus. */
  short: string;
  /** One line for cards. */
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Second image for the detail page. */
  image2?: string;
  image2Alt?: string;
  details: string[];
  includesTitle: string;
  includes: string[];
  optionsTitle: string;
  optionsIntro?: string;
  options: ServiceOption[];
  faqs: ServiceFaq[];
  related: string[];
  cta: string;
}

/**
 * Nothing here carries a price on purpose: every event is quoted from its guest count, its venue
 * and the pieces chosen, and the written proposal is the number the couple pays.
 */
export const services: Service[] = [
  {
    slug: "weddings",
    title: "Wedding Florals",
    short: "Weddings",
    blurb: "The whole day, designed as one story: bouquets, ceremony, reception and every small flower in between.",
    metaTitle: "Santa Barbara Wedding Florist | Full-Service Wedding Flowers | Blooms of Santa Barbara",
    metaDescription:
      "Full-service wedding florals in Santa Barbara, Montecito and the Santa Ynez Valley: bouquets, ceremony flowers, arches, centerpieces, delivery, setup and cleanup, designed by Sandy Shields of Blooms of Santa Barbara.",
    heading: "Wedding flowers for Santa Barbara and the Central Coast",
    intro: "From the first bouquet to the last candle on the last table, we design your wedding flowers as a single, flowing story, then deliver, place and collect every piece ourselves.",
    image: "/images/ceremony-beach-urns.webp",
    imageAlt: "White urns overflowing with peach, pink and lavender flowers beside white ceremony chairs on the sand",
    image2: "/images/bride-veil-door.webp",
    image2Alt: "A bride lifting her veil at a carved wooden door, holding a bouquet of white blooms",
    details: [
      "A full-service wedding begins with a conversation about you: the venue, the dress, the colors you love and the ones you want nowhere near the room, the photographs you keep saving. From there Sandy writes a proposal that covers every flower on the day, from the bouquets and boutonnières to the ceremony, the reception tables, the cake and the bar.",
      "Santa Barbara gives us a lot to work with. Garden roses, ranunculus and sweet peas in spring; peonies, dahlias and garden-grown greenery in summer; soft toffee roses, grasses and berries in the fall. We lean on what is in season and grown nearby, because it looks better, lasts longer in the sun and costs less than flowers flown in.",
      "On the day our team delivers to your getting-ready suite, dresses the ceremony, moves the arrangements to the reception when the venue allows, and comes back at the end of the night to clear every vessel. Couples mention the cleanup in their reviews because it is one less thing for their family to think about.",
    ],
    includesTitle: "A full wedding covers",
    includes: [
      "Bridal bouquet and bridesmaids' bouquets",
      "Boutonnières, corsages and flower crowns",
      "Ceremony arch, chuppah or aisle flowers",
      "Reception centerpieces and sweetheart table",
      "Cake, bar, escort table and cocktail flowers",
      "Delivery, setup, transfers and cleanup",
    ],
    optionsTitle: "Three ways to work with us",
    optionsIntro: "Every wedding is quoted on its own, but most fall into one of these shapes.",
    options: [
      { name: "Full design", detail: "Every flower on the day from one studio, designed to one palette and one mood. Most Santa Barbara weddings of 80 guests or more choose this." },
      { name: "Ceremony & personals", detail: "Bouquets, boutonnières and the ceremony flowers, for couples whose venue or planner covers the reception tables." },
      { name: "Elopements & micro weddings", detail: "A bouquet, a boutonnière and one beautiful focal piece for the courthouse, a bluff, a garden or a dinner for twenty." },
    ],
    faqs: [
      {
        question: "How far ahead should we book?",
        answer: "Most couples book eight to twelve months out, and spring and fall Saturdays in Santa Barbara go first. If your date is closer than that, ask anyway; smaller weddings and weekdays can often be fit in.",
      },
      {
        question: "Do you work with our planner and venue?",
        answer: "Yes, and we prefer it. Once you book we coordinate load-in times, rain plans and the ceremony-to-reception flip directly with your planner and your venue coordinator so nothing lands on you.",
      },
      {
        question: "Can you match a Pinterest board?",
        answer: "Send it. The board tells us the mood, the shapes and the colors you respond to; we then translate it into flowers that are in season on your date and that will hold up in a Santa Barbara afternoon.",
      },
    ],
    related: ["bouquets", "ceremony", "reception"],
    cta: "Tell us your date, your venue and your guest count and we will reply within 24 hours with next steps.",
  },
  {
    slug: "bouquets",
    title: "Bridal Bouquets & Personal Flowers",
    short: "Bouquets",
    blurb: "Loose, garden-style bouquets with the flowers you love, plus boutonnières, corsages and crowns for everyone beside you.",
    metaTitle: "Bridal Bouquets Santa Barbara | Garden-Style Wedding Bouquets | Blooms of Santa Barbara",
    metaDescription:
      "Custom bridal bouquets, bridesmaids' bouquets, boutonnières, corsages and flower crowns designed in Santa Barbara by Blooms of Santa Barbara. Garden roses, peonies, ranunculus and seasonal blooms in your colors.",
    heading: "Bouquets that look like they were gathered that morning",
    intro: "The bouquet is the flower in every photograph, so it gets the most thought: the shape that suits your dress, the blooms that mean something to you, a ribbon that matches the table.",
    image: "/images/bouquet-bride-ribbon.webp",
    imageAlt: "A bride holding a loose bouquet of white and burgundy blooms with a trailing silk ribbon",
    image2: "/images/bouquets-bridal-party.webp",
    image2Alt: "A bride and her bridesmaids holding colorful garden bouquets of peach, pink, lavender and white blooms",
    details: [
      "Our bouquets are built loosely, the way flowers grow, with a mix of focal blooms, airy textures and trailing greenery rather than a tight dome. Peach, pink and lavender garden color is the studio's signature, with ivory and blush for the quieter weddings and burgundy or citrus when a couple wants something bolder.",
      "Bridesmaids' bouquets echo the bridal bouquet at a smaller scale, so the party reads as one picture. Boutonnières and corsages are made from the same flowers, wired to last through hugs and dancing, and delivered pinned and labeled.",
      "Flower crowns, hair flowers, flower-girl baskets and petal cones, toss bouquets and the small posies for mothers and grandmothers are all part of the personal flowers we design.",
    ],
    includesTitle: "Personal flowers we design",
    includes: ["Bridal bouquet", "Bridesmaids' and maid-of-honor bouquets", "Boutonnières and pocket squares", "Corsages, wrist and pinned", "Flower crowns and hair flowers", "Flower-girl baskets and petals"],
    optionsTitle: "Bouquet styles",
    optionsIntro: "A starting point; every bouquet is designed for the person carrying it.",
    options: [
      { name: "Garden-gathered", detail: "Loose and romantic: garden roses, ranunculus, sweet peas and trailing jasmine or greenery, the studio's signature." },
      { name: "Classic & clean", detail: "A soft round of peonies, roses and lisianthus in ivory and blush, for a timeless, formal wedding." },
      { name: "Wild & textural", detail: "Dried grasses, dahlias, berries and unexpected stems for couples who want something no one has carried before." },
    ],
    faqs: [
      {
        question: "Can we order bouquets and boutonnières only?",
        answer: "Yes. Many elopements and small weddings order only the personal flowers, and we deliver them to your suite or the courthouse steps.",
      },
      {
        question: "How do we keep the bouquet fresh for photos?",
        answer: "Each bouquet is delivered in water in a vase. Keep it there, out of direct sun, until you walk, and set it back in the vase between photographs. We give you the full care notes with the delivery.",
      },
    ],
    related: ["weddings", "ceremony"],
    cta: "Send us your dress, your colors and a few bouquets you love, and we will design yours.",
  },
  {
    slug: "ceremony",
    title: "Ceremony Flowers & Installations",
    short: "Ceremony",
    blurb: "Arches, chuppahs, aisle flowers and ground installations built for the moment you say yes.",
    metaTitle: "Wedding Ceremony Flowers & Arches Santa Barbara | Blooms of Santa Barbara",
    metaDescription:
      "Ceremony flowers for Santa Barbara weddings: floral arches, chuppahs, aisle arrangements, ground installations and altar pieces, designed and installed by Blooms of Santa Barbara at courthouse, beach, garden and vineyard venues.",
    heading: "The flowers that frame the vows",
    intro: "The ceremony is where the flowers do the most work: an arch or a pair of ground pieces becomes the backdrop to every photograph of the moment itself.",
    image: "/images/ceremony-beach-arch.webp",
    imageAlt: "A circular ceremony arch of pink, peach and blue garden flowers on a wooden deck above a Santa Barbara beach",
    image2: "/images/ceremony-church-aisle.webp",
    image2Alt: "Lavender, white and pink aisle arrangements inside a historic stone church",
    details: [
      "We design for the place. The Santa Barbara Courthouse sunken gardens ask for something that reads against the Spanish architecture; a bluff above the ocean wants flowers that hold in the wind; a vineyard in the Santa Ynez Valley calls for warmth against the vines. We visit the site when we can and work from the venue's rules on structures, candles and petals.",
      "Arches and chuppahs are built on our own frames or the venue's. Asymmetric arrangements that climb one corner, full floral arches, ground-level meadows that frame the couple without blocking the view, and aisle markers in low vessels or on the chairs are all in our repertoire.",
      "Whenever the venue allows it, ceremony flowers get a second life: arch pieces move to the sweetheart table or the bar, aisle arrangements become the cocktail-hour flowers, and nothing is seen only once.",
    ],
    includesTitle: "Ceremony pieces",
    includes: ["Floral arches, arbors and circles", "Chuppahs and mandap flowers", "Ground installations and meadows", "Aisle arrangements and chair flowers", "Altar and urn arrangements", "Petal aisles and flower-girl petals"],
    optionsTitle: "Ceremony shapes",
    options: [
      { name: "Asymmetric arch", detail: "Flowers that climb one side and spill over the top, leaving the view open. Our most-requested ceremony piece." },
      { name: "Full floral arch", detail: "Blooms on every inch, for a lush, formal backdrop at a garden or a ballroom ceremony." },
      { name: "Ground meadow", detail: "Two or more low, overflowing arrangements on the ground that frame the couple with nothing behind them but the ocean or the vines." },
    ],
    faqs: [
      {
        question: "Can ceremony flowers be reused at the reception?",
        answer: "Almost always, and we plan for it. Arch pieces, aisle arrangements and urns are designed in vessels that move, and our team handles the transfer during cocktail hour.",
      },
      {
        question: "What about wind at beach and bluff ceremonies?",
        answer: "We weight the frames, use mechanics that grip, and choose flowers that tolerate a breeze. We also agree a backup placement with your venue in case the afternoon turns.",
      },
    ],
    related: ["weddings", "reception", "bouquets"],
    cta: "Tell us where you are getting married and we will suggest the ceremony piece that fits the place.",
  },
  {
    slug: "reception",
    title: "Reception & Centerpieces",
    short: "Reception",
    blurb: "Centerpieces, sweetheart tables, candles and the small flowers that make a long table feel like a garden.",
    metaTitle: "Wedding Reception Flowers & Centerpieces Santa Barbara | Blooms of Santa Barbara",
    metaDescription:
      "Reception florals for Santa Barbara weddings: centerpieces, garland runners, bud vases, sweetheart tables, cake and bar flowers and candlelight, designed and set up by Blooms of Santa Barbara.",
    heading: "Tables that look like the photographs you sent",
    intro: "A reception is a hundred small decisions: how tall, how many candles, which vessel, whether the runner should be flowers or ribbon. We make them with you, then set every table ourselves.",
    image: "/images/reception-centerpiece.webp",
    imageAlt: "A reception centerpiece of burgundy, blush and pink blooms with taper candles on a white tablecloth",
    details: [
      "We think about the room before the flowers. Long tables under string lights want low garlands and clusters of bud vases so guests can see each other; round tables in a ballroom can carry height; an outdoor dinner at dusk needs candlelight more than it needs more flowers.",
      "Our vessels are our own: ceramic compotes, footed bowls, bud vases in glass and stone, taper holders and hurricanes, all in finishes that photograph well. Low arrangements with taper candles, from the neutral-and-blush tables of our Allegretto Vineyards feature in Wedding Sparrow to burgundy and pink for a candlelit dinner, are a studio favorite.",
      "The sweetheart or head table gets the most attention, with the bouquets placed in vases when you sit down. Cake flowers, bar arrangements, the escort display and the restroom posies are planned so the whole evening feels like one room.",
    ],
    includesTitle: "Reception pieces",
    includes: ["Low and elevated centerpieces", "Garland runners and bud-vase clusters", "Sweetheart and head-table flowers", "Cake and dessert-table flowers", "Bar, cocktail and escort-table arrangements", "Candles, tapers and hurricanes"],
    optionsTitle: "Centerpiece styles",
    options: [
      { name: "Compote & candlelight", detail: "A low footed bowl of garden flowers with tapers and votives around it. Romantic, conversation-friendly, our most common table." },
      { name: "Garland & bud vases", detail: "Greenery or floral garland down the center of a long table with bud vases tucked along it." },
      { name: "Elevated", detail: "Tall arrangements on stands for ballrooms and large rounds, with low pieces mixed in so the room has rhythm." },
    ],
    faqs: [
      {
        question: "Do you provide the vases and candles?",
        answer: "Yes. Vessels, candle holders and tapers are included in the proposal as rentals and collected at the end of the night. If you want to keep the flowers, we can design in vessels you take home.",
      },
      {
        question: "Can guests take the centerpieces home?",
        answer: "Flowers, always. Rental vessels come back to us, so we bring simple wraps or jars for guests who want to carry a centerpiece out.",
      },
    ],
    related: ["weddings", "ceremony", "events"],
    cta: "Share your floor plan or your table count and we will sketch the tables with you.",
  },
  {
    slug: "events",
    title: "Private Events & Parties",
    short: "Events",
    blurb: "Showers, rehearsal dinners, birthdays and dinner parties, with flowers that make the evening.",
    metaTitle: "Event Florist Santa Barbara | Party, Shower & Dinner Flowers | Blooms of Santa Barbara",
    metaDescription:
      "Flowers for private events in Santa Barbara and Montecito: bridal and baby showers, rehearsal dinners, birthdays, anniversaries and dinner parties, designed and delivered by Blooms of Santa Barbara.",
    heading: "Flowers for the parties around the wedding, and the ones that have nothing to do with it",
    intro: "A rehearsal dinner on a patio, a shower in a garden, a milestone birthday at home: the right flowers turn a gathering into an occasion, and we love the small, personal ones.",
    image: "/images/installation-courtyard.webp",
    imageAlt: "A meadow-style arrangement of white and peach blooms with lanterns in a white courtyard",
    details: [
      "Private events are where we get to be playful: a single color flooded across a long table, bud vases of one bloom at every setting, an arrangement built around the guest of honor's favorite flower. The scale is smaller than a wedding, so the details show.",
      "We design for showers, engagement parties, rehearsal dinners, welcome parties and morning-after brunches around a wedding, and for birthdays, anniversaries, baby celebrations, holiday dinners and memorials the rest of the year.",
      "Delivery and setup are included, and for an event at home we can style the entry, the bar and the powder room so the whole house feels dressed.",
    ],
    includesTitle: "Events we design for",
    includes: ["Bridal and baby showers", "Rehearsal dinners and welcome parties", "Engagement parties and brunches", "Birthdays and anniversaries", "Dinner parties and holidays", "Celebrations of life"],
    optionsTitle: "How event flowers work",
    options: [
      { name: "Delivered arrangements", detail: "Finished pieces delivered to the host, ready to place. Ideal for a dinner party or a shower at home." },
      { name: "Styled setup", detail: "We arrive, set the tables, the bar and the entry, and return afterward for the vessels." },
      { name: "Flower bar", detail: "Buckets of blooms and the tools for guests to build their own bouquets, a favorite for showers." },
    ],
    faqs: [
      {
        question: "How much notice do you need for a party?",
        answer: "Two to three weeks is comfortable; a week is often possible. Flowers are ordered to the event, so the earlier we know, the more choice we have.",
      },
      {
        question: "Is there a minimum?",
        answer: "There is no fixed minimum for delivered arrangements. Styled setups are quoted by the event, and we will tell you up front whether what you have in mind fits your budget.",
      },
    ],
    related: ["reception", "corporate", "weddings"],
    cta: "Tell us the occasion, the date and the room and we will suggest flowers that fit it.",
  },
  {
    slug: "corporate",
    title: "Corporate & Special Events",
    short: "Corporate",
    blurb: "Launches, galas, retreats and client dinners with florals that carry the brand without shouting it.",
    metaTitle: "Corporate Event Florist Santa Barbara | Galas, Retreats & Launches | Blooms of Santa Barbara",
    metaDescription:
      "Corporate event flowers in Santa Barbara and Montecito: galas, retreats, product launches, conferences, client dinners and holiday parties, designed, installed and collected by Blooms of Santa Barbara.",
    heading: "Event florals for companies that bring their people to Santa Barbara",
    intro: "Santa Barbara hosts retreats, launches and galas year round. We design florals that suit the venue and the brand, install them on schedule and clear them when the room turns.",
    image: "/images/installation-blossoms.webp",
    imageAlt: "Ground installations of white, peach and blossoming branches framing the entrance of a white Spanish building",
    details: [
      "Corporate work runs on timing and clarity, so that is how we run it: one proposal with every piece and one total, a load-in plan agreed with the venue, and a point of contact on site. We can work in brand colors, with a planner or an in-house events team, and with the hotel's own schedule.",
      "We have designed for welcome dinners and awards nights at resort venues, breakout-room and stage florals for conferences, bars and lounges for launches, and the holiday party at the end of the year.",
      "Installations are built to be struck quickly, and we return for the vessels on the venue's timeline, so the room is handed back as it was found.",
    ],
    includesTitle: "Corporate pieces",
    includes: ["Stage, podium and backdrop installations", "Registration and entry arrangements", "Dinner and gala centerpieces", "Bar and lounge florals", "Branded-color palettes", "Weekly arrangements for offices and hotels"],
    optionsTitle: "Formats we design for",
    options: [
      { name: "Galas & dinners", detail: "Centerpieces and entry pieces for awards nights, fundraisers and client dinners." },
      { name: "Retreats & conferences", detail: "Stage florals, registration arrangements and welcome-dinner tables for multi-day programs." },
      { name: "Launches & openings", detail: "Installations, bars and photo moments for product launches and openings." },
    ],
    faqs: [
      {
        question: "Can you invoice the company and provide a W-9?",
        answer: "Yes. We invoice with net terms for established clients and provide a W-9 and certificate of insurance on request.",
      },
      {
        question: "Do you work at the Santa Barbara resorts?",
        answer: "Yes. We are familiar with load-in at the larger Santa Barbara, Montecito and Goleta resort venues and coordinate directly with their event teams.",
      },
    ],
    related: ["events", "reception"],
    cta: "Send the date, the venue and the brief and we will reply with a proposal within a few days.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
