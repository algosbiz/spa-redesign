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

/** /seminyak/sunburn-massage/ — generated from the live page's component tree, section for section. */
export default function SunburnMassagePage() {
  return (
    <div className="page-wrapper lh p-sunburn-massage">
      <div className="jsx-sunburn-massage sunburn-treatment-banner">
        <PageBanner
          image="/images/services/sunburntreatment/sunburntreatment-1.webp"
          subTitle="After Sun Care"
          titleSpan="Sunburn Treatment"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/sunburntreatment/sunburntreatment-2.webp"
        secondaryImage="/images/services/sunburntreatment/sunburntreatment-3.webp"
        subTitle="Skin Recovery"
        title={<>Why Does Sunburned Skin Need Gentle Treatment?</>}
        text="After prolonged sun exposure, the skin can become warm, dehydrated, tight, and more sensitive than usual. A Sunburn Treatment uses cooling ingredients such as aloe vera together with gentle application techniques to calm overheated skin without adding unnecessary pressure. The goal is to restore comfort, replenish moisture, and support the skin's natural recovery process after time in Bali's tropical sun."
        feature1Title="Cooling Care"
        feature1Text="Helps calm overheated skin with soothing after-sun ingredients."
        feature2Title="Gentle Application"
        feature2Text="Light movements designed for skin that feels sensitive or tender."
      />
      <div className="jsx-sunburn-massage sunburn-treatment-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={["/images/services/sunburntreatment/sunburntreatment-4.webp"]}
          subTitle="Treatment Details"
          title="A Dedicated Session for Sun-Exposed Skin"
          text="Our Sunburn Treatment is provided as a focused one-hour session, giving the skin time to cool, rehydrate, and recover comfortably after beach days, outdoor activities, or extended sun exposure."
          packages={[
            {
              price: "IDR 250K",
              name: "1 Hour",
              treatments: [
                "Mild sunburn and skin redness",
                "Skin feeling hot, dry, or tight",
                "Recovery after beach or pool activities",
              ],
            },
          ]}
        />
      </div>
      <div className="jsx-sunburn-massage sunburn-treatment-funfact">
        <Funfacts
          items={[
            { title: "Aloe Vera", text: "Infusion" },
            { title: "Cooling", text: "Hydration" },
            { title: "Sensitive", text: "Skin Friendly" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/sunburntreatment/sunburntreatment-5.webp"
        subTitle="The Benefits"
        title={<>How Can a Sunburn Treatment Help?</>}
        text="Sunburn Treatment is designed to improve comfort rather than provide deep massage. Cooling botanical ingredients and gentle techniques work together to calm skin that has become stressed by ultraviolet exposure while supporting healthy moisture levels during recovery."
        featuresLeft={[
          "Helps cool overheated skin",
          "Supports hydration after sun exposure",
          "Reduces the feeling of tightness",
        ]}
        featuresRight={[
          "Comforts sensitive skin",
          "Suitable after beach holidays or outdoor activities",
          "Promotes a calmer skin sensation during recovery",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/sunburntreatment/sunburntreatment-6.webp"
        subTitle="Areas of Care"
        badgeTopText="Soothe the"
        badgeBottomText="Sun"
        title={<>Which Parts of the Body Are Commonly Treated?</>}
        text="Every sunburn is different. Our therapists focus on the areas most affected by sun exposure while adapting the treatment according to your skin's condition and comfort throughout the session."
        featuresLeft={["Shoulders", "Upper back", "Arms"]}
        featuresRight={["Legs", "Chest area", "Any sun-exposed skin requiring gentle care"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/sunburntreatment/sunburntreatment-7.webp"
        subTitle="The Experience"
        badgeTopText="A Softer"
        badgeBottomText="Way Back"
        title={<>What to Expect from a Sunburn Treatment</>}
        text="Our therapist first assesses the condition of your skin before applying cooling aloe vera and soothing botanical products to the affected areas. Gentle, slow movements help spread the products evenly without creating unnecessary friction, while cool compresses may be used to enhance comfort. Every step is performed with sensitive skin in mind, allowing your body to relax while your skin begins its recovery."
        featuresLeft={[
          "Skin condition assessment",
          "Cooling aloe vera application",
          "Light, non-irritating massage movements",
        ]}
        featuresRight={["Optional cool compresses", "Hydrating botanical care", "Comfort-focused finishing"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-sunburn-massage sunburn-treatment-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/sunburntreatment/sunburntreatment-8.webp"
          imageTitle="After Sun Care"
          subTitle="Frequently Asked Questions"
          title={<>Sunburn Treatment Seminyak: FAQs</>}
          items={[
            {
              question: "Can I get a massage if I have sunburn?",
              answer:
                "Yes, provided the skin is not blistered or severely damaged. Our Sunburn Treatment avoids deep pressure and uses gentle techniques specifically intended for sensitive skin.",
            },
            {
              question: "Why is aloe vera commonly used after sun exposure?",
              answer:
                "Aloe vera is widely used in after-sun care because of its cooling properties and its ability to help maintain skin hydration while soothing temporary discomfort.",
            },
            {
              question: "Is this treatment suitable immediately after the beach?",
              answer:
                "Yes. Many guests book this treatment after spending long hours outdoors to help cool and rehydrate their skin.",
            },
            {
              question: "Does the treatment focus on the whole body?",
              answer:
                "It can. Our therapist may treat the entire body or concentrate only on the sun-exposed areas that require the most attention.",
            },
            {
              question: "Can I return to the sun after my appointment?",
              answer:
                "It's recommended to give your skin time to recover before further sun exposure and to apply appropriate sun protection when going outdoors.",
            },
          ]}
        />
      </div>
      <div className="jsx-sunburn-massage sunburn-treatment-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Soothe, Restore, and Explore More"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-sunburn-massage sunburn-treatment-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/sunburntreatment/sunburntreatment-9.webp"
          title="Give Your Skin the Recovery Time It Deserves"
          text="Hours in Bali's sun can leave skin warm and sensitive. Our Sunburn Treatment cools and rehydrates with aloe vera and botanical ingredients. At our spa, or at your villa or hotel."
          closingText="Reserve your Sunburn Treatment and let your skin recover comfortably."
        />
      </div>
    </div>
  );
}
