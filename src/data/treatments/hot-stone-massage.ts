// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/hot-stone-massage/
// TODO PRICE-02: Package B is 559K on this page but 599K on the Pricelist page (see migration-audit.md).

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const hotStoneMassage: Treatment = {
  slug: "hot-stone-massage",
  name: "Hot Stone Massage",
  category: "massage",
  shortDescription: "A soothing full-body massage using heated stones to relax muscles and support circulation.",
  cardImage: { src: "/images/treatments/cards/hotstonemassage.webp", alt: "Hot Stone Massage", width: 630, height: 580 },
  seo: {
    title: "Hot Stone Massage Bali - Seminyak Spa - Spa Bali Moon",
    description: "Hot stone massage in Seminyak, Bali: warm stones and traditional techniques for deep relaxation. Book at Spa Bali Moon.",
  },
  hero: {
    eyebrow: "Warm Stone Therapy",
    title: "Traditional Hot Stone Massage",
    image: { src: "/images/treatments/hot-stone-massage/hotstonemassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "The Experience",
      heading: "Why Does Hot Stone Massage Feel Different?",
      paragraphs: [
        "Hot Stone Massage combines traditional massage techniques with smooth heated basalt stones to create a deeply relaxing treatment. The warmth allows muscles to soften before deeper massage techniques are applied, making it easier to release tension without excessive pressure. This treatment is often chosen by guests seeking both physical relaxation and a calming wellness experience.",
      ],
      images: [
        {
          src: "/images/treatments/hot-stone-massage/hotstonemassage-2.webp",
          alt: "Spa treatment",
          width: 578,
          height: 601,
        },
        { src: "/images/treatments/cards/hotstonemassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Heated Basalt Stones", text: "Naturally retains warmth to help relax muscles throughout the treatment." },
        { title: "Deep Relaxation", text: "Combines therapeutic heat with massage to promote lasting comfort." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Warmth That Lasts",
      heading: "Hot Stone Massage Duration Options",
      paragraphs: [
        "Hot Stone Massage combines heated basalt stones with flowing massage techniques to help the body relax more deeply. Longer sessions allow more time for full-body treatment and focused attention on areas that hold tension.",
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("hot-stone-massage", "1 Hour"),
              points: [
                "Full-body hot stone massage",
                "Warmth across the main muscle groups",
                "Ideal for a first hot stone session",
              ],
              bookButton: false,
            },
            {
              label: "1.5 Hours",
              price: priceOf("hot-stone-massage", "1.5 Hours"),
              points: [
                "Full-body hot stone massage",
                "Warmth across major muscle areas",
                "Extra focus on built-up tension",
              ],
              bookButton: false,
            },
            {
              label: "2 Hours",
              price: priceOf("hot-stone-massage", "2 Hours"),
              points: [
                "Extended hot stone treatment",
                "More time for deeper relaxation",
                "Longer focus on tense areas",
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
        "Hot Stone Massage pairs naturally with treatments that extend relaxation from head to toe. Our carefully selected packages combine soothing warmth with facial care, body treatments, or beauty services, making them ideal for guests looking for a more complete spa experience during their stay in Bali.",
      ],
      images: [
        { src: "/images/treatments/hot-stone-massage/hotstonemassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/hot-stone-massage/hotstonemassage-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/hot-stone-massage/hotstonemassage-6.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/hot-stone-massage/hotstonemassage-7.webp", alt: "image", width: 1050, height: 484 },
      ],
      packageGroup: "hot-stone",
      // TODO PRICE-02: Package B is 559K on this page but 599K on the Pricelist page (see migration-audit.md).
    },
    {
      type: "stats",
      items: [
        { title: "Heated", text: "Basalt Stones" },
        { title: "Muscle", text: "Relaxation" },
        { title: "Customized", text: "Packages" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Treatment Benefits",
      heading: "How Can Hot Stone Massage Support Your Wellbeing?",
      paragraphs: [
        "Hot Stone Massage combines the soothing warmth of heated stones with flowing massage techniques to help you feel more relaxed and comfortable. The warmth can help prepare your muscles for massage, while the treatment offers a calming experience many guests enjoy after travel, busy days, or physical activity. Some of the key benefits are:",
      ],
      items: [
        "Helps soften tight muscles before massage",
        "Supports healthy circulation",
        "Encourages a deeper sense of relaxation",
        "May ease feelings of physical tension",
        "Provides soothing warmth throughout the treatment",
        "Offers a relaxing option after travel or active days",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/hot-stone-massage/hotstonemassage-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Heat Therapy",
      heading: "Where Are the Warm Stones Used?",
      paragraphs: [
        "Warm stones can be placed on different parts of the body depending on where you want to focus the treatment. Larger stones are generally used on broader areas, while smaller stones allow for more focused warmth. Common areas for warm stone placement are:",
      ],
      items: ["Back and shoulders", "Neck area", "Legs and calves", "Arms", "Hands", "Feet"],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/hot-stone-massage/hotstonemassage-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Heat in the", "Right Places"],
    },
    {
      type: "list",
      eyebrow: "The Experience",
      heading: "What Happens During a Hot Stone Massage",
      paragraphs: [
        "A Hot Stone Massage follows a gradual process that combines heated stones with traditional massage techniques. The treatment starts by preparing the body for the warmth, followed by a combination of stone and hand massage. Throughout the session, we pay attention to your comfort and adjust the treatment as needed. The session generally follows these steps:",
      ],
      items: [
        "Comfort consultation before treatment",
        "Warm stone placement on selected areas",
        "Flowing massage with heated stones",
        "Combination of stone and hand techniques",
        "Temperature checks throughout the session",
        "Calming finishing placement of warm stones",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/hot-stone-massage/hotstonemassage-10.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Feel the", "Heat Work"],
    },
  ],
  faq: {
    heading: "Warm Stone Therapy",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/treatments/hot-stone-massage/hotstonemassage-11.webp",
      alt: "Spa facial treatment",
      width: 895,
      height: 682,
    },
    items: [
      {
        question: "Are the stones very hot?",
        answer: "No. The stones are heated to a comfortable therapeutic temperature and are always tested before being placed on the body. Your therapist will also adjust the warmth according to your comfort level.",
      },
      {
        question: "What type of stones are used?",
        answer: "Most professional Hot Stone Massage treatments use smooth basalt stones because they naturally retain heat for longer, allowing warmth to be distributed evenly throughout the massage.",
      },
      {
        question: "Is Hot Stone Massage better than a regular massage?",
        answer: "They offer different experiences. A traditional massage relies entirely on manual techniques, while Hot Stone Massage combines massage with therapeutic heat to help muscles relax before deeper work begins.",
      },
      {
        question: "Can this treatment help after travelling?",
        answer: "Yes. Many guests choose Hot Stone Massage after long flights, sightseeing, or active holidays because the warmth helps ease muscular tension and encourages relaxation.",
      },
      {
        question: "Can I receive Hot Stone Massage at my villa or hotel?",
        answer: "Yes. Our therapists provide professional home service throughout Seminyak and nearby areas, bringing all necessary equipment for a comfortable treatment.",
      },
      {
        question: "What is a hot stone massage?",
        answer: "Hot stone massage uses smooth, heated stones placed on selected areas of the body alongside massage techniques. The warmth helps relax the muscles while the massage creates a deeper sense of relaxation.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Warm Up to More Than Hot Stone Massage" },
  cta: {
    heading: "Warmth That Helps the Body Fully Unwind",
    paragraphs: [
      "Sometimes muscles need warmth rather than stronger pressure. Hot Stone Massage combines therapeutic heat with skilled technique to ease tension and restore balance. At our spa, or at your villa.",
      "Reserve your Hot Stone Massage package and enjoy warmth-led relaxation.",
    ],
    image: { src: "/images/treatments/hot-stone-massage/hotstonemassage-12.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default hotStoneMassage;
