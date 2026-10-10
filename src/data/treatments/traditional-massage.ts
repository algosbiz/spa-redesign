// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/traditional-massage/
// TODO PRICE-05: this page does not show the 30 Minutes / 90K option that the Pricelist shows.

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const traditionalMassage: Treatment = {
  slug: "traditional-massage",
  name: "Traditional Massage",
  category: "massage",
  shortDescription: "A firmer full-body massage using deeper pressure to release muscle tension.",
  cardImage: { src: "/images/treatments/cards/traditionalmassage.webp", alt: "Traditional Massage", width: 630, height: 580 },
  seo: {
    title: "Traditional Balinese Massage Seminyak - Spa Bali Moon",
    description: "Traditional Balinese massage in Seminyak: firm pressure to relieve tension. Book at Spa Bali Moon in-spa or at your villa.",
  },
  hero: {
    eyebrow: "Firm Body Care",
    title: "Traditional Massage Seminyak",
    image: { src: "/images/treatments/traditional-massage/traditionalmassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Traditional Wellness Support",
      heading: "What Makes Traditional Massage Different?",
      paragraphs: [
        "Traditional Massage is a hands-on body treatment that uses firmer pressure, kneading movements, and focused techniques to release muscle tension throughout the body. Unlike lighter relaxation massages, this treatment works more directly on areas that feel stiff or overworked, helping improve comfort, mobility, and overall body relaxation.",
      ],
      images: [
        {
          src: "/images/treatments/traditional-massage/traditionalmassage-2.webp",
          alt: "Spa treatment",
          width: 578,
          height: 601,
        },
        { src: "/images/treatments/cards/traditionalmassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Firm Pressure", text: "Uses stronger massage movements to address areas with built-up tension." },
        { title: "Full Body Relief", text: "Targets common tension areas while supporting overall relaxation." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Select Yours",
      heading: "Our Session Options",
      paragraphs: [
        "Our Traditional Massage session provides enough time for therapists to work through areas that hold tension. Choose a shorter treatment for focused relaxation or a longer session for more complete body care.",
      ],
      images: [
        { src: "/images/treatments/traditional-massage/traditionalmassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/traditional-massage/traditionalmassage-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/traditional-massage/traditionalmassage-6.webp", alt: "image", width: 1050, height: 484 },
      ],
      // TODO PRICE-05: this page does not show the 30 Minutes / 90K option that the Pricelist shows.
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("traditional-massage", "1 Hour"),
              points: [
                "Mild muscle stiffness",
                "Focused attention on specific areas",
                "Guests looking for a refreshing massage",
              ],
              bookButton: true,
            },
            {
              label: "1.5 Hours",
              price: priceOf("traditional-massage", "1.5 Hours"),
              points: [
                "Multiple tension areas",
                "Longer relaxation experience",
                "Guests wanting more detailed treatment",
              ],
              bookButton: true,
            },
            {
              label: "2 Hours",
              price: priceOf("traditional-massage", "2 Hours"),
              points: [
                "Deeper muscle comfort",
                "Full body massage experience",
                "Guests with more time for relaxation",
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
        { title: "Traditional", text: "Techniques" },
        { title: "Adjustable", text: "Pressure" },
        { title: "Warm Oil", text: "Application" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Gentle Relief",
      heading: "Why Do Guests Choose Traditional Massage?",
      paragraphs: [
        "Traditional Massage is popular among guests who prefer a stronger touch compared to gentle relaxation treatments. It is often selected after busy schedules, long journeys, physical activities, or when the body feels heavy from daily tension.",
      ],
      items: [
        "Helps ease stiff and tired muscles",
        "Supports better body comfort",
        "Relieves tension from daily activities",
        "Encourages smoother movement",
        "Improves relaxation through firm techniques",
        "Suitable after travel or physical exertion",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/traditional-massage/traditionalmassage-7.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Treatment Focus",
      heading: "Which Areas Receive the Most Attention?",
      paragraphs: [
        "Muscle tension often develops in areas that carry repeated pressure throughout the day. During Traditional Massage, our therapists adjust their approach based on your body condition and focus on areas that need extra care.",
      ],
      items: [
        "Back from prolonged sitting or activity",
        "Shoulders and neck from daily posture",
        "Legs after walking or exercise",
        "Arms from repetitive movement",
        "Lower back from physical strain",
        "Whole body for general relaxation",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/traditional-massage/traditionalmassage-8.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["Relief Where", "You Feel It"],
    },
    {
      type: "list",
      eyebrow: "The Approach",
      heading: "Inside a Traditional Massage Session",
      paragraphs: [
        "Traditional Massage combines firm hand movements with warm oil application to create smoother and more comfortable techniques. Our therapists use kneading, pressing, and acupressure-inspired movements to release areas of tightness while maintaining communication throughout the session. Pressure can be adjusted based on your comfort and body response.",
      ],
      items: [
        "Warm oil preparation",
        "Kneading techniques",
        "Firm pressing movements",
        "Acupressure-inspired methods",
        "Targeted work on tense areas",
        "Pressure adjusted during treatment",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/traditional-massage/traditionalmassage-9.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["A Timeless", "Technique"],
    },
  ],
  faq: {
    heading: "Traditional Massage",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/treatments/traditional-massage/traditionalmassage-10.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "What is Traditional Massage?",
        answer: "Traditional Massage is a hands-on massage technique that uses firm pressure, kneading, and focused movements to help release muscle tension and improve body comfort.",
      },
      {
        question: "What is the difference between Traditional Massage and Balinese Massage?",
        answer: "Traditional Massage usually uses firmer and more direct pressure for muscle release, while Balinese Massage combines flowing strokes, stretching, and relaxation-focused techniques.",
      },
      {
        question: "Is Traditional Massage painful?",
        answer: "The pressure may feel strong, especially around tense areas, but it should remain comfortable. Our therapists adjust intensity based on your preference.",
      },
      {
        question: "Is Traditional Massage suitable for first-time guests?",
        answer: "Yes. First-time guests can enjoy this treatment because the pressure can be modified according to individual comfort levels.",
      },
      {
        question: "Should I choose Traditional Massage or Deep Tissue Massage?",
        answer: "Traditional Massage is ideal for guests wanting firm full-body pressure and general muscle relief. Deep Tissue Massage is more targeted toward deeper layers and specific long-term tension areas.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Go Beyond Traditional Massage" },
  cta: {
    heading: "Restore Your Body After Long Days in Bali",
    paragraphs: [
      "Travel and daily activity leave muscles tight and tired. Traditional Massage uses firm, balanced technique to release tension and leave the body refreshed. At our spa, or at your villa.",
      "Reserve your Traditional Massage session and restore comfort after long days in Bali.",
    ],
    image: { src: "/images/treatments/traditional-massage/traditionalmassage-11.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default traditionalMassage;
