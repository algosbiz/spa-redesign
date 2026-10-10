// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/sport-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const sportMassage: Treatment = {
  slug: "sport-massage",
  name: "Sports Massage",
  category: "massage",
  shortDescription: "A targeted full-body massage to ease soreness, reduce stiffness, and support recovery.",
  cardImage: { src: "/images/treatments/cards/sportmassage.webp", alt: "Sports Massage", width: 630, height: 580 },
  seo: {
    title: "Sports Massage Seminyak & Bali - Recovery & Performance",
    description: "Sports massage in Seminyak, Bali for athletes and active guests: recovery, mobility and tension relief. Book in-spa or at your villa.",
  },
  hero: {
    eyebrow: "Active Recovery",
    title: "Sport Massage Seminyak",
    image: { src: "/images/treatments/sport-massage/sportsmassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Movement & Recovery",
      heading: "What Makes Sport Massage Different from a Regular Massage?",
      paragraphs: [
        "Sport Massage is a targeted treatment designed for active bodies experiencing frequent movement, physical effort, and muscle strain. Through controlled pressure, stretching, and rhythmic movements, it focuses on areas that become tight after exercise, training, surfing, or active travel, helping the body feel more flexible, balanced, and ready for the next activity.",
      ],
      images: [
        { src: "/images/treatments/sport-massage/sportsmassage-2.webp", alt: "Spa treatment", width: 1254, height: 1254 },
        {
          src: "/images/treatments/sport-massage/sportsmassage-3.webp",
          alt: "Spa treatment detail",
          width: 1024,
          height: 1024,
        },
      ],
      highlights: [
        { title: "Muscle Recovery", text: "Helps release tension from physically demanding activities." },
        { title: "Active Mobility", text: "Supports comfortable movement through targeted bodywork." },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Choose Yours",
      heading: "Our Session Options",
      paragraphs: [
        "Different activities place different demands on the body. A shorter session works well for focused recovery, while a longer treatment allows more time to work through multiple areas affected by training, travel, or repetitive movement.",
      ],
      images: [
        { src: "/images/treatments/sport-massage/sportsmassage-4.webp", alt: "image", width: 1376, height: 768 },
        { src: "/images/treatments/sport-massage/sportsmassage-5.webp", alt: "image", width: 1376, height: 768 },
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("sport-massage", "1 Hour"),
              points: ["Targeted muscle tension", "Post-workout recovery", "Specific problem areas"],
              bookButton: true,
            },
            {
              label: "1.5 Hours",
              price: priceOf("sport-massage", "1.5 Hours"),
              points: ["Full-body recovery", "Multiple muscle groups", "Deeper relaxation after activity"],
              bookButton: true,
            },
          ],
        },
      ],
    },
    {
      type: "stats",
      items: [
        { title: "Experienced", text: "Therapists" },
        { title: "Deep", text: "Pressure" },
        { title: "Muscle", text: "Recovery" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Active Bodies",
      heading: "Who Can Benefit from Sport Massage?",
      paragraphs: [
        "Sport Massage is not limited to professional athletes. Anyone who regularly challenges their body through movement can benefit from a treatment focused on muscle comfort and recovery.",
      ],
      items: [
        "Runners and marathon participants",
        "Surfers and water sports enthusiasts",
        "Gym and strength training enthusiasts",
        "Cyclists and endurance athletes",
        "Travellers with physically active itineraries",
        "People experiencing muscle tightness from repetitive movement",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/sport-massage/sportsmassage-6.webp", alt: "Spa treatment", width: 1024, height: 1024 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Targeted Treatment",
      heading: "Areas That Receive the Most Attention During Sport Massage",
      paragraphs: [
        "Our therapists adjust the treatment based on your activity and the areas that feel most affected. Common focus areas include large muscle groups that experience repeated use during exercise, sports, and daily movement.",
      ],
      items: [
        "Shoulders and upper back",
        "Lower back",
        "Glutes and hips",
        "Thighs",
        "Calves",
        "Feet",
        "Arms",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/sport-massage/sportsmassage-7.webp", alt: "Spa treatment", width: 1024, height: 1024 },
      imageCaption: ["Made for", "Active Recovery"],
    },
    {
      type: "list",
      eyebrow: "Recovery Technique",
      heading: "What Happens During a Sport Massage?",
      paragraphs: [
        "The session begins with a short consultation to understand your activity level and areas needing attention. Our therapist combines techniques such as kneading, compression, stretching, and controlled pressure to ease muscle tightness while adjusting the intensity to your comfort and goals.",
      ],
      items: [
        "Personalised body assessment",
        "Warm-up massage techniques",
        "Targeted pressure on tense areas",
        "Muscle kneading and compression",
        "Stretching movements when needed",
        "Relaxing recovery finish",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/sport-massage/sportsmassage-8.webp", alt: "Spa treatment", width: 1024, height: 1024 },
      imageCaption: ["A Stronger", "Recovery"],
    },
  ],
  faq: {
    heading: "Sport Massage",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/treatments/sport-massage/sportsmassage-9.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "Is Sport Massage only for professional athletes?",
        answer: "No. Sport Massage is suitable for anyone with an active lifestyle, including gym-goers, runners, surfers, hikers, and people who experience muscle tightness from regular movement.",
      },
      {
        question: "What is the difference between Sport Massage and Deep Tissue Massage?",
        answer: "Both techniques may use firm pressure, but their purpose is different. Sport Massage focuses more on recovery, mobility, and the physical demands of an active lifestyle, while Deep Tissue Massage focuses on releasing deeper areas of long-term muscle tension.",
      },
      {
        question: "Should I get Sport Massage before or after exercise?",
        answer: "Both options are possible. A pre-activity session usually uses lighter techniques to prepare the body, while a post-activity session focuses more on relaxation and recovery after physical effort.",
      },
      {
        question: "Will Sport Massage feel painful?",
        answer: "Sport Massage may involve stronger pressure than a relaxation massage, but it should not feel painful. Our therapists adjust the intensity based on your comfort and body condition.",
      },
      {
        question: "How often should I receive Sport Massage?",
        answer: "The ideal frequency depends on your activity level, training schedule, and personal preference. Some active individuals enjoy regular sessions, while others book treatments after periods of increased physical demand.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Take Your Recovery Further" },
  cta: {
    heading: "Renew Your Body After Every Challenge",
    paragraphs: [
      "Training, outdoor adventures, and long days exploring Bali leave muscles tired and restricted. Sport Massage uses controlled pressure and recovery techniques to restore comfort and movement.",
      "Reserve your Sport Massage and feel ready for your next activity.",
    ],
    image: { src: "/images/treatments/sport-massage/sportsmassage-10.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default sportMassage;
