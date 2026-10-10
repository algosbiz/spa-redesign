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

/** /seminyak/lymphatic-drainage-massage/ — generated from the live page's component tree, section for section. */
export default function LymphaticDrainageMassagePage() {
  return (
    <div className="page-wrapper lh p-lymphatic-drainage-massage">
      <div className="jsx-lymphatic-drainage-massage lymphatic-massage-banner">
        <PageBanner
          image="/images/services/lymphaticmassage/lymphaticmassage-1.webp"
          subTitle="Restore Your Flow"
          titleSpan="Lymphatic Drainage Massage"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/lymphaticmassage/lymphaticmassage-2.webp"
        secondaryImage="/images/services/lymphaticmassage/lymphaticmassage-3.webp"
        subTitle="Hidden Network"
        title={<>What Does the Lymphatic System Actually Do?</>}
        text="The lymphatic system is a network of vessels and lymph nodes that helps move excess fluid, transport immune cells, and remove everyday waste from body tissues. Unlike the circulatory system, it relies on breathing, movement, and muscle activity to keep lymph flowing. When this flow slows, fluid may build up, causing heaviness, puffiness, or mild swelling. Lymphatic Massage uses slow, rhythmic techniques to encourage natural lymph flow and help the body feel lighter and more balanced."
        feature1Title="Gentle Drainage"
        feature1Text="Encourages healthy lymph movement using light, rhythmic strokes."
        feature2Title="Body Balance"
        feature2Text="Supports circulation, fluid movement, and everyday comfort."
      />
      <div className="jsx-lymphatic-drainage-massage lymphatic-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/lymphaticmassage/lymphaticmassage-4.webp",
            "/images/services/lymphaticmassage/lymphaticmassage-5.webp",
            "/images/services/lymphaticmassage/lymphaticmassage-6.webp",
          ]}
          subTitle="Find Yours"
          title="Lymphatic Drainage Massage Session Options"
          text="Every session follows gentle lymphatic drainage principles, with longer durations allowing our therapists to work more thoroughly across different drainage pathways. Each treatment offers a calm, unhurried experience, whether you're easing fluid retention after travel or simply enjoying deeper relaxation."
          packages={[
            {
              price: "IDR 300K",
              name: "1 Hour",
              treatments: ["First lymphatic massage", "Mild swelling", "Recovery after travel"],
            },
            {
              price: "IDR 440K",
              name: "1.5 Hours",
              treatments: ["Full-body lymphatic drainage", "Fluid retention", "Deeper relaxation"],
            },
            {
              price: "IDR 580K",
              name: "2 Hours",
              treatments: ["Comprehensive body treatment", "Multiple focus areas", "Extended recovery session"],
            },
          ]}
        />
      </div>
      <div className="jsx-lymphatic-drainage-massage lymphatic-massage-funfact">
        <Funfacts
          items={[
            { title: "Experienced", text: "Therapists" },
            { title: "Flexible", text: "Booking" },
            { title: "Slimming", text: "Cream" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/lymphaticmassage/lymphaticmassage-7.webp"
        subTitle="Body Recovery"
        title={<>When Lymphatic Massage Helps</>}
        text="Lymphatic Massage may be a suitable choice when the body feels heavy, puffy, or less comfortable after changes in routine or periods of limited movement. It uses gentle massage techniques to support the body's natural lymphatic flow and can be incorporated into a wider wellness routine. We may consider this treatment for situations such as:"
        featuresLeft={[
          "Reducing feelings of fluid retention",
          "Supporting natural lymphatic circulation",
          "Easing feelings of puffiness",
        ]}
        featuresRight={[
          "Supporting comfort after travel",
          "Promoting a lighter, more comfortable feeling",
          "Adding gentle care to a regular wellness routine",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/lymphaticmassage/lymphaticmassage-8.webp"
        subTitle="Guided Pathways"
        badgeTopText="Follow the"
        badgeBottomText="Flow"
        title={<>Which Areas Does Lymphatic Drainage Massage Target?</>}
        text="Lymphatic Massage uses gentle, rhythmic movements across specific areas of the body to support natural lymphatic flow. The therapist works through key areas in a gradual sequence, with attention given to regions where lymphatic pathways are commonly found. Depending on the treatment, attention may be given to:"
        featuresLeft={["Neck and collarbone", "Underarms", "Abdomen", "Lower back"]}
        featuresRight={["Upper legs", "Calves", "Ankles"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/lymphaticmassage/lymphaticmassage-9.webp"
        subTitle="The Experience"
        badgeTopText="Lightness in"
        badgeBottomText="Motion"
        title={<>What to Expect from a Lymphatic Massage</>}
        text="A Lymphatic Massage follows a gentle and gradual approach designed to keep the body comfortable throughout the session. The therapist first discusses your needs before using light, rhythmic movements across selected areas of the body. The session generally follows these steps:"
        featuresLeft={["Brief body consultation", "Gentle oil application", "Slimming cream massage"]}
        featuresRight={[
          "Slow rhythmic drainage techniques",
          "Treatment along lymph pathways",
          "Relaxing full-body finish",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-lymphatic-drainage-massage lymphatic-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/lymphaticmassage/lymphaticmassage-10.webp"
          imageTitle="Gentle Drainage"
          subTitle="Frequently Asked Questions"
          title={<>Lymphatic Drainage Massage Seminyak: FAQs</>}
          items={[
            {
              question: "Is Lymphatic Massage the same as Deep Tissue Massage?",
              answer:
                "No. Deep Tissue Massage works on deeper muscle layers using firm pressure, while Lymphatic Massage uses very light, rhythmic movements that follow the body's lymphatic pathways to encourage natural fluid movement.",
            },
            {
              question: "Can Lymphatic Massage help with swollen legs after travelling?",
              answer:
                "Yes. Long flights, road trips, or extended periods of sitting may contribute to temporary fluid retention. Gentle lymphatic drainage is commonly chosen to help the legs feel lighter and more comfortable afterward.",
            },
            {
              question: "Does Lymphatic Massage remove toxins from the body?",
              answer:
                "The lymphatic system naturally helps transport waste products and excess fluid. Lymphatic Massage supports this normal function by encouraging healthy lymph movement, but it should not be considered a medical detox treatment.",
            },
            {
              question: "Will the massage feel gentle?",
              answer:
                "Yes. The pressure is intentionally light because lymph vessels sit close to the surface of the skin. Strong pressure is not necessary to encourage healthy lymph flow.",
            },
            {
              question: "Can I combine Lymphatic Massage with other spa treatments?",
              answer:
                "Absolutely. Many guests combine it with facials, reflexology, or relaxing body treatments to create a more complete wellness experience.",
            },
            {
              question: "Is lymphatic drainage real?",
              answer:
                "Yes. Lymphatic drainage is a gentle massage technique designed to encourage the movement of lymph fluid through the body. It is commonly used to help manage swelling and support relaxation.",
            },
            {
              question: "Does lymphatic drainage work on the face?",
              answer:
                "Yes. Facial lymphatic drainage uses gentle movements around the face and neck to encourage lymph flow. It may help reduce temporary puffiness and leave the face feeling refreshed.",
            },
            {
              question: "Can lymphatic drainage make you sick?",
              answer:
                "Lymphatic drainage is generally gentle, but some people may feel tired, thirsty, or slightly light-headed afterward. Drinking water and resting after the treatment can help. If you feel unwell or have a medical condition, consult a healthcare professional before having lymphatic drainage.",
            },
          ]}
        />
      </div>
      <div className="jsx-lymphatic-drainage-massage lymphatic-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Keep Your Wellness Journey Flowing"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-lymphatic-drainage-massage lymphatic-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/lymphaticmassage/lymphaticmassage-11.webp"
          title="Renew Balance from the Inside Out with Lymphatic Massage"
          text="Gentle, rhythmic techniques that support the body's natural drainage and leave it feeling lighter, ideal after travel or long periods of sitting. At our spa, or at your accommodation."
          closingText="Reserve a session designed around your wellness needs and experience gentle relaxation wherever you stay in Bali."
        />
      </div>
    </div>
  );
}
