/**
 * BUSINESS INFORMATION — name, phone, WhatsApp, address, opening hours, socials.
 *
 * Used by the header, footer, contact details, WhatsApp buttons and SEO (schema).
 * Change a value here and it updates everywhere it is used.
 *
 * ⚠️ Some facts were written differently on different pages of the old website.
 *    Until the owner confirms the correct value, each page keeps what it showed before.
 *    Those items are marked "TODO" below and listed in migration/migration-audit.md.
 */
export const business = {
  name: "Spa Bali Moon",
  url: "https://spabalimoon.com",
  foundedYear: 2009,

  /** WhatsApp number in international format WITHOUT "+" or spaces (used for wa.me links). */
  whatsappNumber: "6287863175144",
  /** How the phone / WhatsApp number is written on the website. */
  phoneDisplay: "+62 878-6317-5144",

  /**
   * TODO CONTACT-01: two different emails were found and no page shows one in the footer.
   *   - "info@spabalimoon.com"   (only in the old homepage schema, not visible)
   *   - "spabalimoon@gmail.com"  (visible on /privacy-policy/)
   * Leave empty until the owner confirms which one to publish.
   */
  email: undefined as string | undefined,

  address: {
    /**
     * Short address. Since the copy rewrite (15 Oct) the footer, the mobile menu
     * and the Privacy Policy show the full address below instead.
     */
    short: "Jl. Pangkung Sari No. 30, Seminyak, Bali",
    /** Full address as written on /contact/, used wherever the address is shown (copy rewrite, 15 Oct). */
    full: "Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan, Kuta Utara, Badung, Bali 80361",
    /** Structured version for Google (schema.org). Built from the full address above. */
    street: "Jl. Pangkung Sari No. 30",
    locality: "Seminyak",
    region: "Bali",
    postalCode: "80361",
    country: "ID",
  },

  /** "Get Directions" link from the old /contact/ page. */
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Spa%20Bali%20Moon%2C%20Jl.%20Pangkung%20Sari%20No.%2030%2C%20Petitenget%2C%20Seminyak%2C%20Kerobokan%2C%20Kuta%20Utara%2C%20Badung%2C%20Bali%2080361",

  /**
   * Opening hours as written in the footer ("Open Daily: 9am–11pm").
   * HOURS-01: confirmed as 9am–11pm (copy rewrite, 15 Oct); /contact/ now says
   * 9:00 - 23:00 too, and Google Maps shows the same.
   */
  openingHours: {
    label: "Open Daily",
    display: "9am–11pm",
    opens: "09:00",
    closes: "23:00",
  },

  homeService: {
    /**
     * FEE-01, settled by the owner on 22 Oct 2026: the fee per therapist depends on the area.
     * IDR 75.000 in the Seminyak area (Seminyak, Petitenget, Kerobokan), IDR 150.000 in
     * Canggu, North Kuta and Kuta, and confirmed on WhatsApp further out. Wherever the site
     * gives one figure it ties IDR 75.000 to the Seminyak area (80% of guests stay there, owner),
     * or says "from IDR 75.000" where the sentence already covers several areas.
     */
    feePerTherapist: 75_000,
    /** The fee in Canggu, North Kuta and Kuta. */
    feeOuterPerTherapist: 150_000,
    /** How the fee is written in the footer. */
    feeDisplay: "IDR 75.000 per therapist (Seminyak area)",
    /**
     * Fee per therapist and the usual drive from the spa, by area (owner, 22 Oct 2026).
     * `fee: null` means it is confirmed on WhatsApp. Shown on the outcall page (S06).
     */
    // Usual drive from the spa; the outcall page adds once that traffic can make it longer.
    zones: [
      { area: "Seminyak & Petitenget", fee: 75_000, travel: "7–10 min" },
      { area: "Kerobokan", fee: 75_000, travel: "7–15 min" },
      { area: "Canggu & North Kuta", fee: 150_000, travel: "30–50 min" },
      { area: "Kuta", fee: 150_000, travel: "30–50 min" },
      { area: "Uluwatu, Jimbaran & Nusa Dua", fee: null, travel: "60–90 min" },
      { area: "Ubud, Sanur & Denpasar", fee: null, travel: "60–90 min" },
    ],
  },

  /**
   * Footer "Accepted Payments". The live footer listed VISA and Cash; Mastercard was added on the
   * owner's request (2026-09-24), matching the live villa page ("Visa, and Mastercard"). See PAY-01.
   * Each name needs a logo in src/components/layout/PaymentLogo.tsx.
   */
  acceptedPayments: ["VISA", "Mastercard", "Cash"],

  /** Found on the old blog pages. */
  social: {
    facebook: "https://www.facebook.com/spabalimoon",
    instagram: "https://www.instagram.com/spabalimoon_/",
  },

  /** Short "About Us" text used in the footer and the mobile menu. */
  aboutText:
    "Spa Bali Moon is a day spa in Seminyak that has offered traditional Balinese massage and spa treatments since 2009, at the spa and at villas and hotels across Bali.",
} as const;

/** Years in business, e.g. 17 in 2026. Used for the "17 + Years Experience" badge (CONTENT-10). */
export function yearsOfExperience(today: Date = new Date()): number {
  return today.getFullYear() - business.foundedYear;
}
