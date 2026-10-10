// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/body-scrub/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const bodyScrub: Treatment = {
  slug: "body-scrub",
  name: "Body Scrub",
  category: "beauty",
  shortDescription: "A gentle exfoliation treatment to refresh the skin and leave it smooth and clean.",
  cardImage: { src: "/images/treatments/cards/bodyscrub.webp", alt: "Body Scrub", width: 630, height: 580 },
  seo: {
    title: "Body Scrub Seminyak - Bali Exfoliating Scrub Treatment",
    description: "Body scrub in Seminyak, Bali: natural scrub treatments to exfoliate and soften skin, with massage packages. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Skin Renewal",
    title: "Body Scrub Seminyak",
    image: { src: "/images/treatments/body-scrub/bodyscrub-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Natural Exfoliation",
      heading: "Why Do So Many Guests Add a Body Scrub to Their Bali Stay?",
      paragraphs: [
        "Body scrub is an exfoliating treatment to remove dead skin cells, lift daily buildup, and help restore smoother skin texture. In Bali, sun exposure, saltwater, humidity, and outdoor activities can leave the skin feeling dry or dull over time. Our therapists use natural exfoliants inspired by traditional Balinese lulur rituals to gently refresh the skin while creating a relaxing treatment experience.",
      ],
      images: [
        { src: "/images/treatments/body-scrub/bodyscrub-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/treatments/cards/bodyscrub.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        {
          title: "Natural Ingredients",
          text: "Available in chocolate, coconut, strawberry, bengkoang, jasmine, green tea, and Spa Sari variants.",
        },
        {
          title: "Gentle Exfoliation",
          text: "Comfortable exfoliation using fine natural scrub ingredients and controlled pressure.",
        },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Pick Your Scent",
      heading: "Body Scrub Options",
      paragraphs: [
        "Our Body Scrub is available in a selection of natural-inspired variants, so you can enjoy the same full-body exfoliating treatment with the fragrance and blend you prefer. An additional body mask can be applied after the scrub and followed by a shower.",
      ],
      groups: [
        {
          cards: [
            { label: "Chocolate", price: priceOf("body-scrub", "Chocolate"), bookButton: false },
            { label: "Coconut", price: priceOf("body-scrub", "Coconut"), bookButton: false },
            { label: "Strawberry", price: priceOf("body-scrub", "Strawberry"), bookButton: false },
            { label: "Bengkoang", price: priceOf("body-scrub", "Bengkoang"), bookButton: false },
            { label: "Jasmine", price: priceOf("body-scrub", "Jasmine"), bookButton: false },
            { label: "Green Tea", price: priceOf("body-scrub", "Green Tea"), bookButton: false },
            { label: "Spa Sari", price: priceOf("body-scrub", "Spa Sari"), bookButton: false },
            { label: "Additional Body Mask", price: priceOf("body-scrub", "Additional Body Mask"), bookButton: false },
          ],
        },
      ],
    },
    {
      type: "packages",
      eyebrow: "Find Yours",
      heading: "Our Package Options",
      paragraphs: [
        "Body scrubs are often combined with massage, facials, and beauty treatments to create a complete wellness session. Our packages are designed for guests looking to refresh both body and mind while enjoying their time in Bali.",
      ],
      images: [
        { src: "/images/treatments/body-scrub/bodyscrub-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/body-scrub/bodyscrub-5.webp", alt: "image", width: 1376, height: 768 },
        { src: "/images/treatments/body-scrub/bodyscrub-6.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/body-scrub/bodyscrub-7.webp", alt: "image", width: 1050, height: 484 },
      ],
      packageGroup: "body-scrub",
    },
    {
      type: "stats",
      items: [
        { title: "Natural", text: "Ingredients" },
        { title: "Multiple", text: "Scrub Choices" },
        { title: "Customized", text: "Packages" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Treatment Timing",
      heading: "When Is the Best Time to Use a Body Scrub?",
      paragraphs: [
        "There is no single best time to use a body scrub. It depends on your skin condition, daily activities, and spa routine. A body scrub may be especially suitable:",
      ],
      items: [
        "Before a special occasion",
        "After outdoor activities",
        "When your skin feels rough or dull",
        "Before another spa treatment",
        "As part of your regular skincare routine",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/cards/bodyscrub.webp", alt: "Spa treatment", width: 630, height: 580 },
      imageCaption: ["Reveal Your", "Glow"],
    },
    {
      type: "list",
      eyebrow: "The Results",
      heading: "What Are the Main Body Scrub Benefits?",
      paragraphs: [
        "Many guests choose body scrubs after beach days, outdoor activities, or before special occasions. A regular body scrub can help refresh the skin and support a smoother feel by:",
      ],
      items: [
        "Helps remove dead skin cells and buildup",
        "Supports smoother skin texture",
        "May improve the appearance of dry areas",
        "Allows moisturizers and body oils to absorb more effectively",
        "Helps maintain softer and brighter-looking skin",
        "Commonly chosen before holidays and special events",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/body-scrub/bodyscrub-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Choosing Your Scrub",
      heading: "Which Natural Scrub Matches Your Skin Goals?",
      paragraphs: [
        "Each scrub ingredient creates a slightly different treatment experience while delivering the same gentle exfoliating effect. The choice often comes down to fragrance preferences and the type of skin support you are looking for.",
      ],
      items: [
        "Coconut for moisture and softness",
        "Chocolate for a rich nourishing experience",
        "Strawberry for refreshing and brightening",
        "Bengkoang for smoother-looking skin",
        "Green Tea for a calming treatment",
        "Jasmine and Spa Sari for a traditional aromatic experience",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/body-scrub/bodyscrub-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Find Your", "Favourite"],
    },
    {
      type: "list",
      eyebrow: "Inside the Treatment",
      heading: "What Happens During a Body Scrub Session?",
      paragraphs: [
        "The treatment begins with your choice of scrub ingredients before gentle circular massage movements are used to exfoliate the body evenly. Additional attention is often given to rougher areas such as elbows, knees, and feet before the scrub is removed to reveal smoother and cleaner-feeling skin underneath. The same treatment experience is also available through our villa and hotel home service appointments.",
      ],
      items: [
        "Choose your preferred scrub variant",
        "Full body exfoliation treatment",
        "Gentle circular massage movements",
        "Additional attention to rough areas",
        "Subtle natural fragrance after treatment",
        "Available for spa and home service bookings",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/body-scrub/bodyscrub-10.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["The Ritual", "Unfolds"],
    },
  ],
  faq: {
    heading: "Renew Your Skin",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/treatments/body-scrub/bodyscrub-11.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "What happens during a body scrub massage?",
        answer: "During a body scrub massage, a therapist applies an exfoliating scrub to the body using gentle circular motions to remove dead skin cells and stimulate circulation. After the scrub is rinsed off, the treatment may be followed by a moisturizing lotion, body oil application, or a relaxing massage to leave the skin feeling smooth, refreshed, and hydrated.",
      },
      {
        question: "What are the benefits of a full body scrub?",
        answer: "A full body scrub helps remove dead skin cells from the surface of the skin, leaving it smoother, softer, and more refreshed. Regular exfoliation can improve skin texture, promote a brighter appearance, and help moisturizers absorb more effectively after treatment. Additional benefits may include improved circulation, reduced rough or dry skin, and a cleaner, healthier-looking complexion.",
      },
      {
        question: "How often should I get a body scrub treatment?",
        answer: "Most guests choose body scrubs every one to two weeks to help maintain smooth skin and support natural skin renewal cycles.",
      },
      {
        question: "Will the scrub feel rough on my skin?",
        answer: "No. We use fine natural exfoliants and controlled pressure to keep the treatment comfortable while still providing effective exfoliation.",
      },
      {
        question: "Is body scrub suitable for dry skin?",
        answer: "Yes. Removing dead surface buildup often allows moisturizers and body oils to absorb more effectively, helping the skin feel softer and more hydrated afterward.",
      },
      {
        question: "Can I get a body scrub after spending time in the sun?",
        answer: "Yes, provided the skin is not sunburned or overly sensitive. Many guests book body scrubs after beach days or outdoor activities to refresh the skin and remove buildup.",
      },
      {
        question: "Can body scrubs help with body acne or clogged pores?",
        answer: "Regular exfoliation may help reduce the accumulation of dead skin cells and impurities that can contribute to clogged pores. While it is not a medical treatment for acne, many guests find their skin feels cleaner and smoother after regular treatments.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Discover More Ways to Renew Your Glow" },
  cta: {
    heading: "Give Your Skin a Fresh Start After Days in the Bali Sun",
    paragraphs: [
      "Beach days and Bali sun leave skin dry and rough. Our Body Scrub lifts away dead skin and leaves it smoother and softer. At our spa, or at your villa or hotel.",
      "Reserve your appointment and enjoy refreshed, smoother-feeling skin.",
    ],
    image: { src: "/images/treatments/body-scrub/bodyscrub-12.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default bodyScrub;
