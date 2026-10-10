/**
 * NAVIGATION — header menu, its dropdowns and the footer menus.
 *
 * To rename a menu item: change `label`.
 * To add a page to the menu: add { label, href } in the right place.
 * Always write internal links WITH a trailing slash, e.g. "/contact/" (the site uses them everywhere).
 *
 * The header menu is copied from the live website (spabalimoon.com, checked 2026-09-24):
 * Home · Pricelist · Treatments (dropdown) · Outcall · Reservation · Blog (dropdown) · Contact
 * + search + "Book an Appointment". This replaces the shorter menu approved on 2026-09-23 (URL-02).
 */

export type NavItem = {
  label: string;
  href: string;
};

/** A header item. `dropdown` names the list it opens (see treatmentMenu / blogMenuHidden below). */
export type MainNavItem = NavItem & { dropdown?: "treatments" | "blog" | "outcall" };

/** Main menu (desktop header and mobile menu), in the live website's order. */
export const mainNav: MainNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Pricelist", href: "/seminyak/" },
  // The live site's "Treatments" item only opens the dropdown (it has no page of its own).
  { label: "Treatments", href: "/seminyak/", dropdown: "treatments" },
  { label: "Outcall", href: "/outcall-home-service-massage/", dropdown: "outcall" },
  { label: "Reservation", href: "/reservation/" },
  { label: "Blog", href: "/guide/", dropdown: "blog" },
  { label: "Contact", href: "/contact/" },
];

/**
 * Outcall dropdown (SEO, 10 Oct: the header linked to the home service page
 * only, while the villa & hotel and Kuta pages, which bring in clicks, were
 * linked from the footer alone). Same pages as the footer's "Home Services".
 */
export const outcallMenu: (NavItem & { note: string; image: string })[] = [
  {
    label: "Home Service Massage",
    href: "/outcall-home-service-massage/",
    note: "Outcall massage anywhere in Bali",
    image: "/images/homepage/homepage-28.webp",
  },
  {
    label: "Villa & Hotel Massage",
    href: "/villa-hotel-massage/",
    note: "In-room massage in Seminyak",
    image: "/images/services/massagehotelvilla/massagehotelvilla-1.webp",
  },
  {
    label: "Massage Kuta",
    href: "/massage-kuta/",
    note: "In-spa and outcall in Kuta",
    image: "/images/services/massagekuta/massagekuta-1.webp",
  },
];

/** Text of the booking button in the header (it opens WhatsApp), as on the live site. */
export const headerBookingLabel = "Book an Appointment";

/** Treatments dropdown: the live site's list, in its order and wording (shown in 4 columns). */
export const treatmentMenu: (NavItem & { keywords: string })[] = [
  { label: "Balinese Massage", href: "/seminyak/balinese-massage/", keywords: "balinese massage body relax" },
  { label: "Body Scrub", href: "/seminyak/body-scrub/", keywords: "body scrub skin renewal exfoliation lulur" },
  { label: "Cellulite Massage", href: "/seminyak/anti-cellulite-massage/", keywords: "cellulite massage body contouring smoother skin" },
  { label: "Couple Massage", href: "/seminyak/couple-spa/", keywords: "couple massage couples two pax honeymoon anniversary" },
  { label: "Coconut Oil Massage", href: "/seminyak/coconut-oil-massage/", keywords: "virgin coconut oil massage natural nourishment" },
  { label: "Cream Bath", href: "/seminyak/creambath/", keywords: "cream bath creambath hair scalp wellness" },
  { label: "Deep Tissue Massage", href: "/seminyak/deep-tissue-massage/", keywords: "deep tissue massage muscle recovery tension stiffness" },
  { label: "Ear Candle", href: "/seminyak/ear-wax-removal/", keywords: "ear candle ear candling gentle ear care" },
  { label: "Facial", href: "/seminyak/facial/", keywords: "facial bali moon skin rejuvenation mask skincare" },
  { label: "Foot Massage", href: "/seminyak/foot-massage/", keywords: "foot massage feet relaxation" },
  { label: "Foot Reflexology", href: "/seminyak/foot-reflexology/", keywords: "foot reflexology pressure points feet" },
  { label: "Hair Braiding", href: "/seminyak/hair-braiding/", keywords: "hair braiding braid styling" },
  { label: "Hot Stone Massage", href: "/seminyak/hot-stone-massage/", keywords: "hot stone massage warm stone" },
  { label: "Head Massage", href: "/seminyak/head-massage/", keywords: "head massage scalp neck relaxation" },
  { label: "Lymphatic Massage", href: "/seminyak/lymphatic-drainage-massage/", keywords: "lymphatic massage drainage wellness" },
  { label: "Manicure Pedicure", href: "/seminyak/manicure-pedicure/", keywords: "manicure pedicure nails hands feet" },
  { label: "Nail Art", href: "/seminyak/nail-spa/", keywords: "nail art nails beauty" },
  { label: "Shiatsu Massage", href: "/seminyak/shiatsu-massage/", keywords: "shiatsu massage pressure japanese" },
  { label: "Sports Massage", href: "/seminyak/sport-massage/", keywords: "sports massage active recovery muscle" },
  { label: "Sunburn Treatment", href: "/seminyak/sunburn-massage/", keywords: "sunburn treatment skin soothing bali sun" },
  { label: "Traditional Massage", href: "/seminyak/traditional-massage/", keywords: "traditional massage spa bali" },
  { label: "Thai Massage", href: "/seminyak/thai-massage/", keywords: "thai massage stretching pressure" },
  { label: "Waxing", href: "/seminyak/waxing-salon/", keywords: "waxing hair removal beauty" },
];

/**
 * Blog dropdown: the articles come from the blog database with the titles set
 * in /admin/, newest first (getBlogMenu in src/lib/blog/posts.ts). These slugs
 * stay out of it: "IV Drip Therapy in Bali" (/guide/iv-drip/), which the owner
 * took out of the menu on 2 Oct ("we can take that one out of the menu"). The
 * article itself stays, on /guide/, in search and in the sitemap.
 */
export const blogMenuHidden: string[] = ["iv-drip"];

/* ---------------------------------- Footer --------------------------------- */

/** Footer column "Home Services" (heading links to the Home Service page, as on the old site). */
export const footerHomeServices = {
  label: "Home Services",
  href: "/outcall-home-service-massage/",
  items: [
    { label: "Massage Hotel & Villa", href: "/villa-hotel-massage/" },
    { label: "Massage Seminyak", href: "/" },
    { label: "Massage Kuta", href: "/massage-kuta/" },
  ] as NavItem[],
};

/** Footer column "Our Day Spa" (heading links to the Day Spa page, as on the old site). */
export const footerDaySpaLink: NavItem = { label: "Our Day Spa", href: "/seminyak/day-spa/" };

/** Links in the very bottom line of the footer. */
export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions/" },
];

/** The mega menu shows the treatments in columns of 6, 6, 6 and 5, as live. */
export const treatmentMenuColumns = [0, 6, 12, 18].map((start, i, starts) =>
  treatmentMenu.slice(start, starts[i + 1])
);

/**
 * Header search: what the live site's search box matches against, in its
 * order. A query matches the title or any keyword.
 *
 * The live list also offers "FAQ" (/faq/), one of the theme's demo pages that
 * this rebuild deliberately leaves out, so it is not listed here.
 */
export const searchIndex: { title: string; href: string; keywords: string }[] = [
  { title: "Home", href: "/", keywords: "home main spa bali moon" },
  { title: "Pricelist", href: "/seminyak/", keywords: "price pricing cost packages rates list" },
  ...treatmentMenu.map((t) => ({ title: t.label, href: t.href, keywords: `treatment ${t.keywords}` })),
  { title: "Outcall", href: "/outcall-home-service-massage/", keywords: "outcall home service massage hotel villa private accommodation" },
  { title: "Reservation", href: "/reservation/", keywords: "reserve reservation appointment book booking" },
  { title: "Blog", href: "/guide/", keywords: "blog news articles posts tips" },
  { title: "Contact", href: "/contact/", keywords: "contact reach phone email location address whatsapp" },
  { title: "Massage in Seminyak", href: "/massage-seminyak/", keywords: "massage seminyak outcall home service" },
  { title: "Massage in Kuta", href: "/massage-kuta/", keywords: "massage kuta outcall home service" },
  { title: "Hotel & Villa Massage", href: "/villa-hotel-massage/", keywords: "hotel villa massage outcall home service" },
  { title: "Day Spa Seminyak", href: "/seminyak/day-spa/", keywords: "day spa facial cream bath seminyak treatment" },
  { title: "Home Service", href: "/outcall-home-service-massage/", keywords: "home service outcall massage whatsapp booking" },
  { title: "Privacy Policy", href: "/privacy-policy/", keywords: "privacy policy data personal" },
  { title: "Terms & Conditions", href: "/terms-and-conditions/", keywords: "terms conditions rules booking" },
];
