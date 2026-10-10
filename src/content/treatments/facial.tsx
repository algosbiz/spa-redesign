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

/** /seminyak/facial/ — generated from the live page's component tree, section for section. */
export default function FacialPage() {
  return (
    <div className="page-wrapper lh p-facial">
      <div className="jsx-facial bali-moon-facial-banner">
        <PageBanner
          image="/images/services/balimoonfacial/balimoonfacial-1.webp"
          subTitle="Skin Rejuvenation"
          titleSpan="Facial"
          title="in Seminyak: Bali Moon Facial Treatments"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/balimoonfacial/balimoonfacial-2.webp"
        secondaryImage="/images/services/balimoonfacial/balimoonfacial-3.webp"
        subTitle="A Personalized Experience"
        title={<>What Makes Bali Moon Facial Different?</>}
        text="Bali Moon Facial is our signature facial treatment designed to refresh, hydrate, and support healthy-looking skin while providing a relaxing spa experience. The treatment combines gentle cleansing, steaming, exfoliation, lymphatic facial massage using Argan Oil, and a targeted mask selected according to your skin's needs."
        feature1Title="Tea Tree Mask"
        feature1Text="Helps balance excess oil, calm blemishes, and support clearer-looking skin."
        feature2Title="Gold Mask"
        feature2Text="Focuses on hydration, elasticity, and restoring a healthy-looking glow."
      />
      <div className="jsx-facial bali-moon-facial-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/balimoonfacial/balimoonfacial-4.webp",
            "/images/services/balimoonfacial/balimoonfacial-5.webp",
            "/images/services/balimoonfacial/balimoonfacial-6.webp",
            "/images/services/balimoonfacial/balimoonfacial-7.webp",
          ]}
          subTitle="Find Yours"
          title="Facial Packages in Seminyak"
          text="Bali Moon Facial is often combined with massage, hair treatments, and nail care to create a complete self-care experience. Our treatment packages are designed for guests looking to relax while giving their skin additional attention during their time in Bali."
          packages={[
            {
              price: "IDR 439K",
              name: "Package A",
              treatments: ["1 Hr Bali Moon Facial", "30 Mins Body Scrub", "1 Hr Balinese Massage"],
            },
            {
              price: "IDR 649K",
              name: "Package B",
              treatments: ["1 Hr Bali Moon Facial", "1 Hr Cream Bath", "1 Hr Thai Massage"],
            },
            { price: "IDR 449K", name: "Package C", treatments: ["1 Hr Bali Moon Facial", "1 Hr Thai Massage"] },
            {
              price: "IDR 549K",
              name: "Package D",
              treatments: ["1 Hr Bali Moon Facial", "1 Hr Warm Candle", "30 Mins Body Scrub"],
            },
          ]}
          topContent={
            <SessionOptions
              sessions={[
                {
                  price: "IDR 196K",
                  duration: "Bali Moon Tea Tree Facial",
                  details: [
                    "Helps refresh and clarify the skin",
                    "Suitable for oily or blemish-prone skin",
                    "Finished with a calming Tea Tree mask",
                  ],
                },
                {
                  price: "IDR 269K",
                  duration: "Bali Moon Gold Facial",
                  details: [
                    "Helps nourish and soften the skin",
                    "Suitable for dull or tired-looking skin",
                    "Finished with a Gold mask for a more radiant look",
                  ],
                },
              ]}
              subTitle="Your Skin Moment"
              title="Bali Moon Facial Options"
              text="We offers two facial treatment options, giving you a simple choice depending on the type of facial you prefer. Both treatments follow our complete facial care routine and are available as individual sessions."
              icon="/images/spa/Balinese.svg"
            />
          }
        />
      </div>
      <div className="jsx-facial bali-moon-facial-funfact">
        <Funfacts
          items={[
            { title: "For All", text: "Skin Types" },
            { title: "Personalized", text: "Mask Selection" },
            { title: "Customized", text: "Packages" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/balimoonfacial/balimoonfacial-8.webp"
        subTitle="Skin Goals"
        title={<>What Does a Facial Help With?</>}
        text="While every skin type behaves differently, regular facial treatments are commonly used to help manage surface impurities, maintain hydration, and support overall skin condition. Guests choose facial treatments for a variety of skincare goals, such as:"
        featuresLeft={[
          "Supports hydration and moisture balance",
          "Helps remove excess oil and impurities",
          "Encourages smoother skin texture",
        ]}
        featuresRight={[
          "May improve the appearance of dull skin",
          "Supports a fresher and brighter complexion",
          "Suitable for ongoing skin maintenance",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/balimoonfacial/balimoonfacial-9.webp"
        subTitle="Your Skin Type"
        badgeTopText="Made for"
        badgeBottomText="Your Skin"
        title={<>Which Mask is Right for Your Skin?</>}
        text="The right mask depends on what your skin needs at the time of your treatment. Tea Tree and Gold masks offer different benefits, making them suitable for different skin types and concerns. We can help you choose the most appropriate option based on your skin's condition:"
        featuresLeft={[
          "Tea Tree for oily and congested skin",
          "Tea Tree for blemish-prone skin",
          "Gold for dry or dehydrated skin",
        ]}
        featuresRight={[
          "Gold for softening and comforting the skin",
          "Tea Tree or Gold for combination skin, depending on your needs",
          "Gold may be suitable for skin affected by sun exposure",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/balimoonfacial/balimoonfacial-10.webp"
        subTitle="Inside the Treatment"
        badgeTopText="Layer by"
        badgeBottomText="Layer"
        title={<>What to Expect During Your Facial</>}
        text="Your facial follows a series of carefully selected steps designed to cleanse, exfoliate, nourish, and refresh your skin:"
        featuresLeft={[
          "Milk cleanser to remove surface buildup",
          "Warm steam to soften and prepare the pores",
          "Red clay scrub for gentle exfoliation",
        ]}
        featuresRight={[
          "Argan Oil lymphatic facial massage",
          "Tea Tree or Gold Mask application",
          "Rose water toning to finish the treatment",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-facial bali-moon-facial-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/balimoonfacial/balimoonfacial-11.webp"
          imageTitle="Refresh Your Skin"
          subTitle="Frequently Asked Questions"
          title={<>Facial Seminyak: FAQs</>}
          items={[
            {
              question: "What Is a Bali Moon Facial?",
              answer:
                "A Bali Moon Facial is a relaxing facial treatment designed to cleanse, refresh, and nourish the skin while providing a soothing spa experience in Seminyak, Bali.",
            },
            {
              question: "Can a facial help after spending time in the Bali sun?",
              answer:
                "Yes. After days of sightseeing, swimming, or sun exposure, a facial can help cleanse the skin, restore moisture, and leave your complexion feeling refreshed. Many visitors choose a facial as part of their post-holiday self-care routine.",
            },
            {
              question: "What Are the Benefits of a Bali Moon Facial?",
              answer:
                "A Bali Moon Facial can help cleanse the skin, remove surface impurities, improve hydration, and leave the skin feeling refreshed and rejuvenated.",
            },
            {
              question: "Where Can I Get a Bali Moon Facial in Seminyak?",
              answer:
                "You can enjoy a Bali Moon Facial at Spa Bali Moon in Seminyak, Bali, as a relaxing spa experience designed to combine professional facial care with the calming atmosphere of a Balinese spa.",
            },
          ]}
        />
      </div>
      <div className="jsx-facial bali-moon-facial-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Complete Your Glow Beyond a Facial"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-facial bali-moon-facial-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/balimoonfacial/balimoonfacial-12.webp"
          title="Professional Facial Care at Your Spa, Villa, or Hotel"
          text="Professional facial care at our Seminyak spa, or at your villa or hotel for an extra IDR 75,000 per therapist. Personalised skincare, without rearranging your day."
          closingText="Reserve your appointment and give your skin the attention it deserves."
        />
      </div>
    </div>
  );
}
