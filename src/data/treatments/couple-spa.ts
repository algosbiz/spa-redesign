// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/couple-spa/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const coupleSpa: Treatment = {
  slug: "couple-spa",
  name: "Couple Massage",
  cardName: "Couple Massage Balinese",
  category: "couple",
  shortDescription: "A side-by-side massage using steady pressure and flowing movements for shared relaxation.",
  cardImage: { src: "/images/treatments/cards/couplemassage.webp", alt: "Couple Massage Balinese", width: 630, height: 580 },
  seo: {
    title: "Couples Massage Bali - Couple Spa Seminyak - Spa Bali Moon",
    description: "Couples massage in Bali: warm candle massage with facial, natural scrub and Balinese massage. Book at our Seminyak spa or in your villa.",
  },
  hero: {
    eyebrow: "Together in Relaxation",
    title: "Couple Massage Seminyak",
    image: { src: "/images/treatments/couple-spa/couplemassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Shared Wellness",
      heading: "The Couples Massage Experience",
      paragraphs: [
        "A Couple Massage is a shared spa experience where two guests receive treatments side by side, each with their own therapist. While it's popular with couples, it's also suitable for friends and family members who want to relax together. Each guest can choose their preferred pressure, creating a personalised treatment within the same relaxing environment.",
      ],
      images: [
        { src: "/images/treatments/couple-spa/couplemassage-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/treatments/cards/couplemassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        {
          title: "Side-by-Side Treatment",
          text: "Enjoy your massage together in a private room or through our villa and hotel home service.",
        },
        {
          title: "Personalised for Each Guest",
          text: "Each person can request their preferred pressure and focus areas for a comfortable experience.",
        },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Side by Side",
      heading: "Couple Massage Session",
      paragraphs: [
        "Share a relaxing treatment side by side with a massage style that suits both of you. Each option is available for two guests, with different techniques and session lengths to match how you want to relax.",
      ],
      groups: [
        {
          title: "Couple Balinese Massage",
          cards: [
            {
              label: "1 Hour · 2 Guests",
              price: priceOf("couple-balinese-massage", "1 Hour · Balinese Massage · 2 Pax"),
              points: [
                "Full-body relaxation",
                "Gentle to medium pressure",
                "Ideal for a shorter shared session",
              ],
              bookButton: false,
            },
            {
              label: "1.5 Hours · 2 Guests",
              price: priceOf("couple-balinese-massage", "1.5 Hours · Balinese Massage · 2 Pax"),
              points: [
                "More time for full-body care",
                "Extra attention to tense areas",
                "A more unhurried massage together",
              ],
              bookButton: false,
            },
            {
              label: "2 Hours · 2 Guests",
              price: priceOf("couple-balinese-massage", "2 Hours · Balinese Massage · 2 Pax"),
              points: [
                "Extended full-body treatment",
                "More time for areas of tension",
                "Longer shared relaxation",
              ],
              bookButton: false,
            },
          ],
        },
        {
          title: "Couple Traditional Massage",
          cards: [
            {
              label: "1 Hour · 2 Guests",
              price: priceOf("couple-traditional-massage", "1 Hour · Traditional Massage · 2 Pax"),
              points: [
                "Full-body traditional massage",
                "Firm pressure and flowing techniques",
                "Ideal for everyday body tension",
              ],
              bookButton: false,
            },
            {
              label: "1.5 Hours · 2 Guests",
              price: priceOf("couple-traditional-massage", "1.5 Hours · Traditional Massage · 2 Pax"),
              points: [
                "More time across the full body",
                "Extra focus on tired muscles",
                "A deeper traditional massage session",
              ],
              bookButton: false,
            },
            {
              label: "2 Hours · 2 Guests",
              price: priceOf("couple-traditional-massage", "2 Hours · Traditional Massage · 2 Pax"),
              points: [
                "Extended traditional bodywork",
                "More attention to areas that feel tight",
                "Longer time to relax together",
              ],
              bookButton: false,
            },
          ],
        },
        {
          title: "Couple Deep Tissue Massage",
          cards: [
            {
              label: "1 Hour · 2 Guests",
              price: priceOf("couple-deep-tissue-massage", "1 Hour · Deep Tissue Massage · 2 Pax"),
              points: [
                "Firm targeted pressure",
                "Focus on deeper muscle tension",
                "Ideal for specific tight areas",
              ],
              bookButton: false,
            },
            {
              label: "1.5 Hours · 2 Guests",
              price: priceOf("couple-deep-tissue-massage", "1.5 Hours · Deep Tissue Massage · 2 Pax"),
              points: [
                "More time for deeper bodywork",
                "Extended focus on tense muscles",
                "Ideal for guests wanting stronger pressure",
              ],
              bookButton: false,
            },
          ],
        },
        {
          title: "Couple Warm Candle Massage",
          cards: [
            {
              label: "1 Hour · 2 Guests",
              price: priceOf("couple-warm-candle-massage", "1 Hour · Warm Candle Massage · 2 Pax"),
              points: [
                "Warm candle oil massage",
                "Smooth relaxing strokes",
                "Ideal for a comforting shared session",
              ],
              bookButton: false,
            },
            {
              label: "1.5 Hours · 2 Guests",
              price: priceOf("couple-warm-candle-massage", "1.5 Hours · Warm Candle Massage · 2 Pax"),
              points: [
                "Extended warm oil massage",
                "More time for full-body relaxation",
                "Extra attention to tired areas",
              ],
              bookButton: false,
            },
            {
              label: "2 Hours · 2 Guests",
              price: priceOf("couple-warm-candle-massage", "2 Hours · Warm Candle Massage · 2 Pax"),
              points: [
                "Longer warm candle treatment",
                "Complete full-body relaxation",
                "More time to slow down together",
              ],
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
        "Every couple enjoys relaxation differently, which is why we offer several massage styles for two. Whether you prefer gentle Balinese techniques, deeper muscle work, or a warm candle ritual, each experience is designed to help you slow down and enjoy quality time together.",
      ],
      images: [
        { src: "/images/treatments/couple-spa/couplemassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/couple-spa/couplemassage-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/couple-spa/couplemassage-6.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/couple-spa/couplemassage-7.webp", alt: "image", width: 1050, height: 484 },
      ],
      packageGroup: "couples",
    },
    {
      type: "stats",
      items: [
        { title: "Private", text: "Room Available" },
        { title: "Flexible", text: "Booking" },
        { title: "Customized", text: "Packages" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Shared Moments",
      heading: "Why Is Couple Massage So Popular in Bali?",
      paragraphs: [
        "Couple Massage is popular in Bali because it offers couples a relaxing way to spend quality time together, whether they are celebrating a special occasion or taking a break during their holiday. Some of the main reasons include:",
      ],
      items: [
        "Popular for honeymoon trips",
        "A favourite anniversary activity",
        "Perfect after sightseeing and beach days",
        "Encourages quality time together",
        "Suitable before romantic dinners or celebrations",
        "Creates a relaxing shared experience",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/couple-spa/couplemassage-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Suitable For",
      heading: "Couple Massage isn't Just for Couples",
      paragraphs: [
        "A Couple Massage can be enjoyed by two people who want to relax side by side, regardless of their relationship. This makes it a suitable choice for:",
      ],
      items: [
        "Romantic couples",
        "Honeymooners",
        "Friends travelling together",
        "Parents and adult children",
        "Brothers and sisters",
        "Anyone wanting to relax side by side",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/couple-spa/couplemassage-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["A Moment", "to Share"],
    },
    {
      type: "list",
      eyebrow: "Your Visit",
      heading: "What to Expect During Your Couple Massage",
      paragraphs: [
        "Your Couple Massage is arranged so that both guests can enjoy the treatment together while still having their individual preferences considered. From the initial consultation to the treatment itself, each part of the experience is designed to provide comfort, privacy, and personalised attention. The experience includes:",
      ],
      items: [
        "Brief consultation before treatment",
        "Individual pressure preferences",
        "Two therapists working simultaneously",
        "Private treatment environment",
        "Available in spa or at your accommodation",
        "Suitable for special occasions or everyday relaxation",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/couple-spa/couplemassage-10.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Two in", "Harmony"],
    },
  ],
  faq: {
    heading: "Relax Together",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/treatments/couple-spa/couplemassage-11.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "Is Couple Massage only for romantic couples?",
        answer: "No. Couple Massage simply means two people enjoying treatments together. Friends, siblings, parents, and family members regularly book this experience as well.",
      },
      {
        question: "Do we receive our massages in the same room?",
        answer: "Yes. Both guests receive their treatments side by side with two therapists in the same private treatment room or during the same home service appointment.",
      },
      {
        question: "Can each person request different pressure?",
        answer: "Absolutely. Each guest has their own consultation before the treatment begins, allowing pressure levels and focus areas to be adjusted individually.",
      },
      {
        question: "Can we choose different massage treatments?",
        answer: "Depending on the package selected, different massage options may be available for each guest. Our team will be happy to recommend the most suitable combination when booking.",
      },
      {
        question: "Is Couple Massage suitable for honeymooners?",
        answer: "Yes. It is one of our most popular experiences for honeymoon trips, anniversaries, birthdays, and other special occasions, offering a relaxing way to spend quality time together.",
      },
      {
        question: "What massage treatments are suitable for a couple massage?",
        answer: "Popular options include Balinese massage, aromatherapy massage, hot stone massage, and other relaxing body treatments. The best choice depends on your preferred pressure, relaxation goals, and the treatments available at the spa.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Discover More Ways to Relax Together" },
  cta: {
    heading: "Make Time for Each Other While You're in Bali",
    paragraphs: [
      "A simple way to share quality time and let the body rest, popular for honeymoons, anniversaries, or a day with friends. At our spa, or at your villa or hotel.",
      "Create a memorable wellness experience together and let our therapists take care of the rest.",
    ],
    image: { src: "/images/treatments/couple-spa/couplemassage-12.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default coupleSpa;
