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

/** /seminyak/hot-stone-massage/ — generated from the live page's component tree, section for section. */
export default function HotStoneMassagePage() {
  return (
    <div className="page-wrapper lh p-hot-stone-massage">
      <div className="jsx-hot-stone-massage hot-stone-massage-banner">
        <PageBanner
          image="/images/services/hotstonemassage/hotstonemassage-1.webp"
          subTitle="Warm Stone Therapy"
          titleSpan="Hot Stone Massage"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/hotstonemassage/hotstonemassage-2.webp"
        secondaryImage="/images/services/hotstonemassage/hotstonemassage-3.webp"
        subTitle="The Experience"
        title={<>Why Does Hot Stone Massage Feel Different?</>}
        text="Hot Stone Massage combines traditional massage techniques with smooth heated basalt stones to create a deeply relaxing treatment. The warmth allows muscles to soften before deeper massage techniques are applied, making it easier to release tension without excessive pressure. This treatment is often chosen by guests seeking both physical relaxation and a calming wellness experience."
        feature1Title="Heated Basalt Stones"
        feature1Text="Naturally retains warmth to help relax muscles throughout the treatment."
        feature2Title="Deep Relaxation"
        feature2Text="Combines therapeutic heat with massage to promote lasting comfort."
      />
      <div className="jsx-hot-stone-massage hot-stone-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/hotstonemassage/hotstonemassage-4.webp",
            "/images/services/hotstonemassage/hotstonemassage-5.webp",
            "/images/services/hotstonemassage/hotstonemassage-6.webp",
            "/images/services/hotstonemassage/hotstonemassage-7.webp",
          ]}
          subTitle="Find Yours"
          title="Hot Stone Massage Packages in Seminyak"
          text="Hot Stone Massage pairs naturally with treatments that extend relaxation from head to toe. Our carefully selected packages combine soothing warmth with facial care, body treatments, or beauty services, making them ideal for guests looking for a more complete spa experience during their stay in Bali."
          packages={[
            {
              price: "IDR 549K",
              name: "Package A",
              treatments: ["1.5 Hr Hot Stone", "30 Mins Body Scrub", "30 Mins Head Massage"],
            },
            {
              price: "IDR 549K",
              name: "Package B",
              treatments: ["1 Hr Hot Stone", "1 Hr Cream Bath", "30 Mins Reflexology"],
            },
            { price: "IDR 449K", name: "Package C", treatments: ["1 Hr Hot Stone", "1 Hr Bali Moon Facial"] },
            { price: "IDR 519K", name: "Package D", treatments: ["1.5 Hr Hot Stone", "30 Mins Pedicure"] },
          ]}
          topContent={
            <SessionOptions
              sessions={[
                {
                  price: "IDR 250K",
                  duration: "1 Hour",
                  details: [
                    "Full-body hot stone massage",
                    "Warmth across the main muscle groups",
                    "Ideal for a first hot stone session",
                  ],
                },
                {
                  price: "IDR 380K",
                  duration: "1.5 Hours",
                  details: [
                    "Full-body hot stone massage",
                    "Warmth across major muscle areas",
                    "Extra focus on built-up tension",
                  ],
                },
                {
                  price: "IDR 495K",
                  duration: "2 Hours",
                  details: [
                    "Extended hot stone treatment",
                    "More time for deeper relaxation",
                    "Longer focus on tense areas",
                  ],
                },
              ]}
              subTitle="Warmth That Lasts"
              title="Hot Stone Massage Duration Options"
              text="Hot Stone Massage combines heated basalt stones with flowing massage techniques to help the body relax more deeply. Longer sessions allow more time for full-body treatment and focused attention on areas that hold tension."
              icon="/images/spa/HotStone.svg"
            />
          }
        />
      </div>
      <div className="jsx-hot-stone-massage hot-stone-massage-funfact">
        <Funfacts
          items={[
            { title: "Heated", text: "Basalt Stones" },
            { title: "Muscle", text: "Relaxation" },
            { title: "Customized", text: "Packages" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/hotstonemassage/hotstonemassage-8.webp"
        subTitle="Treatment Benefits"
        title={<>How Can Hot Stone Massage Support Your Wellbeing?</>}
        text="Hot Stone Massage combines the soothing warmth of heated stones with flowing massage techniques to help you feel more relaxed and comfortable. The warmth can help prepare your muscles for massage, while the treatment offers a calming experience many guests enjoy after travel, busy days, or physical activity. Some of the key benefits are:"
        featuresLeft={[
          "Helps soften tight muscles before massage",
          "Supports healthy circulation",
          "Encourages a deeper sense of relaxation",
        ]}
        featuresRight={[
          "May ease feelings of physical tension",
          "Provides soothing warmth throughout the treatment",
          "Offers a relaxing option after travel or active days",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/hotstonemassage/hotstonemassage-9.webp"
        subTitle="Heat Therapy"
        badgeTopText="Heat in the"
        badgeBottomText="Right Places"
        title={<>Where Are the Warm Stones Used?</>}
        text="Warm stones can be placed on different parts of the body depending on where you want to focus the treatment. Larger stones are generally used on broader areas, while smaller stones allow for more focused warmth. Common areas for warm stone placement are:"
        featuresLeft={["Back and shoulders", "Neck area", "Legs and calves"]}
        featuresRight={["Arms", "Hands", "Feet"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/hotstonemassage/hotstonemassage-10.webp"
        subTitle="The Experience"
        badgeTopText="Feel the"
        badgeBottomText="Heat Work"
        title={<>What Happens During a Hot Stone Massage</>}
        text="A Hot Stone Massage follows a gradual process that combines heated stones with traditional massage techniques. The treatment starts by preparing the body for the warmth, followed by a combination of stone and hand massage. Throughout the session, we pay attention to your comfort and adjust the treatment as needed. The session generally follows these steps:"
        featuresLeft={[
          "Comfort consultation before treatment",
          "Warm stone placement on selected areas",
          "Flowing massage with heated stones",
        ]}
        featuresRight={[
          "Combination of stone and hand techniques",
          "Temperature checks throughout the session",
          "Calming finishing placement of warm stones",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-hot-stone-massage hot-stone-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/hotstonemassage/hotstonemassage-11.webp"
          imageTitle="Warm Stone Therapy"
          subTitle="Frequently Asked Questions"
          title={<>Hot Stone Massage Seminyak: FAQs</>}
          items={[
            {
              question: "Are the stones very hot?",
              answer:
                "No. The stones are heated to a comfortable therapeutic temperature and are always tested before being placed on the body. Your therapist will also adjust the warmth according to your comfort level.",
            },
            {
              question: "What type of stones are used?",
              answer:
                "Most professional Hot Stone Massage treatments use smooth basalt stones because they naturally retain heat for longer, allowing warmth to be distributed evenly throughout the massage.",
            },
            {
              question: "Is Hot Stone Massage better than a regular massage?",
              answer:
                "They offer different experiences. A traditional massage relies entirely on manual techniques, while Hot Stone Massage combines massage with therapeutic heat to help muscles relax before deeper work begins.",
            },
            {
              question: "Can this treatment help after travelling?",
              answer:
                "Yes. Many guests choose Hot Stone Massage after long flights, sightseeing, or active holidays because the warmth helps ease muscular tension and encourages relaxation.",
            },
            {
              question: "Can I receive Hot Stone Massage at my villa or hotel?",
              answer:
                "Yes. Our therapists provide professional home service throughout Seminyak and nearby areas, bringing all necessary equipment for a comfortable treatment.",
            },
            {
              question: "What is a hot stone massage?",
              answer:
                "Hot stone massage uses smooth, heated stones placed on selected areas of the body alongside massage techniques. The warmth helps relax the muscles while the massage creates a deeper sense of relaxation.",
            },
          ]}
        />
      </div>
      <div className="jsx-hot-stone-massage hot-stone-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Warm Up to More Than Hot Stone Massage"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-hot-stone-massage hot-stone-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/hotstonemassage/hotstonemassage-12.webp"
          title="Warmth That Helps the Body Fully Unwind"
          text="Sometimes muscles need warmth rather than stronger pressure. Hot Stone Massage combines therapeutic heat with skilled technique to ease tension and restore balance. At our spa, or at your villa."
          closingText="Reserve your Hot Stone Massage package and enjoy warmth-led relaxation."
        />
      </div>
    </div>
  );
}
