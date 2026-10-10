import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import TreatmentPricing from "@/components/sections/TreatmentPricing";
import Funfacts from "@/components/sections/Funfacts";
import TreatmentTestimonials from "@/components/sections/TreatmentTestimonials";
import AboutSplit from "@/components/sections/AboutSplit";
import AboutSplitAlt from "@/components/sections/AboutSplitAlt";
import FloralDecoration from "@/components/ui/FloralDecoration";
import FaqSection from "@/components/sections/FaqSection";
import ServiceSlider from "@/components/sections/ServiceSlider";
import ReserveCta from "@/components/sections/ReserveCta";

/** /seminyak/foot-reflexology/ — generated from the live page's component tree, section for section. */
export default function FootReflexologyPage() {
  return (
    <div className="page-wrapper lh p-foot-reflexology">
      <div className="jsx-foot-reflexology foot-reflexology-banner">
        <PageBanner
          image="/images/services/footreflexology/footreflexology-1.webp"
          subTitle="Natural Balance"
          titleSpan="Foot Reflexology"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/footreflexology/footreflexology-2.webp"
        secondaryImage="/images/services/footreflexology/footreflexology-3.webp"
        subTitle="Understanding Reflexology"
        title={<>What Is Foot Reflexology and How Does It Work?</>}
        text="Foot Reflexology is a traditional wellness therapy that applies controlled pressure to specific reflex points on the feet, which are traditionally believed to correspond with different areas of the body. Using a structured reflex-point technique, the treatment helps encourage relaxation, supports circulation in the feet, and relieves the sensation of tiredness after travel, long walks, or daily activities."
        feature1Title="Reflex Point Therapy"
        feature1Text="Uses targeted pressure on specific areas of the feet rather than general massage strokes."
        feature2Title="Whole-Body Relaxation"
        feature2Text="Encourages a calming effect that many guests experience beyond the feet themselves."
      />
      <div className="jsx-foot-reflexology foot-reflexology-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/footreflexology/footreflexology-4.webp",
            "/images/services/footreflexology/footreflexology-5.webp",
            "/images/services/footreflexology/footreflexology-6.webp",
          ]}
          subTitle="Session Options"
          title="Choose the Session That Fits You"
          text="Every Foot Reflexology session follows the same structured pressure-point technique, while longer durations allow additional time to work across more reflex areas at a relaxed pace. Select the option that best matches your comfort and schedule."
          packages={[
            {
              price: "IDR 99K",
              name: "30 Minutes",
              treatments: ["Quick relaxation", "Guests with limited time", "Tired feet after sightseeing"],
            },
            {
              price: "IDR 169K",
              name: "1 Hour",
              treatments: ["Complete foot reflexology session", "Daily foot fatigue", "Better overall relaxation"],
            },
            {
              price: "IDR 239K",
              name: "1.5 Hours",
              treatments: [
                "Longer reflexology experience",
                "Guests wanting extra relaxation",
                "Extended pressure-point treatment",
              ],
            },
          ]}
        />
      </div>
      <div className="jsx-foot-reflexology foot-reflexology-funfact">
        <Funfacts
          items={[
            { title: "Reflex", text: "Point Therapy" },
            { title: "Flexible", text: "Booking" },
            { title: "Gentle", text: "Pressure" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/footreflexology/footreflexology-7.webp"
        subTitle="Benefits of Foot Reflexology"
        title={<>A Simple Way to Refresh Tired Feet</>}
        text="After a day of walking, standing, travelling, or exploring Bali, your feet can start to feel tired and heavy. Foot Reflexology offers a simple way to give them focused care while creating a relaxing wellness experience. You may choose this treatment for reasons such as:"
        featuresLeft={[
          "Helping tired feet feel lighter",
          "Encouraging healthy local circulation",
          "Promoting relaxation after long walks",
        ]}
        featuresRight={[
          "Supporting everyday foot comfort",
          "Fitting easily into regular wellness routines",
          "Providing soothing care for travellers in Bali",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/footreflexology/footreflexology-8.webp"
        subTitle="Reflex Points"
        badgeTopText="The Reflex"
        badgeBottomText="Map"
        title={<>Where Does Foot Reflexology Focus?</>}
        text="Foot Reflexology uses focused pressure on specific areas of the feet based on traditional reflexology principles. Rather than applying the same pressure everywhere, we work through different zones to create a balanced and comfortable treatment. Our session may focus on:"
        featuresLeft={["Toes and forefoot reflex points", "The ball of the foot", "The foot arch"]}
        featuresRight={["The heel area", "Inner and outer foot zones", "Lower leg finishing techniques"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/footreflexology/footreflexology-9.webp"
        subTitle="The Technique"
        badgeTopText="A Guided"
        badgeBottomText="Sequence"
        title={<>What Is a Foot Reflexology Session Like?</>}
        text="A Foot Reflexology session follows a gentle, structured approach that combines warm-up movements with focused pressure on selected reflex points. The therapist adjusts the technique throughout the treatment to keep the pressure comfortable while maintaining a steady rhythm. The session typically involves:"
        featuresLeft={[
          "Gentle warm-up techniques",
          "A structured reflex point sequence",
          "Thumb and finger pressure techniques",
        ]}
        featuresRight={[
          "Controlled adjustments to pressure",
          "Relaxing finishing movements",
          "A comfortable treatment experience from start to finish",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-foot-reflexology foot-reflexology-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/footreflexology/footreflexology-10.webp"
          imageTitle="Reflex Points"
          subTitle="Frequently Asked Questions"
          title={<>Foot Reflexology Seminyak: FAQs</>}
          items={[
            {
              question: "Is Foot Reflexology the same as a Foot Massage?",
              answer:
                "Not exactly. Foot Massage focuses on relaxing muscles and relieving soreness, while Foot Reflexology applies pressure to specific reflex points using a structured technique.",
            },
            {
              question: "Does Foot Reflexology hurt?",
              answer:
                "Most guests find the treatment comfortable. Some reflex points may feel more sensitive than others, but pressure is always adjusted according to your comfort.",
            },
            {
              question: "Is Foot Reflexology suitable after walking around Bali?",
              answer:
                "Yes. Many guests book Foot Reflexology after sightseeing, shopping, hiking, or spending long hours on their feet.",
            },
            {
              question: "Can I combine Foot Reflexology with another treatment?",
              answer:
                "Absolutely. It is commonly paired with full-body massage, back massage, or facial treatments for a more complete wellness experience.",
            },
            {
              question: "Is home service available?",
              answer:
                "Yes. The treatment is available at our spa as well as selected villas and hotels throughout Seminyak and nearby areas.",
            },
          ]}
        />
      </div>
      <div className="jsx-foot-reflexology foot-reflexology-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Step Into More Feel-Good Treatments"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-foot-reflexology foot-reflexology-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/footreflexology/footreflexology-11.webp"
          title="Restore Comfort to Every Step"
          text="Long days exploring Bali end with tired feet. Foot Reflexology helps them recover through carefully applied pressure-point work. Visit our spa, or stay put with home service."
          closingText="Reserve your Foot Reflexology session and bring comfort back to every step."
        />
      </div>
    </div>
  );
}
