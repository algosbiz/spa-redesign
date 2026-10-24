// New page, 24 Oct 2026 (owner): the warm candle massage had no page of its
// own, so searches for "candle massage" landed on the ear candle page. The
// page body is src/content/treatments/warm-candle-massage.json; the photos in
// /images/services/warmcandlemassage/ are placeholders from the two candle
// photos and other oil massage pages until the owner sends more.
//
// Page: https://spabalimoon.com/seminyak/warm-candle-massage/

import type { Treatment } from "../types";

const warmCandleMassage: Treatment = {
  slug: "warm-candle-massage",
  name: "Warm Candle Massage",
  cardName: "Natural Warm Candle Massage",
  category: "massage",
  shortDescription: "Lukewarm wax from a natural shea butter candle, dripped onto your skin and massaged in.",
  cardImage: { src: "/images/treatments/cards/organicwarmcandle.webp", alt: "Natural Warm Candle Massage", width: 630, height: 580 },
  seo: {
    title: "Warm Candle Massage in Seminyak - Spa Bali Moon",
    description:
      "Warm candle massage in Seminyak, Bali: lukewarm wax from a natural shea butter candle, dripped onto your skin and massaged in. From IDR 269.000 at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Natural Shea Butter",
    title: "Natural Warm Candle Massage",
    image: { src: "/images/banners/warm-candle-massage.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [],
};

export default warmCandleMassage;
