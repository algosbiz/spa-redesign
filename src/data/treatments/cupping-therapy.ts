// New page, 24 Oct 2026 (owner): cupping therapy with solid cups and a hand
// pump, no flame; at the spa and as home service. Prices since 1 Nov (owner):
// 1 hour dry cupping IDR 499.000, 1 hour wet cupping IDR 649.000 (tiny pricks
// with a sterile, single-use lancet, then the same pump cups), and 1 hour
// Balinese + 1 hour dry cupping IDR 599.000 (658.000 separately). The page body is
// src/content/treatments/cupping-therapy.json; the photos in
// /images/services/cuppingtherapy/ are placeholders from other massage pages.
//
// Page: https://spabalimoon.com/seminyak/cupping-therapy/

import type { Treatment } from "../types";

const cuppingTherapy: Treatment = {
  slug: "cupping-therapy",
  name: "Cupping Therapy",
  category: "massage",
  shortDescription: "Solid cups and a hand pump create gentle suction on your back and shoulders, with no flame: dry or wet cupping.",
  cardImage: { src: "/images/treatments/cards/cuppingtherapy.webp", alt: "Cupping Therapy", width: 630, height: 580 },
  seo: {
    title: "Dry & Wet Cupping in Seminyak, Bali | Spa Bali Moon",
    description:
      "Gentle suction with solid cups and a hand pump, no flame. Dry cupping IDR 499.000, wet IDR 649.000 for 1 hour, at our Seminyak spa or your villa.",
  },
  hero: {
    eyebrow: "Traditional Technique",
    title: "Cupping Therapy",
    image: { src: "/images/banners/cupping-therapy.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [],
};

export default cuppingTherapy;
