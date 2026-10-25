// ⚠️  Content in this file was copied word-for-word from spabalimoon.com
// (live bundle, 28 September 2026). Please do not rewrite texts or prices
// without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/

import { priceValue } from "@/lib/price";
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
      "Balinese massage and spa in Seminyak since 2009, at our day spa or your villa/hotel. 25 treatments from IDR 69.000, couples packages, open daily 9am–11pm.",
    // The spa's structured data (DaySpa) is built in src/lib/schema.ts and
    // shown on every page since the AEO roadmap (17 Oct).
  },

  hero: {
    // The H1 reads "Seminyak Spa & Balinese Massage at Spa Bali Moon"; "at"
    // opens the last line (the highlighted part is a line of its own), so it
    // never stands alone on a line (19 Oct).
    title: "Seminyak Spa & Balinese Massage",
    highlightedTitle: "at Spa Bali Moon",
    text: "Since 2009, Spa Bali Moon has provided professional Balinese massage and spa treatments in Seminyak, Bali. Our experienced therapists offer traditional massage, body treatments, facials, and beauty services at our Seminyak spa, with [home service](/outcall-home-service-massage/) also available for hotels and villas in nearby areas.",
    /*
     * The quick facts of the copy rewrite (15 Oct), in two places since
     * 19 Oct (owner): the prices as a small subheading under the title, the
     * address and hours under the three features, each with its menu icon
     * (src/components/layout/MenuIcons.tsx). "Book on WhatsApp +62 878-6317-
     * 5144" left the facts (owner: the homepage said too much there): the
     * WhatsApp button shows that number.
     */
    prices: ["Treatments from IDR 69.000 per person", "Home service in Seminyak: add IDR 75.000 per therapist"],
    visit: [
      { icon: "pin", text: "Jl. Pangkung Sari No. 30, Seminyak" },
      { icon: "clock", text: "Open daily 9am–11pm" },
    ] as const,
  },

  steps: {
    subTitle: "Book via WhatsApp",
    title: "Book a Spa or Massage in Seminyak in 3 Steps",
    items: [
      {
        title: "Choose a Treatment",
        text: "Pick a massage, facial or beauty treatment and how long you'd like it.",
      },
      {
        title: "Book via WhatsApp",
        text: "Tell us your preferred treatment, location, and appointment time. We'll confirm availability and help arrange every detail.",
      },
      {
        title: "Relax Your Way",
        text: "Come to our spa in Seminyak, or have the same treatment at your villa or hotel.",
      },
    ],
  },

  about: {
    subTitle: "Beyond Relaxation",
    title: "A Seminyak Day Spa Since 2009",
    // Copy rewrite, 15 Oct.
    text: "After a long flight, a day of surfing or too long in the sun, your body needs time to recover. Spa Bali Moon offers massage, facials and body care to ease tight muscles and refresh tired skin, and we'll help you pick the treatment that suits how you feel.",
    /** Shown in two lists of three. */
    features: [
      "In Seminyak since 2009",
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
    fee: { label: "Home Service Fee", value: "IDR 75.000 per therapist (Seminyak area)" },
  },

  packageIntro: {
    subTitle: "More to Enjoy",
    title: "Looking for More Than One Treatment?",
    text: "A great spa experience often includes more than one treatment. Our spa packages combine massage, facials, body scrubs, cream baths, and beauty treatments in one visit.",
    note: "Every package is available at our spa, and selected combinations can also be arranged as home service, making it easy to enjoy professional spa care wherever you're staying.",
  },

  packages: {
    subTitle: "Spa Packages",
    title: "Day Spa and Massage in Seminyak",
    text: "Our newest package pairs a lymphatic massage with the Gold Facial; the others pair a 1-hour Balinese massage with a manicure and pedicure, cream bath or facial. Prices are per person.",
    cta: { label: "Explore Packages", href: "/seminyak/" },
    /** The four cards, each [duration, treatment] per line. Prices in IDR. */
    cards: [
      {
        treatment: "Balinese Massage",
        name: "Package A",
        price: "520.000",
        items: [
          ["1 Hr", "Balinese Massage"],
          ["1 Hr", "Mani & Pedi"],
          ["45 Mins", "Cream bath"],
        ],
      },
      {
        treatment: "Balinese Massage",
        name: "Package B",
        price: "545.000",
        items: [
          ["1 Hr", "Balinese Massage"],
          ["1 Hr", "Mani & Pedi"],
          ["1 Hr", "Bali Moon Facial"],
        ],
      },
      {
        treatment: "Balinese Massage",
        name: "Package C",
        price: "485.000",
        items: [
          ["1 Hr", "Balinese Massage"],
          ["45 Mins", "Cream bath"],
          ["1 Hr", "Bali Moon Facial"],
        ],
      },
      {
        treatment: "Balinese Massage",
        name: "Package D",
        price: "375.000",
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
          "Advance booking is recommended at Spa Bali Moon, although walk-ins are welcome at our Seminyak spa on Jl. Pangkung Sari No. 30. Booking ahead lets us prepare your preferred therapist, treatment and appointment time, especially during busy travel seasons. We are open daily 9am to 11pm; book on WhatsApp at +62 878-6317-5144.",
      },
      {
        question: "2. Can I have a treatment at my villa or hotel?",
        answer:
          "Yes. Many Spa Bali Moon massage and spa treatments are available as [home service](/outcall-home-service-massage/) at villas, hotels and private residences in Seminyak, Petitenget, Kerobokan, Canggu, North Kuta and Kuta. Treatments cost the same as in our spa, plus IDR 75.000 per therapist in Seminyak, Petitenget and Kerobokan or IDR 150.000 in Canggu, North Kuta and Kuta, and the therapist brings fresh linen, oils and everything your treatment needs.",
      },
      {
        question: "3. Which massage is best if I've never had one before?",
        answer:
          "Balinese Massage is often recommended for first-time guests at Spa Bali Moon because it combines relaxation, gentle stretching and traditional massage techniques suitable for most people. A one-hour session costs IDR 159.000 per person. You can tell your therapist your preferred pressure at the start and adjust it at any point during the session.",
      },
      {
        question: "4. Can I combine different treatments in one visit?",
        answer:
          "Absolutely. At Spa Bali Moon, many guests pair massage with facials, body scrubs, cream baths, manicure, pedicure or waxing to create a more complete spa experience. Ready-made spa packages start at IDR 375.000 per person; for example, a 1-hour Balinese massage with a 30-minute manicure and 30-minute pedicure is IDR 379.000 per person.",
      },
      {
        question: "5. How do I choose the right treatment?",
        answer:
          "Balinese Massage suits general relaxation, while Sports and Deep Tissue Massage suit muscle tightness. Not sure? Tell us how you feel on WhatsApp at +62 878-6317-5144 and we'll suggest a treatment.",
      },
      {
        question: "6. Is Spa Bali Moon a licensed spa?",
        answer:
          "Yes. Spa Bali Moon is a licensed day spa at Jl. Pangkung Sari No. 30, Petitenget, Seminyak, and has served guests since 2009. Our home service is delivered by the same therapists who work in our spa, and you are welcome to visit us in person before booking.",
      },
      // Copy rewrite, 15 Oct: the questions people search, answered with
      // facts already on the site.
      {
        question: "7. How much does a massage cost in Seminyak?",
        answer:
          "A one-hour Balinese massage at Spa Bali Moon in Seminyak costs IDR 159.000 per person. Traditional and back massage start at IDR 90.000 for 30 minutes, and [couple massages](/seminyak/couple-spa/) start at IDR 319.000 for two. All prices, in Indonesian rupiah, are on our price list, and home service adds IDR 75.000 per therapist in the Seminyak area.",
      },
      {
        question: "8. Where is Spa Bali Moon?",
        answer:
          "Spa Bali Moon is at Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Bali, and is open daily from 9am to 11pm. Our therapists also come to your villa or hotel in Seminyak, Petitenget and Kerobokan for an extra IDR 75.000 per therapist, in Canggu, North Kuta and Kuta for IDR 150.000, and further across Bali on request.",
      },
      {
        question: "9. What are your opening hours?",
        answer:
          "Spa Bali Moon is open daily from 9am to 11pm at Jl. Pangkung Sari No. 30, Petitenget, Seminyak. Home service at your villa or hotel and WhatsApp booking are available during the same hours, and walk-ins are welcome at the spa. To book ahead, message us on WhatsApp at +62 878-6317-5144.",
      },
    ],
  },

  reserve: {
    title: "Book at Our Spa or at Your Villa",
    text: "Some treatments are for tired muscles. Others for tired skin, overworked feet, or simply the feeling of moving from one plan to the next.",
    closingText:
      "Visit our spa in Seminyak, or book the same treatments at your villa or hotel.",
    backgroundImage: "/images/home/homepage-5.webp",
  },
};

/* ------------------------------------------------------------------------ */
/* Treatment slider                                                          */
/* ------------------------------------------------------------------------ */

/**
 * The slider under the About section: the best sellers first (owner, 24 Oct:
 * after the Balinese massage, facial, couples and lymphatic, then mani-pedi,
 * foot massage and cream bath), then the live order. Each card takes its
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
    name: "Bali Moon Facial",
    image: "/images/listmenu/balimoonteatreefacial.webp",
    icon: "/images/spa/Balinese.svg",
  },
  {
    name: "Couple Massage",
    image: "/images/services/couplemassage/couplemassage-3-warm.webp",
    icon: "/images/spa/Couple.svg",
  },
  {
    name: "Lymphatic Massage",
    image: "/images/treatments/cards/lymphaticmassage-warm.webp",
    icon: "/images/spa/Lymphatic.svg",
  },
  {
    name: "Manicure Pedicure",
    image: "/images/treatments/cards/manicurepedicure-warm.webp",
    icon: "/images/spa/Manicure.svg",
  },
  {
    name: "Foot Massage",
    image: "/images/listmenu/footmassage.webp",
    icon: "/images/spa/FootMassage.svg",
  },
  {
    name: "Cream Bath",
    image: "/images/treatments/cards/creambath-warm.webp",
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
    name: "Traditional Massage",
    image: "/images/listmenu/traditionalmassage.webp",
    icon: "/images/spa/Balinese.svg",
  },
  {
    name: "Cellulite Massage",
    image: "/images/treatments/cards/cellulitemassage-warm.webp",
    icon: "/images/spa/cellulite.svg",
  },
  {
    name: "Thai Massage",
    image: "/images/treatments/cards/thaimassage-warm.webp",
    icon: "/images/spa/thai.svg",
  },
  {
    name: "Foot Reflexology",
    image: "/images/listmenu/footreflexology.webp",
    icon: "/images/spa/FootReflexology.svg",
  },
  {
    name: "Nail Art",
    image: "/images/treatments/cards/manicurepedicure-warm.webp",
    icon: "/images/spa/NailArt.svg",
  },
  {
    name: "Waxing",
    image: "/images/listmenu/waxing.webp",
    icon: "/images/spa/waxing.svg",
  },
  {
    name: "Coconut Oil Massage",
    image: "/images/treatments/cards/coconutoilmassage-warm.webp",
    icon: "/images/spa/CoconutOil.svg",
  },
  // The two pages added on 24 Oct (owner).
  {
    name: "Warm Candle Massage",
    image: "/images/treatments/cards/organicwarmcandle.webp",
    icon: "/images/spa/Balinese.svg",
  },
  {
    name: "Cupping Therapy",
    image: "/images/treatments/cards/cuppingtherapy.webp",
    icon: "/images/spa/DeepTissue.svg",
  },
  {
    name: "Hair Braiding",
    image: "/images/treatments/cards/creambath-warm.webp",
    icon: "/images/spa/HairBraiding.svg",
  },
  {
    name: "Shiatsu Massage",
    image: "/images/treatments/cards/shiatsumassage-warm.webp",
    icon: "/images/spa/Shiatsu.svg",
  },
];

/** Slider names that are listed under another name in the spa menu. */
const MENU_NAME: Record<string, string> = {
  "Bali Moon Facial": "Bali Moon Tea Tree Facial",
  "Coconut Oil Massage": "Virgin Cold-Press Coconut Oil Massage",
  "Couple Massage": "Couple Massage Balinese",
  "Cream Bath": "Hair Cream Bath",
  "Warm Candle Massage": "Natural Warm Candle Massage",
  "Sunburn Treatment": "Aloe Vera Massage",
};

/** Cards with no spa-menu entry: their own link and starting price. */
const NOT_IN_MENU: Record<string, { href: string; price: string }> = {
  "Hair Braiding": { href: "/seminyak/hair-braiding/", price: "IDR 279.000" },
  "Nail Art": { href: "/seminyak/nail-spa/", price: "IDR 159.000" },
};

const withIdr = (p: string) => (/^IDR/i.test(p) ? p : `IDR ${p}`);
const isDuration = (label: string) =>
  /\b(hour|hours|minute|minutes|min|mins)\b/i.test(label || "");

/** "From IDR 159.000 | 1 Hour" — the cheapest option, with its duration when it has one. */
function fromPrice(item: CatalogItem | undefined, name: string): string | null {
  const options = item?.options ?? [];
  if (!options.length) {
    const own = NOT_IN_MENU[name]?.price;
    return own ? `From ${withIdr(own)}` : null;
  }
  const cheapest = options.reduce((a, b) =>
    priceValue(b.price) < priceValue(a.price) ? b : a
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
