// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/deep-tissue-massage/
// TODO PRICE-01: this page shows 219K / 319K, but the Pricelist, Homepage and Home Service pages show 269K / 359K.

import type { Treatment } from "../types";

const deepTissueMassage: Treatment = {
  slug: "deep-tissue-massage",
  name: "Deep Tissue Massage",
  category: "massage",
  shortDescription: "A focused full-body massage using deeper pressure to release knots and improve mobility.",
  cardImage: { src: "/images/treatments/cards/deeptissuemassage.webp", alt: "Deep Tissue Massage", width: 630, height: 580 },
  seo: {
    title: "Deep Tissue Massage Seminyak & Bali - Spa Bali Moon",
    description: "Deep tissue massage in Seminyak, Bali to ease muscle tension. Choose your session length and book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Muscle Recovery",
    title: "Deep Tissue Massage Seminyak",
    image: { src: "/images/treatments/deep-tissue-massage/deeptissuemassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Therapeutic Care",
      heading: "What Is Deep Tissue Massage?",
      paragraphs: [
        "Deep Tissue Massage is a therapeutic technique that uses slow, firm pressure to target deeper layers of muscles and connective tissues. Unlike a relaxing massage that focuses on gentle movements, this treatment is designed for areas affected by stiffness, repetitive activities, exercise, poor posture, or prolonged sitting. The controlled pressure works on areas of tension while supporting easier movement and improved flexibility.",
      ],
      images: [
        {
          src: "/images/treatments/deep-tissue-massage/deeptissuemassage-2.webp",
          alt: "Spa treatment",
          width: 578,
          height: 601,
        },
        { src: "/images/treatments/cards/deeptissuemassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Deep Muscle Focus", text: "Targets areas where long-term tension and stiffness commonly develop." },
        { title: "Controlled Pressure", text: "Uses steady techniques adjusted to your body's response and comfort level." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Session Options",
      heading: "Choose Your Duration",
      paragraphs: [
        "The right session length depends on your treatment goals and the number of areas requiring attention. Shorter sessions work well for focused areas, while longer sessions allow more time for detailed muscle work.",
      ],
      images: [
        { src: "/images/treatments/deep-tissue-massage/deeptissuemassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/deep-tissue-massage/deeptissuemassage-5.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: 219_000,
              points: [
                "Neck, shoulder, or back tension",
                "First-time Deep Tissue Massage guests",
                "Focused treatment on specific areas",
              ],
              bookButton: true,
              note: "TODO PRICE-01: this page shows 219K / 319K, but the Pricelist, Homepage and Home Service pages show 269K / 359K.",
            },
            {
              label: "1.5 Hours",
              price: 319_000,
              points: [
                "Multiple areas with muscle tightness",
                "Guests needing extended treatment time",
                "More detailed deep pressure techniques",
              ],
              bookButton: true,
              note: "TODO PRICE-01: this page shows 219K / 319K, but the Pricelist, Homepage and Home Service pages show 269K / 359K.",
            },
          ],
        },
      ],
    },
    {
      type: "stats",
      items: [
        { title: "Skilled", text: "Therapists" },
        { title: "Muscle", text: "Recovery" },
        { title: "Adjustable", text: "Pressure" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Common Reasons",
      heading: "Why Do People Get Deep Tissue Massage?",
      paragraphs: [
        "People often choose Deep Tissue Massage when they feel a regular massage doesn't focus enough on areas of persistent tension. It is particularly popular among active travellers, office workers, and people who regularly experience muscle tightness. Some of the main reasons to choose Deep Tissue Massage include:",
      ],
      items: [
        "Relieving the feeling of tight muscles",
        "Supporting easier movement and flexibility",
        "Targeting common areas of muscle tension",
        "Relaxing the body after physical activities or long journeys",
        "Loosening stiff areas caused by daily habits",
        "Enjoying a firmer massage pressure",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/deep-tissue-massage/deeptissuemassage-6.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Target Areas",
      heading: "Which Parts of the Body Are Commonly Treated?",
      paragraphs: [
        "During a Deep Tissue Massage session, we typically focus on areas affected by posture, movement patterns, or physical activities. But depending on your needs, common areas that may receive focused attention include:",
      ],
      items: [
        "Shoulders and upper back from desk work or travel",
        "Neck area affected by daily posture",
        "Lower back from prolonged sitting",
        "Legs after walking, surfing, or exercise",
        "Arms affected by repetitive activities",
        "Pressure adjusted to your treatment goals",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/deep-tissue-massage/deeptissuemassage-7.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["Where Tension", "Lives"],
    },
    {
      type: "list",
      eyebrow: "Massage Techniques",
      heading: "How Does Deep Tissue Massage Work?",
      paragraphs: [
        "We combine several manual techniques to address areas of muscle tension and stiffness. We also adjust the technique and pressure according to the treatment area, your needs, and your comfort level. Common techniques may include:",
      ],
      items: [
        "Sustained pressure for deeper muscle work",
        "Slow stripping techniques along muscle fibers",
        "Cross-fiber movements for focused areas",
        "Targeted trigger point techniques",
        "Forearm and elbow methods when suitable",
        "Pressure adjusted based on your comfort",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/deep-tissue-massage/deeptissuemassage-8.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["Power in", "Technique"],
    },
  ],
  faq: {
    heading: "Muscle Recovery",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/treatments/deep-tissue-massage/deeptissuemassage-9.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "Does deep tissue massage hurt?",
        answer: "Deep Tissue Massage may feel intense, especially when working on tight muscles, but it should remain within your comfort level. Our therapists adjust pressure throughout the session based on your feedback.",
      },
      {
        question: "What's the difference between Swedish and deep tissue massage?",
        answer: "Swedish massage uses lighter to moderate pressure and gentle, flowing movements to promote relaxation. Deep tissue massage uses firmer, slower pressure to target deeper muscle tension and tight areas.",
      },
      {
        question: "Is Deep Tissue Massage suitable after exercise?",
        answer: "Yes. Many active guests choose Deep Tissue Massage after physical activities because the treatment focuses on areas that may feel tight or overworked.",
      },
      {
        question: "How often should I get Deep Tissue Massage?",
        answer: "The ideal frequency depends on your lifestyle and muscle condition. Some guests book sessions occasionally after activities, while others include it as part of their regular body care routine.",
      },
      {
        question: "Can Deep Tissue Massage be done at a villa or hotel?",
        answer: "Yes. Home service is available for guests staying in selected villas, hotels, and accommodations around Seminyak.",
      },
      {
        question: "What should I do after a deep tissue massage?",
        answer: "Drink plenty of water, rest, and avoid strenuous exercise for the rest of the day. Gentle stretching can also help your muscles recover.",
      },
      {
        question: "Is deep tissue massage good for sciatica?",
        answer: "Deep tissue massage may help relieve muscle tension and discomfort associated with sciatica. However, it is not a treatment for the underlying cause, so it is best to consult a healthcare professional if your symptoms are severe or persistent.",
      },
      {
        question: "What are the benefits of a deep tissue massage?",
        answer: "Deep tissue massage can help reduce muscle tension, relieve stiffness, improve circulation, and support recovery after physical activity. It may also help improve flexibility and overall relaxation.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Go Beyond Deep Tissue Relief" },
  cta: {
    heading: "Release Built-Up Muscle Tension During Your Bali Stay",
    paragraphs: [
      "Long flights and active days leave muscles tight. Deep Tissue Massage works those areas with controlled, focused pressure. At our spa, or at your villa or hotel through home service.",
      "Reserve your session and let our therapists focus on the areas that need deeper care.",
    ],
    image: { src: "/images/treatments/deep-tissue-massage/deeptissuemassage-10.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default deepTissueMassage;
