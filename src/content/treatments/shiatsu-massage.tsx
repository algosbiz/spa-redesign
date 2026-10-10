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

/** /seminyak/shiatsu-massage/ — generated from the live page's component tree, section for section. */
export default function ShiatsuMassagePage() {
  return (
    <div className="page-wrapper lh p-shiatsu-massage">
      <div className="jsx-shiatsu-massage shiatsu-massage-banner">
        <PageBanner
          image="/images/services/shiatsumassage/shiatsumassage-1.webp"
          subTitle="Japanese Wellness"
          titleSpan="Shiatsu Massage"
          title="in Seminyak, Bali: Japanese Massage"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/shiatsumassage/shiatsumassage-2.webp"
        secondaryImage="/images/services/shiatsumassage/shiatsumassage-3.webp"
        subTitle="Understanding Shiatsu"
        title={<>What Makes Shiatsu Different from Other Massage Techniques?</>}
        text="Shiatsu is a traditional Japanese bodywork technique that uses finger, thumb, and palm pressure on specific points across the body rather than long oil massage strokes. Often combined with gentle stretching, Shiatsu focuses on relieving muscle tension, encouraging natural body movement, and promoting overall physical balance."
        feature1Title="Pressure Point Therapy"
        feature1Text="Applies focused pressure to specific areas using fingers, thumbs, and palms."
        feature2Title="Gentle Body Stretching"
        feature2Text="Supports flexibility while helping muscles release built-up tension."
      />
      <div className="jsx-shiatsu-massage shiatsu-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/shiatsumassage/shiatsumassage-4.webp",
            "/images/services/shiatsumassage/shiatsumassage-5.webp",
            "/images/services/shiatsumassage/shiatsumassage-6.webp",
          ]}
          subTitle="Choose Yours"
          title="Our Duration Options"
          text="Our Shiatsu Massage is available in different durations, allowing our therapists to tailor each session to your body's condition and areas of tension."
          packages={[
            {
              price: "IDR 119K",
              name: "30 Minutes",
              treatments: ["Neck and shoulder tension", "Quick wellness break", "First-time Shiatsu experience"],
            },
            {
              price: "IDR 219K",
              name: "1 Hour",
              treatments: ["Full body treatment", "Muscle stiffness", "General relaxation and flexibility"],
            },
            {
              price: "IDR 329K",
              name: "1.5 Hours",
              treatments: [
                "Multiple tension areas",
                "Guests preferring slower treatment",
                "More detailed pressure point work",
              ],
            },
          ]}
        />
      </div>
      <div className="jsx-shiatsu-massage shiatsu-massage-funfact">
        <Funfacts
          items={[
            { title: "Traditional", text: "Japanese Technique" },
            { title: "Pressure", text: "Point Therapy" },
            { title: "Gentle", text: "Stretching" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/shiatsumassage/shiatsumassage-7.webp"
        subTitle="The Reason"
        title={<>Why Do People Choose Shiatsu Massage?</>}
        text="Shiatsu offers a different approach to massage by using focused pressure rather than continuous oil-based strokes. Its structured technique makes it a popular choice for guests who want focused bodywork while also enjoying a traditional Japanese wellness experience. People may choose Shiatsu for reasons such as:"
        featuresLeft={[
          "Easing feelings of muscle tension",
          "Supporting flexibility and mobility",
          "Encouraging more comfortable body movement",
        ]}
        featuresRight={[
          "Promoting physical relaxation",
          "Suitable after work, travel, or exercise",
          "Enjoying a traditional Japanese massage approach",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/shiatsumassage/shiatsumassage-8.webp"
        subTitle="Treatment Focus"
        badgeTopText="Guided by"
        badgeBottomText="Pressure"
        title={<>Which Areas Does Shiatsu Commonly Target?</>}
        text="Shiatsu works across different parts of the body using focused pressure and rhythmic techniques. We can adjust the focus based on where you tend to experience tension or physical fatigue, giving particular attention to areas such as:"
        featuresLeft={["Neck and shoulders", "Upper and lower back", "Arms and hands"]}
        featuresRight={["Hips and legs", "Feet and lower limbs", "Pressure points across the body"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/shiatsumassage/shiatsumassage-9.webp"
        subTitle="The Method"
        badgeTopText="The Shiatsu"
        badgeBottomText="Rhythm"
        title={<>How Does Our Shiatsu Massage Work?</>}
        text="A Shiatsu Massage uses focused pressure and gentle movement rather than long, flowing massage strokes. The therapist works through selected areas at a steady pace, adapting the intensity to keep the treatment comfortable throughout. The session may involve techniques such as:"
        featuresLeft={["Finger pressure techniques", "Thumb pressure on selected points", "Palm compression"]}
        featuresRight={["Gentle assisted stretching", "Controlled treatment pace", "Pressure adjusted to your comfort"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-shiatsu-massage shiatsu-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/shiatsumassage/shiatsumassage-10.webp"
          imageTitle="Shiatsu Massage"
          subTitle="Frequently Asked Questions"
          title={<>Shiatsu Massage Seminyak: FAQs</>}
          items={[
            {
              question: "Is Shiatsu Massage performed with oil?",
              answer:
                "Traditional Shiatsu is generally performed without massage oil. The treatment focuses on pressure point techniques and body movement rather than long gliding strokes.",
            },
            {
              question: "Is Shiatsu suitable for beginners?",
              answer:
                "Yes. Pressure is always adjusted according to your comfort, making Shiatsu suitable for both first-time guests and experienced massage enthusiasts.",
            },
            {
              question: "What is the difference between Shiatsu and Deep Tissue Massage?",
              answer:
                "Shiatsu focuses on pressure points and gentle stretching using fingers and palms, while Deep Tissue Massage works deeper into muscles using slow pressure and muscle-specific techniques.",
            },
            {
              question: "Can Shiatsu help reduce stress?",
              answer:
                "Many guests choose Shiatsu because the slow rhythm and controlled pressure encourage both physical relaxation and a calmer state of mind.",
            },
            {
              question: "Can Shiatsu be combined with other spa treatments?",
              answer:
                "Yes. Shiatsu is often combined with body treatments or other wellness services as part of a longer spa experience.",
            },
            {
              question: "Is shiatsu massage painful?",
              answer:
                "Shiatsu massage can feel firm or intense when pressure is applied to tense areas, but it should remain comfortable. Our therapist can adjust the pressure based on your preference.",
            },
            {
              question: "What is shiatsu massage good for?",
              answer:
                "Shiatsu massage may help relieve muscle tension, reduce stress, and promote relaxation. It can also help improve flexibility and overall body comfort.",
            },
            {
              question: "When should you not do shiatsu massage?",
              answer:
                "Shiatsu massage may not be suitable if you have certain medical conditions, injuries, or are recovering from surgery. If you are unsure whether it is right for you, consult a healthcare professional before your session.",
            },
          ]}
        />
      </div>
      <div className="jsx-shiatsu-massage shiatsu-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Discover More Than Shiatsu Massage"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-shiatsu-massage shiatsu-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/shiatsumassage/shiatsumassage-11.webp"
          title="Experience the Traditional Japanese Approach to Body Wellness"
          text="Shiatsu works differently from oil massage, combining pressure-point therapy with mindful movement. Whether recovering after travel or easing everyday tension, each session is tailored to you."
          closingText="Restore balance through one of Japan's most recognised therapeutic massage techniques."
        />
      </div>
    </div>
  );
}
