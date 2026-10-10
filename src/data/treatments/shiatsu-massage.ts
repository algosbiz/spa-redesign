// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/shiatsu-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const shiatsuMassage: Treatment = {
  slug: "shiatsu-massage",
  name: "Shiatsu Massage",
  category: "massage",
  shortDescription: "An oil-free full-body massage using Japanese pressure-point techniques to ease tension.",
  cardImage: { src: "/images/treatments/cards/shiatsumassage.webp", alt: "Shiatsu Massage", width: 630, height: 580 },
  seo: {
    title: "Shiatsu Massage Bali - Japanese Massage in Seminyak",
    description: "Shiatsu massage in Seminyak, Bali: a Japanese massage using gentle stretches and focused pressure. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Japanese Wellness",
    title: "Traditional Shiatsu Massage",
    image: { src: "/images/treatments/shiatsu-massage/shiatsumassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Understanding Shiatsu",
      heading: "What Makes Shiatsu Different from Other Massage Techniques?",
      paragraphs: [
        "Shiatsu is a traditional Japanese bodywork technique that uses finger, thumb, and palm pressure on specific points across the body rather than long oil massage strokes. Often combined with gentle stretching, Shiatsu focuses on relieving muscle tension, encouraging natural body movement, and promoting overall physical balance.",
      ],
      images: [
        { src: "/images/treatments/shiatsu-massage/shiatsumassage-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/treatments/cards/shiatsumassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        {
          title: "Pressure Point Therapy",
          text: "Applies focused pressure to specific areas using fingers, thumbs, and palms.",
        },
        { title: "Gentle Body Stretching", text: "Supports flexibility while helping muscles release built-up tension." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Choose Yours",
      heading: "Our Duration Options",
      paragraphs: [
        "Our Shiatsu Massage is available in different durations, allowing our therapists to tailor each session to your body's condition and areas of tension.",
      ],
      images: [
        { src: "/images/treatments/shiatsu-massage/shiatsumassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/shiatsu-massage/shiatsumassage-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/shiatsu-massage/shiatsumassage-6.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "30 Minutes",
              price: priceOf("shiatsu-massage", "30 Minutes"),
              points: [
                "Neck and shoulder tension",
                "Quick wellness break",
                "First-time Shiatsu experience",
              ],
              bookButton: true,
            },
            {
              label: "1 Hour",
              price: priceOf("shiatsu-massage", "1 Hour"),
              points: ["Full body treatment", "Muscle stiffness", "General relaxation and flexibility"],
              bookButton: true,
            },
            {
              label: "1.5 Hours",
              price: priceOf("shiatsu-massage", "1.5 Hours"),
              points: [
                "Multiple tension areas",
                "Guests preferring slower treatment",
                "More detailed pressure point work",
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
        { title: "Traditional", text: "Japanese Technique" },
        { title: "Pressure", text: "Point Therapy" },
        { title: "Gentle", text: "Stretching" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "The Reason",
      heading: "Why Do People Choose Shiatsu Massage?",
      paragraphs: [
        "Shiatsu offers a different approach to massage by using focused pressure rather than continuous oil-based strokes. Its structured technique makes it a popular choice for guests who want focused bodywork while also enjoying a traditional Japanese wellness experience. People may choose Shiatsu for reasons such as:",
      ],
      items: [
        "Easing feelings of muscle tension",
        "Supporting flexibility and mobility",
        "Encouraging more comfortable body movement",
        "Promoting physical relaxation",
        "Suitable after work, travel, or exercise",
        "Enjoying a traditional Japanese massage approach",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/shiatsu-massage/shiatsumassage-7.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Treatment Focus",
      heading: "Which Areas Does Shiatsu Commonly Target?",
      paragraphs: [
        "Shiatsu works across different parts of the body using focused pressure and rhythmic techniques. We can adjust the focus based on where you tend to experience tension or physical fatigue, giving particular attention to areas such as:",
      ],
      items: [
        "Neck and shoulders",
        "Upper and lower back",
        "Arms and hands",
        "Hips and legs",
        "Feet and lower limbs",
        "Pressure points across the body",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/shiatsu-massage/shiatsumassage-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Guided by", "Pressure"],
    },
    {
      type: "list",
      eyebrow: "The Method",
      heading: "How Does Our Shiatsu Massage Work?",
      paragraphs: [
        "A Shiatsu Massage uses focused pressure and gentle movement rather than long, flowing massage strokes. The therapist works through selected areas at a steady pace, adapting the intensity to keep the treatment comfortable throughout. The session may involve techniques such as:",
      ],
      items: [
        "Finger pressure techniques",
        "Thumb pressure on selected points",
        "Palm compression",
        "Gentle assisted stretching",
        "Controlled treatment pace",
        "Pressure adjusted to your comfort",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/shiatsu-massage/shiatsumassage-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["The Shiatsu", "Rhythm"],
    },
  ],
  faq: {
    heading: "Shiatsu Massage",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/treatments/shiatsu-massage/shiatsumassage-10.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "Is Shiatsu Massage performed with oil?",
        answer: "Traditional Shiatsu is generally performed without massage oil. The treatment focuses on pressure point techniques and body movement rather than long gliding strokes.",
      },
      {
        question: "Is Shiatsu suitable for beginners?",
        answer: "Yes. Pressure is always adjusted according to your comfort, making Shiatsu suitable for both first-time guests and experienced massage enthusiasts.",
      },
      {
        question: "What is the difference between Shiatsu and Deep Tissue Massage?",
        answer: "Shiatsu focuses on pressure points and gentle stretching using fingers and palms, while Deep Tissue Massage works deeper into muscles using slow pressure and muscle-specific techniques.",
      },
      {
        question: "Can Shiatsu help reduce stress?",
        answer: "Many guests choose Shiatsu because the slow rhythm and controlled pressure encourage both physical relaxation and a calmer state of mind.",
      },
      {
        question: "Can Shiatsu be combined with other spa treatments?",
        answer: "Yes. Shiatsu is often combined with body treatments or other wellness services as part of a longer spa experience.",
      },
      {
        question: "Is shiatsu massage painful?",
        answer: "Shiatsu massage can feel firm or intense when pressure is applied to tense areas, but it should remain comfortable. Our therapist can adjust the pressure based on your preference.",
      },
      {
        question: "What is shiatsu massage good for?",
        answer: "Shiatsu massage may help relieve muscle tension, reduce stress, and promote relaxation. It can also help improve flexibility and overall body comfort.",
      },
      {
        question: "When should you not do shiatsu massage?",
        answer: "Shiatsu massage may not be suitable if you have certain medical conditions, injuries, or are recovering from surgery. If you are unsure whether it is right for you, consult a healthcare professional before your session.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Discover More Than Shiatsu Massage" },
  cta: {
    heading: "Experience the Traditional Japanese Approach to Body Wellness",
    paragraphs: [
      "Shiatsu works differently from oil massage, combining pressure-point therapy with mindful movement. Whether recovering after travel or easing everyday tension, each session is tailored to you.",
      "Restore balance through one of Japan's most recognised therapeutic massage techniques.",
    ],
    image: { src: "/images/treatments/shiatsu-massage/shiatsumassage-11.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default shiatsuMassage;
