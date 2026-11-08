// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/contact/

/** CONTACT PAGE TEXT (/contact/) */
export const contactPage = {
  path: "/contact/",
  seo: {
    title: "Contact Spa Bali Moon | Day Spa in Seminyak, Bali",
    description: "Message us on WhatsApp to book at our Seminyak spa or your villa, open daily 9am–11pm. Find us at Jl. Pangkung Sari No. 30, Seminyak.",
  },
  hero: {
    eyebrow: "Contact Us",
    title: "Book Your Spa Experience in Seminyak",
    image: { src: "/images/gallery/contact/contact-1.webp", alt: "", width: 1920, height: 850 },
    buttonLabel: "Contact Us",
  },
  details: {
    eyebrow: "Questions or Bookings",
    heading: "Let’s Arrange Your Visit",
    text: "Contact Spa Bali Moon to check availability, ask about treatments and packages, or arrange a massage and spa service at our Seminyak location or through selected home service options.",
    // Hours and address as confirmed in the copy rewrite (15 Oct).
    items: [
      { title: "WhatsApp Message", text: "+62 878-6317-5144" },
      {
        title: "Visit anytime",
        text: "Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361",
      },
      { title: "Opening Times", text: "Open Daily: 9:00 - 23:00" },
    ],
  },
  // TODO FUNC-01: the old form sent messages through its own backend + Cloudflare Turnstile.
  // A new way to deliver form messages must be chosen (see migration-audit.md).
  form: {
    eyebrow: "Get in Touch",
    heading: "How Can We Help?",
    fields: [
      { label: "Name *", placeholder: "Your name" },
      { label: "Email *", placeholder: "you@example.com" },
      { label: "Subject *", placeholder: "What is this about?" },
      { label: "Phone / WhatsApp", placeholder: "+62 …" },
      { label: "Message *", placeholder: "Tell us what you need and when you would like to come in." },
    ],
    submitLabel: "Send Message",
    resetLabel: "Reset",
  },
  findUs: {
    eyebrow: "Find Us",
    name: "Spa Bali Moon",
    address: "Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361",
    hours: "Open daily · 9:00 – 23:00",
    directionsLabel: "Get Directions",
    // Google Maps embed from the old /contact/ page (same URL and title).
    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3276299088775!2d115.15814147462666!3d-8.678060388355467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2471415de2293%3A0xe1802d70253e801f!2sSpa%20Bali%20Moon!5e1!3m2!1sen!2sid!4v1778467217568!5m2!1sen!2sid",
      title: "Map showing Spa Bali Moon in Seminyak, Bali",
    },
  },
};
