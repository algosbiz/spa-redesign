// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/facial/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const facial: Treatment = {
  slug: "facial",
  name: "Facial",
  category: "beauty",
  cardImage: { src: "/images/beauty/cards/balimoonteatreefacial.webp", alt: "Facial", width: 630, height: 580 },
  seo: {
    title: "Facial Seminyak - Organic Facials at Spa Bali Moon",
    description: "Facial in Seminyak, Bali: Bali Moon facials with organic scrubs, warm steam and natural masks. Book in-spa or at your villa.",
  },
  hero: {
    eyebrow: "Skin Rejuvenation",
    title: "Bali Moon Facial Seminyak",
    image: { src: "/images/beauty/facial/balimoonfacial-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "A Personalized Experience",
      heading: "What Makes Bali Moon Facial Different?",
      paragraphs: [
        "Bali Moon Facial is our signature facial treatment designed to refresh, hydrate, and support healthy-looking skin while providing a relaxing spa experience. The treatment combines gentle cleansing, steaming, exfoliation, lymphatic facial massage using Argan Oil, and a targeted mask selected according to your skin's needs.",
      ],
      images: [
        { src: "/images/beauty/facial/balimoonfacial-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/beauty/facial/balimoonfacial-3.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Tea Tree Mask", text: "Helps balance excess oil, calm blemishes, and support clearer-looking skin." },
        { title: "Gold Mask", text: "Focuses on hydration, elasticity, and restoring a healthy-looking glow." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Your Skin Moment",
      heading: "Bali Moon Facial Options",
      paragraphs: [
        "We offers two facial treatment options, giving you a simple choice depending on the type of facial you prefer. Both treatments follow our complete facial care routine and are available as individual sessions.",
      ],
      groups: [
        {
          cards: [
            {
              label: "Bali Moon Tea Tree Facial",
              price: priceOf("bali-moon-tea-tree-facial", "Price"),
              points: [
                "Helps refresh and clarify the skin",
                "Suitable for oily or blemish-prone skin",
                "Finished with a calming Tea Tree mask",
              ],
              bookButton: false,
            },
            {
              label: "Bali Moon Gold Facial",
              price: priceOf("bali-moon-gold-facial", "Price"),
              points: [
                "Helps nourish and soften the skin",
                "Suitable for dull or tired-looking skin",
                "Finished with a Gold mask for a more radiant look",
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
        "Bali Moon Facial is often combined with massage, hair treatments, and nail care to create a complete self-care experience. Our treatment packages are designed for guests looking to relax while giving their skin additional attention during their time in Bali.",
      ],
      images: [
        { src: "/images/beauty/facial/balimoonfacial-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/facial/balimoonfacial-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/facial/balimoonfacial-6.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/facial/balimoonfacial-7.webp", alt: "image", width: 1050, height: 484 },
      ],
      packageGroup: "bali-moon-facial",
    },
    {
      type: "stats",
      items: [
        { title: "For All", text: "Skin Types" },
        { title: "Personalized", text: "Mask Selection" },
        { title: "Customized", text: "Packages" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Skin Goals",
      heading: "What Does a Facial Help With?",
      paragraphs: [
        "While every skin type behaves differently, regular facial treatments are commonly used to help manage surface impurities, maintain hydration, and support overall skin condition. Guests choose facial treatments for a variety of skincare goals, such as:",
      ],
      items: [
        "Supports hydration and moisture balance",
        "Helps remove excess oil and impurities",
        "Encourages smoother skin texture",
        "May improve the appearance of dull skin",
        "Supports a fresher and brighter complexion",
        "Suitable for ongoing skin maintenance",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/facial/balimoonfacial-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Your Skin Type",
      heading: "Which Mask is Right for Your Skin?",
      paragraphs: [
        "The right mask depends on what your skin needs at the time of your treatment. Tea Tree and Gold masks offer different benefits, making them suitable for different skin types and concerns. We can help you choose the most appropriate option based on your skin's condition:",
      ],
      items: [
        "Tea Tree for oily and congested skin",
        "Tea Tree for blemish-prone skin",
        "Gold for dry or dehydrated skin",
        "Gold for softening and comforting the skin",
        "Tea Tree or Gold for combination skin, depending on your needs",
        "Gold may be suitable for skin affected by sun exposure",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/facial/balimoonfacial-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Made for", "Your Skin"],
    },
    {
      type: "list",
      eyebrow: "Inside the Treatment",
      heading: "What to Expect During Your Facial",
      paragraphs: [
        "Your facial follows a series of carefully selected steps designed to cleanse, exfoliate, nourish, and refresh your skin:",
      ],
      items: [
        "Milk cleanser to remove surface buildup",
        "Warm steam to soften and prepare the pores",
        "Red clay scrub for gentle exfoliation",
        "Argan Oil lymphatic facial massage",
        "Tea Tree or Gold Mask application",
        "Rose water toning to finish the treatment",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/facial/balimoonfacial-10.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Layer by", "Layer"],
    },
  ],
  faq: {
    heading: "Refresh Your Skin",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/beauty/facial/balimoonfacial-11.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "What Is a Bali Moon Facial?",
        answer: "A Bali Moon Facial is a relaxing facial treatment designed to cleanse, refresh, and nourish the skin while providing a soothing spa experience in Seminyak, Bali.",
      },
      {
        question: "Can a facial help after spending time in the Bali sun?",
        answer: "Yes. After days of sightseeing, swimming, or sun exposure, a facial can help cleanse the skin, restore moisture, and leave your complexion feeling refreshed. Many visitors choose a facial as part of their post-holiday self-care routine.",
      },
      {
        question: "What Are the Benefits of a Bali Moon Facial?",
        answer: "A Bali Moon Facial can help cleanse the skin, remove surface impurities, improve hydration, and leave the skin feeling refreshed and rejuvenated.",
      },
      {
        question: "Where Can I Get a Bali Moon Facial in Seminyak?",
        answer: "You can enjoy a Bali Moon Facial at Spa Bali Moon in Seminyak, Bali, as a relaxing spa experience designed to combine professional facial care with the calming atmosphere of a Balinese spa.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Complete Your Glow Beyond a Facial" },
  cta: {
    heading: "Professional Facial Care at Your Spa, Villa, or Hotel",
    paragraphs: [
      "Professional facial care at our Seminyak spa, or at your villa or hotel for an extra IDR 75,000 per therapist. Personalised skincare, without rearranging your day.",
      "Reserve your appointment and give your skin the attention it deserves.",
    ],
    image: { src: "/images/beauty/facial/balimoonfacial-12.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default facial;
