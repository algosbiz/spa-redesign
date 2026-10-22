// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/reservation/
// HOURS-01 / FEE-01 settled: open 9am-11pm; the fee is "from IDR 75.000" (business.homeService).

/** RESERVATION PAGE TEXT (/reservation/) — booking happens on WhatsApp. */
export const reservationPage = {
  path: "/reservation/",
  seo: {
    title: "Reserve your massage treatment at Spa Bali Moon",
    description: "If you want to have quality massage treatments around Seminyak, our therapists are always available and ready to give you the best services.",
  },
  eyebrow: "Your Spa Experience is One Click Away",
  // TODO SEO-02: the old page had no H1. This heading is shown as the H1 once approved.
  heading: "Book Your Treatment",
  text: "We value your time and aim to make the reservation process as smooth as possible. Simply click the button below to book your appointment, and our team will take care of the arrangements to ensure everything is ready for your scheduled time.",
  options: [
    {
      title: "Home Service Massage (Hotel & Villa)",
      text: "Treat yourself to a relaxing spa experience at your home, hotel, or villa",
      items: [
        {
          title: "We Bring Everything",
          text: "Our therapists arrive with fresh linens, premium oils, and all the tools needed for your treatment.",
        },
        {
          title: "Stress-Free Setup",
          text: "No preparation is needed, simply relax while we take care of transport and setup.",
        },
        {
          title: "Flexible Hours",
          text: "Available daily from 9:00 AM to 11:00 PM. Pick a time and location that works best for you.",
        },
        {
          title: "Quick Booking",
          text: "Message us via WhatsApp to confirm your treatment and address. Home service is available for an additional fee from IDR 75.000 per therapist.",
        },
      ],
    },
    {
      title: "Day Spa Bookings (Seminyak Location)",
      text: "Visit our spa in Seminyak to enjoy a peaceful and comfortable space",
      items: [
        { title: "Open Daily", text: "From 9:00 AM to 11:00 PM—walk-ins welcome or book ahead." },
        { title: "Tranquil Setting", text: "Air-conditioned rooms, soft music, and a calming ambiance for your comfort." },
        { title: "Variety of Treatments", text: "Choose from Balinese massage, facials, coconut oil therapy, and more." },
        { title: "Easy Reservations", text: "Tap our WhatsApp button to book your preferred time quickly and easily." },
      ],
    },
  ],
  buttonLabel: "Book Now",
  note: "Home service extra from IDR 75.000 per therapist",
};
