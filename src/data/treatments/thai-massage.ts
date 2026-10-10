// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/thai-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const thaiMassage: Treatment = {
  slug: "thai-massage",
  name: "Thai Massage",
  category: "massage",
  shortDescription: "An oil-free full-body massage combining assisted stretches and rhythmic pressure.",
  cardImage: { src: "/images/treatments/cards/thaimassage.webp", alt: "Thai Massage", width: 630, height: 580 },
  seo: {
    title: "Thai Massage Seminyak & Bali - Traditional Thai Spa",
    description: "Thai massage in Seminyak, Bali: traditional stretching and pressure techniques by trained therapists. Book in-spa or at your villa.",
  },
  hero: {
    eyebrow: "Active Release",
    title: "Traditional Thai Massage in Bali",
    image: { src: "/images/treatments/thai-massage/thaimassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Get to Know",
      heading: "What Makes Traditional Thai Massage Unique?",
      paragraphs: [
        "Traditional Thai Massage is an ancient wellness technique that combines rhythmic pressure, assisted stretching, and controlled body movements to improve flexibility and ease physical tension. Unlike oil-based massage styles that focus mainly on flowing strokes, Thai Massage uses guided stretches and pressure points to encourage better mobility, body awareness, and overall relaxation.",
      ],
      images: [
        { src: "/images/treatments/thai-massage/thaimassage-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/treatments/cards/thaimassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        {
          title: "Assisted Stretching",
          text: "Uses guided movements inspired by traditional Thai techniques to help improve flexibility.",
        },
        {
          title: "Pressure Point Focus",
          text: "Applies steady pressure to areas where stiffness and tension commonly build up.",
        },
      ],
    },
    {
      type: "pricing",
      eyebrow: "More Freedom to Move",
      heading: "Thai Massage Duration Options",
      paragraphs: [
        "Thai Massage combines assisted stretching with pressure techniques to support flexibility and ease areas that feel tight from daily movement or travel. Longer sessions allow more time to work through the body and spend extra attention on areas that need it most.",
      ],
      groups: [
        {
          cards: [
            {
              label: "30 Minutes",
              price: priceOf("thai-massage", "30 Minutes"),
              points: [
                "Focused stretching session",
                "Quick relief for tight areas",
                "Ideal for limited time",
              ],
              bookButton: false,
            },
            {
              label: "1 Hour",
              price: priceOf("thai-massage", "1 Hour"),
              points: [
                "More complete body treatment",
                "Pressure and assisted stretching",
                "Extra attention to stiff areas",
              ],
              bookButton: false,
            },
            {
              label: "1.5 Hours",
              price: priceOf("thai-massage", "1.5 Hours"),
              points: [
                "Extended full-body session",
                "More time for mobility work",
                "Longer focus on areas of tension",
              ],
              bookButton: false,
            },
          ],
        },
      ],
    },
    {
      type: "packages",
      eyebrow: "Choose Yours",
      heading: "Our Package Options",
      paragraphs: [
        "Enjoy a complete Thai Massage experience combined with other relaxing treatments at Spa Bali Moon. Each package is created to provide a balanced wellness session, combining traditional Thai techniques with facial, nail, and body treatments.",
      ],
      images: [
        { src: "/images/treatments/thai-massage/thaimassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/thai-massage/thaimassage-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/thai-massage/thaimassage-6.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/thai-massage/thaimassage-7.webp", alt: "image", width: 1050, height: 484 },
      ],
      packageGroup: "thai-massage",
    },
    {
      type: "stats",
      items: [
        { title: "Traditional", text: "Thai Technique" },
        { title: "Guided", text: "Stretching" },
        { title: "Body", text: "Mobility" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Body Benefits",
      heading: "Why Do Guests Choose Thai Massage in Bali?",
      paragraphs: [
        "Traditional Thai Massage is often chosen by guests who want a more active approach to relaxation. The combination of pressure and stretching helps the body feel more open, especially after travelling, exercising, or spending long hours sitting.",
      ],
      items: [
        "Helps ease stiffness from daily activities",
        "Supports easier movement and flexibility",
        "Relieves tension in commonly affected areas",
        "Suitable after flights, travel, or physical activity",
        "Combines massage with gentle stretching techniques",
        "Ideal for guests who prefer a more active treatment style",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/thai-massage/thaimassage-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Focus Areas",
      heading: "Which Parts of the Body Are Treated During Thai Massage?",
      paragraphs: [
        "Thai Massage works with the entire body through pressure techniques and assisted movements. Our therapists focus on areas that commonly feel restricted from posture, travel, or active routines, helping create a greater sense of balance and ease throughout the session.",
      ],
      items: [
        "Back and shoulders affected by long sitting",
        "Neck area with daily posture tension",
        "Hips and legs needing more mobility",
        "Arms and upper body after repetitive movement",
        "Areas that feel stiff after exercise or travelling",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/thai-massage/thaimassage-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["More Room", "to Move"],
    },
    {
      type: "list",
      eyebrow: "Massage Technique",
      heading: "How Does Traditional Thai Massage Work?",
      paragraphs: [
        "Traditional Thai Massage combines steady pressure, stretching, and rhythmic movements without the use of massage oil. Our therapists use hands, thumbs, palms, and body weight techniques to work through areas of tension while carefully guiding the body through comfortable stretches. Each movement follows a slow and controlled approach to help improve relaxation and flexibility.",
      ],
      items: [
        "Uses hands, thumbs, palms, and elbows for pressure",
        "Includes Thai-inspired assisted stretching",
        "Performed without oil for better control",
        "Focuses on flexibility and alignment",
        "Adjusted to your comfort level",
        "Balances relaxation and active bodywork",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/thai-massage/thaimassage-10.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Stretch Into", "Balance"],
    },
  ],
  faq: {
    heading: "Thai Massage",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/treatments/thai-massage/thaimassage-11.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "What is Traditional Thai Massage?",
        answer: "Traditional Thai Massage is a traditional bodywork technique that combines pressure, stretching, and movement. It focuses on improving body comfort, flexibility, and relaxation through structured techniques.",
      },
      {
        question: "Is Thai Massage different from Balinese Massage?",
        answer: "Yes. Thai Massage focuses more on assisted stretching, mobility, and pressure techniques without oil, while Balinese Massage usually uses flowing strokes and massage oils for a more relaxing experience.",
      },
      {
        question: "Is Thai Massage suitable for beginners?",
        answer: "Yes. Beginners can enjoy Thai Massage as our therapists can adjust the intensity and stretching movements based on your comfort level.",
      },
      {
        question: "What should I wear during a Thai Massage session?",
        answer: "Comfortable clothing is recommended because the treatment includes stretching and guided movements. Unlike oil massage, Thai Massage does not require direct skin contact for the entire session.",
      },
      {
        question: "Is Thai Massage good after a long flight or travel?",
        answer: "Yes. Many travellers choose Thai Massage after long journeys because the stretching techniques can help the body feel less restricted and more comfortable.",
      },
      {
        question: "Can I combine Thai Massage with other spa treatments?",
        answer: "Yes. Many guests combine Thai Massage with facial, manicure, cream bath, or body treatments for a more complete spa experience.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Book More Than a Thai Massage" },
  cta: {
    heading: "Increase Your Flexibility with Traditional Thai Massage at Spa Bali Moon",
    paragraphs: [
      "Traditional Thai Massage combines rhythmic pressure with assisted stretching to ease stiffness and bring movement back, welcome after long flights or active days. At our spa, or at your villa.",
      "Reserve your Thai Massage package and move through Bali feeling lighter.",
    ],
    image: { src: "/images/treatments/thai-massage/thaimassage-12.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default thaiMassage;
