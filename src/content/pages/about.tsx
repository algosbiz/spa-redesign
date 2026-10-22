import PageBanner from "@/components/sections/PageBanner";
import QuickFacts from "@/components/sections/QuickFacts";
import AboutIntro from "@/components/sections/AboutIntro";
import AboutSplit from "@/components/sections/AboutSplit";
import AboutSplitAlt from "@/components/sections/AboutSplitAlt";
import FaqSection from "@/components/sections/FaqSection";
import VisitUs from "@/components/sections/VisitUs";
import ReserveCta from "@/components/sections/ReserveCta";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { business, yearsOfExperience } from "@/data/business";
import { whatsappChatUrl } from "@/lib/whatsapp";

const years = yearsOfExperience();

/**
 * The page's questions, also given to search engines as FAQPage data. Each
 * answer stands on its own (40 to 60 words).
 */
const FAQ = [
  {
    question: "When was Spa Bali Moon founded?",
    answer: `Spa Bali Moon was founded in ${business.foundedYear} and has offered traditional Balinese massage and spa treatments in Seminyak for ${years} years. Today the spa at Jl. Pangkung Sari No. 30 offers 23 massage, facial, body and beauty treatments, open daily from 9am to 11pm, with home service at villas and hotels.`,
  },
  {
    question: "Where is Spa Bali Moon?",
    answer: `Spa Bali Moon is at ${business.address.full}. The day spa is open daily from 9am to 11pm. Book on WhatsApp at ${business.phoneDisplay}, or ask for a therapist to come to your villa or hotel for an extra IDR 75.000 per therapist in the Seminyak area.`,
  },
  {
    question: "Who are the therapists at Spa Bali Moon?",
    answer:
      "Spa Bali Moon's therapists are experienced Balinese therapists, trained to deliver massage and spa treatments with attention and care. Before each session they ask about the pressure you like and any areas that need extra attention, and they adjust the pressure as they work. The same treatments are offered at the spa and at your villa.",
  },
  {
    question: "How does Spa Bali Moon keep treatments hygienic?",
    answer:
      "Every appointment at Spa Bali Moon is prepared with clean linen, sanitised equipment and quality massage oils. Each treatment includes clean towels and a private treatment room at our Seminyak spa. For home service, the therapist brings freshly laundered linen and towels, and nothing is reused between guests.",
  },
];

/**
 * /about/ — the spa itself (AEO roadmap R14, 17 Oct): since 2009, the
 * address, the therapists, the products used and hygiene, so search and AI
 * answers can say who Spa Bali Moon is. Built from the shared sections and
 * only from facts the site already states elsewhere (the homepage, the day
 * spa, outcall and price pages); the owner can add the spa's own story and
 * the therapists' training in detail.
 */
export default function AboutPage() {
  return (
    <div className="page-wrapper lh p-about">
      <FaqJsonLd items={FAQ} />
      <PageBanner
        subTitle="About Us"
        titleSpan="About Spa Bali Moon"
        title="in Seminyak, Bali"
        text={`Spa Bali Moon is a day spa at Jl. Pangkung Sari No. 30, Seminyak, offering Balinese massage, facials, body treatments and beauty services since ${business.foundedYear}. Our therapists work at the spa and at guests' villas and hotels, open daily from 9am to 11pm.`}
        buttonText="Book Now"
        image="/images/services/dayspaseminyak/dayspa-1.webp"
      />
      <QuickFacts
        text={`For ${years} years, Spa Bali Moon has offered traditional Balinese massage and spa care in Seminyak. Guests visit our day spa or book the same treatments at their villa, hotel or home, at the same prices plus a home service fee.`}
        look="faq"
        items={[
          {
            label: "Founded",
            value: `${business.foundedYear}, in Seminyak, Bali`,
            figure: `${business.foundedYear}`,
            detail: "in Seminyak, Bali",
          },
          {
            label: "Treatments",
            value: "23 massage, facial, body and beauty treatments · from IDR 69.000 per person",
            figure: "23",
            detail: "massage, facial, body and beauty treatments, from IDR 69.000 per person",
          },
          { label: "Opening hours", value: "Open daily, 9am–11pm", figure: "9am–11pm", detail: "Open daily" },
          {
            label: "Home service",
            value: "At your villa, hotel or home · IDR 75.000 per therapist in the Seminyak area",
            figure: "IDR 75.000",
            detail: "per therapist in the Seminyak area, at your villa, hotel or home",
          },
          { label: "Address", value: business.address.full },
          { label: "Payment", value: "Visa, Mastercard or cash" },
          { label: "Booking", value: `WhatsApp ${business.phoneDisplay}, 9am–11pm` },
        ]}
      />
      <AboutIntro
        removeBottomPadding
        subTitle="Our Story"
        title={<>How Long Has Spa Bali Moon Been in Seminyak?</>}
        text={`Spa Bali Moon has offered traditional Balinese massage and spa treatments in Seminyak since ${business.foundedYear}. Guests come to our day spa on Jl. Pangkung Sari for massage, facials, body scrubs, cream baths and nail care, and our therapists also bring the same treatments to villas, hotels and homes in Seminyak and nearby areas.`}
        feature1Title={`Since ${business.foundedYear}`}
        feature1Text={`${years} years of Balinese massage and spa care in Seminyak.`}
        feature2Title="In-Spa & Home Service"
        feature2Text="The same treatments and prices at our spa or at your villa, plus a home service fee."
        primaryImage="/images/services/dayspaseminyak/dayspa-2.webp"
        secondaryImage="/images/services/dayspaseminyak/dayspa-3.webp"
      />
      <AboutSplit
        subTitle="Our Therapists"
        title={<>Who Are Spa Bali Moon&apos;s Therapists?</>}
        text="Our therapists are trained Balinese therapists who ask about your preferred pressure and focus areas before every session, then adjust as they work. Here is what you can expect from our team:"
        featuresLeft={[
          "Experienced Balinese therapists",
          "Traditional & modern massage treatments",
          "Pressure adjusted to suit you",
        ]}
        featuresRight={[
          "Personalised treatment recommendations",
          "English-speaking team",
          "In-spa and home service",
        ]}
        buttonText="Book Now"
        buttonLink={whatsappChatUrl}
        image="/images/services/dayspaseminyak/dayspa-4.webp"
      />
      <AboutSplitAlt
        subTitle="What We Use"
        badgeTopText="Natural"
        badgeBottomText="Care"
        title={<>Which Products Does Spa Bali Moon Use?</>}
        text="Each treatment has its own oils, creams and scrubs, from natural oils to well-known spa brands:"
        featuresLeft={[
          "Virgin cold-press coconut oil",
          "Aromatherapy and organic warm candle oils",
          "Argan Oil in every Bali Moon Facial",
          "Biokos, Mustika Ratu, Sari Ayu and Viva facials",
        ]}
        featuresRight={[
          "L'Oreal, ginseng, avocado and aloe vera cream baths",
          "Chocolate, coconut, strawberry, jasmine and green tea scrubs",
          "Cooling aloe vera for sun-exposed skin",
          "Olive oil and strawberry wax for waxing",
        ]}
        buttonText="View Treatments"
        buttonLink="/seminyak/"
        image="/images/services/dayspaseminyak/dayspa-5.webp"
      />
      <AboutSplit
        subTitle="Clean & Hygienic"
        badgeTopText="Fresh For"
        badgeBottomText="Every Guest"
        title={<>How Does Spa Bali Moon Keep Treatments Clean?</>}
        text="We prepare every appointment with hygiene in mind, whether you visit the spa or book home service. Here is how we keep each treatment clean:"
        featuresLeft={["Clean towels for every guest", "Sanitised equipment", "Private treatment rooms"]}
        featuresRight={["Fresh linen brought to your villa", "Nothing reused between guests", "Quality massage oils"]}
        buttonText="Book Now"
        buttonLink={whatsappChatUrl}
        image="/images/services/dayspaseminyak/dayspa-6.webp"
      />
      <VisitUs
        treatment="a treatment"
        title="Where Is Spa Bali Moon?"
        photo="/images/banners/contact.webp"
        look="columns"
      />
      <div className="location-faq-paper section__decoration-top section__decoration-bottom bg-sub pb-100">
        <FaqSection
          largeTopPadding
          imageTitle=""
          subTitle="Frequently Asked Questions"
          title={<>About Spa Bali Moon: FAQs</>}
          items={FAQ}
          image="/images/services/dayspaseminyak/dayspa-7.webp"
        />
      </div>
      <ReserveCta
        standardSpacing
        title="Visit Spa Bali Moon in Seminyak"
        text="Book a massage, facial or body treatment at our Seminyak spa, or have it at your villa or hotel for an extra IDR 75.000 per therapist in the Seminyak area."
        closingText="Open daily 9am–11pm. Book on WhatsApp."
        backgroundImage="/images/services/dayspaseminyak/dayspa-8.webp"
      />
    </div>
  );
}
