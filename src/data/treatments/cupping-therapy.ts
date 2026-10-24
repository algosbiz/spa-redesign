// New page, 24 Oct 2026 (owner): cupping therapy, 1 hour IDR 500.000, or 2
// hours with a 1-hour Balinese massage for IDR 600.000 (the package scale,
// see src/lib/packageSaving.ts). Solid cups with a hand pump, no flame; at the
// spa and as home service. The page body is
// src/content/treatments/cupping-therapy.json; the photos in
// /images/services/cuppingtherapy/ are placeholders from other massage pages.
//
// Page: https://spabalimoon.com/seminyak/cupping-therapy/

import type { Treatment } from "../types";

const cuppingTherapy: Treatment = {
  slug: "cupping-therapy",
  name: "Cupping Therapy",
  category: "massage",
  shortDescription: "Solid cups and a hand pump create gentle suction on your back and shoulders, with no flame.",
  cardImage: { src: "/images/treatments/cards/cuppingtherapy.webp", alt: "Cupping Therapy", width: 630, height: 580 },
  seo: {
    title: "Cupping Therapy in Seminyak - Spa Bali Moon",
    description:
      "Cupping therapy in Seminyak, Bali: solid cups and a hand pump, no flame. IDR 500.000 for 1 hour, or 2 hours with a Balinese massage. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Traditional Technique",
    title: "Cupping Therapy",
    image: { src: "/images/banners/cupping-therapy.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [],
};

export default cuppingTherapy;
