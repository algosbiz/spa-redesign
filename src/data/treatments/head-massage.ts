// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/head-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const headMassage: Treatment = {
  slug: "head-massage",
  name: "Head Massage",
  category: "massage",
  shortDescription: "A focused head massage that helps release built-up stress and quiet the mind.",
  cardImage: { src: "/images/treatments/cards/headmassage.webp", alt: "Head Massage", width: 630, height: 580 },
  seo: {
    title: "Head Massage Seminyak - Scalp & Head Massage Bali",
    description: "Head massage in Seminyak, Bali: a relaxing scalp and head massage by skilled therapists. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Stress-Free Therapy",
    title: "Head Massage Seminyak",
    image: { src: "/images/treatments/head-massage/headmassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Scalp & Head Care",
      heading: "What Is a Head Massage?",
      paragraphs: [
        "Head Massage is a wellness treatment that focuses on the scalp, temples, neck, and upper shoulders using slow, rhythmic massage techniques. While commonly chosen for relaxation, it also helps ease muscle tightness around the head and neck caused by prolonged sitting, screen time, travelling, or everyday stress.",
      ],
      images: [
        { src: "/images/treatments/head-massage/headmassage-2.webp", alt: "Spa treatment", width: 1254, height: 1254 },
        { src: "/images/treatments/head-massage/headmassage-3.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Scalp Relaxation", text: "Gentle movements help reduce tightness around the scalp and temples." },
        { title: "Neck Comfort", text: "Supports relaxation in the upper neck and shoulder muscles." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Find Yours",
      heading: "Our Duration Options",
      paragraphs: [
        "Whether you need a short break between activities or a longer session to fully unwind, our Head Massage is available in several durations. Each treatment can be adjusted according to your preferred pressure and the areas that need extra attention.",
      ],
      images: [
        { src: "/images/treatments/head-massage/headmassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/head-massage/headmassage-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/head-massage/headmassage-6.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("head-massage", "1 Hour"),
              points: ["First-time guests", "Head and neck relaxation", "Quick stress relief"],
              bookButton: true,
            },
            {
              label: "1.5 Hours",
              price: priceOf("head-massage", "1.5 Hours"),
              points: [
                "Extended scalp massage",
                "Head, neck, and shoulders",
                "Guests seeking deeper relaxation",
              ],
              bookButton: true,
            },
            {
              label: "2 Hours",
              price: priceOf("head-massage", "2 Hours"),
              points: ["Complete relaxation", "Longer wellness sessions", "Full upper-body comfort"],
              bookButton: true,
            },
          ],
        },
      ],
    },
    {
      type: "stats",
      items: [
        { title: "Scalp", text: "Care" },
        { title: "Neck", text: "Relaxation" },
        { title: "Adjustable", text: "Pressure" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Daily Relief",
      heading: "How Can a Head Massage Help?",
      paragraphs: [
        "A Head Massage is a simple way to give focused attention to the head, scalp, neck, and surrounding areas. It can be a comfortable choice when you want to relax after a demanding day or ease the physical strain that can build up through work and travel. You may choose a Head Massage for reasons such as:",
      ],
      items: [
        "Easing tension around the head and neck",
        "Supporting scalp comfort",
        "Encouraging relaxation",
        "Helping with feelings of mental fatigue",
        "Providing relief after travel or long workdays",
        "Adding a relaxing element to other spa treatments",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/head-massage/headmassage-7.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Treatment Focus",
      heading: "Which Areas Receive the Most Attention?",
      paragraphs: [
        "A Head Massage focuses on more than just the scalp. The therapist also works on nearby areas that can become tense during long workdays, travel, or daily activities. Depending on your needs, particular attention may be given to:",
      ],
      items: ["Scalp", "Temples", "Forehead", "Neck", "Upper shoulders", "Jaw area when needed"],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/head-massage/headmassage-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Relief Around", "the Head"],
    },
    {
      type: "list",
      eyebrow: "Massage Techniques",
      heading: "What to Expect During a Head Massage Session",
      paragraphs: [
        "A Head Massage follows a gentle progression from the scalp to the surrounding areas, with the pressure adjusted throughout the treatment to keep you comfortable. We use different movements and techniques to work through areas that may feel tense, creating a calm and unhurried experience. Our typical session involves:",
      ],
      items: [
        "Brief consultation before treatment",
        "Rhythmic movements across the scalp",
        "Circular pressure around the temples",
        "Massage of the neck and upper shoulders",
        "Pressure adjusted to your comfort level",
        "Gentle finishing movements to end the session",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/head-massage/headmassage-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Rhythm of", "Release"],
    },
  ],
  faq: {
    heading: "Scalp Care",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/treatments/head-massage/headmassage-10.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "Can a Head Massage help with stress?",
        answer: "Many guests choose Head Massage because the slow, repetitive techniques promote relaxation and help reduce feelings of physical and mental tension.",
      },
      {
        question: "Is oil always used during the treatment?",
        answer: "Not necessarily. Depending on your preference and the treatment style, the massage can be performed with or without massage oil.",
      },
      {
        question: "Can Head Massage help after long hours at a computer?",
        answer: "Yes. Prolonged screen time often creates tension around the neck, shoulders, and scalp. Head Massage focuses on these areas to improve overall comfort.",
      },
      {
        question: "Is Head Massage suitable before sleeping?",
        answer: "Many guests enjoy receiving a Head Massage in the evening because the relaxing techniques help the body unwind before rest.",
      },
      {
        question: "Can I receive Head Massage at my hotel or villa?",
        answer: "Yes. Professional home service is available throughout Seminyak and nearby areas for guests who prefer treatment in their accommodation.",
      },
      {
        question: "Does head massage help hair growth?",
        answer: "Head massage may support scalp circulation and relaxation, but there is limited evidence that it directly promotes hair growth. It can still be a soothing addition to your hair and scalp care routine.",
      },
      {
        question: "Why does a head massage feel so good?",
        answer: "A head massage can feel good because it helps relax the scalp, neck, and surrounding muscles. The gentle pressure and rhythmic movements can also help reduce tension and create a calming, relaxing feeling.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Relax From Head to Toe" },
  cta: {
    heading: "Refresh Your Mind While Caring for Your Body",
    paragraphs: [
      "Travel, screens, and busy days concentrate tension around the head and neck. A Head Massage releases it without committing to a full-body treatment. At our spa, or through home service.",
      "Reserve your Head Massage session and give your upper body time to unwind.",
    ],
    image: { src: "/images/treatments/head-massage/headmassage-11.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default headMassage;
