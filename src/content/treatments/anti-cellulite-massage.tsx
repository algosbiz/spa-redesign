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

/** /seminyak/anti-cellulite-massage/ — generated from the live page's component tree, section for section. */
export default function AntiCelluliteMassagePage() {
  return (
    <div className="page-wrapper lh p-anti-cellulite-massage">
      <div className="jsx-anti-cellulite-massage cellulite-massage-banner">
        <PageBanner
          image="/images/services/cellulitemassage/cellulitemassage-1.webp"
          subTitle="Body Contouring"
          titleSpan="Cellulite Massage"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/cellulitemassage/cellulitemassage-2.webp"
        secondaryImage="/images/services/cellulitemassage/cellulitemassage-3.webp"
        subTitle="Smoother Skin Support"
        title={<>Can Massage Help Improve the Appearance of Cellulite?</>}
        text="Cellulite massage is a targeted body treatment designed to support circulation, encourage lymphatic movement, and improve the appearance of uneven skin texture commonly associated with cellulite. The treatment uses firm, controlled techniques that focus on areas such as the thighs, hips, buttocks, and abdomen where cellulite often develops. Our therapists adjust the intensity according to your comfort level and treatment goals."
        feature1Title="Targeted Areas"
        feature1Text="Commonly focuses on the thighs, hips, buttocks, and stomach area."
        feature2Title="Firm Pressure"
        feature2Text="Uses controlled movements designed to stimulate circulation and tissue mobility."
      />
      <div className="jsx-anti-cellulite-massage cellulite-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/cellulitemassage/cellulitemassage-4.webp",
            "/images/services/cellulitemassage/cellulitemassage-5.webp",
            "/images/services/cellulitemassage/cellulitemassage-11.webp",
          ]}
          subTitle="Choose Your Session"
          title="Treatment Duration & Pricing"
          text="Every cellulite massage session is tailored to your body and treatment goals. Choose the session length that best suits the areas you'd like us to focus on. Longer sessions allow more time to work across multiple areas while maintaining steady and targeted techniques."
          packages={[
            {
              name: "1 Hour",
              price: "IDR 350K",
              treatments: ["First-time guests", "One or two target areas", "Regular maintenance sessions"],
            },
            {
              name: "1.5 Hours",
              price: "IDR 520K",
              treatments: ["Multiple treatment areas", "More detailed treatment", "Guests wanting a longer session"],
            },
            {
              name: "2 Hours",
              price: "IDR 695K",
              treatments: ["All main target areas", "Most thorough treatment", "Guests wanting the fullest session"],
            },
          ]}
        />
      </div>
      <div className="jsx-anti-cellulite-massage cellulite-massage-funfact">
        <Funfacts
          items={[
            { title: "Targeted", text: "Treatment Areas" },
            { title: "Adjustable", text: "Pressure Levels" },
            { title: "Experienced", text: "Therapists" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/cellulitemassage/cellulitemassage-6.webp"
        subTitle="Understanding Cellulite"
        title={<>Why Does Cellulite Form in the First Place?</>}
        text="Cellulite develops when fat deposits beneath the skin push against connective tissue, creating the uneven or dimpled appearance many people notice on the thighs, hips, or buttocks. But several common factors are associated with its appearance:"
        featuresLeft={[
          "Commonly appears on thighs and buttocks",
          "Can affect people of different body types",
          "Often influenced by genetics and hormones",
        ]}
        featuresRight={[
          "May become more visible with fluid retention",
          "Frequently associated with connective tissue structure",
          "A very common and normal skin condition",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/cellulitemassage/cellulitemassage-7.webp"
        subTitle="Treatment Benefits"
        badgeTopText="Shape &"
        badgeBottomText="Support"
        title={<>How Cellulite Massage Supports Your Wellness</>}
        text="Cellulite massage combines targeted massage techniques with focused pressure and rhythmic movements to address areas where cellulite commonly appears. Some of the reasons why many people choose cellulite massage include:"
        featuresLeft={[
          "Supports healthy circulation",
          "Encourages lymphatic movement",
          "May help reduce fluid retention",
        ]}
        featuresRight={[
          "Can improve skin smoothness temporarily",
          "Helps soften tight or dense tissue areas",
          "Often included in body contouring routines",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/cellulitemassage/cellulitemassage-8.webp"
        subTitle="Inside the Session"
        badgeTopText="The Art"
        badgeBottomText="of Focus"
        title={<>How the Treatment Works</>}
        text="Each session is designed to provide focused attention to the selected areas while allowing the treatment intensity to be adjusted according to your comfort. The process generally includes:"
        featuresLeft={[
          "Consultation regarding treatment areas",
          "Focused work on selected body zones",
          "Firm and repetitive massage movements",
        ]}
        featuresRight={[
          "Adjustable pressure throughout the session",
          "Treatment tailored to your comfort level",
          "Available at the spa or through home service",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-anti-cellulite-massage cellulite-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/cellulitemassage/cellulitemassage-9.webp"
          imageTitle="Smooth Skin Support"
          subTitle="Frequently Asked Questions"
          title={<>Cellulite Massage Seminyak: FAQs</>}
          items={[
            {
              question: "Which areas are commonly treated during cellulite massage?",
              answer:
                "The treatment most commonly focuses on the thighs, hips, buttocks, and abdomen, although other areas may also be included depending on individual goals.",
            },
            {
              question: "Does cellulite massage remove cellulite permanently?",
              answer:
                "No. Cellulite massage is not considered a permanent solution, but regular treatments may help improve circulation, reduce fluid buildup, and temporarily improve the appearance of skin texture.",
            },
            {
              question: "What is the difference between cellulite massage and lymphatic massage?",
              answer:
                "Cellulite massage uses firmer and more targeted techniques that focus on tissue mobility and skin texture, while lymphatic massage uses lighter movements designed to encourage fluid drainage and relaxation.",
            },
            {
              question: "Is cellulite massage painful?",
              answer:
                "The treatment uses firmer pressure than traditional relaxation massage, but it should remain comfortable throughout the session. Pressure can always be adjusted according to your preference.",
            },
            {
              question: "How many sessions are usually recommended?",
              answer:
                "Many guests choose regular sessions over several weeks as part of their body wellness routine, as results are generally gradual rather than immediate.",
            },
            {
              question: "Who is cellulite massage suitable for?",
              answer:
                "Cellulite massage may be suitable for adults who want to include targeted body massage in their wellness and skincare routine, particularly those concerned about the appearance of cellulite on areas such as the thighs, hips, buttocks, or abdomen. It can also be suitable for people who enjoy firm massage techniques and want a relaxing body treatment focused on specific areas.",
            },
            {
              question: "What is the difference between cellulite and stretch marks?",
              answer:
                "Cellulite and stretch marks are different skin concerns. Cellulite creates a dimpled or uneven appearance on the skin, commonly around the thighs, buttocks, hips, and abdomen. Stretch marks are lines or streaks that develop when the skin stretches or changes rapidly, often appearing during periods of growth, weight changes, or pregnancy. Cellulite massage is primarily focused on the appearance and feel of cellulite and is not a treatment for removing stretch marks.",
            },
          ]}
        />
      </div>
      <div className="jsx-anti-cellulite-massage cellulite-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Continue Your Body-Care Journey"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-anti-cellulite-massage cellulite-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/cellulitemassage/cellulitemassage-10.webp"
          title="Support Smoother Skin Wherever You Prefer to Relax"
          text="Focused body care at our spa, or in the privacy of your villa or hotel. Home service is an extra IDR 75,000 per therapist within Seminyak and nearby areas."
          closingText="Reserve your session and let our therapists help you create a treatment plan that fits your comfort and body goals."
        />
      </div>
    </div>
  );
}
