// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/waxing-salon/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const waxingSalon: Treatment = {
  slug: "waxing-salon",
  name: "Waxing",
  category: "beauty",
  shortDescription: "A professional hair removal treatment using olive oil hot wax for smooth skin.",
  cardImage: { src: "/images/beauty/cards/waxing.webp", alt: "Waxing", width: 630, height: 580 },
  seo: {
    title: "Waxing Seminyak - Brazilian & Full Body Wax Bali",
    description: "Waxing in Seminyak, Bali: from brows to full body, in a relaxing spa setting. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Smooth Finish",
    title: "Waxing Seminyak in Bali",
    image: { src: "/images/beauty/waxing-salon/waxing-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Beyond Shaving",
      heading: "What Is Professional Waxing Treatment?",
      paragraphs: [
        "Waxing Treatment is a professional hair removal method that removes hair from the root, leaving skin smoother for longer than shaving. Our therapists use quality wax products and hygienic techniques to treat different areas, including arms, legs, and sensitive areas such as Brazilian waxing, with care and comfort in mind.",
      ],
      images: [
        { src: "/images/beauty/waxing-salon/waxing-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/beauty/cards/waxing.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Longer-Lasting", text: "Removes hair from the root for smoother skin that lasts longer than shaving." },
        { title: "Gentle Finish", text: "Techniques adjusted according to the area and skin sensitivity." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Find Yours",
      heading: "Our Waxing Options",
      paragraphs: [
        "Every area of the body has different needs, which is why Spa Bali Moon provides various waxing options for both everyday grooming and special occasions. Each service is performed carefully to help you achieve smooth and well-maintained skin.",
      ],
      images: [
        { src: "/images/beauty/waxing-salon/waxing-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/waxing-salon/waxing-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/waxing-salon/waxing-6.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/waxing-salon/waxing-7.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/waxing-salon/waxing-8.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/waxing-salon/waxing-9.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/beauty/waxing-salon/waxing-10.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "Arms",
              price: priceOf("waxing", "Arms"),
              points: ["Smooth arm hair removal", "Everyday grooming", "Professional waxing finish"],
              bookButton: true,
            },
            {
              label: "Under Arms",
              price: priceOf("waxing", "Under Arms"),
              points: [
                "Quick underarm grooming",
                "Longer-lasting smoothness",
                "Gentle technique for sensitive skin",
              ],
              bookButton: true,
            },
            {
              label: "Back",
              price: priceOf("waxing", "Back · Start From"),
              points: ["Focused back waxing", "Neat grooming finish", "Suitable for women and men"],
              bookButton: true,
            },
            {
              label: "Full Back",
              price: priceOf("waxing", "Full Back"),
              points: ["Complete back waxing", "Larger body area care", "Smooth, clean result"],
              bookButton: true,
            },
            {
              label: "Half Legs",
              price: priceOf("waxing", "Half Legs"),
              points: ["Lower or upper leg waxing", "Holiday-ready skin", "Ideal before beach days"],
              bookButton: true,
            },
            {
              label: "Full Legs",
              price: priceOf("waxing", "Full Legs"),
              points: [
                "Complete leg waxing",
                "Longer-lasting smoothness",
                "Professional strip wax application",
              ],
              bookButton: true,
            },
            {
              label: "Waxing Brazilian",
              price: priceOf("waxing", "Waxing Brazilian"),
              points: [
                "Private treatment setting",
                "Careful technique for sensitive areas",
                "Comfort-focused service",
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
        { title: "Private", text: "Treatment Room" },
        { title: "Quality", text: "Wax Products" },
        { title: "Various", text: "Options" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Hair Removal",
      heading: "Why Do Guests Choose Waxing Treatment in Bali?",
      paragraphs: [
        "Many guests choose professional waxing because it provides a cleaner and longer-lasting alternative to shaving. It is especially popular among travellers who want smooth skin before beach activities, holidays, events, or simply as part of their regular self-care routine.",
      ],
      items: [
        "Removes unwanted hair from the root",
        "Leaves skin feeling smooth and refreshed",
        "Suitable for different body areas",
        "Popular before beach days and special occasions",
        "Helps maintain a neat appearance for longer",
        "Available for both women and men",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/waxing-salon/waxing-11.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Treatment Areas",
      heading: "Which Areas Can Be Treated with Waxing?",
      paragraphs: [
        "Waxing can be customized based on your grooming needs, from smaller facial areas to larger body sections. Our therapists select the appropriate waxing technique according to the treatment area to maintain comfort and effective results.",
      ],
      items: [
        "Arms and underarms",
        "Half and full legs",
        "Back and full back",
        "Brazilian waxing in a private setting",
        "Facial waxing areas such as lip, chin, and eyebrows",
        "Men's waxing options available",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/waxing-salon/waxing-12.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Smooth Across", "the Body"],
    },
    {
      type: "list",
      eyebrow: "Waxing Process",
      heading: "How Does a Waxing Treatment Work?",
      paragraphs: [
        "Our Waxing Treatment begins with preparing the skin before applying suitable wax based on the treatment area. We use Mancine Strawberry Hard Wax for sensitive areas and olive oil strip wax for larger sections to help remove hair effectively while maintaining skin comfort. After the waxing process, simple aftercare guidance is provided to help keep your skin smooth.",
      ],
      items: [
        "Skin preparation before waxing",
        "Hard wax used for delicate areas",
        "Strip wax applied for larger body sections",
        "Hair removed from the root",
        "Therapist checks skin comfort throughout the session",
        "Aftercare guidance after treatment",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/beauty/waxing-salon/waxing-13.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["A Smoother", "Finish"],
    },
  ],
  faq: {
    heading: "Waxing Treatment",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/beauty/waxing-salon/waxing-14.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "How long does waxing results usually last?",
        answer: "Waxing results can last several weeks depending on your natural hair growth cycle. With regular sessions, many guests notice that hair grows back softer and finer over time.",
      },
      {
        question: "Is waxing painful?",
        answer: "Waxing may feel slightly uncomfortable, especially during the first session, but professional techniques and suitable wax products help make the process more comfortable.",
      },
      {
        question: "Should I shave before my waxing appointment?",
        answer: "No. Shaving is not necessary before waxing. Hair should be long enough for the wax to grip properly, usually around 1/4 inch.",
      },
      {
        question: "Can I get Brazilian waxing at Spa Bali Moon?",
        answer: "Yes. Brazilian waxing is available in a private treatment setting with careful techniques to maintain comfort and discretion.",
      },
      {
        question: "What should I avoid after waxing?",
        answer: "After waxing, it is recommended to avoid hot showers, intense sun exposure, and strong exfoliation for a short period to allow the skin to remain calm.",
      },
      {
        question: "Is waxing suitable for men?",
        answer: "Yes. Spa Bali Moon provides waxing options for men, including areas such as the back and Manzilian, with techniques adjusted for comfort.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Complete Your Smooth-Skin Ritual" },
  cta: {
    heading: "Smooth Skin Starts with the Right Care at Spa Bali Moon",
    paragraphs: [
      "Careful technique, quality products, and personal service keep your skin smooth and refreshed, for a beach holiday, a special occasion, or your regular routine. At our spa or yours.",
      "Reserve your Waxing Treatment and enjoy smooth, well-maintained skin.",
    ],
    image: { src: "/images/beauty/waxing-salon/waxing-15.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default waxingSalon;
