import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import Funfacts from "@/components/sections/Funfacts";
import TreatmentTestimonials from "@/components/sections/TreatmentTestimonials";
import AboutSplit from "@/components/sections/AboutSplit";
import AboutSplitAlt from "@/components/sections/AboutSplitAlt";
import FaqSection from "@/components/sections/FaqSection";
import ReserveCta from "@/components/sections/ReserveCta";
import ServiceSlider from "@/components/sections/ServiceSlider";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { homeServiceAreas, homeServiceSchema } from "@/lib/schema";

/**
 * The page's questions, also given to search engines as FAQPage data.
 * AEO roadmap R36 (17 Oct): every answer 40 to 60 words and complete on its
 * own, plus areas, tipping, hotel rules and couples in the villa.
 */
const FAQ = [
  {
    question: "How do I book a hotel or villa massage in Seminyak?",
    answer:
      "Book on WhatsApp at +62 878-6317-5144, open daily from 9am to 11pm. Send your hotel or villa name, your room number, the treatment and length you would like, the number of guests and your preferred time. We confirm availability and the total price, including the home service fee (IDR 75.000 per therapist in Seminyak), before your therapist sets off.",
  },
  {
    question: "How long does it take for the therapist to arrive?",
    answer:
      "Our therapists typically arrive within 30 to 60 minutes at hotels and villas in Seminyak and nearby areas, depending on your location, traffic and therapist availability at the time of booking. If you need a set time, such as after dinner or before an early start, message us earlier in the day and we will confirm the arrival time.",
  },
  {
    question: "Can I book a massage for more than one person?",
    answer:
      "Yes. Couples, families and groups can book several treatments at once at their hotel or villa, subject to therapist availability. In Seminyak, each therapist adds IDR 75.000 to the treatment prices, so two therapists add IDR 150.000. Message us in advance on WhatsApp with the number of guests and treatments, and we will confirm how many therapists can come.",
  },
  {
    question: "Can I book more than just a massage?",
    answer:
      "Yes. Selected spa treatments can also be arranged in your room, including facials, body scrubs, reflexology, cream baths, manicures and pedicures. They cost the same as at our Seminyak spa, plus IDR 75.000 per therapist in Seminyak. Tell us on WhatsApp which treatments you would like, and we will confirm what can be done at your villa or hotel.",
  },
  {
    question: "Is there an additional fee for home service?",
    answer:
      "Yes. An outcall fee of IDR 75.000 per therapist is added to the treatment price for hotels and villas in Seminyak, Petitenget and Kerobokan, and IDR 150.000 in Canggu, North Kuta and Kuta. The treatment itself costs the same as at our spa, so a one-hour Balinese massage is IDR 159.000 in the spa and IDR 234.000 in your room. In the Seminyak area, two therapists add IDR 150.000. Staying in a private home, or outside Seminyak? See our [outcall and home service massage across Bali](/outcall-home-service-massage/).",
  },
  {
    question: "How can I pay for my in-room treatment?",
    answer:
      "You pay your therapist after the treatment, in cash or by card (Visa or Mastercard). All prices are in Indonesian rupiah (IDR), and the home service fee of IDR 75.000 per therapist in the Seminyak area is added to the treatment price shown on our price list.",
  },
  {
    question: "Which areas do you cover for villa and hotel massage?",
    answer:
      "Our therapists come from our spa on Jl. Pangkung Sari to hotels and villas in Seminyak, Petitenget, Kerobokan, Canggu, North Kuta and Kuta. For Jimbaran, Uluwatu, Nusa Dua, Sanur, Denpasar or Ubud, message us your location on WhatsApp and we will confirm availability and any extra travel cost before you book.",
  },
  {
    question: "Should I tip the therapist?",
    answer:
      "Tipping is not required and is never added to your bill. If you enjoyed your in-room massage, a tip is appreciated but entirely up to you, and our therapists are paid either way. The price we confirm on WhatsApp, the treatment plus the home service fee per therapist, is the full price of your villa or hotel booking.",
  },
  {
    question: "Do hotels allow outside massage therapists?",
    answer:
      "Some hotels and resorts restrict outside therapists, particularly larger properties with their own spa, so please check with reception before booking. Private villas and guesthouses rarely have this restriction. If your hotel does not allow home service, you are welcome at our Seminyak spa at Jl. Pangkung Sari No. 30, open daily from 9am to 11pm.",
  },
  {
    question: "Can we have a couples massage in our villa?",
    answer:
      "Yes. Two therapists can give you a couples massage side by side in your villa or hotel room, bringing fresh linen, oils and everything the treatment needs. A one-hour couple Balinese massage is IDR 319.000 for two, plus IDR 150.000 home service fee for the two therapists in Seminyak. Tell us when you book so both therapists arrive together.",
  },
];

/** /villa-hotel-massage/ — generated from the live page's component tree, section for section. */
export default function VillaHotelMassagePage() {
  return (
    <div className="page-wrapper lh p-villa-hotel-massage">
      <JsonLd
        data={homeServiceSchema({
          path: "/villa-hotel-massage/",
          name: "Villa & Hotel Massage in Seminyak",
          description:
            "In-room massage for guests staying at hotels and villas in Seminyak: a Spa Bali Moon therapist usually arrives within 30 to 60 minutes. Spa prices plus IDR 75.000 per therapist.",
          areas: homeServiceAreas.near,
        })}
      />
      <FaqJsonLd items={FAQ} />
      <PageBanner
        subTitle="For Hotel & Villa Guests"
        titleSpan="Villa & Hotel Massage"
        title="for Guests Staying in Seminyak"
        // The quick answer under the H1 (copy rewrite, 15 Oct). AEO roadmap
        // R34 (17 Oct): this page is for guests staying at a hotel or villa in
        // Seminyak; home service anywhere in Bali is the outcall page.
        text="A Spa Bali Moon therapist comes to your hotel room or villa in Seminyak, usually within 30 to 60 minutes of booking, with fresh linen, oils and everything your treatment needs. Treatments cost the same as in the spa, plus IDR 75.000 per therapist in Seminyak, and couples can have two therapists side by side. Open daily 9am–11pm."
        image="/images/banners/villa-hotel-massage.webp"
        // Phones: the whole photo above the long banner text (owner, 22 Oct).
        mobilePhoto="/images/banners/villa-hotel-massage-wide-sm.webp"
      />
      <AboutIntro
        removeBottomPadding
        subTitle="Your Way to Relax"
        title={<>What Is an In-Room Massage?</>}
        text="An in-room massage is a spa treatment at your hotel, villa or private accommodation. Our therapist comes to you with fresh linen, oils and everything the treatment needs, so you don't travel across Seminyak for an appointment."
        feature1Title="No Travel Required"
        feature1Text="Enjoy a professional massage without leaving your hotel, villa, or private accommodation."
        feature2Title="Experienced Therapists"
        feature2Text="Skilled therapists bring professional massage and spa directly to your accommodation."
        primaryImage="/images/services/massagehotelvilla/massagehotelvilla-2.webp"
        secondaryImage="/images/services/massagehotelvilla/massagehotelvilla-3.webp"
      />
      <Funfacts
        items={[
          { title: "Delivered", text: "To Your Door" },
          { title: "Professional", text: "Therapists" },
          { title: "Flexible", text: "Treatments" },
          { title: "Easy WhatsApp", text: "Booking" },
        ]}
      />
      <TreatmentTestimonials />
      <AboutSplit
        subTitle="Stay In"
        title={<>The Spa Comes to Your Room</>}
        badgeTopText="Arrives in"
        badgeBottomText="Usually 30–60 min"
        text="A massage at your accommodation gives you more time to relax and less time spent travelling between appointments. It is a convenient choice after a long flight, a full day exploring Bali, or simply when you would rather enjoy professional spa care in the privacy of your own space."
        featuresLeft={[
          "No travel to and from the spa",
          "Professional treatments delivered to your accommodation",
          "Convenient after flights and long days of exploring",
        ]}
        featuresRight={[
          "Suitable for solo travellers, couples, families, and groups",
          "Massage and selected spa treatments available",
          "Available in Seminyak and nearby areas",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
        image="/images/services/massagehotelvilla/massagehotelvilla-4.webp"
      />
      <AboutSplitAlt
        subTitle="Treatments for Your Stay "
        badgeTopText="Popular in-room"
        badgeBottomText="Massage, scrub & facial"
        title={<>Treatments That Work Well in Your Hotel or Villa</>}
        text="The right treatment depends on how you want to feel after your session. A Balinese Massage offers a traditional full-body experience, Sports Massage can help ease tired muscles after physical activity, while body scrubs, facials, cream baths, and beauty treatments allow you to create a more complete in-room spa experience."
        featuresLeft={[
          "Balinese Massage for traditional full-body relaxation",
          "Sports Massage after exercise, surfing, or physical activity",
          "Thai Massage for assisted stretching",
          "Lymphatic Massage for gentle, light-pressure body care",
        ]}
        featuresRight={[
          "Body Scrub for smoother, refreshed skin",
          "Facials for cleansing and skin care",
          "Cream Bath for hair and scalp care",
          "Manicure and Pedicure for hands and feet",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
        image="/images/services/massagehotelvilla/massagehotelvilla-5.webp"
      />
      <AboutSplit
        badgeTopText="Booking"
        badgeBottomText="Open daily 9am–11pm"
        // No small heading: without one the section showed the default "About".
        subTitle=""
        title={<>{"Booking Your Hotel & Villa Massage"}</>}
        text={
          <>
            Send us your hotel or villa address and preferred time on WhatsApp, and we confirm the total and your
            therapist&apos;s arrival time. The home service fee is IDR 75.000 per therapist in Seminyak. Staying
            outside Seminyak? See our{" "}
            <Link prefetch={false} href="/outcall-home-service-massage/">
              home service across Bali
            </Link>
            .
          </>
        }
        featuresLeft={["Quick WhatsApp booking", "Flexible appointment times", "Same-day reservations"]}
        featuresRight={["Transparent pricing", "Cash & card accepted", "English-speaking team"]}
        image="/images/services/massagehotelvilla/massagehotelvilla-6.webp"
      />
      <div className="location-faq-paper section__decoration-top section__decoration-bottom bg-sub pb-100">
        <FaqSection
          largeTopPadding
          imageTitle="Relax in Your Room"
          subTitle="Frequently Asked Questions"
          title={<>In-Villa Massage Seminyak: FAQs</>}
          items={FAQ}
          image="/images/services/massagehotelvilla/massagehotelvilla-7.webp"
        />
      </div>
      <ReserveCta
        standardSpacing
        title="Book an In-Villa Massage in Bali"
        text="Our therapists bring massage and selected spa treatments to your hotel or villa around Seminyak, with fresh linen, oils and everything the treatment needs."
        closingText="Open daily 9am–11pm."
        backgroundImage="/images/services/massagehotelvilla/massagehotelvilla-8.webp"
      />
      <ServiceSlider
        paperBackground
        subTitle="Our Treatments"
        title={
          <>
            {"Villa & Hotel Massage "}
            <br />
            {" Treatments"}
          </>
        }
      />
    </div>
  );
}
