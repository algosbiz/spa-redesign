// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/foot-reflexology/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const footReflexology: Treatment = {
  slug: "foot-reflexology",
  name: "Foot Reflexology",
  category: "massage",
  shortDescription: "A focused lower-body massage applying pressure to reflex points on the feet.",
  cardImage: { src: "/images/treatments/cards/footreflexology.webp", alt: "Foot Reflexology", width: 630, height: 580 },
  seo: {
    title: "Foot Reflexology in Seminyak, Bali",
    description: "Foot reflexology in Seminyak, Bali: traditional techniques for tired feet. Book at Spa Bali Moon or at your villa.",
  },
  hero: {
    eyebrow: "Natural Balance",
    title: "Foot Reflexology Seminyak",
    image: { src: "/images/treatments/foot-reflexology/footreflexology-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Understanding Reflexology",
      heading: "What Is Foot Reflexology and How Does It Work?",
      paragraphs: [
        "Foot Reflexology is a traditional wellness therapy that applies controlled pressure to specific reflex points on the feet, which are traditionally believed to correspond with different areas of the body. Using a structured reflex-point technique, the treatment helps encourage relaxation, supports circulation in the feet, and relieves the sensation of tiredness after travel, long walks, or daily activities.",
      ],
      images: [
        { src: "/images/treatments/foot-reflexology/footreflexology-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/treatments/cards/footreflexology.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        {
          title: "Reflex Point Therapy",
          text: "Uses targeted pressure on specific areas of the feet rather than general massage strokes.",
        },
        {
          title: "Whole-Body Relaxation",
          text: "Encourages a calming effect that many guests experience beyond the feet themselves.",
        },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Session Options",
      heading: "Choose the Session That Fits You",
      paragraphs: [
        "Every Foot Reflexology session follows the same structured pressure-point technique, while longer durations allow additional time to work across more reflex areas at a relaxed pace. Select the option that best matches your comfort and schedule.",
      ],
      images: [
        { src: "/images/treatments/foot-reflexology/footreflexology-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/foot-reflexology/footreflexology-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/foot-reflexology/footreflexology-6.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "30 Minutes",
              price: priceOf("foot-reflexology", "30 Minutes"),
              points: ["Quick relaxation", "Guests with limited time", "Tired feet after sightseeing"],
              bookButton: true,
            },
            {
              label: "1 Hour",
              price: priceOf("foot-reflexology", "1 Hour"),
              points: [
                "Complete foot reflexology session",
                "Daily foot fatigue",
                "Better overall relaxation",
              ],
              bookButton: true,
            },
            {
              label: "1.5 Hours",
              price: priceOf("foot-reflexology", "1.5 Hours"),
              points: [
                "Longer reflexology experience",
                "Guests wanting extra relaxation",
                "Extended pressure-point treatment",
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
        { title: "Reflex", text: "Point Therapy" },
        { title: "Flexible", text: "Booking" },
        { title: "Gentle", text: "Pressure" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Benefits of Foot Reflexology",
      heading: "A Simple Way to Refresh Tired Feet",
      paragraphs: [
        "After a day of walking, standing, travelling, or exploring Bali, your feet can start to feel tired and heavy. Foot Reflexology offers a simple way to give them focused care while creating a relaxing wellness experience. You may choose this treatment for reasons such as:",
      ],
      items: [
        "Helping tired feet feel lighter",
        "Encouraging healthy local circulation",
        "Promoting relaxation after long walks",
        "Supporting everyday foot comfort",
        "Fitting easily into regular wellness routines",
        "Providing soothing care for travellers in Bali",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/foot-reflexology/footreflexology-7.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Reflex Points",
      heading: "Where Does Foot Reflexology Focus?",
      paragraphs: [
        "Foot Reflexology uses focused pressure on specific areas of the feet based on traditional reflexology principles. Rather than applying the same pressure everywhere, we work through different zones to create a balanced and comfortable treatment. Our session may focus on:",
      ],
      items: [
        "Toes and forefoot reflex points",
        "The ball of the foot",
        "The foot arch",
        "The heel area",
        "Inner and outer foot zones",
        "Lower leg finishing techniques",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/foot-reflexology/footreflexology-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["The Reflex", "Map"],
    },
    {
      type: "list",
      eyebrow: "The Technique",
      heading: "What Is a Foot Reflexology Session Like?",
      paragraphs: [
        "A Foot Reflexology session follows a gentle, structured approach that combines warm-up movements with focused pressure on selected reflex points. The therapist adjusts the technique throughout the treatment to keep the pressure comfortable while maintaining a steady rhythm. The session typically involves:",
      ],
      items: [
        "Gentle warm-up techniques",
        "A structured reflex point sequence",
        "Thumb and finger pressure techniques",
        "Controlled adjustments to pressure",
        "Relaxing finishing movements",
        "A comfortable treatment experience from start to finish",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/foot-reflexology/footreflexology-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["A Guided", "Sequence"],
    },
  ],
  faq: {
    heading: "Reflex Points",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/treatments/foot-reflexology/footreflexology-10.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "Is Foot Reflexology the same as a Foot Massage?",
        answer: "Not exactly. Foot Massage focuses on relaxing muscles and relieving soreness, while Foot Reflexology applies pressure to specific reflex points using a structured technique.",
      },
      {
        question: "Does Foot Reflexology hurt?",
        answer: "Most guests find the treatment comfortable. Some reflex points may feel more sensitive than others, but pressure is always adjusted according to your comfort.",
      },
      {
        question: "Is Foot Reflexology suitable after walking around Bali?",
        answer: "Yes. Many guests book Foot Reflexology after sightseeing, shopping, hiking, or spending long hours on their feet.",
      },
      {
        question: "Can I combine Foot Reflexology with another treatment?",
        answer: "Absolutely. It is commonly paired with full-body massage, back massage, or facial treatments for a more complete wellness experience.",
      },
      {
        question: "Is home service available?",
        answer: "Yes. The treatment is available at our spa as well as selected villas and hotels throughout Seminyak and nearby areas.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Step Into More Feel-Good Treatments" },
  cta: {
    heading: "Restore Comfort to Every Step",
    paragraphs: [
      "Long days exploring Bali end with tired feet. Foot Reflexology helps them recover through carefully applied pressure-point work. Visit our spa, or stay put with home service.",
      "Reserve your Foot Reflexology session and bring comfort back to every step.",
    ],
    image: { src: "/images/treatments/foot-massage/footmassage-11.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default footReflexology;
