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

/** /seminyak/hair-braiding/ — generated from the live page's component tree, section for section. */
export default function HairBraidingPage() {
  return (
    <div className="page-wrapper lh p-hair-braiding">
      <div className="jsx-hair-braiding hair-braiding-banner">
        <PageBanner
          image="/images/services/hairbraiding/hairbraiding-1.webp"
          subTitle="Creative Hairstyles"
          titleSpan="Hair Braiding"
          title="in Bali: Braids in Seminyak"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/hairbraiding/hairbraiding-2.webp"
        secondaryImage="/images/services/hairbraiding/hairbraiding-3.webp"
        subTitle="More Than a Hairstyle"
        title={<>Hair Braiding for Style, Comfort, and Everyday Wear</>}
        text="Hair braiding is more than a fashion trend. It is a practical hairstyle that helps keep hair neat, manageable, and protected throughout busy days in Bali. From beach clubs and sightseeing to special events and everyday activities, braided hairstyles reduce tangling in humid weather while offering a personalised look that suits different hair lengths, and occasions."
        feature1Title="Protective Styling"
        feature1Text="Helps reduce tangles and keeps hair organised throughout the day."
        feature2Title="Personalised Designs"
        feature2Text="Choose from classic, modern, or customised braid styles to match your look."
      />
      <div className="jsx-hair-braiding hair-braiding-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/hairbraiding/hairbraiding-4.webp",
            "/images/services/hairbraiding/hairbraiding-5.webp",
            "/images/services/hairbraiding/hairbraiding-6.webp",
          ]}
          subTitle="Hair Length Options"
          title="Choose the Style That Fits Your Hair"
          text="Pricing is based on hair length, allowing enough time to create neat, balanced braids while adapting the technique to your preferred style and overall hair volume."
          packages={[
            {
              price: "IDR 279K",
              name: "Short Hair",
              treatments: ["Bob or shoulder-length hair", "Simple braid styles", "Quick styling sessions"],
            },
            {
              price: "IDR 379K",
              name: "Medium Hair",
              treatments: ["Most Dutch braid styles", "Added braid definition", "Everyday or holiday hairstyles"],
            },
            {
              price: "IDR 469K",
              name: "Long Hair",
              treatments: ["Longer braid designs", "Fuller braided looks", "Hair extensions if preferred"],
            },
          ]}
        />
      </div>
      <div className="jsx-hair-braiding hair-braiding-funfact">
        <Funfacts
          items={[
            { title: "Popular", text: "Braid Styles" },
            { title: "Custom", text: "Designs" },
            { title: "Extension", text: "Options" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/hairbraiding/hairbraiding-7.webp"
        subTitle="Very Popular"
        title={<>Why Many Visitors Choose Hair Braiding in Bali</>}
        text="Hair braiding is a practical and stylish choice for many tourists in Bali. Braids can help keep hair manageable in the island's warm, humid climate while making everyday styling easier during a holiday. They often choose braiding for benefits such as:"
        featuresLeft={[
          "Keeping hair neat in Bali's tropical climate",
          "Reducing tangling caused by wind and humidity",
          "Making hair easier to manage during swimming and beach activities",
        ]}
        featuresRight={[
          "Creating a convenient style for holidays, events, and festivals",
          "Maintaining a low-maintenance hairstyle for several days",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/hairbraiding/hairbraiding-8.webp"
        subTitle="Braid Collection"
        badgeTopText="Find Your"
        badgeBottomText="Style"
        title={<>Explore Our Most Popular Hair Braiding Styles</>}
        text="From simple braids for everyday wear to more detailed styles for holidays and special occasions, there are plenty of options to choose from. Each style creates a different look and can be adapted to suit your hair, outfit, and plans. Our best hair braiding styles include:"
        featuresLeft={["Classic Double Dutch", "Single Dutch Braid", "Dutch Braid Crown", "Cornrows"]}
        featuresRight={["Half Up Dutch Braids", "Box Braids", "Dutch Fishtail Braid", "Braids with Extensions"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/hairbraiding/hairbraiding-9.webp"
        subTitle="Your Custom Style"
        badgeTopText="Planned for"
        badgeBottomText="Your Look"
        title={<>Every Braid Starts with the Right Plan</>}
        text="Before braiding begins, we discuss your preferred hairstyle, braid size, hair length, and whether you'd like to include extensions. Each section of hair is carefully prepared before braiding to create an even, comfortable finish. Once complete, we'll also share simple aftercare tips to help your hairstyle stay neat for longer. The process covers:"
        featuresLeft={["Hairstyle consultation", "Braid size selection", "Hair sectioning and preparation"]}
        featuresRight={[
          "Comfortable braiding technique",
          "Extension options available",
          "Easy aftercare recommendations",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-hair-braiding hair-braiding-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/hairbraiding/hairbraiding-10.webp"
          imageTitle="Braid Styles"
          subTitle="Frequently Asked Questions"
          title={<>Hair Braiding Seminyak: FAQs</>}
          items={[
            {
              question: "Is Hair Braiding suitable for all hair types?",
              answer:
                "Yes. Most hair types can be braided, and the technique is adjusted according to your hair's length, texture, and condition.",
            },
            {
              question: "How long does Hair Braiding usually take?",
              answer: "Depending on the chosen style, appointments generally take between 30 minutes and 2 hours.",
            },
            {
              question: "Will braiding damage my hair?",
              answer:
                "When done correctly, braiding is considered a protective hairstyle. We avoid excessive tension to keep your scalp comfortable.",
            },
            {
              question: "How long do braids usually last?",
              answer:
                "The lifespan depends on the braid style, daily activities, and aftercare. Many styles remain neat for several days or even longer.",
            },
            {
              question: "Can I bring a reference photo?",
              answer:
                "Absolutely. Reference photos help us better understand the style, braid pattern, and overall look you'd like to achieve.",
            },
            {
              question: "Are hair extensions available?",
              answer: "Yes. Selected braid styles can be created with extensions for additional length or volume.",
            },
          ]}
        />
      </div>
      <div className="jsx-hair-braiding hair-braiding-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Complete Your Bali Look"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-hair-braiding hair-braiding-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/hairbraiding/hairbraiding-11.webp"
          title="A Hairstyle That Keeps Up with Your Bali Plans"
          text="Beach mornings, sunset dinners, island tours: the right braids let you enjoy them without fixing your hair. Personalised styling, comfortable to wear and easy to keep."
          closingText="Reserve your Hair Braiding appointment and create a style made for your Bali plans."
        />
      </div>
    </div>
  );
}
