/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import DecorationMotion from "@/components/ui/DecorationMotion";
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

/** /seminyak/balinese-massage/ — generated from the live page's component tree, section for section. */
export default function BalineseMassagePage() {
  return (
    <div className="page-wrapper lh p-balinese-massage">
      <DecorationMotion className="jsx-balinese-massage balinese-massage-page">
        <div className="jsx-balinese-massage balinese-massage-banner">
          <PageBanner
            image="/images/services/balinesemassage/balinesemassage-1.webp"
            shapeImage="/images/shape/banner-two-shape.png"
            subTitle="Ancient Healing"
            titleSpan="Balinese Massage"
            title="in Seminyak, Bali"
          />
        </div>
        <AboutIntro
          primaryImage="/images/services/balinesemassage/balinesemassage-2.webp"
          secondaryImage="/images/services/balinesemassage/balinesemassage-3.webp"
          leftShapeSrc="/images/shape/about-two-left.png"
          rightShapeSrc="/images/shape/about-two-right.png"
          subTitle="A Traditional Wellness"
          title={<>What Makes Balinese Massage Unique?</>}
          text="Balinese massage is a traditional treatment influenced by healing practices from Bali, Java, India, and China. The treatment combines acupressure, gentle stretching, skin rolling, and flowing strokes to help reduce tension, improve circulation, and encourage relaxation. Our therapists adapt the pressure and focus areas according to your comfort and preferences."
          feature1Title="Traditional Techniques"
          feature1Text="Combines acupressure, stretching, skin rolling, and rhythmic massage movements."
          feature2Title="Adjustable Pressure"
          feature2Text="Suitable for both gentle relaxation and firmer muscle relief sessions."
        />
        <div className="jsx-balinese-massage balinese-massage-pricing">
          <TreatmentPricing
            leftShapeSrc="/images/shape/package-four-shape-left.png"
            images={[
              "/images/services/balinesemassage/balinesemassage-4.webp",
              "/images/services/balinesemassage/balinesemassage-5.webp",
              "/images/services/balinesemassage/balinesemassage-6.webp",
              "/images/services/balinesemassage/balinesemassage-7.webp",
            ]}
            subTitle="Find Yours"
            title="Balinese Massage Packages in Seminyak"
            text="Balinese massage is often combined with treatments such as facials, cream baths, and nail care to create a more complete spa experience. Our treatment packages are created for guests looking to relax, refresh, and make the most of their massage time in Bali."
            packages={[
              {
                price: "IDR 449K",
                name: "Package A",
                treatments: ["1 Hr Balinese Massage", "1 Hr Mani & Pedi", "30 Mins Cream Bath"],
              },
              {
                price: "IDR 549K",
                name: "Package B",
                treatments: ["1 Hr Balinese Massage", "1 Hr Mani & Pedi", "1 Hr Bali Moon Facial"],
              },
              {
                price: "IDR 449K",
                name: "Package C",
                treatments: ["1 Hr Balinese Massage", "30 Mins Cream Bath", "1 Hr Bali Moon Facial"],
              },
              {
                price: "IDR 399K",
                name: "Package D",
                treatments: ["1 Hr Balinese Massage", "30 Mins Manicure", "30 Mins Pedicure"],
              },
            ]}
            topContent={<SessionOptions />}
          />
        </div>
        <div id="balinese-massage-funfact" className="jsx-balinese-massage balinese-massage-funfact">
          <Funfacts
            items={[
              { title: "Experienced", text: "Therapists" },
              { title: "Flexible", text: "Booking" },
              { title: "Customized", text: "Packages" },
              { title: "Outcall", text: "Available" },
            ]}
          />
        </div>
        <div className="jsx-balinese-massage balinese-massage-testimonial">
          <TreatmentTestimonials rightShapeSrc={null} />
        </div>
        <div className="jsx-balinese-massage balinese-massage-benefits">
          <AboutSplit
            image="/images/services/balinesemassage/balinesemassage-8.webp"
            leftShapeSrc={null}
            rightShapeSrc="/images/shape/about-right-shape.png"
            subTitle="The Benefits"
            title={<>Why Guests Choose Balinese Massage</>}
            text="Our Balinese massage is commonly chosen by travellers, office workers, and active individuals because it combines relaxation techniques with muscle-focused work in a single treatment. Find the benefits that make Balinese massage a favourite among our guests:"
            featuresLeft={[
              "Helps reduce muscle tension",
              "Encourages relaxation and stress relief",
              "Supports healthy blood circulation",
            ]}
            featuresRight={[
              "Often chosen after long flights and travel days",
              "Popular after surfing and outdoor activities",
              "Suitable for regular wellness routines",
            ]}
            buttonText="Book Now"
            buttonLink="https://wa.me/6287863175144"
          />
        </div>
        <div className="jsx-balinese-massage balinese-massage-suitable">
          <AboutSplitAlt
            image="/images/services/balinesemassage/balinesemassage-9.webp"
            leftShapeSrc="/images/shape/step-shape-left.png"
            rightShapeSrc="/images/shape/banner-six-shape2.png"
            rightDecoration={<FloralDecoration clustered />}
            subTitle="Suitable For"
            badgeTopText="Your Ideal"
            badgeBottomText="Match"
            title={<>Who Is Balinese Massage Best For?</>}
            text="This treatment is suitable for many different lifestyles and travel situations. Our therapists frequently recommend Balinese massage for guests looking for:"
            featuresLeft={[
              "Travellers recovering from long flights",
              "Visitors returning from outdoor activities",
              "Guests experiencing neck and shoulder tension",
            ]}
            featuresRight={[
              "People spending long hours sitting or working",
              "Couples looking for a relaxing spa experience",
              "Anyone seeking traditional Balinese wellness",
            ]}
            buttonText="Book Now"
            buttonLink="https://wa.me/6287863175144"
          />
        </div>
        <div className="jsx-balinese-massage balinese-massage-experience">
          <AboutSplit
            image="/images/services/balinesemassage/balinesemassage-10.webp"
            leftShapeSrc="/images/shape/leaf/4a.png"
            rightShapeSrc="/images/shape/banner-three-shape2.png"
            subTitle="The Experience"
            badgeTopText="Feel The"
            badgeBottomText="Difference"
            title={<>What to Expect from a Balinese Massage</>}
            text="A Balinese massage session begins with a short consultation regarding pressure preferences and areas that require extra attention. Massage oil is used to support smooth movements and muscle relaxation. The same treatment experience is also available through our home service for guests staying in villas, hotels, or private accommodations. Here’s what you can expect during your Balinese massage experience:"
            featuresLeft={[
              "Brief consultation before treatment",
              "Full body massage using massage oil",
              "Adjustable pressure during the session",
            ]}
            featuresRight={[
              "Additional attention to specific areas",
              "Available for individuals and couples",
              "Home service appointments available",
            ]}
            buttonText="Book Now"
            buttonLink="https://wa.me/6287863175144"
          />
        </div>
        <div className="jsx-balinese-massage balinese-massage-faq">
          <div aria-hidden="true" className="jsx-balinese-massage balinese-massage-faq-shape">
            <img
              loading="lazy"
              decoding="async"
              src="/images/shape/step-shape-left.png"
              alt=""
              className="jsx-balinese-massage animation__arryUpDown"
            />
          </div>
          <FaqSection
            removeTopPadding
            paperDecoration
            image="/images/services/balinesemassage/balinesemassage-11.webp"
            subTitle="Frequently Asked Questions"
            title={<>Balinese Massage Seminyak: FAQs</>}
            items={[
              {
                question: "What should I wear during a Balinese massage?",
                answer:
                  "You will typically be provided with a clean towel or spa attire before your treatment. During the massage, only the area being worked on is uncovered, ensuring both privacy and comfort throughout the session.",
              },
              {
                question: "Is Balinese massage good after surfing or outdoor activities?",
                answer:
                  "Yes. Balinese massage is a popular choice after surfing, sightseeing, or other outdoor activities in Bali. The combination of massage techniques helps relax tired muscles, improve circulation, and support post-activity recovery.",
              },
              {
                question: "How often should you get a Balinese massage?",
                answer:
                  "The ideal frequency depends on your lifestyle and wellness goals. Many visitors enjoy a massage once or twice during their holiday, while regular guests may schedule weekly or monthly treatments to help maintain relaxation and reduce muscle tension.",
              },
              {
                question: "What are the benefits of a Balinese massage?",
                answer:
                  "Balinese massage may help reduce muscle tension, improve blood circulation, encourage relaxation, ease everyday stress, and leave the body feeling refreshed. Many guests also find it beneficial after long flights or busy travel itineraries.",
              },
            ]}
          />
        </div>
        <div id="balinese-massage-services-section" className="jsx-balinese-massage balinese-massage-services">
          <ServiceSlider
            title="Explore Beyond Your Balinese Massage"
            leftShapeSrc="/images/shape/service-shape-left.png"
            rightShapeSrc="/images/shape/service-shape-right.png"
            showFullTreatmentSlider
            embedded
          />
        </div>
        <div
          id="balinese-massage-paper-section"
          className="jsx-balinese-massage balinese-massage-paper-section section__decoration-top section__decoration-bottom bg-sub"
        >
          <div aria-hidden="true" className="jsx-balinese-massage balinese-massage-cta-shape">
            <img
              loading="lazy"
              decoding="async"
              src="/images/shape/step-shape-left.png"
              alt=""
              className="jsx-balinese-massage animation__arryUpDown"
            />
          </div>
          <ReserveCta
            standardSpacing
            backgroundImage="/images/services/balinesemassage/balinesemassage-12.webp"
            title="Enjoy Balinese Massage Wherever You Stay"
            text="Available at our Seminyak spa, or as home service at your villa or hotel for an extra IDR 75,000 per therapist. Our therapists adjust the pressure to suit you, gentle through to firm."
            closingText="Reserve a session that fits your plans, in our spa or at your villa."
          />
        </div>
      </DecorationMotion>
    </div>
  );
}
