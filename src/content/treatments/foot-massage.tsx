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

/** /seminyak/foot-massage/ — generated from the live page's component tree, section for section. */
export default function FootMassagePage() {
  return (
    <div className="page-wrapper lh p-foot-massage">
      <div className="jsx-foot-massage foot-massage-banner">
        <PageBanner
          image="/images/services/footmassage/footmassage-1.webp"
          subTitle="Light Steps Ahead"
          titleSpan="Foot Massage"
          title="in Seminyak, Bali"
        />
      </div>
      <AboutIntro
        leftShapeSrc="/images/shape/about-two-left.png"
        rightShapeSrc="/images/shape/about-two-right.png"
        primaryImage="/images/services/footmassage/footmassage-2.webp"
        secondaryImage="/images/services/footmassage/footmassage-3.webp"
        subTitle="Every Step Counts"
        title={<>Foot Massage for Daily Comfort and Recovery</>}
        text="Your feet absorb constant pressure throughout the day, whether from walking, standing, travelling, or exercising. Foot Massage focuses on the muscles, joints, and soft tissues of the feet and lower legs using relaxing massage techniques inspired by traditional reflexology. The treatment helps ease built-up tension, improve local circulation, and restore comfort, making it a popular choice after long days exploring Bali or spending hours on your feet."
        feature1Title="Foot Recovery"
        feature1Text="Helps reduce fatigue caused by walking, standing, and everyday activities."
        feature2Title="Reflexology-Inspired"
        feature2Text="Combines relaxing massage with pressure point techniques for added comfort."
      />
      <div className="jsx-foot-massage foot-massage-pricing">
        <TreatmentPricing
          leftShapeSrc="/images/shape/package-four-shape-left.png"
          images={[
            "/images/services/footmassage/footmassage-4.webp",
            "/images/services/footmassage/footmassage-5.webp",
            "/images/services/footmassage/footmassage-6.webp",
          ]}
          subTitle="Session Options"
          title="Choose the Right Duration"
          text="Different session lengths allow our therapist to focus on specific areas or provide more detailed care for both the feet and lower legs. Whether you need a quick refresh or a longer recovery session, each treatment is adjusted to your comfort."
          packages={[
            {
              price: "IDR 159K",
              name: "1 Hour",
              treatments: ["Tired feet after sightseeing", "First-time guests", "Focused foot relief"],
            },
            {
              price: "IDR 239K",
              name: "1.5 Hours",
              treatments: [
                "Feet and lower leg tension",
                "Guests wanting additional massage time",
                "Recovery after active days",
              ],
            },
            {
              price: "IDR 330K",
              name: "2 Hours",
              treatments: [
                "Complete lower body relaxation",
                "Frequent walkers or active travellers",
                "Guests preferring an extended treatment",
              ],
            },
          ]}
        />
      </div>
      <div className="jsx-foot-massage foot-massage-funfact">
        <Funfacts
          items={[
            { title: "Experienced", text: "Therapists" },
            { title: "Gentle", text: "Pressure" },
            { title: "Natural Oil", text: "Massage" },
            { title: "Outcall", text: "Available" },
          ]}
        />
      </div>
      <TreatmentTestimonials rightShapeSrc={null} />
      <AboutSplit
        leftShapeSrc={null}
        rightShapeSrc="/images/shape/about-right-shape.png"
        image="/images/services/footmassage/footmassage-7.webp"
        subTitle="Common Situations"
        title={<>When Is a Foot Massage Most Helpful?</>}
        text="A Foot Massage can be especially enjoyable when your feet have been working hard throughout the day. Whether you've spent hours exploring Bali, standing for long periods, or travelling, a dedicated foot treatment gives tired feet focused attention. It can be particularly helpful after situations such as:"
        featuresLeft={[
          "Tired feet after sightseeing or exploring",
          "Sore arches or heels after extended walking",
          "Foot fatigue following a long flight",
        ]}
        featuresRight={[
          "Tired feet after standing for several hours",
          "Muscle fatigue after light physical activities",
          "General discomfort from overworked feet",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplitAlt
        leftShapeSrc="/images/shape/step-shape-left.png"
        rightShapeSrc="/images/shape/banner-six-shape2.png"
        rightDecoration={<FloralDecoration clustered />}
        image="/images/services/footmassage/footmassage-8.webp"
        subTitle="Areas of Focus"
        badgeTopText="From Heel"
        badgeBottomText="to Toe"
        title={<>Where Does Foot Massage Work?</>}
        text="A Foot Massage focuses on several areas of the feet and lower legs that can become tired or tense throughout the day. Each area receives focused attention to help create a more comfortable and relaxed feeling. The massage may focus on:"
        featuresLeft={[
          "Soles that absorb daily impact",
          "Arches that support body weight",
          "Heels affected by prolonged standing",
        ]}
        featuresRight={[
          "Ankles involved in everyday movement",
          "Calf muscles that can contribute to foot tension",
          "Toes and the surrounding soft tissues",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <AboutSplit
        rightShapeSrc="/images/shape/banner-three-shape2.png"
        image="/images/services/footmassage/footmassage-9.webp"
        subTitle="Massage Approach"
        badgeTopText="The Rhythm"
        badgeBottomText="of Relief"
        title={<>How Our Foot Massage Is Performed</>}
        text="Our Foot Massage uses a combination of gentle techniques to work through tension in the feet and lower legs. Warm natural oils help create smooth, comfortable movements, while focused pressure is applied to areas that may feel particularly tired after walking or standing. The treatment can be tailored to your comfort, with techniques such as:"
        featuresLeft={[
          "Warm oil for smooth massage movements",
          "Gentle circular massage techniques",
          "Reflexology-inspired pressure on key foot zones",
        ]}
        featuresRight={[
          "Focused attention on the arches and heels",
          "Massage of the lower legs and calves",
          "Pressure adjusted to your comfort level",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
      />
      <div className="jsx-foot-massage foot-massage-faq">
        <FaqSection
          removeTopPadding
          paperDecoration
          image="/images/services/footmassage/footmassage-10.webp"
          imageTitle="Foot Recovery"
          subTitle="Frequently Asked Questions"
          title={<>Foot Massage Seminyak: FAQs</>}
          items={[
            {
              question: "Is Foot Massage the same as reflexology?",
              answer:
                "Not exactly. Foot Massage focuses on relaxing muscles, relieving soreness, and improving comfort throughout the feet and lower legs. Reflexology traditionally follows pressure points believed to correspond with different parts of the body. Our treatment incorporates selected reflexology-inspired techniques while remaining a relaxing massage experience.",
            },
            {
              question: "Can Foot Massage help after walking all day?",
              answer:
                "Yes. Many guests choose Foot Massage after sightseeing, shopping, or long walks because it helps reduce tiredness and discomfort in the feet, arches, heels, and calves.",
            },
            {
              question: "Does the massage include the lower legs?",
              answer:
                "Yes. Depending on your chosen session, your therapist also massages the ankles and lower legs to help ease muscle tightness connected to tired feet.",
            },
            {
              question: "Is strong pressure used?",
              answer:
                "Not necessarily. Pressure is adjusted according to your comfort. The treatment is intended to be soothing while still providing effective relief for tired feet.",
            },
            {
              question: "Can I book Foot Massage at my hotel or villa?",
              answer: "Yes. Home service is available for selected hotels, villas, and accommodations around Seminyak.",
            },
            {
              question: "Does foot massage help neuropathy?",
              answer:
                "Foot massage may help relieve discomfort and promote relaxation, but it does not treat the underlying cause of neuropathy. If you have reduced sensation in your feet, speak with a healthcare professional before getting a massage.",
            },
            {
              question: "Is foot massage good for plantar fasciitis?",
              answer:
                "Foot massage may help ease tension and discomfort associated with plantar fasciitis. Gentle massage can be particularly soothing, but it should not replace professional treatment when symptoms persist.",
            },
            {
              question: "Can I get a foot massage while pregnant?",
              answer:
                "Foot massage can be relaxing during pregnancy, but it is best to check with your healthcare provider first, especially if you have any pregnancy-related complications. Let your therapist know that you are pregnant so they can adjust the treatment accordingly.",
            },
            {
              question: "Why does a foot massage feel so good?",
              answer:
                "A foot massage can feel good because it helps relax tense muscles, stimulates the feet, and promotes a sense of relaxation. The combination of gentle pressure and soothing movements can also help reduce everyday stress and tension.",
            },
          ]}
        />
      </div>
      <div className="jsx-foot-massage foot-massage-services">
        <ServiceSlider
          leftShapeSrc="/images/shape/service-shape-left.png"
          rightShapeSrc="/images/shape/service-shape-right.png"
          title="Give More Than Your Feet a Break"
          showFullTreatmentSlider
          embedded
        />
      </div>
      <div className="jsx-foot-massage foot-massage-paper-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta
          standardSpacing
          backgroundImage="/images/services/footmassage/footmassage-11.webp"
          title="Give Your Feet the Attention They Rarely Receive"
          text="Your feet carry every walk and every adventure. A dedicated Foot Massage eases the tension they collect and leaves each step lighter. At our spa, or at your villa or hotel."
          closingText="Reserve your session and step back into your day feeling lighter."
        />
      </div>
    </div>
  );
}
