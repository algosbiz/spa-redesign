/**
 * Shared TypeScript types for all content in `src/data/`.
 *
 * You normally do NOT need to edit this file. It only describes the "shape"
 * of the data so that the editor can warn you when something is missing or
 * misspelled (for example a treatment without a title).
 */

/** A photo stored in `public/images/...`. */
export type SiteImage = {
  /** Path starting with /images/..., e.g. "/images/treatments/cards/balinesemassage.webp" */
  src: string;
  /** Text read by screen readers and search engines. */
  alt: string;
  /** Real pixel size of the file (used by next/image to avoid layout shift). */
  width: number;
  height: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

/** The FAQ block that most pages show near the bottom. */
export type FaqBlock = {
  /** Big heading, e.g. "Revive Your Senses" */
  heading: string;
  /** Small text above the heading, e.g. "Frequently Asked Questions" */
  eyebrow?: string;
  /** Second heading, e.g. "Everything You Need to Know" */
  subheading?: string;
  image?: SiteImage;
  items: FaqItem[];
};

/** The final "book now" block at the bottom of a page. */
export type CallToAction = {
  heading: string;
  paragraphs: string[];
  image?: SiteImage;
  /** Button text, e.g. "Reserve" (the button always opens WhatsApp). */
  buttonLabel: string;
};

/* -------------------------------------------------------------------------- */
/*  Page sections                                                             */
/*  A treatment (or landing) page is a list of sections shown top to bottom.  */
/*  Each page can use different sections, in any order.                       */
/* -------------------------------------------------------------------------- */

/** Opening text with two photos and two short highlights. */
export type IntroSection = {
  type: "intro";
  eyebrow?: string;
  heading: string;
  paragraphs?: string[];
  images?: SiteImage[];
  highlights?: { title: string; text: string }[];
};

/** One price card, e.g. "1 Hour — IDR 159.000" with three bullet points. */
export type PriceCard = {
  /** Text shown on the card, e.g. "1 Hour", "Short Hair", "Chocolate" */
  label: string;
  /** Price in Indonesian Rupiah, e.g. 159000 (shown as "IDR 159.000"). */
  price: number;
  points?: string[];
  /** true = the card shows its own "Book Now" button */
  bookButton: boolean;
  /** Internal note for editors (never shown on the website). */
  note?: string;
};

/** Duration / option price cards. Cards can be split into titled groups (Couple page). */
export type PricingSection = {
  type: "pricing";
  eyebrow?: string;
  heading: string;
  paragraphs?: string[];
  images?: SiteImage[];
  groups: { title?: string; cards: PriceCard[] }[];
};

/** A set of spa packages, taken from `src/data/packages.ts`. */
export type PackagesSection = {
  type: "packages";
  eyebrow?: string;
  heading: string;
  paragraphs?: string[];
  images?: SiteImage[];
  /** id of a group in `src/data/packages.ts`, e.g. "hot-stone" */
  packageGroup: string;
  /**
   * Use a different price on THIS page only (key = package name, e.g. "Package B").
   * Only used where the old website showed conflicting prices; see migration/migration-audit.md.
   */
  priceOverrides?: Record<string, number>;
};

/** Row of four short facts, e.g. "Experienced / Therapists". */
export type StatsSection = {
  type: "stats";
  items: { title: string; text: string }[];
};

/** Heading + text + bullet list + photo. The most common section. */
export type ListSection = {
  type: "list";
  eyebrow?: string;
  heading: string;
  paragraphs?: string[];
  items: string[];
  /** Button under the list. Without `href` it opens WhatsApp booking. */
  button?: { label: string; href?: string };
  image?: SiteImage;
  /** Small badge on the photo, e.g. ["17 + Years", "Experience"] */
  imageBadge?: string[];
  /** Two-line caption on the photo, e.g. ["Feel The", "Difference"] */
  imageCaption?: string[];
};

/** Placeholder for the shared Google review slider (content lives in testimonials.ts). */
export type TestimonialsSection = {
  type: "testimonials";
};

export type PageSection =
  | IntroSection
  | PricingSection
  | PackagesSection
  | StatsSection
  | ListSection
  | TestimonialsSection;

/* -------------------------------------------------------------------------- */
/*  Treatments                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Categories used for filters. These are the old site's own price-list tabs
 * (Massage · Beauty · For Couples).
 */
export type TreatmentCategory = "massage" | "beauty" | "couple";

export type Treatment = {
  /** Last part of the URL: /seminyak/<slug>/  (never change this; it is an SEO URL) */
  slug: string;
  /** Name used in the navigation menu, e.g. "Balinese Massage" */
  name: string;
  /** Name on treatment cards, only when the old site used a different one (e.g. "Hair Cream Bath"). */
  cardName?: string;
  category: TreatmentCategory;
  /** Short text on treatment cards (taken from the old "related treatments" cards). */
  shortDescription?: string;
  /** Square-ish card photo (630×580). */
  cardImage: SiteImage;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow?: string;
    /** This is the page's H1. */
    title: string;
    image: SiteImage;
  };
  sections: PageSection[];
  faq?: FaqBlock;
  /** Heading above the "related treatments" slider. */
  related?: { eyebrow?: string; heading: string };
  cta?: CallToAction;
};

/**
 * A landing page that uses the same building blocks as a treatment page
 * (Hotel & Villa Massage, Massage Kuta).
 */
export type LandingPage = {
  /** Full URL path, e.g. "/villa-hotel-massage/" */
  path: string;
  seo: { title: string; description: string };
  hero: { eyebrow?: string; title: string; image: SiteImage };
  sections: PageSection[];
  faq?: FaqBlock;
  related?: { eyebrow?: string; heading: string };
  cta?: CallToAction;
};

/* -------------------------------------------------------------------------- */
/*  Price list & packages                                                     */
/* -------------------------------------------------------------------------- */

export type PriceOption = {
  /** Label on the Pricelist page, e.g. "1 Hour", "Chocolate", "1 Hour · Balinese Massage · 2 Pax" */
  label: string;
  price: number;
  /** Label on the Home Service page, only when it is worded differently. */
  homeServiceLabel?: string;
  /** Words the Home Service page writes before the price, e.g. "Start from" (→ "Start from IDR 139.000"). */
  homeServicePricePrefix?: string;
  /** Label in the homepage catalog, only when it is worded differently. */
  homeLabel?: string;
  /** Internal note for editors (never shown on the website). */
  note?: string;
};

/**
 * One row of the price list. The old site showed the same price list on three
 * pages (Pricelist, Home Service, Homepage) with slightly different names and
 * descriptions. The PRICE is stored once; each page keeps its own wording.
 */
export type PriceListItem = {
  id: string;
  category: "massage" | "beauty" | "couple";
  /** slug of the treatment page (/seminyak/<slug>/), if the item has its own page */
  pageSlug?: string;
  image: SiteImage;
  options: PriceOption[];
  /**
   * On the Pricelist page this item is shown INSIDE another row instead of on its own
   * (the old site shows Four Hand Warm Candle inside Organic Warm Candle Oil Massage).
   */
  pricelistParentId?: string;
  /** Internal note for editors (never shown on the website). */
  note?: string;

  /** Wording on /seminyak/ (Pricelist page) */
  pricelistName?: string;
  pricelistDescription?: string;
  pricelistBenefits?: string[];
  /** Wording on /outcall-home-service-massage/ */
  homeServiceName?: string;
  homeServiceDescription?: string;
  homeServiceBenefits?: string[];
  /** Wording in the homepage "Our Spa Menu" catalog */
  homeName?: string;
  homeDescription?: string;
  homeBenefits?: string[];
};

export type SpaPackage = {
  /** e.g. "Package A" */
  name: string;
  price: number;
  /** e.g. 2 for couple packages (price covers both guests) */
  pax?: number;
  /**
   * Included treatments, e.g. [{ duration: "1 Hr", treatment: "Balinese Massage" }].
   * `pricelistDuration` / `pricelistTreatment`: the spelling on the Pricelist page (/seminyak/), only when it
   * differs from the other pages (e.g. "1,5 Hr" there, "1.5 Hr" on the treatment pages — CONTENT-11).
   */
  items: { duration: string; treatment: string; pricelistDuration?: string; pricelistTreatment?: string }[];
};

export type PackageGroup = {
  /** Used by PackagesSection.packageGroup, e.g. "hot-stone" */
  id: string;
  /** Group name shown on cards, e.g. "Hot Stone" */
  title: string;
  /** Texts used on the Pricelist page (/seminyak/) for this group, if it appears there. */
  eyebrow?: string;
  heading?: string;
  description?: string;
  icon?: SiteImage;
  packages: SpaPackage[];
};

/* -------------------------------------------------------------------------- */
/*  Simple text pages (Privacy Policy, Terms, Wellness guide)                 */
/* -------------------------------------------------------------------------- */

/**
 * One piece of a long text page, shown top to bottom.
 * `lead` is a bold start of a line, e.g. lead "Directly from you:" + text "When booking…".
 */
export type ContentBlock =
  | { kind: "heading"; level: 2 | 3 | 4 | 5 | 6; text: string; href?: string }
  | { kind: "paragraph"; text: string; lead?: string }
  | { kind: "list"; items: { text: string; lead?: string }[] }
  | { kind: "link"; label: string; href: string };

/** A long text page. A link with href "whatsapp" opens the WhatsApp booking chat. */
export type TextPage = {
  path: string;
  seo: { title: string; description: string };
  /** The page's H1 */
  title: string;
  blocks: ContentBlock[];
};

/* -------------------------------------------------------------------------- */
/*  Other shared content                                                      */
/* -------------------------------------------------------------------------- */

export type Testimonial = {
  name: string;
  text: string;
};

// Guide articles: see src/lib/blog/types.ts (they live in the blog database).
