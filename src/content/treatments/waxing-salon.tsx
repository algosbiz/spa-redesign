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

/** /seminyak/waxing-salon/ — generated from the live page's component tree, section for section. */
export default function WaxingSalonPage() {
  return (
    <div className="page-wrapper lh p-waxing-salon">
      <div className="jsx-waxing-salon waxing-banner">
        <PageBanner
          image="/images/services/waxing/waxing-1.webp"
          subTitle="Smooth Finish"
          titleSpan="Waxing"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/waxing/waxing-2.webp"
        secondaryImage="/images/services/waxing/waxing-3.webp"
        subTitle="Beyond Shaving"
        title={<>What Is Professional Waxing Treatment?</>}
        text="Waxing Treatment is a professional hair removal method that removes hair from the root, leaving skin smoother for longer than shaving. Our therapists use quality wax products and hygienic techniques to treat different areas, including arms, legs, and sensitive areas such as Brazilian waxing, with care and comfort in mind."
        feature1Title="Longer-Lasting"
        feature1Text="Removes hair from the root for smoother skin that lasts longer than shaving."
        feature2Title="Gentle Finish"
        feature2Text="Techniques adjusted according to the area and skin sensitivity."
      />
      <div className="jsx-waxing-salon waxing-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/waxing/waxing-4.webp",
            "/images/services/waxing/waxing-5.webp",
            "/images/services/waxing/waxing-6.webp",
            "/images/services/waxing/waxing-7.webp",
            "/images/services/waxing/waxing-8.webp",
            "/images/services/waxing/waxing-9.webp",
            "/images/services/waxing/waxing-10.webp",
          ]}
          subTitle="Find Yours"
          title="Our Waxing Options"
          text="Every area of the body has different needs, which is why Spa Bali Moon provides various waxing options for both everyday grooming and special occasions. Each service is performed carefully to help you achieve smooth and well-maintained skin."
          packages={[
            {
              price: "IDR 159K",
              name: "Arms",
              treatments: ["Smooth arm hair removal", "Everyday grooming", "Professional waxing finish"],
            },
            {
              price: "IDR 99K",
              name: "Under Arms",
              treatments: [
                "Quick underarm grooming",
                "Longer-lasting smoothness",
                "Gentle technique for sensitive skin",
              ],
            },
            {
              price: "IDR 139K",
              name: "Back",
              treatments: ["Focused back waxing", "Neat grooming finish", "Suitable for women and men"],
            },
            {
              price: "IDR 299K",
              name: "Full Back",
              treatments: ["Complete back waxing", "Larger body area care", "Smooth, clean result"],
            },
            {
              price: "IDR 149K",
              name: "Half Legs",
              treatments: ["Lower or upper leg waxing", "Holiday-ready skin", "Ideal before beach days"],
            },
            {
              price: "IDR 299K",
              name: "Full Legs",
              treatments: ["Complete leg waxing", "Longer-lasting smoothness", "Professional strip wax application"],
            },
            {
              price: "IDR 350K",
              name: "Waxing Brazilian",
              treatments: [
                "Private treatment setting",
                "Careful technique for sensitive areas",
                "Comfort-focused service",
              ],
            },
          ]}
        />
      </div>
      <div className="jsx-waxing-salon waxing-funfact">
        <Funfacts
          items={[
            { title: "Private", text: "Treatment Room" },
            { title: "Quality", text: "Wax Products" },
            { title: "Various", text: "Options" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/waxing/waxing-11.webp"
        subTitle="Hair Removal"
        title={<>Why Do Guests Choose Waxing Treatment in Bali?</>}
        text="Many guests choose professional waxing because it provides a cleaner and longer-lasting alternative to shaving. It is especially popular among travellers who want smooth skin before beach activities, holidays, events, or simply as part of their regular self-care routine."
        featuresLeft={[
          "Removes unwanted hair from the root",
          "Leaves skin feeling smooth and refreshed",
          "Suitable for different body areas",
        ]}
        featuresRight={[
          "Popular before beach days and special occasions",
          "Helps maintain a neat appearance for longer",
          "Available for both women and men",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/waxing/waxing-12.webp"
        subTitle="Treatment Areas"
        badgeTopText="Smooth Across"
        badgeBottomText="the Body"
        title={<>Which Areas Can Be Treated with Waxing?</>}
        text="Waxing can be customized based on your grooming needs, from smaller facial areas to larger body sections. Our therapists select the appropriate waxing technique according to the treatment area to maintain comfort and effective results."
        featuresLeft={["Arms and underarms", "Half and full legs", "Back and full back"]}
        featuresRight={[
          "Brazilian waxing in a private setting",
          "Facial waxing areas such as lip, chin, and eyebrows",
          "Men's waxing options available",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/waxing/waxing-13.webp"
        subTitle="Waxing Process"
        badgeTopText="A Smoother"
        badgeBottomText="Finish"
        title={<>How Does a Waxing Treatment Work?</>}
        text="Our Waxing Treatment begins with preparing the skin before applying suitable wax based on the treatment area. We use Mancine Strawberry Hard Wax for sensitive areas and olive oil strip wax for larger sections to help remove hair effectively while maintaining skin comfort. After the waxing process, simple aftercare guidance is provided to help keep your skin smooth."
        featuresLeft={[
          "Skin preparation before waxing",
          "Hard wax used for delicate areas",
          "Strip wax applied for larger body sections",
        ]}
        featuresRight={[
          "Hair removed from the root",
          "Therapist checks skin comfort throughout the session",
          "Aftercare guidance after treatment",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-waxing-salon waxing-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/waxing/waxing-14.webp"
          imageTitle="Waxing Treatment"
          subTitle="Frequently Asked Questions"
          title={<>Waxing Seminyak: FAQs</>}
          items={[
            {
              question: "How long does waxing results usually last?",
              answer:
                "Waxing results can last several weeks depending on your natural hair growth cycle. With regular sessions, many guests notice that hair grows back softer and finer over time.",
            },
            {
              question: "Is waxing painful?",
              answer:
                "Waxing may feel slightly uncomfortable, especially during the first session, but professional techniques and suitable wax products help make the process more comfortable.",
            },
            {
              question: "Should I shave before my waxing appointment?",
              answer:
                "No. Shaving is not necessary before waxing. Hair should be long enough for the wax to grip properly, usually around 1/4 inch.",
            },
            {
              question: "Can I get Brazilian waxing at Spa Bali Moon?",
              answer:
                "Yes. Brazilian waxing is available in a private treatment setting with careful techniques to maintain comfort and discretion.",
            },
            {
              question: "What should I avoid after waxing?",
              answer:
                "After waxing, it is recommended to avoid hot showers, intense sun exposure, and strong exfoliation for a short period to allow the skin to remain calm.",
            },
            {
              question: "Is waxing suitable for men?",
              answer:
                "Yes. Spa Bali Moon provides waxing options for men, including areas such as the back and Manzilian, with techniques adjusted for comfort.",
            },
          ]}
        />
      </div>
      <div className="jsx-waxing-salon waxing-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Complete Your Smooth-Skin Ritual"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-waxing-salon waxing-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/waxing/waxing-15.webp"
          title="Smooth Skin Starts with the Right Care at Spa Bali Moon"
          text="Careful technique, quality products, and personal service keep your skin smooth and refreshed, for a beach holiday, a special occasion, or your regular routine. At our spa or yours."
          closingText="Reserve your Waxing Treatment and enjoy smooth, well-maintained skin."
        />
      </div>
    </div>
  );
}
