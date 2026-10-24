import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import Funfacts from "@/components/sections/Funfacts";
import TreatmentTestimonials from "@/components/sections/TreatmentTestimonials";
import AboutSplit from "@/components/sections/AboutSplit";
import AboutSplitAlt from "@/components/sections/AboutSplitAlt";
import FaqSection from "@/components/sections/FaqSection";
import ReserveCta from "@/components/sections/ReserveCta";
import ServiceSlider from "@/components/sections/ServiceSlider";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { homeServiceSchema } from "@/lib/schema";
import { kutaPage } from "@/data/pages/massage-kuta";

/** The page's questions, also given to search engines as FAQPage data. */
const FAQ = [
  {
    question: "What type of massage is best after a long day in Kuta?",
    answer:
      "After a long day in Kuta, Balinese Massage is a popular choice for general relaxation, combining flowing movements, gentle stretching and acupressure. Guests who like firmer pressure may prefer Traditional Massage, while Sports Massage suits physically demanding days. Spa Bali Moon therapists can come to your Kuta hotel or villa from our Seminyak spa.",
  },
  {
    question: "Can I get a massage after surfing or spending time at the beach?",
    answer:
      "Yes. Sports Massage is often chosen after surfing, exercise or other physical activities because it focuses on areas affected by repetitive movement and muscle fatigue. A gentler treatment may be more suitable if the body feels particularly sensitive or exhausted. In Kuta, Spa Bali Moon therapists come to your hotel or villa.",
  },
  {
    question: "Do you offer massage at hotels and villas near Kuta?",
    answer:
      "Yes. Spa Bali Moon offers selected massage and spa treatments as home service at hotels, villas and private accommodation in Kuta and nearby areas. Prices match our Seminyak spa, plus a home service fee of IDR 150.000 per therapist in Kuta. For other areas, availability and the fee are confirmed on WhatsApp before you book. See our [home service massage](/outcall-home-service-massage/) page for prices and areas.",
  },
  {
    question: "How long do massage sessions usually last?",
    answer:
      "Massage sessions at Spa Bali Moon run from 30 minutes to 2 hours, depending on the treatment. Balinese massage, for example, is available for 1, 1.5 or 2 hours (IDR 159.000, IDR 239.000 and IDR 330.000 per person). In Kuta, where our therapists come to you, outcall adds IDR 150.000 per therapist.",
  },
  {
    question: "Can I combine a massage with another spa treatment?",
    answer:
      "Yes. Spa Bali Moon guests can combine selected treatments such as massage, facials, body scrubs, Cream Bath, Manicure and Pedicure, and other beauty services. Ready-made spa packages start at IDR 375.000 per person. Our team can recommend combinations based on the experience you are looking for; message us on WhatsApp at +62 878-6317-5144.",
  },
  {
    question: "What should I prepare before my massage?",
    answer:
      "Comfortable clothing and a little time to relax are usually all you need before a Spa Bali Moon massage. For outcall in Kuta, the therapist brings fresh linen, towels, oils and everything your treatment needs, so you do not need to supply anything. For certain treatments, your therapist may give specific guidance before the session.",
  },
  // Copy rewrite, 15 Oct.
  {
    question: "How much does a massage in Kuta cost?",
    answer:
      "A Spa Bali Moon outcall massage in Kuta costs the same as in our Seminyak spa, plus IDR 150.000 per therapist. A one-hour Balinese massage is IDR 159.000 per person, and traditional massage starts at IDR 90.000 for 30 minutes. For locations further out, we confirm any extra travel cost on WhatsApp before you book.",
  },
];

/** /massage-kuta/ — generated from the live page's component tree, section for section. */
export default function MassageKutaPage() {
  return (
    <div className="page-wrapper lh p-massage-kuta">
      <FaqJsonLd items={FAQ} />
      {/* Home service in Kuta: the spa itself is in Seminyak (owner, 24 Oct: no second address). */}
      <JsonLd
        data={homeServiceSchema({
          path: "/massage-kuta/",
          name: "Massage in Kuta",
          description: kutaPage.seo.description,
          areas: ["Kuta", "North Kuta"],
        })}
      />
      <PageBanner
        subTitle="After a Day in the Sun"
        titleSpan="Massage in Kuta, Bali:"
        // Copy rewrite, 15 Oct: the spa is in Seminyak, so Kuta is outcall.
        title="Outcall to Your Hotel or Villa"
        text="In Kuta, a Spa Bali Moon therapist comes to your hotel, villa or home from our spa in Seminyak, usually a 30 to 50-minute drive. Treatments cost the same as in the spa, plus IDR 150.000 per therapist in Kuta, and the fee for locations further out is confirmed on WhatsApp before you book. Open daily 9am–11pm."
        image="/images/banners/massage-kuta.webp"
        // Phones: the whole photo above the long banner text (owner, 22 Oct).
        mobilePhoto="/images/banners/massage-kuta-wide-sm.webp"
      />
      <AboutIntro
        removeBottomPadding
        subTitle="A Moment to Reset"
        title={<>What a Massage in Kuta Helps With</>}
        text="Kuta is known for long beach days, surfing, sightseeing, and a lively holiday atmosphere, but all that activity can leave the body feeling stiff, heavy, or overtired. A professional massage offers a chance to slow down, release built-up tension, and feel more comfortable again."
        feature1Title="Restore a Lighter Feeling"
        feature1Text="Targeted massage techniques help release tightness after long days of exploring Bali."
        feature2Title="Gentle Finish"
        feature2Text="Slow, flowing movements and carefully adjusted pressure help the body relax."
        primaryImage="/images/services/massagekuta/massagekuta-2.webp"
        secondaryImage="/images/services/massagekuta/massagekuta-3.webp"
      />
      <Funfacts
        items={[
          { title: "Traditional", text: "Techniques" },
          { title: "Experienced", text: "Therapists" },
          { title: "Flexible", text: "Treatments" },
          { title: "Hotel & Villa", text: "Service" },
        ]}
      />
      <TreatmentTestimonials />
      <AboutSplit
        subTitle="Treatment Options"
        title={<>Massage Treatments Available in Kuta</>}
        badgeTopText="In Kuta"
        badgeBottomText="At your hotel or villa"
        text="The right massage depends on what your body needs. Choose Balinese Massage for traditional relaxation, Traditional Massage for firmer pressure, Thai Massage for stretching, Sports Massage after physical activity, or Lymphatic Massage for gentle, rhythmic movements."
        featuresLeft={[
          "Balinese Massage for full-body relaxation",
          "Traditional Massage for firmer pressure",
          "Thai Massage for stretching and mobility",
          "Sports Massage after exercise or surfing",
        ]}
        featuresRight={[
          "Lymphatic Massage for gentle, light-pressure care",
          "Couple Massage for shared relaxation",
          "Head Massage for scalp, neck, and shoulder tension",
          "Foot Reflexology for pressure-point foot care",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
        image="/images/services/massagekuta/massagekuta-4.webp"
      />
      <AboutSplitAlt
        subTitle="Complete Experience"
        badgeTopText="Add on"
        badgeBottomText="Facial, scrub or cream bath"
        title={<>Spa Treatments Beyond Massage in Kuta</>}
        text="A relaxing spa experience can include more than massage. Add a Bali Moon Facial, Body Scrub, Cream Bath, Manicure, Pedicure, or other beauty treatments to create a more complete session."
        featuresLeft={[
          "Bali Moon Facial with Tea Tree or Gold Mask options",
          "Body Scrub for smoother, refreshed skin",
          "Cream Bath for hair, scalp, and relaxation care",
        ]}
        featuresRight={[
          "Manicure and Pedicure for hands and feet",
          "Ear Candle for gentle relaxation",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
        image="/images/services/massagekuta/massagekuta-5.webp"
      />
      <AboutSplit
        badgeTopText="Booking"
        badgeBottomText="Just pick a time"
        // No small heading: without one the section showed the default "About".
        subTitle=""
        title={<>Booking a Massage in Kuta</>}
        text="Send your Kuta hotel or villa address and preferred time on WhatsApp. We confirm the total, including IDR 150.000 per therapist, and your therapist's arrival time."
        featuresLeft={["Same-day appointments", "Flexible timing", "Quick WhatsApp booking"]}
        featuresRight={["Clear, honest pricing", "Cash & card accepted", "English-speaking team"]}
        image="/images/services/massagekuta/massagekuta-6.webp"
      />
      <div className="location-faq-paper section__decoration-top section__decoration-bottom bg-sub pb-100">
        <FaqSection
          largeTopPadding
          imageTitle="Unwind in Kuta"
          subTitle="Frequently Asked Questions"
          title={<>Massage Kuta: FAQs</>}
          items={FAQ}
          image="/images/services/massagekuta/massagekuta-7.webp"
        />
      </div>
      <ReserveCta
        standardSpacing
        title="Take Time to Feel Better in Kuta"
        text="When the pace catches up with you, a massage at your hotel or villa is a welcome pause: Balinese massage, sports massage after surfing, or a facial."
        closingText="Our therapists come to hotels, villas and homes across Kuta for IDR 150.000 per therapist, or you can visit our spa in Seminyak."
        backgroundImage="/images/services/massagekuta/massagekuta-8.webp"
      />
      <ServiceSlider
        paperBackground
        subTitle="Our Treatments"
        title={
          <>
            {"Massage Services in "}
            <br />
            {" Kuta"}
          </>
        }
      />
    </div>
  );
}
