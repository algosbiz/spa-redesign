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

/** /seminyak/traditional-massage/ — generated from the live page's component tree, section for section. */
export default function TraditionalMassagePage() {
  return (
    <div className="page-wrapper lh p-traditional-massage">
      <div className="jsx-traditional-massage traditional-massage-banner">
        <PageBanner
          image="/images/services/traditionalmassage/traditionalmassage-1.webp"
          subTitle="Firm Body Care"
          titleSpan="Traditional Massage"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/traditionalmassage/traditionalmassage-2.webp"
        secondaryImage="/images/services/traditionalmassage/traditionalmassage-3.webp"
        subTitle="Traditional Wellness Support"
        title={<>What Makes Traditional Massage Different?</>}
        text="Traditional Massage is a hands-on body treatment that uses firmer pressure, kneading movements, and focused techniques to release muscle tension throughout the body. Unlike lighter relaxation massages, this treatment works more directly on areas that feel stiff or overworked, helping improve comfort, mobility, and overall body relaxation."
        feature1Title="Firm Pressure"
        feature1Text="Uses stronger massage movements to address areas with built-up tension."
        feature2Title="Full Body Relief"
        feature2Text="Targets common tension areas while supporting overall relaxation."
      />
      <div className="jsx-traditional-massage traditional-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/traditionalmassage/traditionalmassage-12.webp",
            "/images/services/traditionalmassage/traditionalmassage-4.webp",
            "/images/services/traditionalmassage/traditionalmassage-5.webp",
            "/images/services/traditionalmassage/traditionalmassage-6.webp",
          ]}
          subTitle="Select Yours"
          title="Our Session Options"
          text="Our Traditional Massage session provides enough time for therapists to work through areas that hold tension. Choose a shorter treatment for focused relaxation or a longer session for more complete body care."
          packages={[
            {
              price: "IDR 90K",
              name: "30 Minutes",
              image: "/images/services/traditionalmassage/traditionalmassage-12.webp",
              treatments: ["Quick relief for one tense area", "A short break between plans", "Guests short on time"],
            },
            {
              price: "IDR 169K",
              name: "1 Hour",
              treatments: [
                "Mild muscle stiffness",
                "Focused attention on specific areas",
                "Guests looking for a refreshing massage",
              ],
            },
            {
              price: "IDR 259K",
              name: "1.5 Hours",
              treatments: [
                "Multiple tension areas",
                "Longer relaxation experience",
                "Guests wanting more detailed treatment",
              ],
            },
            {
              price: "IDR 339K",
              name: "2 Hours",
              treatments: [
                "Deeper muscle comfort",
                "Full body massage experience",
                "Guests with more time for relaxation",
              ],
            },
          ]}
        />
      </div>
      <div className="jsx-traditional-massage traditional-massage-funfact">
        <Funfacts
          items={[
            { title: "Traditional", text: "Techniques" },
            { title: "Adjustable", text: "Pressure" },
            { title: "Warm Oil", text: "Application" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/traditionalmassage/traditionalmassage-7.webp"
        subTitle="Gentle Relief"
        title={<>Why Do Guests Choose Traditional Massage?</>}
        text="Traditional Massage is popular among guests who prefer a stronger touch compared to gentle relaxation treatments. It is often selected after busy schedules, long journeys, physical activities, or when the body feels heavy from daily tension."
        featuresLeft={[
          "Helps ease stiff and tired muscles",
          "Supports better body comfort",
          "Relieves tension from daily activities",
        ]}
        featuresRight={[
          "Encourages smoother movement",
          "Improves relaxation through firm techniques",
          "Suitable after travel or physical exertion",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/traditionalmassage/traditionalmassage-8.webp"
        subTitle="Treatment Focus"
        badgeTopText="Relief Where"
        badgeBottomText="You Feel It"
        title={<>Which Areas Receive the Most Attention?</>}
        text="Muscle tension often develops in areas that carry repeated pressure throughout the day. During Traditional Massage, our therapists adjust their approach based on your body condition and focus on areas that need extra care."
        featuresLeft={[
          "Back from prolonged sitting or activity",
          "Shoulders and neck from daily posture",
          "Legs after walking or exercise",
        ]}
        featuresRight={[
          "Arms from repetitive movement",
          "Lower back from physical strain",
          "Whole body for general relaxation",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/traditionalmassage/traditionalmassage-9.webp"
        subTitle="The Approach"
        badgeTopText="A Timeless"
        badgeBottomText="Technique"
        title={<>Inside a Traditional Massage Session</>}
        text="Traditional Massage combines firm hand movements with warm oil application to create smoother and more comfortable techniques. Our therapists use kneading, pressing, and acupressure-inspired movements to release areas of tightness while maintaining communication throughout the session. Pressure can be adjusted based on your comfort and body response."
        featuresLeft={["Warm oil preparation", "Kneading techniques", "Firm pressing movements"]}
        featuresRight={[
          "Acupressure-inspired methods",
          "Targeted work on tense areas",
          "Pressure adjusted during treatment",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-traditional-massage traditional-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/traditionalmassage/traditionalmassage-10.webp"
          imageTitle="Traditional Massage"
          subTitle="Frequently Asked Questions"
          title={<>Traditional Massage Seminyak: FAQs</>}
          items={[
            {
              question: "What is Traditional Massage?",
              answer:
                "Traditional Massage is a hands-on massage technique that uses firm pressure, kneading, and focused movements to help release muscle tension and improve body comfort.",
            },
            {
              question: "What is the difference between Traditional Massage and Balinese Massage?",
              answer:
                "Traditional Massage usually uses firmer and more direct pressure for muscle release, while Balinese Massage combines flowing strokes, stretching, and relaxation-focused techniques.",
            },
            {
              question: "Is Traditional Massage painful?",
              answer:
                "The pressure may feel strong, especially around tense areas, but it should remain comfortable. Our therapists adjust intensity based on your preference.",
            },
            {
              question: "Is Traditional Massage suitable for first-time guests?",
              answer:
                "Yes. First-time guests can enjoy this treatment because the pressure can be modified according to individual comfort levels.",
            },
            {
              question: "Should I choose Traditional Massage or Deep Tissue Massage?",
              answer:
                "Traditional Massage is ideal for guests wanting firm full-body pressure and general muscle relief. Deep Tissue Massage is more targeted toward deeper layers and specific long-term tension areas.",
            },
          ]}
        />
      </div>
      <div className="jsx-traditional-massage traditional-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Go Beyond Traditional Massage"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-traditional-massage traditional-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/traditionalmassage/traditionalmassage-11.webp"
          title="Restore Your Body After Long Days in Bali"
          text="Travel and daily activity leave muscles tight and tired. Traditional Massage uses firm, balanced technique to release tension and leave the body refreshed. At our spa, or at your villa."
          closingText="Reserve your Traditional Massage session and restore comfort after long days in Bali."
        />
      </div>
    </div>
  );
}
