// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/creambath/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const creambath: Treatment = {
  slug: "creambath",
  name: "Cream Bath",
  cardName: "Hair Cream Bath",
  category: "beauty",
  shortDescription: "A nourishing hair treatment that cleanses, conditions, and relaxes the scalp.",
  cardImage: { src: "/images/beauty/cards/creambath.webp", alt: "Hair Cream Bath", width: 630, height: 580 },
  seo: {
    title: "Cream Bath Seminyak - Hair Spa & Creambath Bali",
    description: "Cream bath hair spa in Seminyak, Bali: a nourishing scalp and hair treatment with hair mask options. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Hair & Scalp Wellness",
    title: "Hair Creambath Seminyak",
    image: { src: "/images/beauty/creambath/creambath-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Traditional Hair Care",
      heading: "The Ritual Behind a Cream Bath Treatment",
      paragraphs: [
        "A creambath is a popular Indonesian hair and scalp treatment that combines nourishing hair cream with a gentle scalp massage. Unlike a regular hair mask, this treatment focuses on both the hair strands and scalp, helping improve softness, moisture, and overall hair condition. Commonly enjoyed after sun exposure, swimming, or frequent styling, a creambath offers a relaxing way to refresh and care for your hair.",
      ],
      images: [
        { src: "/images/beauty/creambath/creambath-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/beauty/cards/creambath.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        {
          title: "Hair Conditioning",
          text: "Nourishing ingredients help improve hair softness, hydration, and manageability.",
        },
        { title: "Scalp Relaxation", text: "Gentle massage movements support scalp comfort while enhancing relaxation." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Scalp to Strand",
      heading: "Creambath & Hair Mask Options",
      paragraphs: [
        "We offers several Creambath and Hair Mask options using different formulas and product choices. Each treatment includes cleansing, conditioning, and a relaxing head massage, with prices varying by product.",
      ],
      groups: [
        {
          cards: [
            {
              label: "Ginseng",
              price: priceOf("cream-bath", "Ginseng"),
              points: ["Revitalising hair care", "Scalp and strand treatment", "Relaxing head massage"],
              bookButton: false,
            },
            {
              label: "Avocado",
              price: priceOf("cream-bath", "Avocado"),
              points: [
                "Nourishing hair treatment",
                "Conditioning from roots to ends",
                "Relaxing scalp care",
              ],
              bookButton: false,
            },
            {
              label: "Aloe Vera",
              price: priceOf("cream-bath", "Aloe Vera"),
              points: ["Gentle hair and scalp care", "Conditioning treatment", "Relaxing head massage"],
              bookButton: false,
            },
            {
              label: "L'Oreal",
              price: priceOf("cream-bath", "L'Oreal"),
              points: [
                "Professional hair care option",
                "Conditioning and smoothing treatment",
                "Relaxing scalp massage",
              ],
              bookButton: false,
            },
            {
              label: "NR",
              price: priceOf("cream-bath", "NR"),
              points: ["Complete Creambath treatment", "Hair and scalp care", "Relaxing head massage"],
              bookButton: false,
            },
            {
              label: "Hair Mask",
              price: priceOf("cream-bath", "Hair Mask"),
              points: [
                "Conditioning hair treatment",
                "Applied through the hair lengths",
                "Finished with relaxing scalp care",
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
        "Our Cream Bath packages combine nourishing hair care with relaxing spa treatments for a more complete wellness experience. From facial care and massage to body treatments, each combination is designed to help you refresh your hair, relax your body, and enjoy more during your spa visit in Bali.",
      ],
      images: [
        { src: "/images/beauty/creambath/creambath-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/creambath/creambath-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/creambath/creambath-6.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/creambath/creambath-7.webp", alt: "image", width: 1050, height: 484 },
      ],
      packageGroup: "cream-bath",
    },
    {
      type: "stats",
      items: [
        { title: "Multiple", text: "Cream Choices" },
        { title: "Flexible", text: "Booking" },
        { title: "Customized", text: "Packages" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Ingredient Guide",
      heading: "Which Creambath Formula is Right for You?",
      paragraphs: [
        "Each creambath formula uses different ingredients to address common hair and scalp needs, from moisture and softness to scalp comfort and manageability. Depending on your hair condition and what you want from the treatment, you may prefer:",
      ],
      items: [
        "Ginseng to support healthier-looking hair",
        "Avocado for moisture and softness",
        "Aloe Vera to soothe the scalp",
        "L'Oreal for smoother, more manageable hair",
        "Suitable for dry and damaged hair",
        "Ideal after swimming or sun exposure",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/creambath/creambath-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Hair Benefits",
      heading: "How Does a Cream Bath Care for Your Hair?",
      paragraphs: [
        "Depending on your hair condition, the treatment can help improve how your hair feels and looks, particularly when it has been affected by dryness, styling, sun exposure, or swimming. Benefits may include:",
      ],
      items: [
        "Helps improve hair moisture and softness",
        "Supports a smoother, healthier-looking appearance",
        "Helps reduce the look of dryness and frizz",
        "Leaves hair feeling refreshed and easier to manage",
        "Provides gentle care for the scalp",
        "Enhances shine and overall hair comfort",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/creambath/creambath-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Bring Back", "the Shine"],
    },
    {
      type: "list",
      eyebrow: "The Ritual",
      heading: "Inside a Traditional Creambath Session",
      paragraphs: [
        "Our Creambath session combines hair conditioning with a relaxing scalp treatment. The process begins with selecting a suitable cream formula based on your hair needs, followed by a gentle application from the roots to the ends. A soothing scalp massage helps the cream absorb while releasing tension, then the treatment is completed with a rinse and finishing step to leave the hair feeling soft, refreshed, and manageable.",
      ],
      items: [
        "Hair and scalp assessment",
        "Cream application from roots to ends",
        "Gentle scalp and head massage",
        "Relaxing treatment with nourishing cream",
        "Hair rinse and finishing care",
        "Available at the spa or through home service",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/creambath/creambath-10.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Restore From", "the Roots"],
    },
  ],
  faq: {
    heading: "Refresh Your Hair",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/beauty/creambath/creambath-11.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "What is the difference between a creambath and a hair mask?",
        answer: "Both treatments help nourish the hair, but a creambath also includes a relaxing scalp massage that focuses on scalp comfort while helping distribute the treatment evenly through the hair.",
      },
      {
        question: "Is creambath suitable for coloured or chemically treated hair?",
        answer: "Yes. Our creambath treatments are suitable for coloured, highlighted, and chemically treated hair. Our therapists can recommend the most appropriate formula for your hair condition.",
      },
      {
        question: "Which creambath is best for dry hair?",
        answer: "Many guests with dry hair choose Avocado or L'Oreal formulas because they are commonly selected for their moisturising and smoothing properties.",
      },
      {
        question: "How often should I get a creambath?",
        answer: "Many people include a creambath in their hair care routine every two to four weeks, depending on hair condition, styling habits, and environmental exposure.",
      },
      {
        question: "Can I get a creambath after swimming or spending time at the beach?",
        answer: "Absolutely. Creambath is one of the most popular treatments after swimming or sun exposure because it helps restore moisture and improve hair softness.",
      },
      {
        question: "Does a hair creambath include a scalp massage?",
        answer: "Yes. A traditional creambath typically includes a relaxing scalp massage as part of the treatment. The massage can help you unwind while the hair cream is applied and worked through the hair and scalp.",
      },
      {
        question: "What is the difference between a creambath and a regular hair wash?",
        answer: "A regular hair wash primarily focuses on cleansing the hair and scalp, while a creambath is a more intensive conditioning and relaxation treatment. A creambath typically combines hair cream application with a scalp massage and is designed to provide both hair care and relaxation.",
      },
      {
        question: "Should I wash my hair before a creambath?",
        answer: "You generally do not need to wash your hair immediately before your appointment. The therapist can assess your hair and scalp as part of the treatment process. Avoid applying excessive styling products before your appointment so the treatment can be performed comfortably.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Discover More Ways to Nourish and Unwind" },
  cta: {
    heading: "Restore Your Hair After Bali's Tropical Days",
    paragraphs: [
      "Sun, salt water, and humidity take their toll on hair. A Creambath restores moisture, softens dry strands, and adds relaxing scalp care. At our spa, or at your villa or hotel.",
      "Refresh your hair and enjoy a calming self-care moment designed around your needs.",
    ],
    image: { src: "/images/beauty/creambath/creambath-12.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default creambath;
