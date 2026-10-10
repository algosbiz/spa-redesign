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

/** /seminyak/coconut-oil-massage/ — generated from the live page's component tree, section for section. */
export default function CoconutOilMassagePage() {
  return (
    <div className="page-wrapper lh p-coconut-oil-massage">
      <div className="jsx-coconut-oil-massage coconut-oil-massage-banner">
        <PageBanner
          image="/images/services/coconutoilmassage/coconutoilmassage-1.webp"
          subTitle="Natural Nourishment"
          titleSpan="Virgin Cold Press"
          title="Coconut Oil Massage"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/coconutoilmassage/coconutoilmassage-2.webp"
        secondaryImage="/images/services/coconutoilmassage/coconutoilmassage-3.webp"
        subTitle="Pure Coconut Care"
        title={<>The Benefits of Virgin Coconut Oil Massage</>}
        text="Virgin cold-pressed coconut oil is made from fresh coconuts without high heat, helping preserve its natural properties. In massage therapy, it is valued for its smooth texture, skin-conditioning benefits, and suitability for most skin types. Combined with relaxing massage techniques, it creates a treatment that supports both muscle relaxation and skin nourishment."
        feature1Title="Cold-Pressed Oil"
        feature1Text="Retains the natural qualities of fresh coconut through minimal processing."
        feature2Title="Skin-Friendly Formula"
        feature2Text="Lightweight, nourishing, and suitable for most skin types."
      />
      <div className="jsx-coconut-oil-massage coconut-oil-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/coconutoilmassage/coconutoilmassage-4.webp",
            "/images/services/coconutoilmassage/coconutoilmassage-5.webp",
            "/images/services/coconutoilmassage/coconutoilmassage-6.webp",
          ]}
          subTitle="Choose Your Session"
          title="Session Duration & Pricing"
          text="Our Virgin Cold Press Coconut Oil Massage is available in multiple session durations, making it easy to choose the treatment that best fits your schedule. Each session uses pure cold-pressed coconut oil to support skin hydration while enhancing the comfort of the massage."
          packages={[
            {
              price: "IDR 300K",
              name: "1 Hour",
              treatments: ["First-time guests", "Quick relaxation sessions", "Daily skin nourishment"],
            },
            {
              price: "IDR 440K",
              name: "1.5 Hours",
              treatments: ["Deeper relaxation", "Extra attention to tired muscles", "Extended skin hydration"],
            },
            {
              price: "IDR 580K",
              name: "2 Hours",
              treatments: [
                "A complete wellness experience",
                "Guests seeking maximum relaxation",
                "Longer full-body massage sessions",
              ],
            },
          ]}
        />
      </div>
      <div className="jsx-coconut-oil-massage coconut-oil-massage-funfact">
        <Funfacts
          items={[
            { title: "Pure", text: "Coconut Oil" },
            { title: "Flexible", text: "Booking" },
            { title: "Adjustable", text: "Pressure" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/coconutoilmassage/coconutoilmassage-7.webp"
        subTitle="Why Coconut Oil?"
        title={<>More Than Just Massage Oil</>}
        text="Virgin coconut oil has long been used in tropical wellness traditions because of its natural moisturising properties and smooth texture. In addition, guests may enjoy coconut oil because:"
        featuresLeft={[
          "Helps soften dry skin",
          "Leaves the skin feeling moisturised",
          "Provides smooth massage movements",
        ]}
        featuresRight={[
          "Comfortable for most skin types",
          "Naturally derived from fresh coconuts",
          "Popular after beach and outdoor activities",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/coconutoilmassage/coconutoilmassage-8.webp"
        subTitle="Ideal For"
        badgeTopText="Nourished by"
        badgeBottomText="Nature"
        title={<>Who Usually Chooses This Massage?</>}
        text="While the massage itself focuses on relaxation, the use of virgin coconut oil can make the treatment appealing to guests with different skin-care and wellness preferences. This massage may be a good fit for:"
        featuresLeft={[
          "Guests with dry-feeling skin",
          "Visitors after sun exposure",
          "Travellers seeking gentle relaxation",
        ]}
        featuresRight={[
          "People who enjoy natural wellness products",
          "Anyone who prefers plant-based massage oil",
          "Guests looking for hydration and relaxation together",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/coconutoilmassage/coconutoilmassage-9.webp"
        subTitle="Treatment Process"
        badgeTopText="The Power of"
        badgeBottomText="Coconut"
        title={<>Why Virgin Coconut Oil Works So Well for Massage</>}
        text="Virgin coconut oil works well for massage because its smooth texture supports continuous movements and helps reduce friction during treatment. It also leaves the skin feeling soft and moisturised, making it useful for:"
        featuresLeft={[
          "Smooth application from start to finish",
          "Supports long, flowing massage strokes",
          "Helps reduce friction on the skin",
        ]}
        featuresRight={[
          "Naturally moisturises during treatment",
          "Comfortable for extended sessions",
          "Spa and home service available",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-coconut-oil-massage coconut-oil-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/coconutoilmassage/coconutoilmassage-10.webp"
          imageTitle="Pure Coconut Care"
          subTitle="Frequently Asked Questions"
          title={<>Coconut Oil Massage Seminyak: FAQs</>}
          items={[
            {
              question: "What makes virgin cold-pressed coconut oil different from regular massage oil?",
              answer:
                "Virgin cold-pressed coconut oil is extracted without high heat, helping preserve its natural composition. Many people prefer it because it feels lightweight on the skin and provides natural moisture during the massage.",
            },
            {
              question: "Is this massage suitable for sensitive skin?",
              answer:
                "For most people, yes. Virgin coconut oil is generally well tolerated, but if you have allergies to coconut or specific skin concerns, please let us know before your appointment.",
            },
            {
              question: "Will the massage leave my skin feeling oily?",
              answer:
                "A light layer of oil may remain immediately after the session, but much of the oil is absorbed during the massage, leaving the skin feeling soft and comfortable.",
            },
            {
              question: "Can I book this massage as a home service?",
              answer:
                "Yes. This treatment is available at our spa as well as through our villa and hotel home service throughout Seminyak and nearby areas.",
            },
            {
              question: "Is this massage only for relaxation?",
              answer:
                "Relaxation is one of its main benefits, but many guests also choose this treatment because the virgin coconut oil helps keep the skin feeling soft, smooth, and moisturised.",
            },
            {
              question: "Is virgin coconut oil massage suitable for dry skin?",
              answer:
                "It can be a suitable option for people with dry or dehydrated-feeling skin because coconut oil helps moisturise and soften the skin. However, individual skin types can respond differently to oils, so guests with known sensitivities should inform their therapist before treatment.",
            },
            {
              question: "Can virgin coconut oil massage help with muscle tension?",
              answer:
                "The massage techniques used during the treatment can help relax tight or tired muscles and promote an overall sense of physical relaxation. The benefits depend on the massage pressure, techniques used, and individual needs rather than the coconut oil itself.",
            },
          ]}
        />
      </div>
      <div className="jsx-coconut-oil-massage coconut-oil-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Nourish Your Body With More Spa Rituals"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-coconut-oil-massage coconut-oil-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/coconutoilmassage/coconutoilmassage-11.webp"
          title="Experience the Natural Comfort of Virgin Coconut Oil"
          text="Traditional massage technique with pure cold-pressed coconut oil, leaving both body and skin refreshed. At our spa, or through home service at your villa or hotel around Seminyak."
          closingText="Let yourself unwind with one of Bali's most naturally nourishing massage experiences."
        />
      </div>
    </div>
  );
}
