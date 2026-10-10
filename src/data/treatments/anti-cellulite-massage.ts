// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/anti-cellulite-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const antiCelluliteMassage: Treatment = {
  slug: "anti-cellulite-massage",
  name: "Cellulite Massage",
  category: "massage",
  shortDescription: "A targeted full-body massage designed to stimulate circulation and improve skin tone.",
  cardImage: { src: "/images/treatments/cards/cellulitemassage.webp", alt: "Cellulite Massage", width: 630, height: 580 },
  seo: {
    title: "Cellulite Massage Bali - Anti-Cellulite Massage Seminyak",
    description: "Cellulite massage in Seminyak, Bali: a firming massage to boost circulation and smooth skin texture. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Body Contouring",
    title: "Cellulite Massage Seminyak",
    image: { src: "/images/treatments/anti-cellulite-massage/cellulitemassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Smoother Skin Support",
      heading: "Can Massage Help Improve the Appearance of Cellulite?",
      paragraphs: [
        "Cellulite massage is a targeted body treatment designed to support circulation, encourage lymphatic movement, and improve the appearance of uneven skin texture commonly associated with cellulite. The treatment uses firm, controlled techniques that focus on areas such as the thighs, hips, buttocks, and abdomen where cellulite often develops. Our therapists adjust the intensity according to your comfort level and treatment goals.",
      ],
      images: [
        {
          src: "/images/treatments/anti-cellulite-massage/cellulitemassage-2.webp",
          alt: "Spa treatment",
          width: 578,
          height: 601,
        },
        { src: "/images/treatments/cards/cellulitemassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Targeted Areas", text: "Commonly focuses on the thighs, hips, buttocks, and stomach area." },
        { title: "Firm Pressure", text: "Uses controlled movements designed to stimulate circulation and tissue mobility." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Choose Your Session",
      heading: "Treatment Duration & Pricing",
      paragraphs: [
        "Every cellulite massage session is tailored to your body and treatment goals. Choose the session length that best suits the areas you'd like us to focus on. Longer sessions allow more time to work across multiple areas while maintaining steady and targeted techniques.",
      ],
      images: [
        { src: "/images/treatments/anti-cellulite-massage/cellulitemassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/anti-cellulite-massage/cellulitemassage-5.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("cellulite-massage", "1 Hour"),
              points: ["First-time guests", "One or two target areas", "Regular maintenance sessions"],
              bookButton: true,
            },
            {
              label: "1.5 Hours",
              price: priceOf("cellulite-massage", "1.5 Hours"),
              points: [
                "Multiple treatment areas",
                "More detailed treatment",
                "Guests wanting a longer session",
              ],
              bookButton: true,
            },
            {
              // PRICE-06: added on the live site on 2026-09-25.
              label: "2 Hours",
              price: priceOf("cellulite-massage", "2 Hours"),
              points: ["All main target areas", "Most thorough treatment", "Guests wanting the fullest session"],
              bookButton: true,
            },
          ],
        },
      ],
    },
    {
      type: "stats",
      items: [
        { title: "Targeted", text: "Treatment Areas" },
        { title: "Adjustable", text: "Pressure Levels" },
        { title: "Experienced", text: "Therapists" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Understanding Cellulite",
      heading: "Why Does Cellulite Form in the First Place?",
      paragraphs: [
        "Cellulite develops when fat deposits beneath the skin push against connective tissue, creating the uneven or dimpled appearance many people notice on the thighs, hips, or buttocks. But several common factors are associated with its appearance:",
      ],
      items: [
        "Commonly appears on thighs and buttocks",
        "Can affect people of different body types",
        "Often influenced by genetics and hormones",
        "May become more visible with fluid retention",
        "Frequently associated with connective tissue structure",
        "A very common and normal skin condition",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/anti-cellulite-massage/cellulitemassage-6.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Treatment Benefits",
      heading: "How Cellulite Massage Supports Your Wellness",
      paragraphs: [
        "Cellulite massage combines targeted massage techniques with focused pressure and rhythmic movements to address areas where cellulite commonly appears. Some of the reasons why many people choose cellulite massage include:",
      ],
      items: [
        "Supports healthy circulation",
        "Encourages lymphatic movement",
        "May help reduce fluid retention",
        "Can improve skin smoothness temporarily",
        "Helps soften tight or dense tissue areas",
        "Often included in body contouring routines",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/anti-cellulite-massage/cellulitemassage-7.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["Shape &", "Support"],
    },
    {
      type: "list",
      eyebrow: "Inside the Session",
      heading: "How the Treatment Works",
      paragraphs: [
        "Each session is designed to provide focused attention to the selected areas while allowing the treatment intensity to be adjusted according to your comfort. The process generally includes:",
      ],
      items: [
        "Consultation regarding treatment areas",
        "Focused work on selected body zones",
        "Firm and repetitive massage movements",
        "Adjustable pressure throughout the session",
        "Treatment tailored to your comfort level",
        "Available at the spa or through home service",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/anti-cellulite-massage/cellulitemassage-8.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["The Art", "of Focus"],
    },
  ],
  faq: {
    heading: "Smooth Skin Support",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/treatments/balinese-massage/balinesemassage-11.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "Which areas are commonly treated during cellulite massage?",
        answer: "The treatment most commonly focuses on the thighs, hips, buttocks, and abdomen, although other areas may also be included depending on individual goals.",
      },
      {
        question: "Does cellulite massage remove cellulite permanently?",
        answer: "No. Cellulite massage is not considered a permanent solution, but regular treatments may help improve circulation, reduce fluid buildup, and temporarily improve the appearance of skin texture.",
      },
      {
        question: "What is the difference between cellulite massage and lymphatic massage?",
        answer: "Cellulite massage uses firmer and more targeted techniques that focus on tissue mobility and skin texture, while lymphatic massage uses lighter movements designed to encourage fluid drainage and relaxation.",
      },
      {
        question: "Is cellulite massage painful?",
        answer: "The treatment uses firmer pressure than traditional relaxation massage, but it should remain comfortable throughout the session. Pressure can always be adjusted according to your preference.",
      },
      {
        question: "How many sessions are usually recommended?",
        answer: "Many guests choose regular sessions over several weeks as part of their body wellness routine, as results are generally gradual rather than immediate.",
      },
      {
        question: "Who is cellulite massage suitable for?",
        answer: "Cellulite massage may be suitable for adults who want to include targeted body massage in their wellness and skincare routine, particularly those concerned about the appearance of cellulite on areas such as the thighs, hips, buttocks, or abdomen. It can also be suitable for people who enjoy firm massage techniques and want a relaxing body treatment focused on specific areas.",
      },
      {
        question: "What is the difference between cellulite and stretch marks?",
        answer: "Cellulite and stretch marks are different skin concerns. Cellulite creates a dimpled or uneven appearance on the skin, commonly around the thighs, buttocks, hips, and abdomen. Stretch marks are lines or streaks that develop when the skin stretches or changes rapidly, often appearing during periods of growth, weight changes, or pregnancy. Cellulite massage is primarily focused on the appearance and feel of cellulite and is not a treatment for removing stretch marks.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Continue Your Body-Care Journey" },
  cta: {
    heading: "Support Smoother Skin Wherever You Prefer to Relax",
    paragraphs: [
      "Focused body care at our spa, or in the privacy of your villa or hotel. Home service is an extra IDR 75,000 per therapist within Seminyak and nearby areas.",
      "Reserve your session and let our therapists help you create a treatment plan that fits your comfort and body goals.",
    ],
    image: { src: "/images/treatments/anti-cellulite-massage/cellulitemassage-10.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default antiCelluliteMassage;
