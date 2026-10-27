export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How much do wedding flowers cost with Blooms of Santa Barbara?",
    answer:
      "Every wedding is quoted from its guest count, its venue and the pieces you choose, in one written proposal with one total. There is no price list because no two weddings need the same flowers. As a guide, WeddingWire lists our average wedding at about $4,650; elopements and personal-flowers-only orders come in well below that, and large estate weddings above it. Tell us your budget early and we will design to it honestly.",
  },
  {
    question: "How far in advance should we book?",
    answer: "Eight to twelve months is comfortable, and spring and fall Saturdays in Santa Barbara book first. If your date is sooner, ask; smaller weddings, weekdays and off-season dates can often be fit in.",
  },
  {
    question: "Where do you work?",
    answer: "Santa Barbara, Montecito, Goleta, Carpinteria and Summerland are home. We regularly design in the Santa Ynez Valley (Solvang, Los Olivos, Santa Ynez, Buellton), Ojai and Ventura, and take a few weddings a year in Paso Robles and San Luis Obispo County.",
  },
  {
    question: "Do you deliver, set up and clean up?",
    answer: "Yes, all three, with our own team. We deliver personal flowers to wherever you are getting ready, install the ceremony and reception, move pieces between them when the venue allows, and return at the end of the night for the vessels.",
  },
  {
    question: "What is your style?",
    answer: "Garden-gathered and romantic: loose shapes, seasonal blooms, soft neutrals and blush as a signature, and candlelight. We design in every palette, from moody and saturated to bright and sunny, and we will tell you which flowers will look best on your date.",
  },
  {
    question: "Can we meet before we book?",
    answer: "Of course. After your inquiry we set up a call or a video consultation to talk through your day; local couples are welcome at the studio by appointment. A written proposal follows within a few days.",
  },
  {
    question: "Do you work with planners and venues?",
    answer: "Yes, and we prefer it. We coordinate timelines, load-in windows, rain plans and venue rules directly with your planner and venue coordinator.",
  },
  {
    question: "Can you work from our Pinterest board?",
    answer: "Send it. It tells us the mood, the shapes and the colors you respond to, and we translate it into flowers that are in season on your date and that will hold up in a Santa Barbara afternoon.",
  },
  {
    question: "Do you use seasonal and local flowers?",
    answer: "As much as we can. Carpinteria and the Central Coast grow some of the best flowers in the country, and seasonal, local blooms look better, last longer and cost less than flowers flown in. We use imported stems when a design calls for them.",
  },
  {
    question: "Can you do just bouquets and boutonnières?",
    answer: "Yes. Elopements, courthouse weddings and small celebrations often order only the personal flowers, and we deliver them to your suite or the courthouse steps.",
  },
  {
    question: "What about flowers for a shower, a party or a corporate event?",
    answer: "We design for them all: showers, rehearsal dinners, birthdays, anniversaries, celebrations of life, galas, retreats and launches. Two to three weeks' notice is comfortable for a party; a week is often possible.",
  },
  {
    question: "Do you provide vases, candles and arch structures?",
    answer: "Yes. Vessels, candle holders, tapers and arch frames are included in the proposal as rentals and collected at the end of the event. If you want to keep arrangements, we can design in vessels you take home.",
  },
  {
    question: "What happens if a flower is not available on our date?",
    answer: "Flowers are a natural product, and the market changes week to week. We select the varieties in your proposal and substitute a bloom of equal value and similar look only when the season or the market requires it, and we tell you.",
  },
  {
    question: "How do we start?",
    answer: "Send an inquiry with your date, your venue, your guest count and a few photographs you love. We reply within 24 hours with next steps.",
  },
];

/** The handful of questions answered on the home page. */
export const homeFaqs: Faq[] = [faqs[0], faqs[1], faqs[2], faqs[3], faqs[4]];
