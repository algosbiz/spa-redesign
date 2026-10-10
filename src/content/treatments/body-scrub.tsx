import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import TreatmentPricing from "@/components/sections/TreatmentPricing";
import SessionOptions from "@/components/sections/SessionOptions";
import Funfacts from "@/components/sections/Funfacts";
import TreatmentTestimonials from "@/components/sections/TreatmentTestimonials";
import AboutSplitAlt from "@/components/sections/AboutSplitAlt";
import FloralDecoration from "@/components/ui/FloralDecoration";
import AboutSplit from "@/components/sections/AboutSplit";
import FaqSection from "@/components/sections/FaqSection";
import ServiceSlider from "@/components/sections/ServiceSlider";
import ReserveCta from "@/components/sections/ReserveCta";

/** /seminyak/body-scrub/ — generated from the live page's component tree, section for section. */
export default function BodyScrubPage() {
  return (
    <div className="page-wrapper lh p-body-scrub">
      <div className="jsx-body-scrub body-scrub-banner">
        <PageBanner
          image="/images/services/bodyscrub/bodyscrub-1.webp"
          subTitle="Skin Renewal"
          titleSpan="Body Scrub"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/bodyscrub/bodyscrub-2.webp"
        secondaryImage="/images/services/bodyscrub/bodyscrub-3.webp"
        subTitle="Natural Exfoliation"
        title={<>Why Do So Many Guests Add a Body Scrub to Their Bali Stay?</>}
        text="Body scrub is an exfoliating treatment to remove dead skin cells, lift daily buildup, and help restore smoother skin texture. In Bali, sun exposure, saltwater, humidity, and outdoor activities can leave the skin feeling dry or dull over time. Our therapists use natural exfoliants inspired by traditional Balinese lulur rituals to gently refresh the skin while creating a relaxing treatment experience."
        feature1Title="Natural Ingredients"
        feature1Text="Available in chocolate, coconut, strawberry, bengkoang, jasmine, green tea, and Spa Sari variants."
        feature2Title="Gentle Exfoliation"
        feature2Text="Comfortable exfoliation using fine natural scrub ingredients and controlled pressure."
      />
      <div className="jsx-body-scrub body-scrub-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/bodyscrub/bodyscrub-4.webp",
            "/images/services/bodyscrub/bodyscrub-5.webp",
            "/images/services/bodyscrub/bodyscrub-6.webp",
            "/images/services/bodyscrub/bodyscrub-7.webp",
          ]}
          subTitle="Find Yours"
          title="Body Scrub Packages in Seminyak"
          text="Body scrubs are often combined with massage, facials, and beauty treatments to create a complete wellness session. Our packages are designed for guests looking to refresh both body and mind while enjoying their time in Bali."
          packages={[
            {
              price: "IDR 439K",
              name: "Package A",
              treatments: ["30 Mins Body Scrub", "1 Hr Balinese Massage", "1 Hr Bali Moon Facial"],
            },
            {
              price: "IDR 549K",
              name: "Package B",
              treatments: ["30 Mins Body Scrub", "1.5 Hr Hot Stone", "30 Mins Head Massage"],
            },
            {
              price: "IDR 539K",
              name: "Package C",
              treatments: ["30 Mins Body Scrub", "1 Hr Thai Massage", "1 Hr Cream Bath"],
            },
            {
              price: "IDR 549K",
              name: "Package D",
              treatments: ["30 Mins Body Scrub", "1 Hr Warm Candle", "1 Hr Bali Moon Facial"],
            },
          ]}
          topContent={
            <SessionOptions
              sessions={[
                { duration: "Chocolate", price: "IDR 169K" },
                { duration: "Coconut", price: "IDR 169K" },
                { duration: "Strawberry", price: "IDR 169K" },
                { duration: "Bengkoang", price: "IDR 169K" },
                { duration: "Jasmine", price: "IDR 169K" },
                { duration: "Green Tea", price: "IDR 169K" },
                { duration: "Spa Sari", price: "IDR 169K" },
                { duration: "Additional Body Mask", price: "IDR 100K" },
              ]}
              layout="compact"
              subTitle="Pick Your Scent"
              title="Body Scrub Options"
              text="Our Body Scrub is available in a selection of natural-inspired variants, so you can enjoy the same full-body exfoliating treatment with the fragrance and blend you prefer. An additional body mask can be applied after the scrub and followed by a shower."
              icon="/images/spa/Scrub.svg"
            />
          }
        />
      </div>
      <div className="jsx-body-scrub body-scrub-funfact">
        <Funfacts
          items={[
            { title: "Natural", text: "Ingredients" },
            { title: "Multiple", text: "Scrub Choices" },
            { title: "Customized", text: "Packages" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/bodyscrub/bodyscrub-3.webp"
        subTitle="Treatment Timing"
        badgeTopText="Reveal Your"
        badgeBottomText="Glow"
        title={<>When Is the Best Time to Use a Body Scrub?</>}
        text="There is no single best time to use a body scrub. It depends on your skin condition, daily activities, and spa routine. A body scrub may be especially suitable:"
        featuresLeft={["Before a special occasion", "After outdoor activities", "When your skin feels rough or dull"]}
        featuresRight={["Before another spa treatment", "As part of your regular skincare routine"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/bodyscrub/bodyscrub-8.webp"
        subTitle="The Results"
        title={<>What Are the Main Body Scrub Benefits?</>}
        text="Many guests choose body scrubs after beach days, outdoor activities, or before special occasions. A regular body scrub can help refresh the skin and support a smoother feel by:"
        featuresLeft={[
          "Helps remove dead skin cells and buildup",
          "Supports smoother skin texture",
          "May improve the appearance of dry areas",
        ]}
        featuresRight={[
          "Allows moisturizers and body oils to absorb more effectively",
          "Helps maintain softer and brighter-looking skin",
          "Commonly chosen before holidays and special events",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/bodyscrub/bodyscrub-9.webp"
        subTitle="Choosing Your Scrub"
        badgeTopText="Find Your"
        badgeBottomText="Favourite"
        title={<>Which Natural Scrub Matches Your Skin Goals?</>}
        text="Each scrub ingredient creates a slightly different treatment experience while delivering the same gentle exfoliating effect. The choice often comes down to fragrance preferences and the type of skin support you are looking for."
        featuresLeft={[
          "Coconut for moisture and softness",
          "Chocolate for a rich nourishing experience",
          "Strawberry for refreshing and brightening",
        ]}
        featuresRight={[
          "Bengkoang for smoother-looking skin",
          "Green Tea for a calming treatment",
          "Jasmine and Spa Sari for a traditional aromatic experience",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/bodyscrub/bodyscrub-10.webp"
        subTitle="Inside the Treatment"
        badgeTopText="The Ritual"
        badgeBottomText="Unfolds"
        title={<>What Happens During a Body Scrub Session?</>}
        text="The treatment begins with your choice of scrub ingredients before gentle circular massage movements are used to exfoliate the body evenly. Additional attention is often given to rougher areas such as elbows, knees, and feet before the scrub is removed to reveal smoother and cleaner-feeling skin underneath. The same treatment experience is also available through our villa and hotel home service appointments."
        featuresLeft={[
          "Choose your preferred scrub variant",
          "Full body exfoliation treatment",
          "Gentle circular massage movements",
        ]}
        featuresRight={[
          "Additional attention to rough areas",
          "Subtle natural fragrance after treatment",
          "Available for spa and home service bookings",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-body-scrub body-scrub-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/bodyscrub/bodyscrub-11.webp"
          imageTitle="Renew Your Skin"
          subTitle="Frequently Asked Questions"
          title={<>Body Scrub Seminyak: FAQs</>}
          items={[
            {
              question: "What happens during a body scrub massage?",
              answer:
                "During a body scrub massage, a therapist applies an exfoliating scrub to the body using gentle circular motions to remove dead skin cells and stimulate circulation. After the scrub is rinsed off, the treatment may be followed by a moisturizing lotion, body oil application, or a relaxing massage to leave the skin feeling smooth, refreshed, and hydrated.",
            },
            {
              question: "What are the benefits of a full body scrub?",
              answer:
                "A full body scrub helps remove dead skin cells from the surface of the skin, leaving it smoother, softer, and more refreshed. Regular exfoliation can improve skin texture, promote a brighter appearance, and help moisturizers absorb more effectively after treatment. Additional benefits may include improved circulation, reduced rough or dry skin, and a cleaner, healthier-looking complexion.",
            },
            {
              question: "How often should I get a body scrub treatment?",
              answer:
                "Most guests choose body scrubs every one to two weeks to help maintain smooth skin and support natural skin renewal cycles.",
            },
            {
              question: "Will the scrub feel rough on my skin?",
              answer:
                "No. We use fine natural exfoliants and controlled pressure to keep the treatment comfortable while still providing effective exfoliation.",
            },
            {
              question: "Is body scrub suitable for dry skin?",
              answer:
                "Yes. Removing dead surface buildup often allows moisturizers and body oils to absorb more effectively, helping the skin feel softer and more hydrated afterward.",
            },
            {
              question: "Can I get a body scrub after spending time in the sun?",
              answer:
                "Yes, provided the skin is not sunburned or overly sensitive. Many guests book body scrubs after beach days or outdoor activities to refresh the skin and remove buildup.",
            },
            {
              question: "Can body scrubs help with body acne or clogged pores?",
              answer:
                "Regular exfoliation may help reduce the accumulation of dead skin cells and impurities that can contribute to clogged pores. While it is not a medical treatment for acne, many guests find their skin feels cleaner and smoother after regular treatments.",
            },
          ]}
        />
      </div>
      <div className="jsx-body-scrub body-scrub-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Discover More Ways to Renew Your Glow"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-body-scrub body-scrub-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/bodyscrub/bodyscrub-12.webp"
          title="Give Your Skin a Fresh Start After Days in the Bali Sun"
          text="Beach days and Bali sun leave skin dry and rough. Our Body Scrub lifts away dead skin and leaves it smoother and softer. At our spa, or at your villa or hotel."
          closingText="Reserve your appointment and enjoy refreshed, smoother-feeling skin."
        />
      </div>
    </div>
  );
}
