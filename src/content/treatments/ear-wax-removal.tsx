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

/** /seminyak/ear-wax-removal/ — generated from the live page's component tree, section for section. */
export default function EarWaxRemovalPage() {
  return (
    <div className="page-wrapper lh p-ear-wax-removal">
      <div className="jsx-ear-wax-removal ear-candle-banner">
        <PageBanner
          image="/images/services/earcandle/earcandle-1.webp"
          subTitle="Gentle Ear Care"
          titleSpan="Ear Candle Treatment"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/earcandle/earcandle-2.webp"
        secondaryImage="/images/services/earcandle/earcandle-3.webp"
        subTitle="Wellness for the Senses"
        title={<>What Is an Ear Candle Treatment?</>}
        text="Ear Candle, also known as Ear Candling, is a traditional wellness treatment that uses a hollow candle placed at the outer ear area while gentle warmth creates a calming sensation. Often combined with light massage around the ears, temples, and neck, this treatment is chosen by guests looking for a relaxing moment after travelling, long flights, or busy daily routines."
        feature1Title="Gentle Warmth"
        feature1Text="Creates a soothing sensation around the ear and head area during the session."
        feature2Title="Relaxing Approach"
        feature2Text="Combines controlled candle warmth with gentle surrounding massage techniques."
      />
      <div className="jsx-ear-wax-removal ear-candle-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={["/images/services/earcandle/earcandle-4.webp"]}
          subTitle="Treatment Overview"
          title="One Relaxing Ear Candle Session"
          text="Our Ear Candle treatment is offered in one session that provides a calm and comfortable wellness experience. The treatment is suitable for first-time guests and can also be combined with other spa services during your visit."
          packages={[
            {
              price: "IDR 159K",
              name: "30 Minutes",
              treatments: [
                "Guests after long flights or travel",
                "Those seeking gentle ear and head relaxation",
                "Anyone wanting a quick wellness treatment",
              ],
            },
          ]}
        />
      </div>
      <div className="jsx-ear-wax-removal ear-candle-funfact">
        <Funfacts
          items={[
            { title: "Controlled", text: "Warmth" },
            { title: "Outer", text: "Ear Care" },
            { title: "Head", text: "Comfort" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/earcandle/earcandle-5.webp"
        subTitle="Common Uses"
        title={<>When Is Ear Candle Commonly Chosen?</>}
        text="Ear Candle is often chosen as a gentle wellness treatment during a relaxing spa visit. It may be suitable for guests looking to unwind after travel, take a short break from a busy schedule, or enjoy a calming treatment around the ears and head. Common reasons they choose Ear Candle include:"
        featuresLeft={[
          "Relaxing after flights or long journeys",
          "Combining it with a massage treatment",
          "Taking a short wellness break",
        ]}
        featuresRight={[
          "Enjoying gentle attention around the ears and head",
          "Trying Ear Candle for the first time",
          "Choosing a treatment with a shorter time commitment",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/earcandle/earcandle-6.webp"
        subTitle="Treatment Focus"
        badgeTopText="Beyond the"
        badgeBottomText="Ear"
        title={<>Areas Included During an Ear Candle Session</>}
        text="During an Ear Candle session, gentle attention may be given to the outer ear and nearby areas for a more relaxing experience. Depending on the treatment, this may include:"
        featuresLeft={["Outer ear area", "Temples", "Jaw muscles"]}
        featuresRight={["Upper neck", "Surrounding head area", "Gentle comfort-focused care"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/earcandle/earcandle-7.webp"
        subTitle="Step by Step"
        badgeTopText="Handled With"
        badgeBottomText="Care"
        title={<>How Does an Ear Wax Candle Work?</>}
        text="An ear wax candle session follows a simple and gentle process designed to create a relaxing experience. Firstly, we make sure you are comfortably positioned before placing the hollow candle near the outer ear. During the session, the candle is carefully monitored, and gentle massage may be included to help you relax. This treatment typically involves:"
        featuresLeft={[
          "Positioning the hollow candle near the outer ear",
          "Gently lighting the candle at the opposite end",
          "Monitoring the flame throughout the session",
        ]}
        featuresRight={[
          "Providing continuous therapist supervision",
          "Including gentle massage around the ears, temples, jaw, and neck",
          "Enjoying the treatment at the spa or your accommodation",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-ear-wax-removal ear-candle-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/earcandle/earcandle-8.webp"
          imageTitle="Gentle Ear Care"
          subTitle="Frequently Asked Questions"
          title={<>Ear Candle Seminyak: FAQs</>}
          items={[
            {
              question: "What is Ear Candle treatment?",
              answer:
                "Ear Candle is a wellness treatment using a hollow candle placed at the outer ear area to create gentle warmth and relaxation. It is commonly offered as a spa experience rather than a medical procedure.",
            },
            {
              question: "Does Ear Candle remove earwax?",
              answer:
                "Ear Candle is often associated with earwax removal, but it should be viewed as a relaxation treatment rather than a replacement for professional ear cleaning or medical care.",
            },
            {
              question: "Is Ear Candle safe?",
              answer:
                "When performed properly by trained therapists, the candle remains outside the ear canal and the session is carefully monitored for comfort and safety.",
            },
            {
              question: "How long does Ear Candle treatment take?",
              answer:
                "A typical session takes around 20 - 30 minutes, depending on the treatment flow and guest comfort.",
            },
            {
              question: "Can I enjoy Ear Candle after travelling or flying?",
              answer:
                "Yes. Many guests choose this treatment after flights or long journeys as a relaxing way to unwind during their Bali holiday.",
            },
            {
              question: "Can Ear Candle be combined with other spa treatments?",
              answer:
                "Yes. Many guests combine Ear Candle with massages or other wellness treatments for a more complete relaxation session.",
            },
          ]}
        />
      </div>
      <div className="jsx-ear-wax-removal ear-candle-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Explore More Ways to Feel Restored"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-ear-wax-removal ear-candle-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/earcandle/earcandle-9.webp"
          title="Restore a Sense of Comfort Around Your Ears"
          text="A gentle wellness ritual for the head and ear area, and a quiet break from a busy holiday schedule. Available at our spa, or as home service around Seminyak."
          closingText="Reserve your session and enjoy a calm wellness break during your Bali stay."
        />
      </div>
    </div>
  );
}
