// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/nail-spa/
// TODO PRICE-04: these prices are not on the Pricelist page (see migration-audit.md).

import type { Treatment } from "../types";

const nailSpa: Treatment = {
  slug: "nail-spa",
  name: "Nail Art",
  category: "beauty",
  cardImage: { src: "/images/beauty/nail-spa/nailart-3.webp", alt: "Nail Art", width: 630, height: 580 },
  seo: {
    title: "Gel Nails & Nail Art Seminyak - Spa Bali Moon",
    description: "Gel nails and nail art in Seminyak, Bali: gel polish, extensions and designs. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Creative Design",
    title: "Nail Art & Gel Nails in Seminyak",
    image: { src: "/images/beauty/nail-spa/nailart-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Personal Style",
      heading: "Why Do Many Guests Choose Gel Nail Art?",
      paragraphs: [
        "Gel Nail Art combines creative design with a durable gel finish that helps nails stay neat and polished for longer than regular nail polish. Many guests choose this treatment before holidays, weddings, special events, or simply to enjoy beautiful nails throughout their stay in Bali. At Spa Bali Moon, every design is applied carefully to protect the natural nail while creating a personalised look that matches your style.",
      ],
      images: [
        { src: "/images/beauty/nail-spa/nailart-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/beauty/nail-spa/nailart-3.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Long Lasting Finish", text: "Designed to stay glossy and beautiful through everyday activities." },
        { title: "Personalised Designs", text: "Colours, patterns, and finishes selected to suit your own style." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Service Options",
      heading: "Choose the Finish You Prefer",
      paragraphs: [
        "Our nail services include fresh colour, decorative nail art, and long lasting gel finishes, giving you different options to suit your personal style and any occasion.",
      ],
      images: [
        { src: "/images/beauty/nail-spa/nailart-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/nail-spa/nailart-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/nail-spa/nailart-6.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "Manicure & Colour",
              price: 159_000,
              points: [
                "Fresh polished everyday nails",
                "Simple colour application",
                "Guests wanting a natural elegant finish",
              ],
              bookButton: true,
              note: "TODO PRICE-04: these prices are not on the Pricelist page (see migration-audit.md).",
            },
            {
              label: "Pedicure & Colour",
              price: 169_000,
              points: [
                "Beautiful toenails for sandals",
                "Holiday-ready feet",
                "Smooth colour with professional finishing",
              ],
              bookButton: true,
              note: "TODO PRICE-04: these prices are not on the Pricelist page (see migration-audit.md).",
            },
            {
              label: "Nail Gel",
              price: 219_000,
              points: [
                "Longer-lasting glossy finish",
                "Busy travellers",
                "Guests wanting extra durability",
              ],
              bookButton: true,
              note: "TODO PRICE-04: these prices are not on the Pricelist page (see migration-audit.md).",
            },
          ],
        },
      ],
    },
    {
      type: "stats",
      items: [
        { title: "Creative", text: "Designs" },
        { title: "Quality", text: "Gel Products" },
        { title: "Natural", text: "Nail Care" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Beauty Benefits",
      heading: "What Makes Gel Nail Art So Popular?",
      paragraphs: [
        "Gel Nail Art offers a practical way to add colour and personality to your nails while maintaining a neat, polished look. It can suit different styles and occasions, from simple everyday designs to more creative looks for holidays or special events. People often choose gel nails for reasons such as:",
      ],
      items: [
        "Long-lasting shine",
        "Less need for frequent polish touch-ups",
        "A wide selection of colours and designs",
        "Suitable for holidays and special occasions",
        "A lightweight, comfortable finish",
        "Careful application to support natural nail health",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/nail-spa/nailart-7.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Design Possibilities",
      heading: "Find Nail Art Style That Matches You",
      paragraphs: [
        "Your nail design can be simple, elegant, playful, or more detailed depending on the look you have in mind. We can work from your inspiration and adapt the design to suit your natural nails, preferred colours, and occasion. Some popular styles are:",
      ],
      items: [
        "Minimalist nail designs",
        "French tips",
        "Chrome and glossy finishes",
        "Floral or artistic patterns",
        "Seasonal colour combinations",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/nail-spa/nailart-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Your Signature", "Set"],
    },
    {
      type: "list",
      eyebrow: "Application Process",
      heading: "How Is Gel Nail Art Applied?",
      paragraphs: [
        "Gel Nail Art is applied through a step-by-step process that prepares the nails before the colour and design are added. Each layer is carefully finished and cured to create a smooth, polished result while keeping the application neat and comfortable. The process typically involves:",
      ],
      items: [
        "Nail preparation and shaping",
        "Cuticle care",
        "Gel or colour application",
        "Hand-created nail design",
        "UV or LED curing",
        "Protective finishing top coat",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/nail-spa/nailart-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Built Layer", "by Layer"],
    },
  ],
  faq: {
    heading: "Gel Nail Art",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/beauty/nail-spa/nailart-10.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "Is Gel Nail Art better than regular nail polish?",
        answer: "Gel Nail Art generally lasts longer and keeps its shine better than traditional nail polish, making it a popular choice for holidays and special occasions.",
      },
      {
        question: "Can I bring my own nail design reference?",
        answer: "Yes. You're welcome to show inspiration photos so our nail artists can recreate a similar style that suits your nails.",
      },
      {
        question: "Will gel nails damage my natural nails?",
        answer: "When applied and removed correctly, gel products can be used while maintaining the health of your natural nails. Our team follows gentle application techniques throughout the treatment.",
      },
      {
        question: "How long does a Nail Art appointment take?",
        answer: "The duration depends on the design complexity, but most appointments take between 45 and 90 minutes.",
      },
      {
        question: "How long will Gel Nail Art last?",
        answer: "Many guests enjoy beautiful results for around two to three weeks, depending on nail growth and daily activities.",
      },
      {
        question: "What is nail art?",
        answer: "Nail art is the decoration of fingernails or toenails using colours, patterns, designs, or other decorative details. It can be added to natural nails or applied over gel or polish.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Explore More Ways to Perfect Your Bali Glow" },
  cta: {
    heading: "Experience Beautiful Nails That Last Beyond Your Bali Holiday",
    paragraphs: [
      "Personalised nail designs created with professional care and long-lasting gel products, for a beach holiday, a dinner, a wedding, or simply because. Your natural nails stay healthy.",
      "Leave with polished nails that feel as beautiful as they look.",
    ],
    image: { src: "/images/beauty/nail-spa/nailart-11.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default nailSpa;
