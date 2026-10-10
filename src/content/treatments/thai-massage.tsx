import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import TreatmentPricing from "@/components/sections/TreatmentPricing";
import SessionOptions from "@/components/sections/SessionOptions";
import Funfacts from "@/components/sections/Funfacts";
import TreatmentTestimonials from "@/components/sections/TreatmentTestimonials";
import AboutSplit from "@/components/sections/AboutSplit";
import AboutSplitAlt from "@/components/sections/AboutSplitAlt";
import FloralDecoration from "@/components/ui/FloralDecoration";
import FaqSection from "@/components/sections/FaqSection";
import ServiceSlider from "@/components/sections/ServiceSlider";
import ReserveCta from "@/components/sections/ReserveCta";

/** /seminyak/thai-massage/ — generated from the live page's component tree, section for section. */
export default function ThaiMassagePage() {
  return (
    <div className="page-wrapper lh p-thai-massage">
      <div className="jsx-thai-massage thai-massage-banner">
        <PageBanner
          image="/images/services/thaimassage/thaimassage-1.webp"
          subTitle="Active Release"
          titleSpan="Thai Massage"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/thaimassage/thaimassage-2.webp"
        secondaryImage="/images/services/thaimassage/thaimassage-3.webp"
        subTitle="Get to Know"
        title={<>What Makes Traditional Thai Massage Unique?</>}
        text="Traditional Thai Massage is an ancient wellness technique that combines rhythmic pressure, assisted stretching, and controlled body movements to improve flexibility and ease physical tension. Unlike oil-based massage styles that focus mainly on flowing strokes, Thai Massage uses guided stretches and pressure points to encourage better mobility, body awareness, and overall relaxation."
        feature1Title="Assisted Stretching"
        feature1Text="Uses guided movements inspired by traditional Thai techniques to help improve flexibility."
        feature2Title="Pressure Point Focus"
        feature2Text="Applies steady pressure to areas where stiffness and tension commonly build up."
      />
      <div className="jsx-thai-massage thai-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/thaimassage/thaimassage-4.webp",
            "/images/services/thaimassage/thaimassage-5.webp",
            "/images/services/thaimassage/thaimassage-6.webp",
            "/images/services/thaimassage/thaimassage-7.webp",
          ]}
          subTitle="Choose Yours"
          title="Thai Massage Packages in Seminyak"
          text="Enjoy a complete Thai Massage experience combined with other relaxing treatments at Spa Bali Moon. Each package is created to provide a balanced wellness session, combining traditional Thai techniques with facial, nail, and body treatments."
          packages={[
            {
              price: "IDR 549K",
              name: "Package A",
              treatments: ["1 Hr Thai Massage", "1 Hr Bali Moon Facial", "30 Mins Manicure"],
            },
            {
              price: "IDR 649K",
              name: "Package B",
              treatments: ["1 Hr Thai Massage", "1 Hr Cream Bath", "1 Hr Bali Moon Facial"],
            },
            { price: "IDR 449K", name: "Package C", treatments: ["1 Hr Thai Massage", "1 Hr Bali Moon Facial"] },
            {
              price: "IDR 539K",
              name: "Package D",
              treatments: ["1 Hr Thai Massage", "1 Hr Cream Bath", "30 Mins Body Scrub"],
            },
          ]}
          topContent={
            <SessionOptions
              sessions={[
                {
                  price: "IDR 133K",
                  duration: "30 Minutes",
                  details: ["Focused stretching session", "Quick relief for tight areas", "Ideal for limited time"],
                },
                {
                  price: "IDR 259K",
                  duration: "1 Hour",
                  details: [
                    "More complete body treatment",
                    "Pressure and assisted stretching",
                    "Extra attention to stiff areas",
                  ],
                },
                {
                  price: "IDR 379K",
                  duration: "1.5 Hours",
                  details: [
                    "Extended full-body session",
                    "More time for mobility work",
                    "Longer focus on areas of tension",
                  ],
                },
              ]}
              subTitle="More Freedom to Move"
              title="Thai Massage Duration Options"
              text="Thai Massage combines assisted stretching with pressure techniques to support flexibility and ease areas that feel tight from daily movement or travel. Longer sessions allow more time to work through the body and spend extra attention on areas that need it most."
              icon="/images/spa/thai.svg"
            />
          }
        />
      </div>
      <div className="jsx-thai-massage thai-massage-funfact">
        <Funfacts
          items={[
            { title: "Traditional", text: "Thai Technique" },
            { title: "Guided", text: "Stretching" },
            { title: "Body", text: "Mobility" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/thaimassage/thaimassage-8.webp"
        subTitle="Body Benefits"
        title={<>Why Do Guests Choose Thai Massage in Bali?</>}
        text="Traditional Thai Massage is often chosen by guests who want a more active approach to relaxation. The combination of pressure and stretching helps the body feel more open, especially after travelling, exercising, or spending long hours sitting."
        featuresLeft={[
          "Helps ease stiffness from daily activities",
          "Supports easier movement and flexibility",
          "Relieves tension in commonly affected areas",
        ]}
        featuresRight={[
          "Suitable after flights, travel, or physical activity",
          "Combines massage with gentle stretching techniques",
          "Ideal for guests who prefer a more active treatment style",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/thaimassage/thaimassage-9.webp"
        subTitle="Focus Areas"
        badgeTopText="More Room"
        badgeBottomText="to Move"
        title={<>Which Parts of the Body Are Treated During Thai Massage?</>}
        text="Thai Massage works with the entire body through pressure techniques and assisted movements. Our therapists focus on areas that commonly feel restricted from posture, travel, or active routines, helping create a greater sense of balance and ease throughout the session."
        featuresLeft={[
          "Back and shoulders affected by long sitting",
          "Neck area with daily posture tension",
          "Hips and legs needing more mobility",
        ]}
        featuresRight={[
          "Arms and upper body after repetitive movement",
          "Areas that feel stiff after exercise or travelling",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/thaimassage/thaimassage-10.webp"
        subTitle="Massage Technique"
        badgeTopText="Stretch Into"
        badgeBottomText="Balance"
        title={<>How Does Traditional Thai Massage Work?</>}
        text="Traditional Thai Massage combines steady pressure, stretching, and rhythmic movements without the use of massage oil. Our therapists use hands, thumbs, palms, and body weight techniques to work through areas of tension while carefully guiding the body through comfortable stretches. Each movement follows a slow and controlled approach to help improve relaxation and flexibility."
        featuresLeft={[
          "Uses hands, thumbs, palms, and elbows for pressure",
          "Includes Thai-inspired assisted stretching",
          "Performed without oil for better control",
        ]}
        featuresRight={[
          "Focuses on flexibility and alignment",
          "Adjusted to your comfort level",
          "Balances relaxation and active bodywork",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-thai-massage thai-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/thaimassage/thaimassage-11.webp"
          imageTitle="Thai Massage"
          subTitle="Frequently Asked Questions"
          title={<>Thai Massage Seminyak: FAQs</>}
          items={[
            {
              question: "What is Traditional Thai Massage?",
              answer:
                "Traditional Thai Massage is a traditional bodywork technique that combines pressure, stretching, and movement. It focuses on improving body comfort, flexibility, and relaxation through structured techniques.",
            },
            {
              question: "Is Thai Massage different from Balinese Massage?",
              answer:
                "Yes. Thai Massage focuses more on assisted stretching, mobility, and pressure techniques without oil, while Balinese Massage usually uses flowing strokes and massage oils for a more relaxing experience.",
            },
            {
              question: "Is Thai Massage suitable for beginners?",
              answer:
                "Yes. Beginners can enjoy Thai Massage as our therapists can adjust the intensity and stretching movements based on your comfort level.",
            },
            {
              question: "What should I wear during a Thai Massage session?",
              answer:
                "Comfortable clothing is recommended because the treatment includes stretching and guided movements. Unlike oil massage, Thai Massage does not require direct skin contact for the entire session.",
            },
            {
              question: "Is Thai Massage good after a long flight or travel?",
              answer:
                "Yes. Many travellers choose Thai Massage after long journeys because the stretching techniques can help the body feel less restricted and more comfortable.",
            },
            {
              question: "Can I combine Thai Massage with other spa treatments?",
              answer:
                "Yes. Many guests combine Thai Massage with facial, manicure, cream bath, or body treatments for a more complete spa experience.",
            },
          ]}
        />
      </div>
      <div className="jsx-thai-massage thai-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Book More Than a Thai Massage"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-thai-massage thai-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/thaimassage/thaimassage-12.webp"
          title="Increase Your Flexibility with Traditional Thai Massage at Spa Bali Moon"
          text="Traditional Thai Massage combines rhythmic pressure with assisted stretching to ease stiffness and bring movement back, welcome after long flights or active days. At our spa, or at your villa."
          closingText="Reserve your Thai Massage package and move through Bali feeling lighter."
        />
      </div>
    </div>
  );
}
