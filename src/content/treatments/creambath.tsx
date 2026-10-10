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

/** /seminyak/creambath/ — generated from the live page's component tree, section for section. */
export default function CreambathPage() {
  return (
    <div className="page-wrapper lh p-creambath">
      <div className="jsx-creambath hair-creambath-banner">
        <PageBanner
          image="/images/services/creambath/creambath-1.webp"
          subTitle="Hair & Scalp Wellness"
          titleSpan="Hair Cream Bath"
          title="in Seminyak: Hair Spa & Creambath"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/creambath/creambath-2.webp"
        secondaryImage="/images/services/creambath/creambath-3.webp"
        subTitle="Traditional Hair Care"
        title={<>The Ritual Behind a Cream Bath Treatment</>}
        text="A creambath is a popular Indonesian hair and scalp treatment that combines nourishing hair cream with a gentle scalp massage. Unlike a regular hair mask, this treatment focuses on both the hair strands and scalp, helping improve softness, moisture, and overall hair condition. Commonly enjoyed after sun exposure, swimming, or frequent styling, a creambath offers a relaxing way to refresh and care for your hair."
        feature1Title="Hair Conditioning"
        feature1Text="Nourishing ingredients help improve hair softness, hydration, and manageability."
        feature2Title="Scalp Relaxation"
        feature2Text="Gentle massage movements support scalp comfort while enhancing relaxation."
      />
      <div className="jsx-creambath hair-creambath-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/creambath/creambath-4.webp",
            "/images/services/creambath/creambath-5.webp",
            "/images/services/creambath/creambath-6.webp",
            "/images/services/creambath/creambath-7.webp",
          ]}
          subTitle="Find Yours"
          title="Cream Bath Packages in Seminyak"
          text="Our Cream Bath packages combine nourishing hair care with relaxing spa treatments for a more complete wellness experience. From facial care and massage to body treatments, each combination is designed to help you refresh your hair, relax your body, and enjoy more during your spa visit in Bali."
          packages={[
            {
              price: "IDR 649K",
              name: "Package A",
              treatments: ["1 Hr Cream Bath", "1 Hr Thai Massage", "1 Hr Bali Moon Facial"],
            },
            {
              price: "IDR 549K",
              name: "Package B",
              treatments: ["1 Hr Cream Bath", "1 Hr Hot Stone", "30 Mins Reflexology"],
            },
            {
              price: "IDR 449K",
              name: "Package C",
              treatments: ["30 Mins Cream Bath", "1 Hr Balinese Massage", "1 Hr Bali Moon Facial"],
            },
            {
              price: "IDR 539K",
              name: "Package D",
              treatments: ["1 Hr Cream Bath", "1 Hr Thai Massage", "30 Mins Body Scrub"],
            },
          ]}
          topContent={
            <SessionOptions
              sessions={[
                {
                  price: "IDR 165K",
                  duration: "Ginseng",
                  details: ["Revitalising hair care", "Scalp and strand treatment", "Relaxing head massage"],
                },
                {
                  price: "IDR 165K",
                  duration: "Avocado",
                  details: ["Nourishing hair treatment", "Conditioning from roots to ends", "Relaxing scalp care"],
                },
                {
                  price: "IDR 165K",
                  duration: "Aloe Vera",
                  details: ["Gentle hair and scalp care", "Conditioning treatment", "Relaxing head massage"],
                },
                {
                  price: "IDR 195K",
                  duration: "L'Oreal",
                  details: [
                    "Professional hair care option",
                    "Conditioning and smoothing treatment",
                    "Relaxing scalp massage",
                  ],
                },
                {
                  price: "IDR 165K",
                  duration: "NR",
                  details: ["Complete Creambath treatment", "Hair and scalp care", "Relaxing head massage"],
                },
                {
                  price: "IDR 165K",
                  duration: "Hair Mask",
                  details: [
                    "Conditioning hair treatment",
                    "Applied through the hair lengths",
                    "Finished with relaxing scalp care",
                  ],
                },
              ]}
              subTitle="Scalp to Strand"
              title="Creambath & Hair Mask Options"
              text="We offers several Creambath and Hair Mask options using different formulas and product choices. Each treatment includes cleansing, conditioning, and a relaxing head massage, with prices varying by product."
              icon="/images/spa/CreamBath.svg"
            />
          }
        />
      </div>
      <div className="jsx-creambath hair-creambath-funfact">
        <Funfacts
          items={[
            { title: "Multiple", text: "Cream Choices" },
            { title: "Flexible", text: "Booking" },
            { title: "Customized", text: "Packages" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/creambath/creambath-8.webp"
        subTitle="Ingredient Guide"
        title={<>Which Creambath Formula is Right for You?</>}
        text="Each creambath formula uses different ingredients to address common hair and scalp needs, from moisture and softness to scalp comfort and manageability. Depending on your hair condition and what you want from the treatment, you may prefer:"
        featuresLeft={[
          "Ginseng to support healthier-looking hair",
          "Avocado for moisture and softness",
          "Aloe Vera to soothe the scalp",
        ]}
        featuresRight={[
          "L'Oreal for smoother, more manageable hair",
          "Suitable for dry and damaged hair",
          "Ideal after swimming or sun exposure",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/creambath/creambath-9.webp"
        subTitle="Hair Benefits"
        badgeTopText="Bring Back"
        badgeBottomText="the Shine"
        title={<>How Does a Cream Bath Care for Your Hair?</>}
        text="Depending on your hair condition, the treatment can help improve how your hair feels and looks, particularly when it has been affected by dryness, styling, sun exposure, or swimming. Benefits may include:"
        featuresLeft={[
          "Helps improve hair moisture and softness",
          "Supports a smoother, healthier-looking appearance",
          "Helps reduce the look of dryness and frizz",
        ]}
        featuresRight={[
          "Leaves hair feeling refreshed and easier to manage",
          "Provides gentle care for the scalp",
          "Enhances shine and overall hair comfort",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/creambath/creambath-10.webp"
        subTitle="The Ritual"
        badgeTopText="Restore From"
        badgeBottomText="the Roots"
        title={<>Inside a Traditional Creambath Session</>}
        text="Our Creambath session combines hair conditioning with a relaxing scalp treatment. The process begins with selecting a suitable cream formula based on your hair needs, followed by a gentle application from the roots to the ends. A soothing scalp massage helps the cream absorb while releasing tension, then the treatment is completed with a rinse and finishing step to leave the hair feeling soft, refreshed, and manageable."
        featuresLeft={[
          "Hair and scalp assessment",
          "Cream application from roots to ends",
          "Gentle scalp and head massage",
        ]}
        featuresRight={[
          "Relaxing treatment with nourishing cream",
          "Hair rinse and finishing care",
          "Available at the spa or through home service",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-creambath hair-creambath-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/creambath/creambath-11.webp"
          imageTitle="Refresh Your Hair"
          subTitle="Frequently Asked Questions"
          title={<>Cream Bath Seminyak: FAQs</>}
          items={[
            {
              question: "What is the difference between a creambath and a hair mask?",
              answer:
                "Both treatments help nourish the hair, but a creambath also includes a relaxing scalp massage that focuses on scalp comfort while helping distribute the treatment evenly through the hair.",
            },
            {
              question: "Is creambath suitable for coloured or chemically treated hair?",
              answer:
                "Yes. Our creambath treatments are suitable for coloured, highlighted, and chemically treated hair. Our therapists can recommend the most appropriate formula for your hair condition.",
            },
            {
              question: "Which creambath is best for dry hair?",
              answer:
                "Many guests with dry hair choose Avocado or L'Oreal formulas because they are commonly selected for their moisturising and smoothing properties.",
            },
            {
              question: "How often should I get a creambath?",
              answer:
                "Many people include a creambath in their hair care routine every two to four weeks, depending on hair condition, styling habits, and environmental exposure.",
            },
            {
              question: "Can I get a creambath after swimming or spending time at the beach?",
              answer:
                "Absolutely. Creambath is one of the most popular treatments after swimming or sun exposure because it helps restore moisture and improve hair softness.",
            },
            {
              question: "Does a hair creambath include a scalp massage?",
              answer:
                "Yes. A traditional creambath typically includes a relaxing scalp massage as part of the treatment. The massage can help you unwind while the hair cream is applied and worked through the hair and scalp.",
            },
            {
              question: "What is the difference between a creambath and a regular hair wash?",
              answer:
                "A regular hair wash primarily focuses on cleansing the hair and scalp, while a creambath is a more intensive conditioning and relaxation treatment. A creambath typically combines hair cream application with a scalp massage and is designed to provide both hair care and relaxation.",
            },
            {
              question: "Should I wash my hair before a creambath?",
              answer:
                "You generally do not need to wash your hair immediately before your appointment. The therapist can assess your hair and scalp as part of the treatment process. Avoid applying excessive styling products before your appointment so the treatment can be performed comfortably.",
            },
          ]}
        />
      </div>
      <div className="jsx-creambath hair-creambath-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Discover More Ways to Nourish and Unwind"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-creambath hair-creambath-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/creambath/creambath-12.webp"
          title="Restore Your Hair After Bali's Tropical Days"
          text="Sun, salt water, and humidity take their toll on hair. A Creambath restores moisture, softens dry strands, and adds relaxing scalp care. At our spa, or at your villa or hotel."
          closingText="Refresh your hair and enjoy a calming self-care moment designed around your needs."
        />
      </div>
    </div>
  );
}
