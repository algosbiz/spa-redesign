import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import Funfacts from "@/components/sections/Funfacts";
import TreatmentTestimonials from "@/components/sections/TreatmentTestimonials";
import AboutSplit from "@/components/sections/AboutSplit";
import AboutSplitAlt from "@/components/sections/AboutSplitAlt";
import FaqSection from "@/components/sections/FaqSection";
import ReserveCta from "@/components/sections/ReserveCta";
import ServiceSlider from "@/components/sections/ServiceSlider";

/** /villa-hotel-massage/ — generated from the live page's component tree, section for section. */
export default function VillaHotelMassagePage() {
  return (
    <div className="page-wrapper lh p-villa-hotel-massage">
      <PageBanner
        subTitle="In-Room Spa Service"
        titleSpan="Villa & Hotel Massage"
        title="in Seminyak, Bali"
        buttonText="Book Now"
        image="/images/services/massagehotelvilla/massagehotelvilla-1.webp"
      />
      <AboutIntro
        removeBottomPadding
        subTitle="Your Way to Relax"
        title={<>What Is an In-Room Massage?</>}
        text="An in-room massage brings the spa experience directly to your hotel, villa, or private accommodation. Instead of travelling across Seminyak for an appointment, our experienced therapists come to you with professional massage and spa treatments, helping you relax and enjoy your treatment in a space where you already feel comfortable."
        feature1Title="No Travel Required"
        feature1Text="Enjoy a professional massage without leaving your hotel, villa, or private accommodation."
        feature2Title="Experienced Therapists"
        feature2Text="Skilled therapists bring professional massage and spa directly to your accommodation."
        primaryImage="/images/services/massagehotelvilla/massagehotelvilla-2.webp"
        secondaryImage="/images/services/massagehotelvilla/massagehotelvilla-3.webp"
      />
      <Funfacts
        items={[
          { title: "Delivered", text: "To Your Door" },
          { title: "Professional", text: "Therapists" },
          { title: "Flexible", text: "Treatments" },
          { title: "Easy WhatsApp", text: "Booking" },
        ]}
      />
      <TreatmentTestimonials />
      <AboutSplit
        subTitle="Stay In"
        title={<>Why Book a Massage at Your Hotel or Villa?</>}
        text="A massage at your accommodation gives you more time to relax and less time spent travelling between appointments. It is a convenient choice after a long flight, a full day exploring Bali, or simply when you would rather enjoy professional spa care in the privacy of your own space."
        featuresLeft={[
          "No travel to and from the spa",
          "Professional treatments delivered to your accommodation",
          "Convenient after flights and long days of exploring",
        ]}
        featuresRight={[
          "Suitable for solo travellers, couples, families, and groups",
          "Massage and selected spa treatments available",
          "Available in Seminyak and nearby areas",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
        image="/images/services/massagehotelvilla/massagehotelvilla-4.webp"
      />
      <AboutSplitAlt
        subTitle="Treatments for Your Stay "
        badgeTopText="Spa Comes"
        badgeBottomText="to You"
        title={<>Treatments That Work Well in Your Hotel or Villa</>}
        text="The right treatment depends on how you want to feel after your session. A Balinese Massage offers a traditional full-body experience, Sport Massage can help ease tired muscles after physical activity, while body scrubs, facials, cream baths, and beauty treatments allow you to create a more complete in-room spa experience."
        featuresLeft={[
          "Balinese Massage for traditional full-body relaxation",
          "Sport Massage after exercise, surfing, or physical activity",
          "Thai Massage for stretching and mobility",
          "Lymphatic Massage for gentle, light-pressure body care",
        ]}
        featuresRight={[
          "Body Scrub for smoother, refreshed skin",
          "Facials for cleansing and skin care",
          "Cream Bath for hair and scalp care",
          "Manicure and Pedicure for hands and feet",
        ]}
        buttonText="Book Now"
        buttonLink="https://wa.me/6287863175144"
        image="/images/services/massagehotelvilla/massagehotelvilla-5.webp"
      />
      <AboutSplit
        badgeTopText="Ready When"
        badgeBottomText="You Are"
        title={<>{"Booking Your Hotel & Villa Massage"}</>}
        text="Reserving is simple — send us your hotel or villa address and preferred time, and our therapist will arrive ready to help you relax. A small travel fee of 75k per therapist applies for home and hotel visits."
        featuresLeft={["Quick WhatsApp booking", "Flexible appointment times", "Same-day reservations"]}
        featuresRight={["Transparent pricing", "Cash & card accepted", "English-speaking team"]}
        image="/images/services/massagehotelvilla/massagehotelvilla-6.webp"
      />
      <div className="location-faq-paper section__decoration-top section__decoration-bottom bg-sub pb-100">
        <FaqSection
          largeTopPadding
          imageTitle="Relax In Your Room"
          subTitle="Frequently Asked Questions"
          title={<>In-Villa Massage Seminyak: FAQs</>}
          items={[
            {
              question: "How do I book a hotel or villa massage in Seminyak?",
              answer:
                "Browse our treatment menu, choose your preferred service and duration, then contact us via WhatsApp with your accommodation details and preferred appointment time.",
            },
            {
              question: "How long does it take for the therapist to arrive?",
              answer:
                "Our therapists typically arrive within 30 to 60 minutes, depending on your location, traffic, and availability at the time of booking.",
            },
            {
              question: "Can I book a massage for more than one person?",
              answer:
                "Yes. Couples, families, and groups can arrange multiple treatments, subject to therapist availability. Contact us in advance so we can coordinate your booking.",
            },
            {
              question: "Can I book more than just a massage?",
              answer:
                "Yes. Selected spa treatments, including facials, body scrubs, Sport Massage, reflexology, cream baths, manicures, and pedicures, may also be arranged as home service.",
            },
            {
              question: "Is there an additional fee for home service?",
              answer:
                "Yes. An additional outcall fee of IDR 75,000 per therapist applies for home service appointments in Seminyak and nearby areas.",
            },
            {
              question: "How can I pay for my in-room treatment?",
              answer: "Payment options include cash, bank transfer, Visa, and Mastercard, subject to availability.",
            },
          ]}
          image="/images/services/massagehotelvilla/massagehotelvilla-7.webp"
        />
      </div>
      <ReserveCta
        standardSpacing
        title="Book an In-Villa Massage in Bali"
        text="Your Bali itinerary does not have to end at your room. Our therapists bring professional massage and selected treatments to your hotel or villa around Seminyak, carrying everything needed."
        closingText="Send us a message on WhatsApp and we will arrange the rest of the details."
        backgroundImage="/images/services/massagehotelvilla/massagehotelvilla-8.webp"
      />
      <ServiceSlider
        paperBackground
        subTitle="Our Treatments"
        title={
          <>
            {"Villa & Hotel Massage "}
            <br />
            {" Treatments"}
          </>
        }
      />
    </div>
  );
}
