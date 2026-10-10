import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import Funfacts from "@/components/sections/Funfacts";
import TreatmentTestimonials from "@/components/sections/TreatmentTestimonials";
import AboutSplit from "@/components/sections/AboutSplit";
import AboutSplitAlt from "@/components/sections/AboutSplitAlt";
import FaqSection from "@/components/sections/FaqSection";
import ReserveCta from "@/components/sections/ReserveCta";
import ServiceSlider from "@/components/sections/ServiceSlider";

/** /massage-kuta/ — generated from the live page's component tree, section for section. */
export default function MassageKutaPage() {
  return (
    <div className="page-wrapper lh p-massage-kuta">
      <PageBanner
        subTitle="After a Day in the Sun"
        titleSpan="Massage in Kuta, Bali:"
        title="In-Spa and Outcall"
        buttonText="Book Now"
        image="/images/services/massagekuta/massagekuta-1.webp"
      />
      <AboutIntro
        removeBottomPadding
        subTitle="A Moment to Reset"
        title={<>What Can a Massage in Kuta Help With?</>}
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
        text="The right massage depends on what your body needs. Choose Balinese Massage for traditional relaxation, Traditional Massage for firmer pressure, Thai Massage for stretching, Sport Massage after physical activity, or Lymphatic Massage for gentle, rhythmic movements."
        featuresLeft={[
          "Balinese Massage for full-body relaxation",
          "Traditional Massage for firmer pressure",
          "Thai Massage for stretching and mobility",
          "Sport Massage after exercise or surfing",
        ]}
        featuresRight={[
          "Lymphatic Massage for gentle, light-pressure care",
          "Bali Moon Facial for cleansing and skin refreshment",
          "Head Massage for scalp, neck, and shoulder tension",
          "Foot Reflexology for pressure-point foot care",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
        image="/images/services/massagekuta/massagekuta-4.webp"
      />
      <AboutSplitAlt
        subTitle="Complete Experience"
        badgeTopText="Make It a"
        badgeBottomText="Full Spa Day"
        title={<>Spa Treatments Beyond Massage in Kuta</>}
        text="A relaxing spa experience can include more than massage. Add a Bali Moon Facial, Body Scrub, Cream Bath, Manicure, Pedicure, or other beauty treatments to create a more complete session."
        featuresLeft={[
          "Bali Moon Facial with Tea Tree or Gold Mask options",
          "Body Scrub for smoother, refreshed skin",
          "Cream Bath for hair, scalp, and relaxation care",
        ]}
        featuresRight={[
          "Manicure and Pedicure for hands and feet",
          "Couple Massage for shared relaxation",
          "Selected treatments available at hotels and villas",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
        image="/images/services/massagekuta/massagekuta-5.webp"
      />
      <AboutSplit
        badgeTopText="Just Pick"
        badgeBottomText="a Time"
        title={<>Booking a Massage in Kuta</>}
        text="Just share your Kuta hotel or address and a preferred time. Our friendly team will confirm quickly and send a therapist ready to help you relax."
        featuresLeft={["Same-day appointments", "Flexible timing", "Quick WhatsApp booking"]}
        featuresRight={["Clear, honest pricing", "Cash & card accepted", "English-speaking team"]}
        image="/images/services/massagekuta/massagekuta-6.webp"
      />
      <div className="location-faq-paper section__decoration-top section__decoration-bottom bg-sub pb-100">
        <FaqSection
          largeTopPadding
          imageTitle="Unwind In Kuta"
          subTitle="Frequently Asked Questions"
          title={<>Massage Kuta: FAQs</>}
          items={[
            {
              question: "What type of massage is best after a long day in Kuta?",
              answer:
                "Balinese Massage is a popular choice for general relaxation because it combines flowing massage movements, gentle stretching, and acupressure. Guests who prefer firmer pressure may prefer Traditional Massage, while Sport Massage is suitable after more physically demanding activities.",
            },
            {
              question: "Can I get a massage after surfing or spending time at the beach?",
              answer:
                "Yes. Sport Massage is often chosen after surfing, exercise, or other physical activities because it focuses on areas affected by repetitive movement and muscle fatigue. A gentler treatment may be more suitable if the body feels particularly sensitive or exhausted.",
            },
            {
              question: "Do you offer massage at hotels and villas near Kuta?",
              answer:
                "Yes. Selected massage and spa treatments can be arranged as home service at hotels, villas, and private accommodations in nearby areas. Availability and travel fees depend on the location and therapist availability.",
            },
            {
              question: "How long do massage sessions usually last?",
              answer:
                "Treatment durations vary depending on the service. Most massage sessions are available in options ranging from approximately one hour to longer sessions, allowing guests to choose according to their schedule and preferred level of relaxation.",
            },
            {
              question: "Can I combine a massage with another spa treatment?",
              answer:
                "Yes. Guests can combine selected treatments such as massage, facials, body scrubs, Cream Bath, Manicure and Pedicure, and other beauty services. Our team can help recommend combinations based on the experience you are looking for.",
            },
            {
              question: "What should I prepare before my massage?",
              answer:
                "Comfortable clothing and a little time to relax are usually all you need. For certain treatments, your therapist may provide specific guidance before the session to help you enjoy the treatment comfortably.",
            },
          ]}
          image="/images/services/massagekuta/massagekuta-7.webp"
        />
      </div>
      <ReserveCta
        standardSpacing
        title="Take Time to Feel Better in Kuta"
        text="When the pace catches up with you, a professional massage is a welcome pause. Traditional Balinese therapies, targeted recovery work, and relaxing beauty treatments."
        closingText="Visit us for your treatment or ask about selected home service options at your hotel or villa in nearby areas."
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
