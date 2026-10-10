// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/manicure-pedicure/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const manicurePedicure: Treatment = {
  slug: "manicure-pedicure",
  name: "Manicure Pedicure",
  category: "beauty",
  shortDescription: "A complete hand and foot treatment finished neatly with polish.",
  cardImage: { src: "/images/beauty/cards/manicurepedicure.webp", alt: "Manicure Pedicure", width: 630, height: 580 },
  seo: {
    title: "Manicure & Pedicure Seminyak - Spa Nail Care",
    description: "Manicure and pedicure in Seminyak, Bali: shaping, polish and nourishing care for hands and feet. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Polish and Pamper",
    title: "Manicure & Pedicure Seminyak",
    image: { src: "/images/beauty/manicure-pedicure/manicurepedicure-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Essentials Care",
      heading: "More Than Beautiful Nails",
      paragraphs: [
        "A professional Manicure & Pedicure focuses on both appearance and nail health. Beyond shaping and polishing, the treatment includes nail cleaning, cuticle care, skin conditioning, and hydration to help keep hands and feet looking neat while maintaining everyday comfort. Suitable for regular maintenance or as part of a relaxing spa visit, it offers practical care with lasting results.",
      ],
      images: [
        { src: "/images/beauty/manicure-pedicure/manicurepedicure-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/beauty/cards/manicurepedicure.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Healthy Nails", text: "Professional care helps maintain clean, tidy, and well-shaped nails." },
        { title: "Soft Skin", text: "Hydration and conditioning leave hands and feet feeling smoother." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Perfectly Polished",
      heading: "Manicure & Pedicure Treatment Options",
      paragraphs: [
        "We offers manicure, pedicure, gel colour, gel nail, and removal services for hands and feet. Each option can be booked individually, making it easy to match your appointment with the nail care you need.",
      ],
      groups: [
        {
          cards: [
            {
              label: "Manicure & Pedicure",
              price: priceOf("manicure-pedicure", "Manicure & Pedicure"),
              points: [
                "Complete hand and foot care",
                "Cuticle and nail grooming",
                "Ideal for a full refresh",
              ],
              bookButton: false,
            },
            {
              label: "Manicure",
              price: priceOf("manicure-pedicure", "Manicure"),
              points: ["Nail and cuticle care", "Hand grooming", "A simple tidy-up"],
              bookButton: false,
            },
            {
              label: "Pedicure",
              price: priceOf("manicure-pedicure", "Pedicure"),
              points: ["Nail and cuticle care", "Foot grooming", "Ideal for regular maintenance"],
              bookButton: false,
            },
            {
              label: "Nail Color Feet & Hands",
              price: priceOf("manicure-pedicure", "Nail Color Feet & Hands"),
              points: ["Nail colour application", "For hands and feet", "A polished colour finish"],
              bookButton: false,
            },
            {
              label: "Nail Color Feet or Hands",
              price: priceOf("manicure-pedicure", "Nail Color Feet or Hands"),
              points: ["Nail colour application", "For hands or feet", "A quick colour refresh"],
              bookButton: false,
            },
            {
              label: "Nail Remover Feet & Hands",
              price: priceOf("manicure-pedicure", "Nail Remover Feet & Hands"),
              points: [
                "Gel or nail product removal",
                "For hands and feet",
                "Prepares nails for the next service",
              ],
              bookButton: false,
            },
            {
              label: "Nail Gel Feet & Hands",
              price: priceOf("manicure-pedicure", "Nail Gel Feet & Hands"),
              points: ["Gel nail treatment", "For hands and feet", "A longer-lasting finish"],
              bookButton: false,
            },
            {
              label: "Nail Gel Feet or Hands",
              price: priceOf("manicure-pedicure", "Nail Gel Feet or Hands"),
              points: ["Gel nail treatment", "For hands or feet", "A longer-lasting finish"],
              bookButton: false,
            },
          ],
        },
      ],
    },
    {
      type: "packages",
      eyebrow: "Find Yours",
      heading: "Our Package Options",
      paragraphs: [
        "Complete your nail care with spa treatments that help you feel refreshed from head to toe. Our packages combine professional manicure and pedicure services with massage, facial, or hair care, creating a balanced wellness experience during your stay in Bali.",
      ],
      images: [
        { src: "/images/beauty/manicure-pedicure/manicurepedicure-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/manicure-pedicure/manicurepedicure-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/manicure-pedicure/manicurepedicure-6.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/manicure-pedicure/manicurepedicure-7.webp", alt: "image", width: 1050, height: 484 },
      ],
      packageGroup: "mani-pedi",
    },
    {
      type: "stats",
      items: [
        { title: "Nail", text: "Care" },
        { title: "Cuticle", text: "Treatment" },
        { title: "Gel Colour", text: "Available" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "The Reason",
      heading: "Why Is Regular Nail Care Important?",
      paragraphs: [
        "Regular nail care is about more than keeping your hands and feet looking neat. Manicure & Pedicure treatments give attention to the nails, cuticles, and surrounding skin, helping maintain a clean and well-groomed appearance as part of your regular self-care routine. Regular care can help with:",
      ],
      items: [
        "Maintaining healthy-looking nails",
        "Keeping cuticles soft and cared for",
        "Smoothing rough or dry skin",
        "Keeping nails neatly shaped",
        "Enhancing the appearance of hands and feet",
        "Making nail care part of your regular self-care routine",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/manicure-pedicure/manicurepedicure-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "What's Included",
      heading: "Professional Care from Nails to Skin",
      paragraphs: [
        "Our Manicure & Pedicure session gives attention to both the nails and the surrounding skin, with each part of the treatment carried out to leave your hands and feet feeling clean and well cared for. Depending on the service selected, your treatment may cover:",
      ],
      items: [
        "Nail trimming and shaping",
        "Gentle cuticle care",
        "Buffing and nail preparation",
        "Moisturising treatment",
        "Heel and dry skin care",
        "Optional nail colour or gel finish",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/manicure-pedicure/manicurepedicure-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Beauty in", "the Details"],
    },
    {
      type: "list",
      eyebrow: "The Process",
      heading: "What Can You Expect During Your Appointment?",
      paragraphs: [
        "Our Manicure & Pedicure appointment follows a simple sequence, starting with an assessment of your nails and ending with the finish you have selected. The treatment is carried out step by step, with attention to keeping your nails and skin clean, comfortable, and well cared for. The appointment typically covers:",
      ],
      items: [
        "Consultation and nail assessment",
        "Nail cleaning and shaping",
        "Cuticle treatment",
        "Skin hydration",
        "Optional polish or gel application",
        "Finishing care for lasting comfort",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/manicure-pedicure/manicurepedicure-10.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["The Finishing", "Touch"],
    },
  ],
  faq: {
    heading: "Nail Care",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/beauty/manicure-pedicure/manicurepedicure-11.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "What is included in a Manicure & Pedicure?",
        answer: "The treatment includes nail trimming, shaping, cuticle care, moisturising, and optional nail colour or gel depending on the service you choose.",
      },
      {
        question: "What is the difference between a manicure and a pedicure?",
        answer: "A manicure focuses on the hands and fingernails, while a pedicure treats the feet, toenails, and areas such as the heels and cuticles.",
      },
      {
        question: "How often should I have a Manicure & Pedicure?",
        answer: "Many guests book treatments every two to three weeks, although the ideal schedule depends on nail growth and personal preference.",
      },
      {
        question: "Can I choose gel nails instead of regular polish?",
        answer: "Yes. Gel nail application is available as a separate treatment for guests who prefer a longer-lasting finish.",
      },
      {
        question: "Can I book Manicure & Pedicure at my villa or hotel?",
        answer: "Yes. Our therapists provide professional home service throughout Seminyak and nearby areas with all required equipment.",
      },
      {
        question: "What is a manicure and pedicure?",
        answer: "A manicure is a treatment for the hands and fingernails, while a pedicure focuses on the feet and toenails. Both typically include nail cleaning, shaping, cuticle care, and moisturising, with polish or gel available depending on the treatment.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Complete Your Care Beyond Nails" },
  cta: {
    heading: "Keep Your Hands and Feet Looking Their Best",
    paragraphs: [
      "Well-groomed nails are about comfort as much as appearance. Professional manicure and pedicure care in a calm setting, at our spa or at your villa or hotel.",
      "Reserve your Manicure & Pedicure treatment and enjoy polished, comfortable care.",
    ],
    image: { src: "/images/beauty/manicure-pedicure/manicurepedicure-12.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default manicurePedicure;
