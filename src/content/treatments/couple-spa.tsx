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

/** /seminyak/couple-spa/ — generated from the live page's component tree, section for section. */
export default function CoupleSpaPage() {
  return (
    <div className="page-wrapper lh p-couple-spa">
      <div className="jsx-couple-spa couple-massage-banner">
        <PageBanner
          image="/images/services/couplemassage/couplemassage-1.webp"
          subTitle="Together in Relaxation"
          titleSpan="Couples Massage in Bali:"
          title="Couple Spa in Seminyak"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/couplemassage/couplemassage-2.webp"
        secondaryImage="/images/services/couplemassage/couplemassage-3.webp"
        subTitle="Shared Wellness"
        title={<>The Couples Massage Experience</>}
        text="A Couple Massage is a shared spa experience where two guests receive treatments side by side, each with their own therapist. While it's popular with couples, it's also suitable for friends and family members who want to relax together. Each guest can choose their preferred pressure, creating a personalised treatment within the same relaxing environment."
        feature1Title="Side-by-Side Treatment"
        feature1Text="Enjoy your massage together in a private room or through our villa and hotel home service."
        feature2Title="Personalised for Each Guest"
        feature2Text="Each person can request their preferred pressure and focus areas for a comfortable experience."
      />
      <div className="jsx-couple-spa couple-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/couplemassage/couplemassage-4.webp",
            "/images/services/couplemassage/couplemassage-5.webp",
            "/images/services/couplemassage/couplemassage-6.webp",
            "/images/services/couplemassage/couplemassage-7.webp",
          ]}
          subTitle="Find Yours"
          title="Couples Massage Bali Packages in Seminyak"
          text="Every couple enjoys relaxation differently, which is why we offer several massage styles for two. Whether you prefer gentle Balinese techniques, deeper muscle work, or a warm candle ritual, each experience is designed to help you slow down and enjoy quality time together."
          packages={[
            {
              price: "IDR 639K",
              name: "Package A",
              treatments: ["1 Hr Balinese Massage 2 Pax", "30 Mins Ear Candle 2 Pax"],
            },
            {
              price: "IDR 709K",
              name: "Package B",
              treatments: ["1 Hr Balinese Massage 2 Pax", "1 Hr Bali Moon Facial 2 Pax"],
            },
            {
              price: "IDR 849K",
              name: "Package C",
              treatments: ["1 Hr Warm Candle 2 Pax", "30 Mins Ear Candle 2 Pax"],
            },
            {
              price: "IDR 929K",
              name: "Package D",
              treatments: ["1 Hr Warm Candle 2 Pax", "1 Hr Bali Moon Facial 2 Pax"],
            },
          ]}
          topContent={
            <SessionOptions
              groups={[
                {
                  title: "Couple Balinese Massage",
                  sessions: [
                    {
                      price: "IDR 319K",
                      duration: "1 Hour · 2 Guests",
                      details: [
                        "Full-body relaxation",
                        "Gentle to medium pressure",
                        "Ideal for a shorter shared session",
                      ],
                    },
                    {
                      price: "IDR 479K",
                      duration: "1.5 Hours · 2 Guests",
                      details: [
                        "More time for full-body care",
                        "Extra attention to tense areas",
                        "A more unhurried massage together",
                      ],
                    },
                    {
                      price: "IDR 659K",
                      duration: "2 Hours · 2 Guests",
                      details: [
                        "Extended full-body treatment",
                        "More time for areas of tension",
                        "Longer shared relaxation",
                      ],
                    },
                  ],
                },
                {
                  title: "Couple Traditional Massage",
                  sessions: [
                    {
                      price: "IDR 339K",
                      duration: "1 Hour · 2 Guests",
                      details: [
                        "Full-body traditional massage",
                        "Firm pressure and flowing techniques",
                        "Ideal for everyday body tension",
                      ],
                    },
                    {
                      price: "IDR 519K",
                      duration: "1.5 Hours · 2 Guests",
                      details: [
                        "More time across the full body",
                        "Extra focus on tired muscles",
                        "A deeper traditional massage session",
                      ],
                    },
                    {
                      price: "IDR 679K",
                      duration: "2 Hours · 2 Guests",
                      details: [
                        "Extended traditional bodywork",
                        "More attention to areas that feel tight",
                        "Longer time to relax together",
                      ],
                    },
                  ],
                },
                {
                  title: "Couple Deep Tissue Massage",
                  sessions: [
                    {
                      price: "IDR 539K",
                      duration: "1 Hour · 2 Guests",
                      details: [
                        "Firm targeted pressure",
                        "Focus on deeper muscle tension",
                        "Ideal for specific tight areas",
                      ],
                    },
                    {
                      price: "IDR 719K",
                      duration: "1.5 Hours · 2 Guests",
                      details: [
                        "More time for deeper bodywork",
                        "Extended focus on tense muscles",
                        "Ideal for guests wanting stronger pressure",
                      ],
                    },
                  ],
                },
                {
                  title: "Couple Warm Candle Massage",
                  sessions: [
                    {
                      price: "IDR 539K",
                      duration: "1 Hour · 2 Guests",
                      details: [
                        "Warm candle oil massage",
                        "Smooth relaxing strokes",
                        "Ideal for a comforting shared session",
                      ],
                    },
                    {
                      price: "IDR 799K",
                      duration: "1.5 Hours · 2 Guests",
                      details: [
                        "Extended warm oil massage",
                        "More time for full-body relaxation",
                        "Extra attention to tired areas",
                      ],
                    },
                    {
                      price: "IDR 999K",
                      duration: "2 Hours · 2 Guests",
                      details: [
                        "Longer warm candle treatment",
                        "Complete full-body relaxation",
                        "More time to slow down together",
                      ],
                    },
                  ],
                },
              ]}
              subTitle="Side by Side"
              title="Couple Massage Session Options"
              text="Share a relaxing treatment side by side with a massage style that suits both of you. Each option is available for two guests, with different techniques and session lengths to match how you want to relax."
              icon="/images/spa/Couple.svg"
            />
          }
        />
      </div>
      <div className="jsx-couple-spa couple-massage-funfact">
        <Funfacts
          items={[
            { title: "Private", text: "Room Available" },
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
        image="/images/services/couplemassage/couplemassage-8.webp"
        subTitle="Shared Moments"
        title={<>Why Is Couple Massage So Popular in Bali?</>}
        text="Couple Massage is popular in Bali because it offers couples a relaxing way to spend quality time together, whether they are celebrating a special occasion or taking a break during their holiday. Some of the main reasons include:"
        featuresLeft={[
          "Popular for honeymoon trips",
          "A favourite anniversary activity",
          "Perfect after sightseeing and beach days",
        ]}
        featuresRight={[
          "Encourages quality time together",
          "Suitable before romantic dinners or celebrations",
          "Creates a relaxing shared experience",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/couplemassage/couplemassage-9.webp"
        subTitle="Suitable For"
        badgeTopText="A Moment"
        badgeBottomText="to Share"
        title={<>{"Couple Massage isn't Just for Couples"}</>}
        text="A Couple Massage can be enjoyed by two people who want to relax side by side, regardless of their relationship. This makes it a suitable choice for:"
        featuresLeft={["Romantic couples", "Honeymooners", "Friends travelling together"]}
        featuresRight={["Parents and adult children", "Brothers and sisters", "Anyone wanting to relax side by side"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/couplemassage/couplemassage-10.webp"
        subTitle="Your Visit"
        badgeTopText="Two in"
        badgeBottomText="Harmony"
        title={<>What to Expect During Your Couple Massage</>}
        text="Your Couple Massage is arranged so that both guests can enjoy the treatment together while still having their individual preferences considered. From the initial consultation to the treatment itself, each part of the experience is designed to provide comfort, privacy, and personalised attention. The experience includes:"
        featuresLeft={[
          "Brief consultation before treatment",
          "Individual pressure preferences",
          "Two therapists working simultaneously",
        ]}
        featuresRight={[
          "Private treatment environment",
          "Available in spa or at your accommodation",
          "Suitable for special occasions or everyday relaxation",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-couple-spa couple-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/couplemassage/couplemassage-11.webp"
          imageTitle="Relax Together"
          subTitle="Frequently Asked Questions"
          title={<>Couples Massage Bali Seminyak: FAQs</>}
          items={[
            {
              question: "Is Couple Massage only for romantic couples?",
              answer:
                "No. Couple Massage simply means two people enjoying treatments together. Friends, siblings, parents, and family members regularly book this experience as well.",
            },
            {
              question: "Do we receive our massages in the same room?",
              answer:
                "Yes. Both guests receive their treatments side by side with two therapists in the same private treatment room or during the same home service appointment.",
            },
            {
              question: "Can each person request different pressure?",
              answer:
                "Absolutely. Each guest has their own consultation before the treatment begins, allowing pressure levels and focus areas to be adjusted individually.",
            },
            {
              question: "Can we choose different massage treatments?",
              answer:
                "Depending on the package selected, different massage options may be available for each guest. Our team will be happy to recommend the most suitable combination when booking.",
            },
            {
              question: "Is Couple Massage suitable for honeymooners?",
              answer:
                "Yes. It is one of our most popular experiences for honeymoon trips, anniversaries, birthdays, and other special occasions, offering a relaxing way to spend quality time together.",
            },
            {
              question: "What massage treatments are suitable for a couple massage?",
              answer:
                "Popular options include Balinese massage, aromatherapy massage, hot stone massage, and other relaxing body treatments. The best choice depends on your preferred pressure, relaxation goals, and the treatments available at the spa.",
            },
          ]}
        />
      </div>
      <div className="jsx-couple-spa couple-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Discover More Ways to Relax Together"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-couple-spa couple-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/couplemassage/couplemassage-12.webp"
          title="Book a Couples Massage in Seminyak"
          text="A simple way to share quality time and let the body rest, popular for honeymoons, anniversaries, or a day with friends. At our spa, or at your villa or hotel."
          closingText="Create a memorable wellness experience together and let our therapists take care of the rest."
        />
      </div>
    </div>
  );
}
