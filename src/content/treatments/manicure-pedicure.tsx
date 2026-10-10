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

/** /seminyak/manicure-pedicure/ — generated from the live page's component tree, section for section. */
export default function ManicurePedicurePage() {
  return (
    <div className="page-wrapper lh p-manicure-pedicure">
      <div className="jsx-manicure-pedicure manicure-pedicure-banner">
        <PageBanner
          image="/images/services/manicurepedicure/manicurepedicure-1.webp"
          subTitle="Polish and Pamper"
          titleSpan="Manicure & Pedicure"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/manicurepedicure/manicurepedicure-2.webp"
        secondaryImage="/images/services/manicurepedicure/manicurepedicure-3.webp"
        subTitle="Essentials Care"
        title={<>More Than Beautiful Nails</>}
        text="A professional Manicure & Pedicure focuses on both appearance and nail health. Beyond shaping and polishing, the treatment includes nail cleaning, cuticle care, skin conditioning, and hydration to help keep hands and feet looking neat while maintaining everyday comfort. Suitable for regular maintenance or as part of a relaxing spa visit, it offers practical care with lasting results."
        feature1Title="Healthy Nails"
        feature1Text="Professional care helps maintain clean, tidy, and well-shaped nails."
        feature2Title="Soft Skin"
        feature2Text="Hydration and conditioning leave hands and feet feeling smoother."
      />
      <div className="jsx-manicure-pedicure manicure-pedicure-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/manicurepedicure/manicurepedicure-4.webp",
            "/images/services/manicurepedicure/manicurepedicure-5.webp",
            "/images/services/manicurepedicure/manicurepedicure-6.webp",
            "/images/services/manicurepedicure/manicurepedicure-7.webp",
          ]}
          subTitle="Find Yours"
          title="Manicure &amp; Pedicure Packages in Seminyak"
          text="Complete your nail care with spa treatments that help you feel refreshed from head to toe. Our packages combine professional manicure and pedicure services with massage, facial, or hair care, creating a balanced wellness experience during your stay in Bali."
          packages={[
            {
              price: "IDR 449K",
              name: "Package A",
              treatments: ["1 Hr Mani & Pedi", "1 Hr Balinese Massage", "30 Mins Cream Bath"],
            },
            {
              price: "IDR 549K",
              name: "Package B",
              treatments: ["1 Hr Mani & Pedi", "1 Hr Balinese Massage", "1 Hr Bali Moon Facial"],
            },
            { price: "IDR 299K", name: "Package C", treatments: ["1 Hr Mani & Pedi", "30 Mins Cream Bath"] },
            {
              price: "IDR 399K",
              name: "Package D",
              treatments: ["30 Mins Pedicure", "30 Mins Manicure", "1 Hr Balinese Massage"],
            },
          ]}
          topContent={
            <SessionOptions
              sessions={[
                {
                  price: "IDR 238K",
                  duration: "Manicure & Pedicure",
                  details: ["Complete hand and foot care", "Cuticle and nail grooming", "Ideal for a full refresh"],
                },
                {
                  price: "IDR 99K",
                  duration: "Manicure",
                  details: ["Nail and cuticle care", "Hand grooming", "A simple tidy-up"],
                },
                {
                  price: "IDR 139K",
                  duration: "Pedicure",
                  details: ["Nail and cuticle care", "Foot grooming", "Ideal for regular maintenance"],
                },
                {
                  price: "IDR 138K",
                  duration: "Nail Color Feet & Hands",
                  details: ["Nail colour application", "For hands and feet", "A polished colour finish"],
                },
                {
                  price: "IDR 69K",
                  duration: "Nail Color Feet or Hands",
                  details: ["Nail colour application", "For hands or feet", "A quick colour refresh"],
                },
                {
                  price: "IDR 98K",
                  duration: "Nail Remover Feet & Hands",
                  details: ["Gel or nail product removal", "For hands and feet", "Prepares nails for the next service"],
                },
                {
                  price: "IDR 438K",
                  duration: "Nail Gel Feet & Hands",
                  details: ["Gel nail treatment", "For hands and feet", "A longer-lasting finish"],
                },
                {
                  price: "IDR 219K",
                  duration: "Nail Gel Feet or Hands",
                  details: ["Gel nail treatment", "For hands or feet", "A longer-lasting finish"],
                },
              ]}
              subTitle="Perfectly Polished"
              title="Manicure & Pedicure Treatment Options"
              text="We offers manicure, pedicure, gel colour, gel nail, and removal services for hands and feet. Each option can be booked individually, making it easy to match your appointment with the nail care you need."
              icon="/images/spa/Manicure.svg"
            />
          }
        />
      </div>
      <div className="jsx-manicure-pedicure manicure-pedicure-funfact">
        <Funfacts
          items={[
            { title: "Nail", text: "Care" },
            { title: "Cuticle", text: "Treatment" },
            { title: "Gel Colour", text: "Available" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/manicurepedicure/manicurepedicure-8.webp"
        subTitle="The Reason"
        title={<>Why Is Regular Nail Care Important?</>}
        text="Regular nail care is about more than keeping your hands and feet looking neat. Manicure & Pedicure treatments give attention to the nails, cuticles, and surrounding skin, helping maintain a clean and well-groomed appearance as part of your regular self-care routine. Regular care can help with:"
        featuresLeft={[
          "Maintaining healthy-looking nails",
          "Keeping cuticles soft and cared for",
          "Smoothing rough or dry skin",
        ]}
        featuresRight={[
          "Keeping nails neatly shaped",
          "Enhancing the appearance of hands and feet",
          "Making nail care part of your regular self-care routine",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/manicurepedicure/manicurepedicure-9.webp"
        subTitle="What's Included"
        badgeTopText="Beauty in"
        badgeBottomText="the Details"
        title={<>Professional Care from Nails to Skin</>}
        text="Our Manicure & Pedicure session gives attention to both the nails and the surrounding skin, with each part of the treatment carried out to leave your hands and feet feeling clean and well cared for. Depending on the service selected, your treatment may cover:"
        featuresLeft={["Nail trimming and shaping", "Gentle cuticle care", "Buffing and nail preparation"]}
        featuresRight={["Moisturising treatment", "Heel and dry skin care", "Optional nail colour or gel finish"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/manicurepedicure/manicurepedicure-10.webp"
        subTitle="The Process"
        badgeTopText="The Finishing"
        badgeBottomText="Touch"
        title={<>What Can You Expect During Your Appointment?</>}
        text="Our Manicure & Pedicure appointment follows a simple sequence, starting with an assessment of your nails and ending with the finish you have selected. The treatment is carried out step by step, with attention to keeping your nails and skin clean, comfortable, and well cared for. The appointment typically covers:"
        featuresLeft={["Consultation and nail assessment", "Nail cleaning and shaping", "Cuticle treatment"]}
        featuresRight={["Skin hydration", "Optional polish or gel application", "Finishing care for lasting comfort"]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-manicure-pedicure manicure-pedicure-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/manicurepedicure/manicurepedicure-11.webp"
          imageTitle="Nail Care"
          subTitle="Frequently Asked Questions"
          title={<>Manicure &amp; Pedicure Seminyak: FAQs</>}
          items={[
            {
              question: "What is included in a Manicure & Pedicure?",
              answer:
                "The treatment includes nail trimming, shaping, cuticle care, moisturising, and optional nail colour or gel depending on the service you choose.",
            },
            {
              question: "What is the difference between a manicure and a pedicure?",
              answer:
                "A manicure focuses on the hands and fingernails, while a pedicure treats the feet, toenails, and areas such as the heels and cuticles.",
            },
            {
              question: "How often should I have a Manicure & Pedicure?",
              answer:
                "Many guests book treatments every two to three weeks, although the ideal schedule depends on nail growth and personal preference.",
            },
            {
              question: "Can I choose gel nails instead of regular polish?",
              answer:
                "Yes. Gel nail application is available as a separate treatment for guests who prefer a longer-lasting finish.",
            },
            {
              question: "Can I book Manicure & Pedicure at my villa or hotel?",
              answer:
                "Yes. Our therapists provide professional home service throughout Seminyak and nearby areas with all required equipment.",
            },
            {
              question: "What is a manicure and pedicure?",
              answer:
                "A manicure is a treatment for the hands and fingernails, while a pedicure focuses on the feet and toenails. Both typically include nail cleaning, shaping, cuticle care, and moisturising, with polish or gel available depending on the treatment.",
            },
          ]}
        />
      </div>
      <div className="jsx-manicure-pedicure manicure-pedicure-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Complete Your Care Beyond Nails"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-manicure-pedicure manicure-pedicure-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/manicurepedicure/manicurepedicure-12.webp"
          title="Keep Your Hands and Feet Looking Their Best"
          text="Well-groomed nails are about comfort as much as appearance. Professional manicure and pedicure care in a calm setting, at our spa or at your villa or hotel."
          closingText="Reserve your Manicure & Pedicure treatment and enjoy polished, comfortable care."
        />
      </div>
    </div>
  );
}
