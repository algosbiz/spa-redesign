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

/** /seminyak/nail-spa/ — generated from the live page's component tree, section for section. */
export default function NailSpaPage() {
  return (
    <div className="page-wrapper lh p-nail-spa">
      <div className="jsx-nail-spa nail-art-banner">
        <PageBanner
          image="/images/services/nailart/nailart-1.webp"
          subTitle="Creative Design"
          titleSpan="Nail Art & Gel Nails"
          title="in Seminyak"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/nailart/nailart-2.webp"
        secondaryImage="/images/services/nailart/nailart-3.webp"
        subTitle="Personal Style"
        title={<>Why Do Many Guests Choose Gel Nail Art?</>}
        text="Gel Nail Art combines creative design with a durable gel finish that helps nails stay neat and polished for longer than regular nail polish. Many guests choose this treatment before holidays, weddings, special events, or simply to enjoy beautiful nails throughout their stay in Bali. At Spa Bali Moon, every design is applied carefully to protect the natural nail while creating a personalised look that matches your style."
        feature1Title="Long Lasting Finish"
        feature1Text="Designed to stay glossy and beautiful through everyday activities."
        feature2Title="Personalised Designs"
        feature2Text="Colours, patterns, and finishes selected to suit your own style."
      />
      <div className="jsx-nail-spa nail-art-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/nailart/nailart-4.webp",
            "/images/services/nailart/nailart-5.webp",
            "/images/services/nailart/nailart-6.webp",
          ]}
          subTitle="Service Options"
          title="Choose the Finish You Prefer"
          text="Our nail services include fresh colour, decorative nail art, and long lasting gel finishes, giving you different options to suit your personal style and any occasion."
          packages={[
            {
              price: "IDR 159K",
              name: "Manicure & Colour",
              treatments: [
                "Fresh polished everyday nails",
                "Simple colour application",
                "Guests wanting a natural elegant finish",
              ],
            },
            {
              price: "IDR 169K",
              name: "Pedicure & Colour",
              treatments: [
                "Beautiful toenails for sandals",
                "Holiday-ready feet",
                "Smooth colour with professional finishing",
              ],
            },
            {
              price: "IDR 219K",
              name: "Nail Gel",
              treatments: ["Longer-lasting glossy finish", "Busy travellers", "Guests wanting extra durability"],
            },
          ]}
        />
      </div>
      <div className="jsx-nail-spa nail-art-funfact">
        <Funfacts
          items={[
            { title: "Creative", text: "Designs" },
            { title: "Quality", text: "Gel Products" },
            { title: "Natural", text: "Nail Care" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/nailart/nailart-7.webp"
        subTitle="Beauty Benefits"
        title={<>What Makes Gel Nail Art So Popular?</>}
        text="Gel Nail Art offers a practical way to add colour and personality to your nails while maintaining a neat, polished look. It can suit different styles and occasions, from simple everyday designs to more creative looks for holidays or special events. People often choose gel nails for reasons such as:"
        featuresLeft={[
          "Long-lasting shine",
          "Less need for frequent polish touch-ups",
          "A wide selection of colours and designs",
        ]}
        featuresRight={[
          "Suitable for holidays and special occasions",
          "A lightweight, comfortable finish",
          "Careful application to support natural nail health",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/nailart/nailart-8.webp"
        subTitle="Design Possibilities"
        badgeTopText="Your Signature"
        badgeBottomText="Set"
        title={<>Find Nail Art Style That Matches You</>}
        text="Your nail design can be simple, elegant, playful, or more detailed depending on the look you have in mind. We can work from your inspiration and adapt the design to suit your natural nails, preferred colours, and occasion. Some popular styles are:"
        featuresLeft={["Minimalist nail designs", "French tips", "Chrome and glossy finishes"]}
        featuresRight={["Floral or artistic patterns", "Seasonal colour combinations"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/nailart/nailart-9.webp"
        subTitle="Application Process"
        badgeTopText="Built Layer"
        badgeBottomText="by Layer"
        title={<>How Is Gel Nail Art Applied?</>}
        text="Gel Nail Art is applied through a step-by-step process that prepares the nails before the colour and design are added. Each layer is carefully finished and cured to create a smooth, polished result while keeping the application neat and comfortable. The process typically involves:"
        featuresLeft={["Nail preparation and shaping", "Cuticle care", "Gel or colour application"]}
        featuresRight={["Hand-created nail design", "UV or LED curing", "Protective finishing top coat"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-nail-spa nail-art-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/nailart/nailart-10.webp"
          imageTitle="Gel Nail Art"
          subTitle="Frequently Asked Questions"
          title={<>Gel Nails &amp; Nail Art Seminyak: FAQs</>}
          items={[
            {
              question: "Is Gel Nail Art better than regular nail polish?",
              answer:
                "Gel Nail Art generally lasts longer and keeps its shine better than traditional nail polish, making it a popular choice for holidays and special occasions.",
            },
            {
              question: "Can I bring my own nail design reference?",
              answer:
                "Yes. You're welcome to show inspiration photos so our nail artists can recreate a similar style that suits your nails.",
            },
            {
              question: "Will gel nails damage my natural nails?",
              answer:
                "When applied and removed correctly, gel products can be used while maintaining the health of your natural nails. Our team follows gentle application techniques throughout the treatment.",
            },
            {
              question: "How long does a Nail Art appointment take?",
              answer:
                "The duration depends on the design complexity, but most appointments take between 45 and 90 minutes.",
            },
            {
              question: "How long will Gel Nail Art last?",
              answer:
                "Many guests enjoy beautiful results for around two to three weeks, depending on nail growth and daily activities.",
            },
            {
              question: "What is nail art?",
              answer:
                "Nail art is the decoration of fingernails or toenails using colours, patterns, designs, or other decorative details. It can be added to natural nails or applied over gel or polish.",
            },
          ]}
        />
      </div>
      <div className="jsx-nail-spa nail-art-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Explore More Ways to Perfect Your Bali Glow"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-nail-spa nail-art-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/nailart/nailart-11.webp"
          title="Experience Beautiful Nails That Last Beyond Your Bali Holiday"
          text="Personalised nail designs created with professional care and long-lasting gel products, for a beach holiday, a dinner, a wedding, or simply because. Your natural nails stay healthy."
          closingText="Leave with polished nails that feel as beautiful as they look."
        />
      </div>
    </div>
  );
}
