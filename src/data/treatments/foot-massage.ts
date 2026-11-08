// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/foot-massage/

import { priceOf } from "../pricelist";
import type { Treatment } from "../types";

const footMassage: Treatment = {
  slug: "foot-massage",
  name: "Foot Massage",
  category: "massage",
  shortDescription: "A focused massage on the soles, heels, and ankles to ease stiffness and restore comfort.",
  cardImage: { src: "/images/treatments/cards/footmassage.webp", alt: "Foot Massage", width: 630, height: 580 },
  seo: {
    title: "Foot Massage in Seminyak, Bali | Spa Bali Moon",
    description: "Soles, heels, ankles and calves, with a little reflexology. Foot massage in Seminyak from IDR 159.000 for 1 hour, at our spa or your villa.",
  },
  hero: {
    eyebrow: "Light Steps Ahead",
    title: "Foot Massage Seminyak",
    image: { src: "/images/treatments/foot-massage/footmassage-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Every Step Counts",
      heading: "Foot Massage for Daily Comfort and Recovery",
      paragraphs: [
        "Your feet absorb constant pressure throughout the day, whether from walking, standing, travelling, or exercising. Foot Massage focuses on the muscles, joints, and soft tissues of the feet and lower legs using relaxing massage techniques inspired by traditional reflexology. The treatment helps ease built-up tension, improve local circulation, and restore comfort, making it a popular choice after long days exploring Bali or spending hours on your feet.",
      ],
      images: [
        { src: "/images/treatments/foot-massage/footmassage-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/treatments/cards/footmassage.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        { title: "Foot Recovery", text: "Helps reduce fatigue caused by walking, standing, and everyday activities." },
        {
          title: "Reflexology-Inspired",
          text: "Combines relaxing massage with pressure point techniques for added comfort.",
        },
      ],
    },
    {
      type: "pricing",
      eyebrow: "Session Options",
      heading: "Choose the Right Duration",
      paragraphs: [
        "Different session lengths allow our therapist to focus on specific areas or provide more detailed care for both the feet and lower legs. Whether you need a quick refresh or a longer recovery session, each treatment is adjusted to your comfort.",
      ],
      images: [
        { src: "/images/treatments/foot-massage/footmassage-4.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/foot-massage/footmassage-5.webp", alt: "image", width: 1050, height: 484 },
        { src: "/images/treatments/foot-massage/footmassage-6.webp", alt: "image", width: 1050, height: 484 },
      ],
      groups: [
        {
          cards: [
            {
              label: "1 Hour",
              price: priceOf("foot-massage", "1 Hour"),
              points: ["Tired feet after sightseeing", "First-time guests", "Focused foot relief"],
              bookButton: true,
            },
            {
              label: "1.5 Hours",
              price: priceOf("foot-massage", "1.5 Hours"),
              points: [
                "Feet and lower leg tension",
                "Guests wanting additional massage time",
                "Recovery after active days",
              ],
              bookButton: true,
            },
            {
              label: "2 Hours",
              price: priceOf("foot-massage", "2 Hours"),
              points: [
                "Complete lower body relaxation",
                "Frequent walkers or active travellers",
                "Guests preferring an extended treatment",
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
        { title: "Experienced", text: "Therapists" },
        { title: "Gentle", text: "Pressure" },
        { title: "Natural Oil", text: "Massage" },
        { title: "Outcall", text: "Available" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Common Situations",
      heading: "When Is a Foot Massage Most Helpful?",
      paragraphs: [
        "A Foot Massage can be especially enjoyable when your feet have been working hard throughout the day. Whether you've spent hours exploring Bali, standing for long periods, or travelling, a dedicated foot treatment gives tired feet focused attention. It can be particularly helpful after situations such as:",
      ],
      items: [
        "Tired feet after sightseeing or exploring",
        "Sore arches or heels after extended walking",
        "Foot fatigue following a long flight",
        "Tired feet after standing for several hours",
        "Muscle fatigue after light physical activities",
        "General discomfort from overworked feet",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/foot-massage/footmassage-7.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Areas of Focus",
      heading: "Where Does Foot Massage Work?",
      paragraphs: [
        "A Foot Massage focuses on several areas of the feet and lower legs that can become tired or tense throughout the day. Each area receives focused attention to help create a more comfortable and relaxed feeling. The massage may focus on:",
      ],
      items: [
        "Soles that absorb daily impact",
        "Arches that support body weight",
        "Heels affected by prolonged standing",
        "Ankles involved in everyday movement",
        "Calf muscles that can contribute to foot tension",
        "Toes and the surrounding soft tissues",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/foot-massage/footmassage-8.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["From Heel", "to Toe"],
    },
    {
      type: "list",
      eyebrow: "Massage Approach",
      heading: "How Our Foot Massage Is Performed",
      paragraphs: [
        "Our Foot Massage uses a combination of gentle techniques to work through tension in the feet and lower legs. Warm natural oils help create smooth, comfortable movements, while focused pressure is applied to areas that may feel particularly tired after walking or standing. The treatment can be tailored to your comfort, with techniques such as:",
      ],
      items: [
        "Warm oil for smooth massage movements",
        "Gentle circular massage techniques",
        "Reflexology-inspired pressure on key foot zones",
        "Focused attention on the arches and heels",
        "Massage of the lower legs and calves",
        "Pressure adjusted to your comfort level",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/treatments/foot-massage/footmassage-9.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["The Rhythm", "of Relief"],
    },
  ],
  faq: {
    heading: "Foot Recovery",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/treatments/foot-massage/footmassage-10.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "Is Foot Massage the same as reflexology?",
        answer: "Not exactly. Foot Massage focuses on relaxing muscles, relieving soreness, and improving comfort throughout the feet and lower legs. Reflexology traditionally follows pressure points believed to correspond with different parts of the body. Our treatment incorporates selected reflexology-inspired techniques while remaining a relaxing massage experience.",
      },
      {
        question: "Can Foot Massage help after walking all day?",
        answer: "Yes. Many guests choose Foot Massage after sightseeing, shopping, or long walks because it helps reduce tiredness and discomfort in the feet, arches, heels, and calves.",
      },
      {
        question: "Does the massage include the lower legs?",
        answer: "Yes. Depending on your chosen session, your therapist also massages the ankles and lower legs to help ease muscle tightness connected to tired feet.",
      },
      {
        question: "Is strong pressure used?",
        answer: "Not necessarily. Pressure is adjusted according to your comfort. The treatment is intended to be soothing while still providing effective relief for tired feet.",
      },
      {
        question: "Can I book Foot Massage at my hotel or villa?",
        answer: "Yes. Home service is available for selected hotels, villas, and accommodations around Seminyak.",
      },
      {
        question: "Does foot massage help neuropathy?",
        answer: "Foot massage may help relieve discomfort and promote relaxation, but it does not treat the underlying cause of neuropathy. If you have reduced sensation in your feet, speak with a healthcare professional before getting a massage.",
      },
      {
        question: "Is foot massage good for plantar fasciitis?",
        answer: "Foot massage may help ease tension and discomfort associated with plantar fasciitis. Gentle massage can be particularly soothing, but it should not replace professional treatment when symptoms persist.",
      },
      {
        question: "Can I get a foot massage while pregnant?",
        answer: "Foot massage can be relaxing during pregnancy, but it is best to check with your healthcare provider first, especially if you have any pregnancy-related complications. Let your therapist know that you are pregnant so they can adjust the treatment accordingly.",
      },
      {
        question: "Why does a foot massage feel so good?",
        answer: "A foot massage can feel good because it helps relax tense muscles, stimulates the feet, and promotes a sense of relaxation. The combination of gentle pressure and soothing movements can also help reduce everyday stress and tension.",
      },
    ],
  },
  related: { eyebrow: "Services", heading: "Give More Than Your Feet a Break" },
  cta: {
    heading: "Give Your Feet the Attention They Rarely Receive",
    paragraphs: [
      "Your feet carry every walk and every adventure. A dedicated Foot Massage eases the tension they collect and leaves each step lighter. At our spa, or at your villa or hotel.",
      "Reserve your session and step back into your day feeling lighter.",
    ],
    image: { src: "/images/treatments/foot-massage/footmassage-11.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};

export default footMassage;
