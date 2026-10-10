// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/lymphatic-drainage-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const lymphaticDrainageMassage: Treatment = {
  slug: "lymphatic-drainage-massage",
  name: "Lymphatic Massage",
  category: "massage",
  shortDescription: "A gentle full-body massage that supports drainage and healthy circulation.",
  cardImage: { src: "/images/treatments/cards/lymphaticmassage.webp", alt: "Lymphatic Massage", width: 630, height: 580 },
  seo: {
    title: "Lymphatic Drainage Massage Seminyak & Bali - Spa Bali Moon",
    description: "Lymphatic drainage massage in Seminyak, Bali: a gentle, slow-stroke massage by trained therapists. Book in-spa or at your villa or hotel.",
  },
  hero: {
    eyebrow: "Restore Your Flow",
    title: "Lymphatic Massage in Bali",
    image: { src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Hidden Network",
      heading: "What Does the Lymphatic System Actually Do?",
      paragraphs: [
        "The lymphatic system is a network of vessels and lymph nodes that helps move excess fluid, transport immune cells, and remove everyday waste from body tissues. Unlike the circulatory system, it relies on breathing, movement, and muscle activity to keep lymph flowing. When this flow slows, fluid may build up, causing heaviness, puffiness, or mild swelling. Lymphatic Massage uses slow, rhythmic techniques to encourage natural lymph flow and help the body feel lighter and more balanced.",
      ],
      images: [
        {
          src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-2.webp",
          alt: "Spa treatment",
          width: 578,
          height: 601,
        },
        {
          src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-3.webp",
          alt: "Spa treatment detail",
          width: 630,
          height: 580,
        },
      ],
      highlights: [
        { title: "Gentle Drainage", text: "Encourages healthy lymph movement using light, rhythmic strokes." },
        { title: "Body Balance", text: "Supports circulation, fluid movement, and everyday comfort." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Find Yours",
      heading: "Our Duration Options",
      paragraphs: [
        "Every session follows gentle lymphatic drainage principles, with longer durations allowing our therapists to work more thoroughly across different drainage pathways. Each treatment offers a calm, unhurried experience, whether you're easing fluid retention after travel or simply enjoying deeper relaxation.",
      ],
      images: [
        {
          src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-4.webp",
          alt: "image",
          width: 1050,
          height: 484,
        },
        {
          src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-5.webp",
          alt: "image",
          width: 1050,
          height: 484,
        },
        {
          src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-6.webp",
          alt: "image",
          width: 1050,
          height: 484,
        },
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("lymphatic-massage", "1 Hour"),
              points: ["First lymphatic massage", "Mild swelling", "Recovery after travel"],
              bookButton: true,
            },
            {
              label: "1.5 Hours",
              price: priceOf("lymphatic-massage", "1.5 Hours"),
              points: ["Full-body lymphatic drainage", "Fluid retention", "Deeper relaxation"],
              bookButton: true,
            },
            {
              label: "2 Hours",
              price: priceOf("lymphatic-massage", "2 Hours"),
              points: ["Comprehensive body treatment", "Multiple focus areas", "Extended recovery session"],
              bookButton: true,
            },
          ],
        },
      ],
    },
    {
      type: "stats",
      items: [
        { title: "Experienced", text: "Therapists" },
        { title: "Flexible", text: "Booking" },
        { title: "Slimming", text: "Cream" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Body Recovery",
      heading: "When Lymphatic Massage Helps",
      paragraphs: [
        "Lymphatic Massage may be a suitable choice when the body feels heavy, puffy, or less comfortable after changes in routine or periods of limited movement. It uses gentle massage techniques to support the body's natural lymphatic flow and can be incorporated into a wider wellness routine. We may consider this treatment for situations such as:",
      ],
      items: [
        "Reducing feelings of fluid retention",
        "Supporting natural lymphatic circulation",
        "Easing feelings of puffiness",
        "Supporting comfort after travel",
        "Promoting a lighter, more comfortable feeling",
        "Adding gentle care to a regular wellness routine",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-7.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Guided Pathways",
      heading: "Where Does Lymphatic Drainage Go?",
      paragraphs: [
        "Lymphatic Massage uses gentle, rhythmic movements across specific areas of the body to support natural lymphatic flow. The therapist works through key areas in a gradual sequence, with attention given to regions where lymphatic pathways are commonly found. Depending on the treatment, attention may be given to:",
      ],
      items: [
        "Neck and collarbone",
        "Underarms",
        "Abdomen",
        "Lower back",
        "Upper legs",
        "Calves",
        "Ankles",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-8.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["Follow the", "Flow"],
    },
    {
      type: "list",
      eyebrow: "The Experience",
      heading: "What to Expect from a Lymphatic Massage",
      paragraphs: [
        "A Lymphatic Massage follows a gentle and gradual approach designed to keep the body comfortable throughout the session. The therapist first discusses your needs before using light, rhythmic movements across selected areas of the body. The session generally follows these steps:",
      ],
      items: [
        "Brief body consultation",
        "Gentle oil application",
        "Slimming cream massage",
        "Slow rhythmic drainage techniques",
        "Treatment along lymph pathways",
        "Relaxing full-body finish",
      ],
      button: { label: "Book Now" },
      image: {
        src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-9.webp",
        alt: "Spa treatment",
        width: 570,
        height: 496,
      },
      imageCaption: ["Lightness in", "Motion"],
    },
  ],
  faq: {
    heading: "Gentle Drainage",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-10.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "Is Lymphatic Massage the same as Deep Tissue Massage?",
        answer: "No. Deep Tissue Massage works on deeper muscle layers using firm pressure, while Lymphatic Massage uses very light, rhythmic movements that follow the body's lymphatic pathways to encourage natural fluid movement.",
      },
      {
        question: "Can Lymphatic Massage help with swollen legs after travelling?",
        answer: "Yes. Long flights, road trips, or extended periods of sitting may contribute to temporary fluid retention. Gentle lymphatic drainage is commonly chosen to help the legs feel lighter and more comfortable afterward.",
      },
      {
        question: "Does Lymphatic Massage remove toxins from the body?",
        answer: "The lymphatic system naturally helps transport waste products and excess fluid. Lymphatic Massage supports this normal function by encouraging healthy lymph movement, but it should not be considered a medical detox treatment.",
      },
      {
        question: "Will the massage feel gentle?",
        answer: "Yes. The pressure is intentionally light because lymph vessels sit close to the surface of the skin. Strong pressure is not necessary to encourage healthy lymph flow.",
      },
      {
        question: "Can I combine Lymphatic Massage with other spa treatments?",
        answer: "Absolutely. Many guests combine it with facials, reflexology, or relaxing body treatments to create a more complete wellness experience.",
      },
      {
        question: "Is lymphatic drainage real?",
        answer: "Yes. Lymphatic drainage is a gentle massage technique designed to encourage the movement of lymph fluid through the body. It is commonly used to help manage swelling and support relaxation.",
      },
      {
        question: "Does lymphatic drainage work on the face?",
        answer: "Yes. Facial lymphatic drainage uses gentle movements around the face and neck to encourage lymph flow. It may help reduce temporary puffiness and leave the face feeling refreshed.",
      },
      {
        question: "Can lymphatic drainage make you sick?",
        answer: "Lymphatic drainage is generally gentle, but some people may feel tired, thirsty, or slightly light-headed afterward. Drinking water and resting after the treatment can help. If you feel unwell or have a medical condition, consult a healthcare professional before having lymphatic drainage.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Keep Your Wellness Journey Flowing" },
  cta: {
    heading: "Renew Balance from the Inside Out with Lymphatic Massage",
    paragraphs: [
      "Gentle, rhythmic techniques that support the body's natural drainage and leave it feeling lighter, ideal after travel or long periods of sitting. At our spa, or at your accommodation.",
      "Reserve a session designed around your wellness needs and experience gentle relaxation wherever you stay in Bali.",
    ],
    image: { src: "/images/treatments/lymphatic-drainage-massage/lymphaticmassage-11.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default lymphaticDrainageMassage;
