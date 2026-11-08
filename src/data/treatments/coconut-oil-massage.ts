// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/coconut-oil-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const coconutOilMassage: Treatment = {
  slug: "coconut-oil-massage",
  name: "Coconut Oil Massage",
  cardName: "Virgin Cold-Press Coconut Oil Massage",
  category: "massage",
  shortDescription: "A nourishing full-body massage using pure coconut oil to promote deep relaxation.",
  cardImage: {
    src: "/images/treatments/cards/coconutoilmassage-warm.webp",
    alt: "Virgin Cold-Press Coconut Oil Massage",
    width: 630,
    height: 580,
  },
  seo: {
    title: "Virgin Coconut Oil Massage in Seminyak | Spa Bali Moon",
    description: "Cold-pressed virgin coconut oil keeps skin soft while your muscles relax. A full-body massage in Seminyak from IDR 300.000, at our spa or your villa.",
  },
  hero: {
    eyebrow: "Natural Nourishment",
    title: "Virgin Cold Press Coconut Oil Massage",
    image: { src: "/images/treatments/coconut-oil-massage/coconutoilmassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Pure Coconut Care",
      heading: "The Benefits of Virgin Coconut Oil Massage",
      paragraphs: [
        "Virgin cold-pressed coconut oil is made from fresh coconuts without high heat, helping preserve its natural properties. In massage therapy, it is valued for its smooth texture, skin-conditioning benefits, and suitability for most skin types. Combined with relaxing massage techniques, it creates a treatment that supports both muscle relaxation and skin nourishment.",
      ],
      images: [
        {
          src: "/images/treatments/coconut-oil-massage/coconutoilmassage-2.webp",
          alt: "Spa treatment",
          width: 578,
          height: 601,
        },
        { src: "/images/treatments/cards/coconutoilmassage-warm.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Cold-Pressed Oil", text: "Retains the natural qualities of fresh coconut through minimal processing." },
        { title: "Skin-Friendly Formula", text: "Lightweight, nourishing, and suitable for most skin types." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Choose Your Session",
      heading: "Session Duration & Pricing",
      paragraphs: [
        "Our Virgin Cold Press Coconut Oil Massage is available in multiple session durations, making it easy to choose the treatment that best fits your schedule. Each session uses pure cold-pressed coconut oil to support skin hydration while enhancing the comfort of the massage.",
      ],
      images: [
        { src: "/images/treatments/coconut-oil-massage/coconutoilmassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/coconut-oil-massage/coconutoilmassage-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/coconut-oil-massage/coconutoilmassage-6.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("coconut-oil-massage", "1 Hour"),
              points: ["First-time guests", "Quick relaxation sessions", "Daily skin nourishment"],
              bookButton: true,
            },
            {
              label: "1.5 Hours",
              price: priceOf("coconut-oil-massage", "1.5 Hours"),
              points: ["Deeper relaxation", "Extra attention to tired muscles", "Extended skin hydration"],
              bookButton: true,
            },
            {
              label: "2 Hours",
              price: priceOf("coconut-oil-massage", "2 Hours"),
              points: [
                "A complete wellness experience",
                "Guests seeking maximum relaxation",
                "Longer full-body massage sessions",
              ],
              bookButton: true,
            },
          ],
        },
      ],
    },
    {
      type: "stats",
      items: [
        { title: "Pure", text: "Coconut Oil" },
        { title: "Flexible", text: "Booking" },
        { title: "Adjustable", text: "Pressure" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Why Coconut Oil?",
      heading: "More Than Just Massage Oil",
      paragraphs: [
        "Virgin coconut oil has long been used in tropical wellness traditions because of its natural moisturising properties and smooth texture. In addition, guests may enjoy coconut oil because:",
      ],
      items: [
        "Helps soften dry skin",
        "Leaves the skin feeling moisturised",
        "Provides smooth massage movements",
        "Comfortable for most skin types",
        "Naturally derived from fresh coconuts",
        "Popular after beach and outdoor activities",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/coconut-oil-massage/coconutoilmassage-7.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Ideal For",
      heading: "Who Usually Chooses This Massage?",
      paragraphs: [
        "While the massage itself focuses on relaxation, the use of virgin coconut oil can make the treatment appealing to guests with different skin-care and wellness preferences. This massage may be a good fit for:",
      ],
      items: [
        "Guests with dry-feeling skin",
        "Visitors after sun exposure",
        "Travellers seeking gentle relaxation",
        "People who enjoy natural wellness products",
        "Anyone who prefers plant-based massage oil",
        "Guests looking for hydration and relaxation together",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/coconut-oil-massage/coconutoilmassage-8.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["Nourished by", "Nature"],
    },
    {
      type: "list",
      eyebrow: "Treatment Process",
      heading: "Why Virgin Coconut Oil Works So Well for Massage",
      paragraphs: [
        "Virgin coconut oil works well for massage because its smooth texture supports continuous movements and helps reduce friction during treatment. It also leaves the skin feeling soft and moisturised, making it useful for:",
      ],
      items: [
        "Smooth application from start to finish",
        "Supports long, flowing massage strokes",
        "Helps reduce friction on the skin",
        "Naturally moisturises during treatment",
        "Comfortable for extended sessions",
        "Spa and home service available",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/coconut-oil-massage/coconutoilmassage-9.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["The Power of", "Coconut"],
    },
  ],
  faq: {
    heading: "Pure Coconut Care",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/treatments/coconut-oil-massage/coconutoilmassage-10.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "What makes virgin cold-pressed coconut oil different from regular massage oil?",
        answer: "Virgin cold-pressed coconut oil is extracted without high heat, helping preserve its natural composition. Many people prefer it because it feels lightweight on the skin and provides natural moisture during the massage.",
      },
      {
        question: "Is this massage suitable for sensitive skin?",
        answer: "For most people, yes. Virgin coconut oil is generally well tolerated, but if you have allergies to coconut or specific skin concerns, please let us know before your appointment.",
      },
      {
        question: "Will the massage leave my skin feeling oily?",
        answer: "A light layer of oil may remain immediately after the session, but much of the oil is absorbed during the massage, leaving the skin feeling soft and comfortable.",
      },
      {
        question: "Can I book this massage as a home service?",
        answer: "Yes. This treatment is available at our spa as well as through our villa and hotel home service throughout Seminyak and nearby areas.",
      },
      {
        question: "Is this massage only for relaxation?",
        answer: "Relaxation is one of its main benefits, but many guests also choose this treatment because the virgin coconut oil helps keep the skin feeling soft, smooth, and moisturised.",
      },
      {
        question: "Is virgin coconut oil massage suitable for dry skin?",
        answer: "It can be a suitable option for people with dry or dehydrated-feeling skin because coconut oil helps moisturise and soften the skin. However, individual skin types can respond differently to oils, so guests with known sensitivities should inform their therapist before treatment.",
      },
      {
        question: "Can virgin coconut oil massage help with muscle tension?",
        answer: "The massage techniques used during the treatment can help relax tight or tired muscles and promote an overall sense of physical relaxation. The benefits depend on the massage pressure, techniques used, and individual needs rather than the coconut oil itself.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Nourish Your Body With More Spa Rituals" },
  cta: {
    heading: "Experience the Natural Comfort of Virgin Coconut Oil",
    paragraphs: [
      "Traditional massage technique with pure cold-pressed coconut oil, leaving both body and skin refreshed. At our spa, or through home service at your villa or hotel around Seminyak.",
      "Let yourself unwind with one of Bali's most naturally nourishing massage experiences.",
    ],
    image: { src: "/images/treatments/coconut-oil-massage/coconutoilmassage-11.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default coconutOilMassage;
