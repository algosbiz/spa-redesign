// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/sunburn-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const sunburnMassage: Treatment = {
  slug: "sunburn-massage",
  name: "Sunburn Treatment",
  category: "massage",
  shortDescription: "A cooling full-body massage that soothes the skin and supports gentle recovery.",
  cardImage: { src: "/images/treatments/cards/aloeveramassage.webp", alt: "Sunburn Treatment", width: 630, height: 580 },
  seo: {
    title: "Sunburn Treatment Bali - Aloe Vera Sunburn Massage",
    description: "Sunburn treatment in Seminyak, Bali: a gentle cold aloe vera massage to soothe sun-exposed skin. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "After Sun Care",
    title: "Sunburn Seminyak",
    image: { src: "/images/treatments/sunburn-massage/sunburntreatment-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Skin Recovery",
      heading: "Why Does Sunburned Skin Need Gentle Treatment?",
      paragraphs: [
        "After prolonged sun exposure, the skin can become warm, dehydrated, tight, and more sensitive than usual. A Sunburn Treatment uses cooling ingredients such as aloe vera together with gentle application techniques to calm overheated skin without adding unnecessary pressure. The goal is to restore comfort, replenish moisture, and support the skin's natural recovery process after time in Bali's tropical sun.",
      ],
      images: [
        { src: "/images/treatments/sunburn-massage/sunburntreatment-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/treatments/cards/aloeveramassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Cooling Care", text: "Helps calm overheated skin with soothing after-sun ingredients." },
        { title: "Gentle Application", text: "Light movements designed for skin that feels sensitive or tender." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Treatment Details",
      heading: "A Dedicated Session for Sun-Exposed Skin",
      paragraphs: [
        "Our Sunburn Treatment is provided as a focused one-hour session, giving the skin time to cool, rehydrate, and recover comfortably after beach days, outdoor activities, or extended sun exposure.",
      ],
      images: [
        { src: "/images/treatments/sunburn-massage/sunburntreatment-4.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("aloe-vera-massage", "1 Hour"),
              points: [
                "Mild sunburn and skin redness",
                "Skin feeling hot, dry, or tight",
                "Recovery after beach or pool activities",
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
        { title: "Aloe Vera", text: "Infusion" },
        { title: "Cooling", text: "Hydration" },
        { title: "Sensitive", text: "Skin Friendly" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "The Benefits",
      heading: "How Can a Sunburn Treatment Help?",
      paragraphs: [
        "Sunburn Treatment is designed to improve comfort rather than provide deep massage. Cooling botanical ingredients and gentle techniques work together to calm skin that has become stressed by ultraviolet exposure while supporting healthy moisture levels during recovery.",
      ],
      items: [
        "Helps cool overheated skin",
        "Supports hydration after sun exposure",
        "Reduces the feeling of tightness",
        "Comforts sensitive skin",
        "Suitable after beach holidays or outdoor activities",
        "Promotes a calmer skin sensation during recovery",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/sunburn-massage/sunburntreatment-5.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Areas of Care",
      heading: "Which Parts of the Body Are Commonly Treated?",
      paragraphs: [
        "Every sunburn is different. Our therapists focus on the areas most affected by sun exposure while adapting the treatment according to your skin's condition and comfort throughout the session.",
      ],
      items: [
        "Shoulders",
        "Upper back",
        "Arms",
        "Legs",
        "Chest area",
        "Any sun-exposed skin requiring gentle care",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/sunburn-massage/sunburntreatment-6.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Soothe the", "Sun"],
    },
    {
      type: "list",
      eyebrow: "The Experience",
      heading: "What to Expect from a Sunburn Treatment",
      paragraphs: [
        "Our therapist first assesses the condition of your skin before applying cooling aloe vera and soothing botanical products to the affected areas. Gentle, slow movements help spread the products evenly without creating unnecessary friction, while cool compresses may be used to enhance comfort. Every step is performed with sensitive skin in mind, allowing your body to relax while your skin begins its recovery.",
      ],
      items: [
        "Skin condition assessment",
        "Cooling aloe vera application",
        "Light, non-irritating massage movements",
        "Optional cool compresses",
        "Hydrating botanical care",
        "Comfort-focused finishing",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/sunburn-massage/sunburntreatment-7.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["A Softer", "Way Back"],
    },
  ],
  faq: {
    heading: "After Sun Care",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/treatments/sunburn-massage/sunburntreatment-8.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "Can I get a massage if I have sunburn?",
        answer: "Yes, provided the skin is not blistered or severely damaged. Our Sunburn Treatment avoids deep pressure and uses gentle techniques specifically intended for sensitive skin.",
      },
      {
        question: "Why is aloe vera commonly used after sun exposure?",
        answer: "Aloe vera is widely used in after-sun care because of its cooling properties and its ability to help maintain skin hydration while soothing temporary discomfort.",
      },
      {
        question: "Is this treatment suitable immediately after the beach?",
        answer: "Yes. Many guests book this treatment after spending long hours outdoors to help cool and rehydrate their skin.",
      },
      {
        question: "Does the treatment focus on the whole body?",
        answer: "It can. Our therapist may treat the entire body or concentrate only on the sun-exposed areas that require the most attention.",
      },
      {
        question: "Can I return to the sun after my appointment?",
        answer: "It's recommended to give your skin time to recover before further sun exposure and to apply appropriate sun protection when going outdoors.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Soothe, Restore, and Explore More" },
  cta: {
    heading: "Give Your Skin the Recovery Time It Deserves",
    paragraphs: [
      "Hours in Bali's sun can leave skin warm and sensitive. Our Sunburn Treatment cools and rehydrates with aloe vera and botanical ingredients. At our spa, or at your villa or hotel.",
      "Reserve your Sunburn Treatment and let your skin recover comfortably.",
    ],
    image: { src: "/images/treatments/sunburn-massage/sunburntreatment-9.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default sunburnMassage;
