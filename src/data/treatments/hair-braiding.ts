// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/hair-braiding/
// TODO PRICE-04: these prices are not on the Pricelist page (see migration-audit.md).

import type { Treatment } from "../types";

const hairBraiding: Treatment = {
  slug: "hair-braiding",
  name: "Hair Braiding",
  category: "beauty",
  cardImage: { src: "/images/beauty/hair-braiding/hairbraiding-3.webp", alt: "Hair Braiding", width: 630, height: 580 },
  seo: {
    title: "Hair Braiding Bali - Braids in Seminyak - Spa Bali Moon",
    description: "Hair braiding in Seminyak, Bali: braids for the beach, events or everyday wear. Quick to book via WhatsApp at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Creative Hairstyles",
    title: "Hair Braiding in Bali",
    image: { src: "/images/beauty/hair-braiding/hairbraiding-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "More Than a Hairstyle",
      heading: "Hair Braiding for Style, Comfort, and Everyday Wear",
      paragraphs: [
        "Hair braiding is more than a fashion trend. It is a practical hairstyle that helps keep hair neat, manageable, and protected throughout busy days in Bali. From beach clubs and sightseeing to special events and everyday activities, braided hairstyles reduce tangling in humid weather while offering a personalised look that suits different hair lengths, and occasions.",
      ],
      images: [
        { src: "/images/beauty/hair-braiding/hairbraiding-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/beauty/hair-braiding/hairbraiding-3.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Protective Styling", text: "Helps reduce tangles and keeps hair organised throughout the day." },
        {
          title: "Personalised Designs",
          text: "Choose from classic, modern, or customised braid styles to match your look.",
        },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Hair Length Options",
      heading: "Choose the Style That Fits Your Hair",
      paragraphs: [
        "Pricing is based on hair length, allowing enough time to create neat, balanced braids while adapting the technique to your preferred style and overall hair volume.",
      ],
      images: [
        { src: "/images/beauty/hair-braiding/hairbraiding-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/hair-braiding/hairbraiding-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/hair-braiding/hairbraiding-6.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "Short Hair",
              price: 279_000,
              points: ["Bob or shoulder-length hair", "Simple braid styles", "Quick styling sessions"],
              bookButton: true,
              note: "TODO PRICE-04: these prices are not on the Pricelist page (see migration-audit.md).",
            },
            {
              label: "Medium Hair",
              price: 379_000,
              points: [
                "Most Dutch braid styles",
                "Added braid definition",
                "Everyday or holiday hairstyles",
              ],
              bookButton: true,
              note: "TODO PRICE-04: these prices are not on the Pricelist page (see migration-audit.md).",
            },
            {
              label: "Long Hair",
              price: 469_000,
              points: ["Longer braid designs", "Fuller braided looks", "Hair extensions if preferred"],
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
        { title: "Popular", text: "Braid Styles" },
        { title: "Custom", text: "Designs" },
        { title: "Extension", text: "Options" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Very Popular",
      heading: "Why Many Visitors Choose Hair Braiding in Bali",
      paragraphs: [
        "Hair braiding is a practical and stylish choice for many tourists in Bali. Braids can help keep hair manageable in the island's warm, humid climate while making everyday styling easier during a holiday. They often choose braiding for benefits such as:",
      ],
      items: [
        "Keeping hair neat in Bali's tropical climate",
        "Reducing tangling caused by wind and humidity",
        "Making hair easier to manage during swimming and beach activities",
        "Creating a convenient style for holidays, events, and festivals",
        "Maintaining a low-maintenance hairstyle for several days",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/hair-braiding/hairbraiding-7.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Braid Collection",
      heading: "Explore Our Most Popular Hair Braiding Styles",
      paragraphs: [
        "From simple braids for everyday wear to more detailed styles for holidays and special occasions, there are plenty of options to choose from. Each style creates a different look and can be adapted to suit your hair, outfit, and plans. Our best hair braiding styles include:",
      ],
      items: [
        "Classic Double Dutch",
        "Single Dutch Braid",
        "Dutch Braid Crown",
        "Cornrows",
        "Half Up Dutch Braids",
        "Box Braids",
        "Dutch Fishtail Braid",
        "Braids with Extensions",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/hair-braiding/hairbraiding-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Find Your", "Style"],
    },
    {
      type: "list",
      eyebrow: "Your Custom Style",
      heading: "Every Braid Starts with the Right Plan",
      paragraphs: [
        "Before braiding begins, we discuss your preferred hairstyle, braid size, hair length, and whether you'd like to include extensions. Each section of hair is carefully prepared before braiding to create an even, comfortable finish. Once complete, we'll also share simple aftercare tips to help your hairstyle stay neat for longer. The process covers:",
      ],
      items: [
        "Hairstyle consultation",
        "Braid size selection",
        "Hair sectioning and preparation",
        "Comfortable braiding technique",
        "Extension options available",
        "Easy aftercare recommendations",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/hair-braiding/hairbraiding-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Planned for", "Your Look"],
    },
  ],
  faq: {
    heading: "Braid Styles",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/beauty/hair-braiding/hairbraiding-10.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "Is Hair Braiding suitable for all hair types?",
        answer: "Yes. Most hair types can be braided, and the technique is adjusted according to your hair's length, texture, and condition.",
      },
      {
        question: "How long does Hair Braiding usually take?",
        answer: "Depending on the chosen style, appointments generally take between 30 minutes and 2 hours.",
      },
      {
        question: "Will braiding damage my hair?",
        answer: "When done correctly, braiding is considered a protective hairstyle. We avoid excessive tension to keep your scalp comfortable.",
      },
      {
        question: "How long do braids usually last?",
        answer: "The lifespan depends on the braid style, daily activities, and aftercare. Many styles remain neat for several days or even longer.",
      },
      {
        question: "Can I bring a reference photo?",
        answer: "Absolutely. Reference photos help us better understand the style, braid pattern, and overall look you'd like to achieve.",
      },
      {
        question: "Are hair extensions available?",
        answer: "Yes. Selected braid styles can be created with extensions for additional length or volume.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Complete Your Bali Look" },
  cta: {
    heading: "A Hairstyle That Keeps Up with Your Bali Plans",
    paragraphs: [
      "Beach mornings, sunset dinners, island tours: the right braids let you enjoy them without fixing your hair. Personalised styling, comfortable to wear and easy to keep.",
      "Reserve your Hair Braiding appointment and create a style made for your Bali plans.",
    ],
    image: { src: "/images/beauty/hair-braiding/hairbraiding-11.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default hairBraiding;
