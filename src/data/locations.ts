export interface Location {
  slug: string;
  city: string;
  region: string;
  /** Distance from the studio, for the tile and the hero eyebrow. */
  drive: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  content: string[];
  venues: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
  geo: { latitude: number; longitude: number };
}

export const locations: Location[] = [
  {
    slug: "santa-barbara",
    city: "Santa Barbara",
    region: "Home base",
    drive: "The studio's own town",
    metaTitle: "Santa Barbara Wedding Florist | Courthouse, Beach & Garden Weddings | Blooms of Santa Barbara",
    metaDescription:
      "Wedding and event florals in Santa Barbara, California, from a boutique studio in the heart of town: courthouse ceremonies, beachfront resorts, historic gardens and private homes. Bouquets, arches, centerpieces, delivery and setup.",
    heading: "Wedding flowers in Santa Barbara, from a studio in the heart of it",
    intro: "Santa Barbara is where we live and work, and we know its venues the way you know your own kitchen: where the light falls at four o'clock, which lawns allow petals, how the breeze comes up the hill at the end of the day.",
    content: [
      "The city gives couples an extraordinary range in a few square miles: the sunken gardens of the Santa Barbara County Courthouse, the beachfront resorts along Cabrillo Boulevard, the Riviera's hillside terraces with the ocean below, the historic adobes and museums downtown, and the private gardens of the Mesa, the Upper East and Hope Ranch.",
      "Our flowers follow the architecture. Spanish Colonial Revival stone and red tile love warm whites, blush and soft apricot with olive and jasmine; the beach asks for airy, wind-tolerant designs; the Riviera's terraces call for garden-gathered bouquets that look as though they came from the slope itself.",
      "Being local means short deliveries, flowers that have not sat in a van, and a studio that can be at your venue within minutes if something needs attention. Our team delivers, installs, flips the ceremony flowers to the reception and collects the vessels at the end of the night.",
    ],
    venues: [
      "Santa Barbara County Courthouse Sunken Gardens",
      "Belmond El Encanto",
      "Hotel Californian",
      "Kimpton Canary Hotel",
      "Hilton Santa Barbara Beachfront Resort",
      "Mar Monte Hotel",
      "Santa Barbara Historical Museum",
      "Santa Barbara Zoo",
      "Rockwood Woman's Club",
      "Private homes on the Riviera, the Mesa and Hope Ranch",
    ],
    faqs: [
      {
        question: "Do you do courthouse elopements?",
        answer: "Often. A bouquet and a boutonnière delivered to the courthouse steps, or a small ground piece for the sunken gardens if the county allows it that day. Short notice is usually fine.",
      },
      {
        question: "Can you deliver to our getting-ready hotel?",
        answer: "Yes. Personal flowers go to wherever you are dressing, at the time your photographer asks for them, and the ceremony and reception pieces go straight to the venue.",
      },
    ],
    image: "/images/loc-santa-barbara.webp",
    imageAlt: "A white Spanish Colonial Revival building with a palm tree under a blue sky in Santa Barbara",
    geo: { latitude: 34.4208, longitude: -119.6982 },
  },
  {
    slug: "montecito",
    city: "Montecito",
    region: "Santa Barbara County",
    drive: "10 minutes from the studio",
    metaTitle: "Montecito Wedding Florist | Estate & Resort Wedding Flowers | Blooms of Santa Barbara",
    metaDescription:
      "Wedding florals for Montecito estates, resorts and gardens: San Ysidro Ranch, Rosewood Miramar Beach and private homes, designed and installed by Blooms of Santa Barbara, ten minutes away.",
    heading: "Wedding flowers for Montecito's estates, resorts and gardens",
    intro: "Montecito weddings are intimate and polished at once: a ceremony under old oaks, dinner on a lawn above the sea, flowers that look effortless because every stem was considered.",
    content: [
      "Montecito's venues are among the most beautiful in California, and they come with the expectations to match. We design for the resorts' manicured lawns and ballrooms, for estate gardens with century-old trees, and for the beach clubs where the Pacific is the backdrop.",
      "The palette here tends toward refined neutrals: ivory, cream, blush and sand with garden greenery, olive and citrus, and candlelight everywhere. We work closely with planners and estate managers on load-in, vendor access and the rules each property keeps.",
      "Because we are ten minutes down the road, we can be on site early for installations, return for the flip, and come back late for the strike without any of it showing on your timeline.",
    ],
    venues: ["San Ysidro Ranch", "Rosewood Miramar Beach", "Montecito Club", "Casa del Herrero", "Birnam Wood Golf Club", "Private estates and gardens"],
    faqs: [
      {
        question: "Do you work with Montecito planners?",
        answer: "Yes. Most of our Montecito weddings come through planners, and we coordinate timelines, rentals and venue rules directly with them.",
      },
      {
        question: "Can you design large installations for estate weddings?",
        answer: "Yes: hanging pieces, long floral runners, full arches and entry installations. We scope the mechanics with the venue and bring the crew the piece needs.",
      },
    ],
    image: "/images/loc-montecito.webp",
    imageAlt: "Boats docked at a quiet marina under a clear sky near Montecito",
    geo: { latitude: 34.4367, longitude: -119.6321 },
  },
  {
    slug: "goleta",
    city: "Goleta",
    region: "Santa Barbara County",
    drive: "15 minutes from the studio",
    metaTitle: "Goleta Wedding Florist | Bacara, Ranch & Beach Weddings | Blooms of Santa Barbara",
    metaDescription:
      "Wedding and event flowers in Goleta: The Ritz-Carlton Bacara, Dos Pueblos Ranch, Rancho La Patera, Goleta Beach and UCSB venues, designed and delivered by Blooms of Santa Barbara.",
    heading: "Wedding flowers for Goleta's ranches, resorts and beaches",
    intro: "Goleta stretches from the bluffs of the Bacara to the orchid farms and ranches of the foothills, and its weddings run from black-tie ballroom to barefoot on the sand.",
    content: [
      "Goleta is where we go for ranch weddings: long tables under oaks, a ceremony in a meadow, string lights at dusk. It is also home to one of the coast's grandest resorts, with ballroom and bluff-top ceremony sites that call for a more formal hand.",
      "We design to the setting. Ranch weddings get garden-gathered flowers, grasses and candles in simple vessels; resort weddings get fuller arrangements, elevated pieces and a palette that stands up to a big room. Both get the same care in delivery and setup.",
      "The studio's Goleta deliveries are short, which matters on a warm day: the flowers arrive fresh and are placed in the shade until the ceremony.",
    ],
    venues: ["The Ritz-Carlton Bacara", "Dos Pueblos Ranch", "Rancho La Patera & Stow House", "Glen Annie Golf Club", "Goleta Beach", "UCSB venues"],
    faqs: [
      {
        question: "Do ranch venues need special mechanics?",
        answer: "Sometimes. Uneven ground and wind mean weighted bases and sturdier frames for arches, and we plan them with the venue before the day.",
      },
    ],
    image: "/images/loc-goleta.webp",
    imageAlt: "Sailboats and palms in a harbor under a blue sky",
    geo: { latitude: 34.4358, longitude: -119.8276 },
  },
  {
    slug: "carpinteria",
    city: "Carpinteria & Summerland",
    region: "Santa Barbara County",
    drive: "20 minutes from the studio",
    metaTitle: "Carpinteria & Summerland Wedding Florist | Beach & Bluff Weddings | Blooms of Santa Barbara",
    metaDescription:
      "Wedding florals for Carpinteria and Summerland beach, bluff and ranch weddings, designed and installed by Blooms of Santa Barbara twenty minutes up the coast.",
    heading: "Wedding flowers for the beaches and bluffs of Carpinteria and Summerland",
    intro: "South of Montecito the coast softens into Summerland's hillside and Carpinteria's long, calm beach, with avocado groves and flower farms behind them. Weddings here are relaxed, sunlit and close to the water.",
    content: [
      "Carpinteria is a flower-growing town, and we lean into it: locally grown blooms, airy designs that move in the sea breeze, and colors drawn from the beach itself, sand, shell, blush and soft greens.",
      "Beach ceremonies need flowers that can take wind and salt air. We weight the frames, choose sturdier blooms and keep the designs low and generous rather than tall and fragile. Receptions move up to the bluff, the ranch or the winery patio, where candlelight takes over.",
      "Summerland's hillside venues and Carpinteria Valley ranches give us the oak-and-ocean backdrop couples come to this coast for, and both are an easy delivery from the studio.",
    ],
    venues: ["Rincon Beach Club", "Carpinteria State Beach", "Summerland Winery", "Carpinteria Bluffs", "Private ranches in the Carpinteria Valley", "Loon Point"],
    faqs: [
      {
        question: "Can you decorate a beach ceremony?",
        answer: "Yes. Ground pieces, a weighted arch and chair flowers that can take a breeze. We check the permit rules for the beach you choose and design within them.",
      },
    ],
    image: "/images/loc-carpinteria.webp",
    imageAlt: "An aerial view of the Pacific coastline with waves and a sandy beach at sunset",
    geo: { latitude: 34.3989, longitude: -119.5185 },
  },
  {
    slug: "santa-ynez-valley",
    city: "Santa Ynez Valley",
    region: "Wine country",
    drive: "45 minutes from the studio",
    metaTitle: "Santa Ynez Valley Wedding Florist | Vineyard & Ranch Weddings | Blooms of Santa Barbara",
    metaDescription:
      "Wedding flowers for Santa Ynez Valley vineyards, ranches and inns, from Solvang and Los Olivos to Santa Ynez and Buellton, designed and delivered by Blooms of Santa Barbara.",
    heading: "Wedding flowers for the vineyards and ranches of the Santa Ynez Valley",
    intro: "Over the pass from Santa Barbara the light turns golden, the hills roll into vines and oaks, and the weddings get a little wilder: long tables between the rows, ceremonies at the edge of a vineyard, dancing under the stars.",
    content: [
      "Vineyard weddings ask for warmth. We design with garden roses, dahlias, toffee and caramel tones, olive and grasses, and candles in amber glass, so the flowers belong to the landscape instead of fighting it. In spring the valley's wildflowers set the palette; in fall, the vines themselves do.",
      "We work at wineries, ranches and the valley's small inns, from Solvang and Los Olivos to Santa Ynez, Ballard and Buellton, and we plan for the valley's heat: flowers conditioned overnight, placed in shade until guests arrive, and installed in the window the venue gives us.",
      "Delivery to the valley is quoted with the event. For larger weddings we arrive the day before to install, then return on the morning for the personal flowers.",
    ],
    venues: ["Sunstone Villa & Winery", "Kestrel Park", "Gainey Vineyard", "Roblar Winery", "Firestone Vineyard", "The Alisal Ranch", "Hotel Ynez", "Brander Vineyard", "Santa Ynez Inn"],
    faqs: [
      {
        question: "How do you handle the valley heat?",
        answer: "By choosing flowers that tolerate it, conditioning them well, keeping them in shade until the last minute and timing the installation close to the ceremony. We will steer you away from blooms that wilt by four o'clock.",
      },
      {
        question: "Do you travel to Paso Robles and San Luis Obispo?",
        answer: "Yes, by arrangement. Our wedding at Allegretto Vineyards in Paso Robles was featured in Wedding Sparrow, and we take a few Central Coast weddings a year.",
      },
    ],
    image: "/images/loc-santa-ynez.webp",
    imageAlt: "A couple embracing in a sunlit vineyard",
    geo: { latitude: 34.6144, longitude: -120.0796 },
  },
  {
    slug: "ojai-ventura",
    city: "Ojai & Ventura",
    region: "Ventura County",
    drive: "45 minutes from the studio",
    metaTitle: "Ojai & Ventura Wedding Florist | Valley & Coast Weddings | Blooms of Santa Barbara",
    metaDescription:
      "Wedding florals for Ojai Valley inns and ranches and Ventura's coast, from Ojai Valley Inn and Thacher House to Ventura's beachfront hotels, designed and delivered by Blooms of Santa Barbara.",
    heading: "Wedding flowers for the Ojai Valley and the Ventura coast",
    intro: "Ojai's pink-lit mountains and orange groves, and Ventura's easygoing beach town an hour down the coast, are both an easy drive from the studio and both full of couples who want flowers with a little soul.",
    content: [
      "Ojai weddings lean bohemian and earthy: citrus and olive, dried textures with fresh garden flowers, warm whites and terracotta, candles on long farm tables. We design for the valley's inns and ranches and for ceremonies in the groves.",
      "Ventura brings the coast back: beachfront hotels, historic adobes and ranch venues in the hills above the city, with palettes that run from classic whites to bright, sun-soaked color.",
      "Deliveries to Ventura County are quoted with the event, and we schedule installations to the venue's windows, with the same setup, transfer and cleanup as at home.",
    ],
    venues: ["Ojai Valley Inn", "Thacher House", "Caravan Outpost", "Ojai Rancho Inn", "Hotel Ventura", "Crowne Plaza Ventura Beach", "Limoneira Ranch", "Olivas Adobe"],
    faqs: [
      {
        question: "Is there a travel fee for Ojai or Ventura?",
        answer: "Delivery is quoted with the event by the venue's distance from Santa Barbara; it is usually a modest line in the proposal, never a surprise.",
      },
    ],
    image: "/images/loc-ojai.webp",
    imageAlt: "Newlyweds sharing a moment in a vineyard at sunset",
    geo: { latitude: 34.448, longitude: -119.2429 },
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
