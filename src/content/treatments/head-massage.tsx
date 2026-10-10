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

/** /seminyak/head-massage/ — generated from the live page's component tree, section for section. */
export default function HeadMassagePage() {
  return (
    <div className="page-wrapper lh p-head-massage">
      <div className="jsx-head-massage head-massage-banner">
        <PageBanner
          image="/images/services/headmassage/headmassage-1.webp"
          subTitle="Stress-Free Therapy"
          titleSpan="Head Massage"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/headmassage/headmassage-2.webp"
        secondaryImage="/images/services/headmassage/headmassage-3.webp"
        subTitle="Scalp & Head Care"
        title={<>What Is a Head Massage?</>}
        text="Head Massage is a wellness treatment that focuses on the scalp, temples, neck, and upper shoulders using slow, rhythmic massage techniques. While commonly chosen for relaxation, it also helps ease muscle tightness around the head and neck caused by prolonged sitting, screen time, travelling, or everyday stress."
        feature1Title="Scalp Relaxation"
        feature1Text="Gentle movements help reduce tightness around the scalp and temples."
        feature2Title="Neck Comfort"
        feature2Text="Supports relaxation in the upper neck and shoulder muscles."
      />
      <div className="jsx-head-massage head-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/headmassage/headmassage-4.webp",
            "/images/services/headmassage/headmassage-5.webp",
            "/images/services/headmassage/headmassage-6.webp",
          ]}
          subTitle="Find Yours"
          title="Our Duration Options"
          text="Whether you need a short break between activities or a longer session to fully unwind, our Head Massage is available in several durations. Each treatment can be adjusted according to your preferred pressure and the areas that need extra attention."
          packages={[
            {
              price: "IDR 159K",
              name: "1 Hour",
              treatments: ["First-time guests", "Head and neck relaxation", "Quick stress relief"],
            },
            {
              price: "IDR 239K",
              name: "1.5 Hours",
              treatments: ["Extended scalp massage", "Head, neck, and shoulders", "Guests seeking deeper relaxation"],
            },
            {
              price: "IDR 330K",
              name: "2 Hours",
              treatments: ["Complete relaxation", "Longer wellness sessions", "Full upper-body comfort"],
            },
          ]}
        />
      </div>
      <div className="jsx-head-massage head-massage-funfact">
        <Funfacts
          items={[
            { title: "Scalp", text: "Care" },
            { title: "Neck", text: "Relaxation" },
            { title: "Adjustable", text: "Pressure" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/headmassage/headmassage-7.webp"
        subTitle="Daily Relief"
        title={<>How Can a Head Massage Help?</>}
        text="A Head Massage is a simple way to give focused attention to the head, scalp, neck, and surrounding areas. It can be a comfortable choice when you want to relax after a demanding day or ease the physical strain that can build up through work and travel. You may choose a Head Massage for reasons such as:"
        featuresLeft={["Easing tension around the head and neck", "Supporting scalp comfort", "Encouraging relaxation"]}
        featuresRight={[
          "Helping with feelings of mental fatigue",
          "Providing relief after travel or long workdays",
          "Adding a relaxing element to other spa treatments",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/headmassage/headmassage-8.webp"
        subTitle="Treatment Focus"
        badgeTopText="Relief Around"
        badgeBottomText="the Head"
        title={<>Which Areas Receive the Most Attention?</>}
        text="A Head Massage focuses on more than just the scalp. The therapist also works on nearby areas that can become tense during long workdays, travel, or daily activities. Depending on your needs, particular attention may be given to:"
        featuresLeft={["Scalp", "Temples", "Forehead"]}
        featuresRight={["Neck", "Upper shoulders", "Jaw area when needed"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/headmassage/headmassage-9.webp"
        subTitle="Massage Techniques"
        badgeTopText="Rhythm of"
        badgeBottomText="Release"
        title={<>What to Expect During a Head Massage Session</>}
        text="A Head Massage follows a gentle progression from the scalp to the surrounding areas, with the pressure adjusted throughout the treatment to keep you comfortable. We use different movements and techniques to work through areas that may feel tense, creating a calm and unhurried experience. Our typical session involves:"
        featuresLeft={[
          "Brief consultation before treatment",
          "Rhythmic movements across the scalp",
          "Circular pressure around the temples",
        ]}
        featuresRight={[
          "Massage of the neck and upper shoulders",
          "Pressure adjusted to your comfort level",
          "Gentle finishing movements to end the session",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-head-massage head-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/headmassage/headmassage-10.webp"
          imageTitle="Scalp Care"
          subTitle="Frequently Asked Questions"
          title={<>Head Massage Seminyak: FAQs</>}
          items={[
            {
              question: "Can a Head Massage help with stress?",
              answer:
                "Many guests choose Head Massage because the slow, repetitive techniques promote relaxation and help reduce feelings of physical and mental tension.",
            },
            {
              question: "Is oil always used during the treatment?",
              answer:
                "Not necessarily. Depending on your preference and the treatment style, the massage can be performed with or without massage oil.",
            },
            {
              question: "Can Head Massage help after long hours at a computer?",
              answer:
                "Yes. Prolonged screen time often creates tension around the neck, shoulders, and scalp. Head Massage focuses on these areas to improve overall comfort.",
            },
            {
              question: "Is Head Massage suitable before sleeping?",
              answer:
                "Many guests enjoy receiving a Head Massage in the evening because the relaxing techniques help the body unwind before rest.",
            },
            {
              question: "Can I receive Head Massage at my hotel or villa?",
              answer:
                "Yes. Professional home service is available throughout Seminyak and nearby areas for guests who prefer treatment in their accommodation.",
            },
            {
              question: "Does head massage help hair growth?",
              answer:
                "Head massage may support scalp circulation and relaxation, but there is limited evidence that it directly promotes hair growth. It can still be a soothing addition to your hair and scalp care routine.",
            },
            {
              question: "Why does a head massage feel so good?",
              answer:
                "A head massage can feel good because it helps relax the scalp, neck, and surrounding muscles. The gentle pressure and rhythmic movements can also help reduce tension and create a calming, relaxing feeling.",
            },
          ]}
        />
      </div>
      <div className="jsx-head-massage head-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Relax From Head to Toe"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-head-massage head-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/headmassage/headmassage-11.webp"
          title="Refresh Your Mind While Caring for Your Body"
          text="Travel, screens, and busy days concentrate tension around the head and neck. A Head Massage releases it without committing to a full-body treatment. At our spa, or through home service."
          closingText="Reserve your Head Massage session and give your upper body time to unwind."
        />
      </div>
    </div>
  );
}
