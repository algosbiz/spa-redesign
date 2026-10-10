// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/balinese-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const balineseMassage: Treatment = {
  slug: "balinese-massage",
  name: "Balinese Massage",
  category: "massage",
  shortDescription: "A calming full-body massage with steady pressure, gentle stretches, and aromatic oils.",
  cardImage: { src: "/images/treatments/cards/balinesemassage.webp", alt: "Balinese Massage", width: 630, height: 580 },
  seo: {
    title: "Balinese Massage in Seminyak – Traditional Healing",
    description: "Balinese massage in Seminyak, Bali: long strokes, gentle pressure and warm oils for deep relaxation. Book in-spa or at your villa.",
  },
  hero: {
    eyebrow: "Ancient Healing",
    title: "Balinese Massage Seminyak",
    image: { src: "/images/treatments/balinese-massage/balinesemassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "A Traditional Wellness",
      heading: "What Makes Balinese Massage Unique?",
      paragraphs: [
        "Balinese massage is a traditional treatment influenced by healing practices from Bali, Java, India, and China. The treatment combines acupressure, gentle stretching, skin rolling, and flowing strokes to help reduce tension, improve circulation, and encourage relaxation. Our therapists adapt the pressure and focus areas according to your comfort and preferences.",
      ],
      images: [
        { src: "/images/treatments/balinese-massage/balinesemassage-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/treatments/cards/balinesemassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        {
          title: "Traditional Techniques",
          text: "Combines acupressure, stretching, skin rolling, and rhythmic massage movements.",
        },
        { title: "Adjustable Pressure", text: "Suitable for both gentle relaxation and firmer muscle relief sessions." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Flexible Sessions",
      heading: "Balinese Massage Session",
      paragraphs: [
        "Pick a session that fits your schedule and how much time you want to spend relaxing. Longer sessions give our therapists more time to work across the body and focus on areas that need extra attention.",
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("balinese-massage", "1 Hour"),
              points: ["Full-body relaxation", "Everyday muscle tension", "Guests with limited time"],
              bookButton: false,
            },
            {
              label: "1.5 Hour",
              price: priceOf("balinese-massage", "1.5 Hours"),
              points: [
                "More complete full-body care",
                "Extra focus on tense areas",
                "Guests wanting deeper relaxation",
              ],
              bookButton: false,
            },
            {
              label: "2 Hour",
              price: priceOf("balinese-massage", "2 Hours"),
              points: [
                "Extended full-body treatment",
                "More time for problem areas",
                "Guests seeking longer relaxation",
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
        "Balinese massage is often combined with treatments such as facials, cream baths, and nail care to create a more complete spa experience. Our treatment packages are created for guests looking to relax, refresh, and make the most of their massage time in Bali.",
      ],
      images: [
        { src: "/images/treatments/balinese-massage/balinesemassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/balinese-massage/balinesemassage-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/balinese-massage/balinesemassage-6.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/balinese-massage/balinesemassage-7.webp", alt: "image", width: 1050, height: 484 },
      ],
      packageGroup: "balinese-massage",
    },
    {
      type: "stats",
      items: [
        { title: "Experienced", text: "Therapists" },
        { title: "Flexible", text: "Booking" },
        { title: "Customized", text: "Packages" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "The Benefits",
      heading: "Why Guests Choose Balinese Massage",
      paragraphs: [
        "Our Balinese massage is commonly chosen by travellers, office workers, and active individuals because it combines relaxation techniques with muscle-focused work in a single treatment. Find the benefits that make Balinese massage a favourite among our guests:",
      ],
      items: [
        "Helps reduce muscle tension",
        "Encourages relaxation and stress relief",
        "Supports healthy blood circulation",
        "Often chosen after long flights and travel days",
        "Popular after surfing and outdoor activities",
        "Suitable for regular wellness routines",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/balinese-massage/balinesemassage-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Suitable For",
      heading: "Who Is Balinese Massage Best For?",
      paragraphs: [
        "This treatment is suitable for many different lifestyles and travel situations. Our therapists frequently recommend Balinese massage for guests looking for:",
      ],
      items: [
        "Travellers recovering from long flights",
        "Visitors returning from outdoor activities",
        "Guests experiencing neck and shoulder tension",
        "People spending long hours sitting or working",
        "Couples looking for a relaxing spa experience",
        "Anyone seeking traditional Balinese wellness",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/balinese-massage/balinesemassage-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Your Ideal", "Match"],
    },
    {
      type: "list",
      eyebrow: "The Experience",
      heading: "What to Expect from a Balinese Massage",
      paragraphs: [
        "A Balinese massage session begins with a short consultation regarding pressure preferences and areas that require extra attention. Massage oil is used to support smooth movements and muscle relaxation. The same treatment experience is also available through our home service for guests staying in villas, hotels, or private accommodations. Here’s what you can expect during your Balinese massage experience:",
      ],
      items: [
        "Brief consultation before treatment",
        "Full body massage using massage oil",
        "Adjustable pressure during the session",
        "Additional attention to specific areas",
        "Available for individuals and couples",
        "Home service appointments available",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/balinese-massage/balinesemassage-10.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Feel The", "Difference"],
    },
  ],
  faq: {
    heading: "Revive Your Senses",
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
        question: "What should I wear during a Balinese massage?",
        answer: "You will typically be provided with a clean towel or spa attire before your treatment. During the massage, only the area being worked on is uncovered, ensuring both privacy and comfort throughout the session.",
      },
      {
        question: "Is Balinese massage good after surfing or outdoor activities?",
        answer: "Yes. Balinese massage is a popular choice after surfing, sightseeing, or other outdoor activities in Bali. The combination of massage techniques helps relax tired muscles, improve circulation, and support post-activity recovery.",
      },
      {
        question: "How often should you get a Balinese massage?",
        answer: "The ideal frequency depends on your lifestyle and wellness goals. Many visitors enjoy a massage once or twice during their holiday, while regular guests may schedule weekly or monthly treatments to help maintain relaxation and reduce muscle tension.",
      },
      {
        question: "What are the benefits of a Balinese massage?",
        answer: "Balinese massage may help reduce muscle tension, improve blood circulation, encourage relaxation, ease everyday stress, and leave the body feeling refreshed. Many guests also find it beneficial after long flights or busy travel itineraries.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Explore Beyond Your Balinese Massage" },
  cta: {
    heading: "Enjoy Balinese Massage Wherever You Stay",
    paragraphs: [
      "Available at our Seminyak spa, or as home service at your villa or hotel for an extra IDR 75,000 per therapist. Our therapists adjust the pressure to suit you, gentle through to firm.",
      "Reserve a session that fits your plans, in our spa or at your villa.",
    ],
    image: { src: "/images/treatments/balinese-massage/balinesemassage-12.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default balineseMassage;
