// ⚠️  Content in this file was copied word-for-word from spabalimoon.com
// (live bundle, 28 September 2026). Please do not rewrite texts or prices
// without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/

import { catalog, type CatalogItem } from "./home-catalog";

/**
 * HOMEPAGE TEXT (/)
 *
 * One block per section, top to bottom. The spa menu lives in
 * home-catalog.ts; the treatment slider takes its prices from there too.
 */
export const home = {
  seo: {
    title: "Seminyak Spa & Balinese Massage | Spa Bali Moon",
    description:
      "Balinese massage and spa in Seminyak since 2009, at our day spa or your villa/hotel. 23 treatments from IDR 69K, couples packages, open daily 9am–11pm.",
    /** The live homepage's JSON-LD, value for value (rating as shown on the live site). */
    schema: {
      "@context": "https://schema.org",
      "@type": "DaySpa",
      name: "Spa Bali Moon",
      url: "https://spabalimoon.com",
      image: "https://spabalimoon.com/images/home/homepage-1.webp",
      email: "info@spabalimoon.com",
      areaServed: "Seminyak, Bali",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.2,
        reviewCount: 193,
        bestRating: 5,
        worstRating: 1,
      },
    },
  },

  hero: {
    title: "Seminyak Spa & Balinese Massage at",
    highlightedTitle: "Spa Bali Moon",
    text: "Since 2009, Spa Bali Moon has provided professional Balinese massage and spa treatments in Seminyak, Bali. Our experienced therapists offer traditional massage, body treatments, facials, and beauty services at our Seminyak spa, with home service also available for hotels and villas in nearby areas.",
  },

  steps: {
    subTitle: "Book via WhatsApp",
    title: "Book a Spa or Massage in Seminyak in 3 Steps",
    items: [
      {
        title: "Choose a Treatment",
        text: "Browse our massage, facial, beauty, and spa treatments to find the experience that suits your schedule and preferences.",
      },
      {
        title: "Book via WhatsApp",
        text: "Tell us your preferred treatment, location, and appointment time. We'll confirm availability and help arrange every detail.",
      },
      {
        title: "Relax Your Way",
        text: "Visit our spa in Seminyak or enjoy the same professional treatment from the comfort of your villa or accommodation.",
      },
    ],
  },

  about: {
    subTitle: "Beyond Relaxation",
    title: "Why Visitors Choose Spa Bali Moon for Massage in Bali",
    text: "After long flights, sightseeing, surfing, or time in the tropical sun, your body needs time to recover. We offer massage, beauty, and body care treatments that ease muscle tension, refresh tired skin, and help you feel refreshed with treatments chosen to suit your body and your time in Bali. Here’s what makes us a trusted choice:",
    /** Shown in two lists of three. */
    features: [
      "Established since 2009",
      "Traditional & modern massage treatments",
      "Beauty and facial services",
      "In-spa and home service available",
      "Experienced Balinese therapists",
      "Personalised treatment recommendations",
    ],
    cta: { label: "Discover More", href: "/seminyak/" },
    brandMark: {
      name: "Spa Bali Moon",
      meta: "Seminyak · Since 2009",
      text: "Traditional massage, beauty and body care at our spa or your villa.",
    },
  },

  catalog: {
    subTitle: "Our Spa Menu",
    title: "Browse Our Spa Treatments",
    fee: { label: "Home Service Fee", value: "Extra 75K/Therapist" },
  },

  packageIntro: {
    subTitle: "More to Enjoy",
    title: "Looking for More Than One Treatment?",
    text: "A great spa experience often includes more than one treatment. Our spa packages combine massage, facials, body scrubs, cream baths, and beauty treatments into carefully selected experiences that let you enjoy more while offering better overall value.",
    note: "Every package is available at our spa, and selected combinations can also be arranged as home service, making it easy to enjoy professional spa care wherever you're staying.",
  },

  packages: {
    subTitle: "Spa Packages",
    title: "Day Spa and Massage in Seminyak",
    text: "Our signature spa packages combine massage, facials, cream baths, body care, and beauty treatments into a complete wellness experience while offering better value than individual bookings. Explore the collections below to find the package that suits you best.",
    cta: { label: "Explore Packages", href: "/seminyak/" },
    /** The four cards, each [duration, treatment] per line. Prices in IDR. */
    cards: [
      {
        treatment: "Balinese Massage",
        name: "Package A",
        price: "449K",
        items: [
          ["1 Hr", "Balinese Massage"],
          ["1 Hr", "Mani & Pedi"],
          ["30 Mins", "Cream bath"],
        ],
      },
      {
        treatment: "Balinese Massage",
        name: "Package B",
        price: "549K",
        items: [
          ["1 Hr", "Balinese Massage"],
          ["1 Hr", "Mani & Pedi"],
          ["1 Hr", "Bali Moon Facial"],
        ],
      },
      {
        treatment: "Balinese Massage",
        name: "Package C",
        price: "449K",
        items: [
          ["1 Hr", "Balinese Massage"],
          ["30 Mins", "Cream bath"],
          ["1 Hr", "Bali Moon Facial"],
        ],
      },
      {
        treatment: "Balinese Massage",
        name: "Package D",
        price: "399K",
        items: [
          ["1 Hr", "Balinese Massage"],
          ["30 Mins", "Manicure"],
          ["30 Mins", "Pedicure"],
        ],
      },
    ] as {
      treatment: string;
      name: string;
      price: string;
      items: [string, string][];
    }[],
  },

  services: {
    subTitle: "Why It Matters",
    title: "What Makes Spa Bali Moon Different",
    items: [
      {
        title: "Experienced Therapists",
        text: "Skilled professionals who adjust every treatment to your comfort level and individual needs.",
        href: "/seminyak/",
      },
      {
        title: "Home Service Available",
        text: "Enjoy the same professional treatments at your villa, hotel, or private residence around Seminyak.",
        href: "/outcall-home-service-massage/",
      },
      {
        title: "Complete Wellness Menu",
        text: "Massage, facials, body care, beauty treatments, and spa packages are all available in one destination.",
        href: "/seminyak/",
      },
      {
        title: "Easy WhatsApp Booking",
        text: "Book appointments quickly, ask questions, and receive personalised treatment recommendations.",
        href: "/contact/",
      },
    ],
  },

  faq: {
    image: "/images/homepage/homepage-2.webp",
    imageTitle: "Book Your Massage in Seminyak Today",
    subTitle: "Frequently Asked Questions",
    title: "Everything You Need to Know",
    items: [
      {
        question: "1. Do I need to make an appointment?",
        answer:
          "Advance bookings are recommended so we can prepare your preferred therapist, treatment, and appointment time, especially during busy travel seasons.",
      },
      {
        question: "2. Can I enjoy the treatments without visiting the spa?",
        answer:
          "Yes. Many of our massage and spa treatments are available as home service for villas, hotels, and private residences around Seminyak.",
      },
      {
        question: "3. Which massage is best if I've never had one before?",
        answer:
          "Balinese Massage is often recommended for first time guests because it combines relaxation, gentle stretching, and traditional massage techniques suitable for most people.",
      },
      {
        question: "4. Can I combine different treatments in one visit?",
        answer:
          "Absolutely. Many guests pair massage with facials, body scrubs, cream baths, manicure, pedicure, or waxing to create a more complete spa experience.",
      },
      {
        question: "5. How do I choose the right treatment?",
        answer:
          "Tell us how you're feeling or what you'd like to achieve, whether that's relaxation, muscle recovery, skin care, or simply time to unwind. We'll happily recommend the most suitable treatment for you.",
      },
      {
        question: "6. Is Spa Bali Moon a licensed spa?",
        answer:
          "Yes. We are an established spa operating from a physical location at Jl. Pangkung Sari No. 30, Seminyak, and have served guests in Bali since 2009. Our home service is delivered by the same therapists who work in our spa, and you are welcome to visit us in person before booking.",
      },
    ],
  },

  reserve: {
    title: "A Better Way to Experience Wellness in Bali",
    text: "Some treatments are for tired muscles. Others for tired skin, overworked feet, or simply the feeling of moving from one plan to the next. Browse the price list and find yours.",
    closingText:
      "Visit our spa in Seminyak or enjoy the same trusted care through our home service, delivered by experienced therapists directly to your villa or hotel.",
    backgroundImage: "/images/home/homepage-5.webp",
  },
};

/* ------------------------------------------------------------------------ */
/* Treatment slider                                                          */
/* ------------------------------------------------------------------------ */

/**
 * The slider under the About section, in the live order. Each card takes its
 * link, photo and "From" price from the spa menu (home-catalog.ts); `image`
 * is only the fallback for the two cards that have no menu entry.
 */
const SLIDES = [
  {
    name: "Balinese Massage",
    image: "/images/listmenu/balinesemassage.webp",
    icon: "/images/spa/Balinese.svg",
  },
  {
    name: "Cream Bath",
    image: "/images/listmenu/creambath.webp",
    icon: "/images/spa/CreamBath.svg",
  },
  {
    name: "Hot Stone Massage",
    image: "/images/listmenu/hotstonemassage.webp",
    icon: "/images/spa/HotStone.svg",
  },
  {
    name: "Sports Massage",
    image: "/images/listmenu/sportmassage.webp",
    icon: "/images/spa/sports.svg",
  },
  {
    name: "Bali Moon Facial",
    image: "/images/listmenu/balimoonteatreefacial.webp",
    icon: "/images/spa/Balinese.svg",
  },
  {
    name: "Deep Tissue Massage",
    image: "/images/listmenu/deeptissuemassage.webp",
    icon: "/images/spa/DeepTissue.svg",
  },
  {
    name: "Head Massage",
    image: "/images/listmenu/headmassage.webp",
    icon: "/images/spa/Head.svg",
  },
  {
    name: "Sunburn Treatment",
    image: "/images/listmenu/aloeveramassage.webp",
    icon: "/images/spa/Sunburn.svg",
  },
  {
    name: "Body Scrub",
    image: "/images/listmenu/bodyscrub.webp",
    icon: "/images/spa/Scrub.svg",
  },
  {
    name: "Ear Candle",
    image: "/images/listmenu/earcandle.webp",
    icon: "/images/spa/EarCandle.svg",
  },
  {
    name: "Lymphatic Massage",
    image: "/images/listmenu/lymphaticmassage%20.webp",
    icon: "/images/spa/Lymphatic.svg",
  },
  {
    name: "Traditional Massage",
    image: "/images/listmenu/traditionalmassage.webp",
    icon: "/images/spa/Balinese.svg",
  },
  {
    name: "Cellulite Massage",
    image: "/images/listmenu/cellulitemassage.webp",
    icon: "/images/spa/cellulite.svg",
  },
  {
    name: "Foot Massage",
    image: "/images/listmenu/footmassage.webp",
    icon: "/images/spa/FootMassage.svg",
  },
  {
    name: "Manicure Pedicure",
    image: "/images/listmenu/manicurepedicure.webp",
    icon: "/images/spa/Manicure.svg",
  },
  {
    name: "Thai Massage",
    image: "/images/listmenu/thaimassage.webp",
    icon: "/images/spa/thai.svg",
  },
  {
    name: "Couple Massage",
    image: "/images/listmenu/couplemassage.webp",
    icon: "/images/spa/Couple.svg",
  },
  {
    name: "Foot Reflexology",
    image: "/images/listmenu/footreflexology.webp",
    icon: "/images/spa/FootReflexology.svg",
  },
  {
    name: "Nail Art",
    image: "/images/listmenu/manicurepedicure.webp",
    icon: "/images/spa/NailArt.svg",
  },
  {
    name: "Waxing",
    image: "/images/listmenu/waxing.webp",
    icon: "/images/spa/waxing.svg",
  },
  {
    name: "Coconut Oil Massage",
    image: "/images/listmenu/coconutoilmassage.webp",
    icon: "/images/spa/CoconutOil.svg",
  },
  {
    name: "Hair Braiding",
    image: "/images/listmenu/creambath.webp",
    icon: "/images/spa/HairBraiding.svg",
  },
  {
    name: "Shiatsu Massage",
    image: "/images/listmenu/shiatsumassage.webp",
    icon: "/images/spa/Shiatsu.svg",
  },
];

/** Slider names that are listed under another name in the spa menu. */
const MENU_NAME: Record<string, string> = {
  "Bali Moon Facial": "Bali Moon Tea Tree Facial",
  "Coconut Oil Massage": "Virgin Cold-Press Coconut Oil Massage",
  "Couple Massage": "Couple Massage Balinese",
  "Cream Bath": "Hair Cream Bath",
  "Sunburn Treatment": "Aloe Vera Massage",
};

/** Cards with no spa-menu entry: their own link and starting price. */
const NOT_IN_MENU: Record<string, { href: string; price: string }> = {
  "Hair Braiding": { href: "/seminyak/hair-braiding/", price: "IDR 279K" },
  "Nail Art": { href: "/seminyak/nail-spa/", price: "IDR 159K" },
};

const withIdr = (p: string) => (/^IDR/i.test(p) ? p : `IDR ${p}`);
const thousands = (p: string) => {
  const m = /([\d.]+)\s*K/i.exec(p || "");
  return m ? Number(m[1]) : Number.POSITIVE_INFINITY;
};
const isDuration = (label: string) =>
  /\b(hour|hours|minute|minutes|min|mins)\b/i.test(label || "");

/** "From IDR 159K | 1 Hour" — the cheapest option, with its duration when it has one. */
function fromPrice(item: CatalogItem | undefined, name: string): string | null {
  const options = item?.options ?? [];
  if (!options.length) {
    const own = NOT_IN_MENU[name]?.price;
    return own ? `From ${withIdr(own)}` : null;
  }
  const cheapest = options.reduce((a, b) =>
    thousands(b.price) < thousands(a.price) ? b : a
  );
  const from = `From ${withIdr(cheapest.price)}`;
  return isDuration(cheapest.label) ? `${from} | ${cheapest.label}` : from;
}

const byName = new Map(catalog.map((c) => [c.name, c]));

export const treatmentSlides = SLIDES.map((slide) => {
  const item = byName.get(MENU_NAME[slide.name] || slide.name);
  return {
    ...slide,
    href: item?.href ?? NOT_IN_MENU[slide.name]?.href,
    image: item?.image ?? slide.image,
    price: fromPrice(item, slide.name),
    /** The spa-menu entry behind the card (none for Hair Braiding and Nail Art). */
    menuItem: item,
  };
});
