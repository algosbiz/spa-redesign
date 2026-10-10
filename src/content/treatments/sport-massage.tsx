import Link from "next/link";
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

/** /seminyak/sport-massage/ — generated from the live page's component tree, section for section. */
export default function SportMassagePage() {
  return (
    <div className="page-wrapper lh p-sport-massage">
      <div className="jsx-sport-massage sports-massage-banner">
        <PageBanner
          image="/images/services/sportsmassage/sportsmassage-1.webp"
          subTitle="Active Recovery"
          titleSpan="Sports Massage"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/sportsmassage/sportsmassage-2.webp"
        secondaryImage="/images/services/sportsmassage/sportsmassage-3.webp"
        subTitle="Movement & Recovery"
        title={<>What Makes Sports Massage Different from a Regular Massage?</>}
        text={
          <>
            Sport Massage is a targeted treatment designed for active bodies experiencing frequent movement, physical
            effort, and muscle strain. Through controlled pressure, stretching, and rhythmic movements, it focuses on
            areas that become tight after exercise, training, surfing, or active travel, helping the body feel more
            flexible, balanced, and ready for the next activity. Looking for firmer, slower pressure? See our{" "}
            <Link prefetch={false} href="/seminyak/deep-tissue-massage/">
              deep tissue massage in Seminyak
            </Link>
            .
          </>
        }
        feature1Title="Muscle Recovery"
        feature1Text="Helps release tension from physically demanding activities."
        feature2Title="Active Mobility"
        feature2Text="Supports comfortable movement through targeted bodywork."
      />
      <div className="jsx-sport-massage sports-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/sportsmassage/sportsmassage-4.webp",
            "/images/services/sportsmassage/sportsmassage-5.webp",
          ]}
          subTitle="Choose Yours"
          title="Our Session Options"
          text="Different activities place different demands on the body. A shorter session works well for focused recovery, while a longer treatment allows more time to work through multiple areas affected by training, travel, or repetitive movement."
          packages={[
            {
              price: "IDR 269K",
              name: "1 Hour",
              treatments: ["Targeted muscle tension", "Post-workout recovery", "Specific problem areas"],
            },
            {
              price: "IDR 359K",
              name: "1.5 Hours",
              treatments: ["Full-body recovery", "Multiple muscle groups", "Deeper relaxation after activity"],
            },
          ]}
        />
      </div>
      <div className="jsx-sport-massage sports-massage-funfact">
        <Funfacts
          items={[
            { title: "Experienced", text: "Therapists" },
            { title: "Deep", text: "Pressure" },
            { title: "Muscle", text: "Recovery" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/sportsmassage/sportsmassage-6.webp"
        subTitle="Active Bodies"
        title={<>Who Can Benefit from Sports Massage?</>}
        text="Sport Massage is not limited to professional athletes. Anyone who regularly challenges their body through movement can benefit from a treatment focused on muscle comfort and recovery."
        featuresLeft={[
          "Runners and marathon participants",
          "Surfers and water sports enthusiasts",
          "Gym and strength training enthusiasts",
        ]}
        featuresRight={[
          "Cyclists and endurance athletes",
          "Travellers with physically active itineraries",
          "People experiencing muscle tightness from repetitive movement",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/sportsmassage/sportsmassage-7.webp"
        subTitle="Targeted Treatment"
        badgeTopText="Made for"
        badgeBottomText="Active Recovery"
        title={<>Areas That Receive the Most Attention During Sports Massage</>}
        text="Our therapists adjust the treatment based on your activity and the areas that feel most affected. Common focus areas include large muscle groups that experience repeated use during exercise, sports, and daily movement."
        featuresLeft={["Shoulders and upper back", "Lower back", "Glutes and hips", "Thighs"]}
        featuresRight={["Calves", "Feet", "Arms"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/sportsmassage/sportsmassage-8.webp"
        subTitle="Recovery Technique"
        badgeTopText="A Stronger"
        badgeBottomText="Recovery"
        title={<>What Happens During a Sports Massage?</>}
        text="The session begins with a short consultation to understand your activity level and areas needing attention. Our therapist combines techniques such as kneading, compression, stretching, and controlled pressure to ease muscle tightness while adjusting the intensity to your comfort and goals."
        featuresLeft={[
          "Personalised body assessment",
          "Warm-up massage techniques",
          "Targeted pressure on tense areas",
        ]}
        featuresRight={[
          "Muscle kneading and compression",
          "Stretching movements when needed",
          "Relaxing recovery finish",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-sport-massage sports-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/sportsmassage/sportsmassage-9.webp"
          imageTitle="Sport Massage"
          subTitle="Frequently Asked Questions"
          title={<>Sports Massage Seminyak: FAQs</>}
          items={[
            {
              question: "Is Sports Massage only for professional athletes?",
              answer:
                "No. Sport Massage is suitable for anyone with an active lifestyle, including gym-goers, runners, surfers, hikers, and people who experience muscle tightness from regular movement.",
            },
            {
              question: "What is the difference between Sports Massage and Deep Tissue Massage?",
              answer:
                "Both techniques may use firm pressure, but their purpose is different. Sport Massage focuses more on recovery, mobility, and the physical demands of an active lifestyle, while Deep Tissue Massage focuses on releasing deeper areas of long-term muscle tension.",
            },
            {
              question: "Should I get Sports Massage before or after exercise?",
              answer:
                "Both options are possible. A pre-activity session usually uses lighter techniques to prepare the body, while a post-activity session focuses more on relaxation and recovery after physical effort.",
            },
            {
              question: "Will Sports Massage feel painful?",
              answer:
                "Sport Massage may involve stronger pressure than a relaxation massage, but it should not feel painful. Our therapists adjust the intensity based on your comfort and body condition.",
            },
            {
              question: "How often should I receive Sports Massage?",
              answer:
                "The ideal frequency depends on your activity level, training schedule, and personal preference. Some active individuals enjoy regular sessions, while others book treatments after periods of increased physical demand.",
            },
          ]}
        />
      </div>
      <div className="jsx-sport-massage sports-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Take Your Recovery Further"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-sport-massage sports-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/sportsmassage/sportsmassage-10.webp"
          title="Renew Your Body After Every Challenge"
          text="Training, outdoor adventures, and long days exploring Bali leave muscles tired and restricted. Sport Massage uses controlled pressure and recovery techniques to restore comfort and movement."
          closingText="Reserve your Sport Massage and feel ready for your next activity."
        />
      </div>
    </div>
  );
}
