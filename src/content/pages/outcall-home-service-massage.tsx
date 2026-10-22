import Link from "next/link";
import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import Funfacts from "@/components/sections/Funfacts";
import AboutSplit from "@/components/sections/AboutSplit";
import MenuDurations from "@/components/home/MenuDurations";
import { menuTabs } from "@/components/pricelist/menuTabs";
import {
  GroupMassage,
  HomeServiceAreas,
  HomeServicePrices,
  HomeVsSpa,
  HowItWorks,
  LicensedSpa,
} from "@/components/outcall/OutcallSections";
import HomeServiceInfo from "@/components/sections/HomeServiceInfo";
import TreatmentTestimonials from "@/components/sections/TreatmentTestimonials";
import FaqSection from "@/components/sections/FaqSection";
import ReserveCta from "@/components/sections/ReserveCta";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import RowButton from "@/components/ui/RowButton";
import { homeServiceReviews } from "@/data/testimonials";
import { business } from "@/data/business";
import { homeServiceAreas, homeServiceSchema } from "@/lib/schema";
import { whatsappChatUrl } from "@/lib/whatsapp";

/**
 * The page's questions, also given to search engines as FAQPage data. A
 * [words](/address/) in an answer is a link (lib/linkedText.tsx).
 *
 * Rebuilt from the 20 Oct dev brief (outcall-page-dev-brief.md, S13): the
 * first seven questions as the brief words them, the cost question as the
 * brief words it, the same-day question as it stood, then the late-night,
 * couples and professional questions. The female or male therapist and how do I pay questions (C9, C7) were added
 * once the owner confirmed them.
 */
const FAQ = [
  {
    question: "What is an outcall massage?",
    answer:
      "An outcall massage is a professional treatment delivered by a therapist who travels to you, rather than you visiting the spa. Our therapists come to your villa, hotel room, or private residence with everything needed for the session. It is also known as home service, home massage, mobile massage or massage on call.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "No. Our therapists bring fresh linen, towels, oils and everything your treatment needs. The massage takes place on your bed, so there is nothing to set up. If you would like it in a particular room, tell us when you book.",
  },
  {
    question: "What does the therapist bring?",
    answer:
      "A Spa Bali Moon outcall therapist brings freshly laundered linens and towels, professional massage oils, and any tools your chosen treatment needs. Nothing is reused between guests. You do not need to supply towels, sheets, or anything else; the massage takes place on your bed.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Setup takes around five to ten minutes when your therapist arrives, and a similar time to pack down afterwards. Your treatment time begins once setup is complete, so a booked 60-minute massage at your villa or hotel is a full 60 minutes of treatment, at the spa price plus the home service fee, from IDR 75.000 per therapist.",
  },
  {
    question: "Which areas do you cover for home service?",
    answer:
      "Our spa is in Seminyak, and home service is available across Seminyak, Kerobokan, Petitenget, Canggu, and North Kuta. We also travel to Kuta, Jimbaran, Uluwatu, Nusa Dua, Sanur, Denpasar, and Ubud, subject to therapist availability and travel time. Message us with your location and we will confirm. See [our home service areas](#areas) for more detail.",
  },
  {
    question: "What if my hotel doesn't allow outside therapists?",
    answer:
      "Some hotels and resorts restrict external therapists, particularly larger properties with their own spa. Please check with reception before booking. Private villas and guesthouses rarely have this restriction. If your property does not permit home service, you are very welcome at [our Seminyak spa](/seminyak/day-spa/) instead.",
  },
  {
    question: "Which massage is best after a long flight?",
    answer:
      "A one-hour Balinese or aromatherapy massage suits most guests arriving in Bali. Both use steady, flowing pressure rather than deep work, which helps with circulation and sleep after a long journey. Foot reflexology is a good shorter option if your legs and feet feel swollen. Read more in our [jet lag recovery guide](/guide/jet-lag-recovery-best-treatments-after-a-long-flight/).",
  },
  {
    question: "How much does a home service massage cost in Seminyak?",
    answer:
      "The treatment price plus the home service fee: IDR 75.000 per therapist in Seminyak, Petitenget and Kerobokan, or IDR 150.000 in Canggu, North Kuta and Kuta. A 60-minute Balinese massage at your villa in Seminyak is IDR 159.000 + IDR 75.000 = IDR 234.000. Couples treatments use two therapists, so the fee doubles. See [home service prices](#home-service-prices).",
  },
  // Copy rewrite, 15 Oct (kept: it is the page's one answer about how soon a therapist arrives).
  {
    question: "Can I book an outcall massage on the same day?",
    answer:
      "Often, yes, depending on therapist availability. Send your location and preferred time on WhatsApp at +62 878-6317-5144, between 9am and 11pm, and we'll confirm when a therapist can arrive. In Seminyak and nearby areas therapists usually arrive within 30 to 60 minutes; for a fixed time or several therapists, book earlier in the day.",
  },
  {
    question: "Can I book a late-night massage at my villa?",
    // C8 (the latest start time for a 60-minute treatment) is added here once the owner confirms it.
    answer: "Yes. Home service runs daily until 11pm.",
  },
  {
    question: "Can we book a couples massage at our villa or hotel?",
    answer:
      "Yes. Two therapists arrive together and set up side by side, so you're both treated at the same time. Couples massage starts from IDR 319.000 for 60 minutes, plus the home service fee, from IDR 75.000 per therapist.",
  },
  {
    question: "Can I ask for a female or male therapist?",
    answer:
      "Yes. Tell us your preference when you book and we'll arrange a female or male therapist.",
  },
  {
    question: "How do I pay for a home service massage?",
    answer:
      "You pay your therapist after the treatment, in cash or by card. Your therapist brings a card machine, and we accept Visa and Mastercard.",
  },
  {
    question: "Is your outcall massage a professional service?",
    answer:
      "Yes. We are a licensed day spa in Seminyak, open since 2009, and we offer professional relaxation and therapeutic massage only. Our team confirms every home service booking on WhatsApp.",
  },
];

/** The four badges under the hero buttons. */
const HERO_CHIPS = [
  "Since 2009 · Seminyak spa",
  "Linen & oils included",
  "From IDR 75.000 per therapist",
  "Open daily 9am – 11pm",
];

/**
 * /outcall-home-service-massage/ — rebuilt from the 20 Oct dev brief
 * (outcall-page-dev-brief.md): section order S01 to S14 as there. S11 (guest
 * reviews) is not shown: it waits for genuine Google reviews that mention a
 * villa, hotel or home visit (C12); the brief says to leave it out until then.
 */
export default function OutcallPage() {
  return (
    <div className="page-wrapper lh p-outcall-home-service-massage">
      <JsonLd
        data={homeServiceSchema({
          path: "/outcall-home-service-massage/",
          name: "Outcall & Home Service Massage",
          serviceType: "Outcall massage",
          description:
            "Home service massage across Bali: a Spa Bali Moon therapist comes to your home, villa or hotel. Spa prices plus a home service fee from IDR 75.000 per therapist.",
          areas: [...homeServiceAreas.near, ...homeServiceAreas.further],
        })}
      />
      <FaqJsonLd items={FAQ} />
      <div className="outcall-page">
        {/* S01 · Hero */}
        <PageBanner
          subTitle="Home service from our Seminyak spa"
          titleSpan="Outcall & Home Service Massage"
          title="in Seminyak, Bali"
          text="Since 2009, Spa Bali Moon has sent therapists from our Seminyak spa to villas, hotels and homes across Bali. Book a home massage, from Balinese and deep tissue to couples and four-hand massage, and we bring fresh linen, oils and everything your treatment needs. Home service fee: from IDR 75.000 per therapist. Open daily, 9am to 11pm."
          image="/images/banners/homeservice-hero.webp"
          // The homepage hero's two row buttons in place of the one "Book Now"
          // (7 Oct: the page's search traffic compares prices before booking),
          // in the see-through gold version (picked over the white one).
          actions={
            <>
              <RowButton
                href={whatsappChatUrl}
                icon="whatsapp"
                label="Book on WhatsApp"
                note={business.phoneDisplay}
                className="row-btn--glass"
              />
              <RowButton
                href="#home-service-prices"
                icon="tag"
                label="See home service prices"
                className="row-btn--glass"
              />
            </>
          }
          chips={HERO_CHIPS}
        />
        {/* S02 · Home Service Massage Prices in Seminyak */}
        <HomeServicePrices />
        {/* S03 · Outcall Balinese Massage from Our Seminyak Spa */}
        <div className="outcall-intro-panel">
        <AboutIntro
          subTitle="Spa Bali Moon in Seminyak, Bali"
          title={<>Outcall Balinese Massage from Our Seminyak Spa</>}
          text="Get an authentic Balinese massage without leaving your villa. Our therapists come from our Seminyak spa with everything needed for a quiet, well-prepared session that fits around your day in Bali. Choose a single treatment or a package, and we'll tailor the pressure and focus to you."
          feature1Title="Easy Booking via WhatsApp"
          feature1Text={
            <>
              Check <a href="#price-list">available treatments</a> and arrange your spa session easily through
              WhatsApp.
            </>
          }
          feature2Title="Spa Treatments at Your Place"
          feature2Text="Select your preferred treatment and book a spa session delivered to your location."
          primaryImage="/images/outcall/homeservice-2.webp"
          primaryAlt="Outcall massage on a villa terrace: therapist giving a back massage beside a private pool"
          secondaryImage="/images/outcall/homeservice-3.webp"
          secondaryAlt="Close-up of a therapist's hands during an oil back massage"
          showBrandCard
          removeBottomPadding
        />
        <Funfacts
          items={[
            { title: "Easy Booking", text: "via WhatsApp" },
            { title: "Spa Treatments", text: "at Your Place" },
            { title: "Flexible", text: "Spa Packages" },
            { title: "Open Daily", text: "9am - 11pm" },
          ]}
        />
        </div>
        {/* S04 · How Our Outcall Massage Works */}
        <HowItWorks />
        {/* S05 · Home Massage & Body Treatments We Bring to You */}
        <div className="outcall-treatment-panel">
          <AboutSplit
            treatmentLayout
            subTitle="Spa & Beauty Service"
            title={<>{"Home Massage & Body Treatments We Bring to You"}</>}
            text="Every treatment below is available as a home massage or body treatment at your villa, hotel or home, in Seminyak and across Bali:"
            featuresLeft={[
              <TreatmentItem key="couple" href="/seminyak/couple-spa/" name="Couple Massage">
                Relax side by side while sharing a massage experience together.
              </TreatmentItem>,
              <TreatmentItem key="shiatsu" href="/seminyak/shiatsu-massage/" name="Shiatsu">
                Release muscle tension using gentle Japanese pressure-point techniques.
              </TreatmentItem>,
              <TreatmentItem key="thai" href="/seminyak/thai-massage/" name="Thai Massage">
                Improve flexibility and posture with assisted stretching and acupressure.
              </TreatmentItem>,
              <TreatmentItem key="cream" href="/seminyak/creambath/" name="Cream Bath">
                Revitalize your hair while supporting softness and freshness.
              </TreatmentItem>,
            ]}
            featuresRight={[
              <TreatmentItem key="scrub" href="/seminyak/body-scrub/" name="Body Scrub">
                Softly exfoliate the skin and promote smoothness.
              </TreatmentItem>,
              <TreatmentItem key="mani" href="/seminyak/manicure-pedicure/" name="Mani-Pedi">
                Maintain clean and well-groomed hands and feet with professional care.
              </TreatmentItem>,
              <TreatmentItem key="stone" href="/seminyak/hot-stone-massage/" name="Hot Stone">
                Soothe muscle tension using warm stones for deeper relaxation.
              </TreatmentItem>,
              <TreatmentItem key="facial" href="/seminyak/facial/" name="Facial Care">
                Cleanse and refresh the skin to restore a healthy appearance.
              </TreatmentItem>,
            ]}
            buttonText="Book Now"
            buttonLink="https://wa.me/6287863175144"
            image="/images/homepage/homepage-3.webp"
            imageAlt="Therapist pouring massage oil into their hand"
          />
        </div>
        {/* S06 · Home Service Areas Around Seminyak */}
        <HomeServiceAreas />
        {/* S07 · Home Service or Our Seminyak Day Spa? */}
        <HomeVsSpa />
        {/* S08 · Couples, Families & Villa Group Massage */}
        <GroupMassage />
        {/* S09 · Why Choose Our Home Service Massage */}
        <div className="outcall-why-panel">
          <HomeServiceInfo plain />
        </div>
        {/* S10 · A Licensed Seminyak Spa, Coming to You */}
        <div className="oc-paper-band bg-sub section__decoration-top section__decoration-bottom">
          <LicensedSpa plain />
        {/* S11 · What Guests Say About Our Home Service: the owner's four home service reviews, word for word.
            No Review schema (brief). Shares one paper band with S10, so the colours keep alternating
            into the price list (white) and the FAQ. */}
          <TreatmentTestimonials
            paperDecoration={false}
            title="What Guests Say About Our Home Service"
            reviews={homeServiceReviews}
            moreLabel="Read all our reviews on Google"
          />
        </div>
        {/* S12 · Outcall Massage Price List */}
        {/* The homepage price list (prices by duration), on the owner's request
            (1 Oct); the tabs and prices are this page's, as on live. */}
        <div id="price-list">
          <MenuDurations
            subTitle="Prices"
            title="Outcall Massage Price List"
            intro="Treatment prices below are the same as at our Seminyak spa. Home service adds IDR 75.000 per therapist in the Seminyak area and IDR 150.000 in Canggu and Kuta."
            spacing="pt-130 pb-130"
            sticky
            paper={false}
            tabs={menuTabs([
              {
                label: "Most Popular",
                services: [
                  {
                    id: "popular-balinese",
                    name: "Balinese Massage",
                    desc: "Designed to calm the body with steady pressure, gentle stretching, and aromatic oils.",
                    image: "/images/listmenu/balinesemassage.webp",
                    options: [
                      { time: "1 Hour", price: "159.000" },
                      { time: "1.5 Hours", price: "239.000" },
                      { time: "2 Hours", price: "330.000" },
                      { time: "1 Hour Aloe Vera", price: "195.000" },
                    ],
                  },
                  {
                    id: "popular-cream-bath",
                    name: "Cream Bath",
                    desc: "Caring for the hair and scalp through cleansing, conditioning, and relaxation.",
                    image: "/images/treatments/cards/creambath-warm.webp",
                    options: [
                      { time: "Ginseng", price: "165.000" },
                      { time: "Avocado", price: "165.000" },
                      { time: "Aloe Vera", price: "165.000" },
                      { time: "L’Oreal", price: "195.000" },
                      { time: "NR", price: "165.000" },
                      { time: "Hair Mask", price: "165.000" },
                    ],
                  },
                  {
                    id: "popular-four-hand",
                    name: "Four Hand Massage",
                    desc: "Delivered by two therapists working together in synchronized movements.",
                    image: "/images/listmenu/fourhandmassage.webp",
                    options: [
                      { time: "1 Hour", price: "339.000" },
                      { time: "1.5 Hours", price: "499.000" },
                      { time: "2 Hours", price: "669.000" },
                    ],
                  },
                  {
                    id: "popular-lymphatic",
                    name: "Lymphatic Massage",
                    desc: "Applied gently to support natural drainage and promote healthy circulation.",
                    image: "/images/treatments/cards/lymphaticmassage-warm.webp",
                    options: [
                      { time: "1 Hour", price: "300.000" },
                      { time: "1.5 Hours", price: "440.000" },
                      { time: "2 Hours", price: "580.000" },
                    ],
                  },
                  {
                    id: "popular-manicure-pedicure",
                    name: "Manicure Pedicure",
                    desc: "Providing complete hand and foot care with a clean and polished finish.",
                    image: "/images/treatments/cards/manicurepedicure-warm.webp",
                    options: [
                      { time: "Manicure & Pedicure", price: "238.000" },
                      { time: "Manicure", price: "99.000" },
                      { time: "Pedicure", price: "139.000" },
                      { time: "Nail Color Feet & Hands", price: "138.000" },
                      { time: "Nail Color Feet or Hands", price: "69.000" },
                      { time: "Nail Remover Feet & Hands", price: "98.000" },
                      { time: "Nail Gel Feet & Hands", price: "438.000" },
                      { time: "Nail Gel Feet or Hands", price: "219.000" },
                    ],
                  },
                  {
                    id: "popular-sports",
                    name: "Sports Massage",
                    desc: "Targeted to ease muscle soreness, reduce stiffness, and support physical recovery.",
                    image: "/images/listmenu/sportmassage.webp",
                    options: [
                      { time: "1 Hour", price: "269.000" },
                      { time: "1.5 Hours", price: "359.000" },
                    ],
                  },
                  {
                    id: "popular-traditional",
                    name: "Traditional Massage",
                    desc: "Focused on firmer pressure to help release muscle tension throughout the body.",
                    image: "/images/listmenu/traditionalmassage.webp",
                    options: [
                      { time: "30 Minutes", price: "90.000" },
                      { time: "1 Hour", price: "169.000" },
                      { time: "1.5 Hours", price: "259.000" },
                      { time: "2 Hours", price: "339.000" },
                    ],
                  },
                  {
                    id: "popular-thai",
                    name: "Thai Massage",
                    desc: "Performed without oil, combining assisted stretches and rhythmic pressure techniques.",
                    image: "/images/treatments/cards/thaimassage-warm.webp",
                    options: [
                      { time: "30 Minutes", price: "133.000" },
                      { time: "1 Hour", price: "259.000" },
                      { time: "1.5 Hours", price: "379.000" },
                    ],
                  },
                ],
              },
              {
                label: "Massage",
                services: [
                  {
                    id: "massage-aloe-vera",
                    name: "Aloe Vera Massage",
                    desc: "Using cooling aloe vera to help soothe the skin and support gentle recovery.",
                    image: "/images/listmenu/aloeveramassage.webp",
                    options: [{ time: "1 Hour", price: "250.000" }],
                  },
                  {
                    id: "massage-aromatherapy",
                    name: "Aromatherapy Massage",
                    desc: "Essential oils combined with gentle movements promote calm and body relaxation.",
                    image: "/images/listmenu/aromatherapymassage.webp",
                    options: [
                      { time: "1 Hour", price: "199.000" },
                      { time: "1.5 Hours", price: "339.000" },
                      { time: "2 Hours", price: "439.000" },
                    ],
                  },
                  {
                    id: "massage-balinese",
                    name: "Balinese Massage",
                    desc: "Designed to calm the body with steady pressure, gentle stretching, and aromatic oils.",
                    image: "/images/listmenu/balinesemassage.webp",
                    options: [
                      { time: "1 Hour", price: "159.000" },
                      { time: "1.5 Hours", price: "239.000" },
                      { time: "2 Hours", price: "330.000" },
                      { time: "1 Hour Aloe Vera", price: "195.000" },
                    ],
                  },
                  {
                    id: "massage-back",
                    name: "Back Massage",
                    desc: "Focusing on the upper body to help relieve tightness and restore comfort.",
                    image: "/images/listmenu/backmassage.webp",
                    options: [
                      { time: "30 Minutes", price: "90.000" },
                      { time: "1 Hour", price: "199.000" },
                      { time: "1.5 Hours", price: "259.000" },
                      { time: "2 Hours", price: "339.000" },
                    ],
                  },
                  {
                    id: "massage-cellulite",
                    name: "Cellulite Massage",
                    desc: "Targeting specific areas to help stimulate circulation and support skin firmness.",
                    image: "/images/treatments/cards/cellulitemassage-warm.webp",
                    options: [
                      { time: "1 Hour", price: "350.000" },
                      { time: "1.5 Hours", price: "520.000" },
                      { time: "2 Hours", price: "695.000" },
                    ],
                  },
                  {
                    id: "massage-couple",
                    name: "Couple Massage",
                    desc: "Designed for two to relax together while easing the body and sharing a calm moment.",
                    image: "/images/services/couplemassage/couplemassage-3-warm.webp",
                    options: [],
                    children: [
                      {
                        name: "Couple Massage Balinese",
                        desc: "Performed side by side using steady pressure and flowing techniques for shared relaxation.",
                        options: [
                          { time: "1 Hour – Balinese Massage · 2 pax", price: "319.000" },
                          { time: "1.5 Hours – Balinese Massage · 2 pax", price: "479.000" },
                          { time: "2 Hours – Balinese Massage · 2 pax", price: "659.000" },
                        ],
                      },
                      {
                        name: "Couple Traditional Massage",
                        desc: "Applied with firmer pressure to help reduce tension while relaxing together.",
                        options: [
                          { time: "1 Hour – Traditional Massage · 2 pax", price: "339.000" },
                          { time: "1.5 Hours – Traditional Massage · 2 pax", price: "519.000" },
                          { time: "2 Hours – Traditional Massage · 2 pax", price: "679.000" },
                        ],
                      },
                      {
                        name: "Couple Deep Tissue Massage",
                        desc: "Delivered with deeper pressure for two, aimed at easing tight muscles and improving comfort.",
                        options: [
                          { time: "1 Hour – Deep Tissue Massage · 2 pax", price: "539.000" },
                          { time: "1.5 Hours – Deep Tissue Massage · 2 pax", price: "719.000" },
                        ],
                      },
                      {
                        name: "Couple Massage Warm Candle",
                        desc: "Using gently warmed candle oils to create comfort and a deeper sense of relaxation for couples.",
                        options: [
                          { time: "1 Hour – Warm Candle Massage · 2 pax", price: "539.000" },
                          { time: "1.5 Hours – Warm Candle Massage · 2 pax", price: "799.000" },
                          { time: "2.5 Hours – Warm Candle Massage · 2 pax", price: "999.000" },
                        ],
                      },
                      {
                        name: "Couple Massage Packages",
                        desc: "A well-balanced couple’s massage package created for relaxing together.",
                        options: [
                          { time: "Package A · 1.5 Hours – Balinese Massage + Ear Candle · 2 pax", price: "639.000" },
                          {
                            time: "Package B · 2.5 Hours – Balinese Massage + Bali Moon Facial · 2 pax",
                            price: "709.000",
                          },
                          { time: "Package C · 1.5 Hours – Warm Candle + Ear Candle · 2 pax", price: "849.000" },
                          { time: "Package D · 2.5 Hours – Warm Candle + Bali Moon Facial · 2 pax", price: "929.000" },
                        ],
                      },
                    ],
                  },
                  {
                    id: "massage-deep-tissue",
                    name: "Deep Tissue Massage",
                    desc: "Focused on deeper pressure to help release muscle knots and support better movement.",
                    image: "/images/listmenu/deeptissuemassage.webp",
                    options: [
                      { time: "1 Hour", price: "269.000" },
                      { time: "1.5 Hours", price: "359.000" },
                    ],
                  },
                  {
                    id: "massage-four-hand",
                    name: "Four Hand Massage",
                    desc: "Delivered by two therapists working together in synchronized movements.",
                    image: "/images/listmenu/fourhandmassage.webp",
                    options: [
                      { time: "1 Hour", price: "339.000" },
                      { time: "1.5 Hours", price: "499.000" },
                      { time: "2 Hours", price: "669.000" },
                    ],
                  },
                  {
                    id: "massage-four-hand-candle",
                    name: "Four Hand Warm Candle",
                    desc: "Performed by two therapists working in synchronized movements for deeper relaxation.",
                    image: "/images/listmenu/organicwarmcandle.webp",
                    options: [
                      { time: "1 Hour – Four Hand Warm Candle", price: "539.000" },
                      { time: "1.5 Hours – Four Hand Warm Candle", price: "799.000" },
                      { time: "2 Hours – Four Hand Warm Candle", price: "999.000" },
                    ],
                  },
                  {
                    id: "massage-foot-reflexology",
                    name: "Foot Reflexology",
                    desc: "Applying pressure to reflex points on the feet to help restore body balance.",
                    image: "/images/listmenu/footreflexology.webp",
                    options: [
                      { time: "30 Minutes", price: "99.000" },
                      { time: "1 Hour", price: "169.000" },
                      { time: "1.5 Hours", price: "239.000" },
                    ],
                  },
                  {
                    id: "massage-foot",
                    name: "Foot Massage",
                    desc: "A focused massage on the soles, heels, and ankles to ease stiffness and restore comfort.",
                    image: "/images/listmenu/footmassage.webp",
                    options: [
                      { time: "1 Hour", price: "159.000" },
                      { time: "1.5 Hours", price: "239.000" },
                      { time: "2 Hours", price: "330.000" },
                    ],
                  },
                  {
                    id: "massage-head",
                    name: "Head Massage",
                    desc: "Focused on the head area to help release built-up stress and promote mental ease.",
                    image: "/images/listmenu/headmassage.webp",
                    options: [
                      { time: "1 Hour", price: "159.000" },
                      { time: "1.5 Hours", price: "239.000" },
                      { time: "2 Hours", price: "330.000" },
                    ],
                  },
                  {
                    id: "massage-herbal",
                    name: "Herbal Massage",
                    desc: "Using herbal ingredients to support relaxation and encourage circulation.",
                    image: "/images/listmenu/herbalmassage.webp",
                    options: [
                      { time: "1 Hour", price: "199.000" },
                      { time: "2 Hours", price: "399.000" },
                    ],
                  },
                  {
                    id: "massage-lymphatic",
                    name: "Lymphatic Massage",
                    desc: "Applied gently to support natural drainage and promote healthy circulation.",
                    image: "/images/treatments/cards/lymphaticmassage-warm.webp",
                    options: [
                      { time: "1 Hour", price: "300.000" },
                      { time: "1.5 Hours", price: "440.000" },
                      { time: "2 Hours", price: "580.000" },
                    ],
                  },
                  {
                    id: "massage-warm-candle",
                    name: "Organic Warm Candle Oil Massage",
                    desc: "Using natural, warmed oils to help relax the body and soften muscle tension.",
                    image: "/images/listmenu/organicwarmcandle.webp",
                    options: [
                      { time: "1 Hour – Warm Candle Wax Balinese", price: "269.000" },
                      { time: "1.5 Hours – Warm Candle Wax Balinese", price: "399.000" },
                      { time: "2 Hours – Warm Candle Wax Balinese", price: "499.000" },
                    ],
                  },
                  {
                    id: "massage-sports",
                    name: "Sports Massage",
                    desc: "Targeted to ease muscle soreness, reduce stiffness, and support physical recovery.",
                    image: "/images/listmenu/sportmassage.webp",
                    options: [
                      { time: "1 Hour", price: "269.000" },
                      { time: "1.5 Hours", price: "359.000" },
                    ],
                  },
                  {
                    id: "massage-shiatsu",
                    name: "Shiatsu Massage",
                    desc: "Using Japanese pressure-point techniques without oil to help ease body tension.",
                    image: "/images/treatments/cards/shiatsumassage-warm.webp",
                    options: [
                      { time: "30 Minutes", price: "119.000" },
                      { time: "1 Hour", price: "219.000" },
                      { time: "1.5 Hours", price: "329.000" },
                    ],
                  },
                  {
                    id: "massage-traditional",
                    name: "Traditional Massage",
                    desc: "Focused on firmer pressure to help release muscle tension throughout the body.",
                    image: "/images/listmenu/traditionalmassage.webp",
                    options: [
                      { time: "30 Minutes", price: "90.000" },
                      { time: "1 Hour", price: "169.000" },
                      { time: "1.5 Hours", price: "259.000" },
                      { time: "2 Hours", price: "339.000" },
                    ],
                  },
                  {
                    id: "massage-thai",
                    name: "Thai Massage",
                    desc: "Performed without oil, combining assisted stretches and rhythmic pressure techniques.",
                    image: "/images/treatments/cards/thaimassage-warm.webp",
                    options: [
                      { time: "30 Minutes", price: "133.000" },
                      { time: "1 Hour", price: "259.000" },
                      { time: "1.5 Hours", price: "379.000" },
                    ],
                  },
                  {
                    id: "massage-coconut-oil",
                    name: "Virgin Cold-Press Coconut Oil Massage",
                    desc: "Using pure coconut oil to help nourish the skin and promote deep relaxation.",
                    image: "/images/treatments/cards/coconutoilmassage-warm.webp",
                    options: [
                      { time: "1 Hour", price: "300.000" },
                      { time: "1.5 Hours", price: "440.000" },
                      { time: "2 Hours", price: "580.000" },
                    ],
                  },
                  {
                    id: "massage-warm-stone",
                    name: "Hot Stone Massage",
                    desc: "Using heated stones to help relax muscles and support healthy circulation.",
                    image: "/images/listmenu/hotstonemassage.webp",
                    options: [
                      { time: "1 Hour", price: "250.000" },
                      { time: "1.5 Hours", price: "380.000" },
                      { time: "2 Hours", price: "495.000" },
                    ],
                  },
                ],
              },
              {
                label: "Beauty",
                services: [
                  {
                    id: "beauty-tea-tree-facial",
                    name: "Bali Moon Tea Tree Facial",
                    desc: "Purifying facial care for oily or blemish-prone skin using clay and tea tree–based products. Benefits:",
                    image: "/images/listmenu/balimoonteatreefacial.webp",
                    options: [{ time: "Price", price: "196.000" }],
                    benefits: [
                      "Helps control excess oil",
                      "Supports clearer-looking skin",
                      "Calms and refreshes the face",
                      "Maintains healthy hydration",
                    ],
                  },
                  {
                    id: "beauty-gold-facial",
                    name: "Bali Moon Gold Facial",
                    desc: "Premium facial care using gold and argan oil to support skin radiance and firmness. Benefits:",
                    image: "/images/listmenu/balimoongoldfacial.webp",
                    options: [{ time: "Price", price: "269.000" }],
                    benefits: [
                      "Boosts natural glow",
                      "Improves skin smoothness and elasticity",
                      "Deeply moisturizes",
                      "Revives overall skin vitality",
                    ],
                  },
                  {
                    id: "beauty-body-scrub",
                    name: "Body Scrub",
                    desc: "Gently exfoliating the skin to help refresh the body and leave the skin smooth and clean.",
                    image: "/images/listmenu/bodyscrub.webp",
                    options: [
                      { time: "Body Massage & Scrub · Start From", price: "169.000" },
                      { time: "Chocolate", price: "169.000" },
                      { time: "Coconut", price: "169.000" },
                      { time: "Strawberry", price: "169.000" },
                      { time: "Bengkoang", price: "169.000" },
                      { time: "Jasmine", price: "169.000" },
                      { time: "Green Tea", price: "169.000" },
                      { time: "Spa Sari", price: "169.000" },
                      { time: "Additional Body Mask", price: "100.000" },
                    ],
                  },
                  {
                    id: "beauty-foot-scrub",
                    name: "Foot Scrub",
                    desc: "Exfoliating the feet to help soften rough skin and leave them feeling refreshed.",
                    image: "/images/listmenu/footscrub.webp",
                    options: [{ time: "30 Minutes", price: "100.000" }],
                  },
                  {
                    id: "beauty-biokos-facial",
                    name: "Biokos Facial",
                    desc: "Custom facial care adjusted for dry, normal, or oily skin, including facial massage and mask application.",
                    image: "/images/listmenu/biokosfacial.webp",
                    options: [
                      { time: "Biokos", price: "179.000" },
                      { time: "Mustika Ratu", price: "169.000" },
                      { time: "Sari Ayu", price: "169.000" },
                      { time: "Viva", price: "169.000" },
                    ],
                  },
                  {
                    id: "beauty-cream-bath",
                    name: "Cream Bath",
                    desc: "Caring for the hair and scalp through cleansing, conditioning, and relaxation.",
                    image: "/images/treatments/cards/creambath-warm.webp",
                    options: [
                      { time: "Ginseng", price: "165.000" },
                      { time: "Avocado", price: "165.000" },
                      { time: "Aloe Vera", price: "165.000" },
                      { time: "L’Oreal", price: "195.000" },
                      { time: "NR", price: "165.000" },
                      { time: "Hair Mask", price: "165.000" },
                    ],
                  },
                  {
                    id: "beauty-ear-candle",
                    name: "Ear Candle",
                    desc: "Providing a traditional ear candle experience focused on comfort and gentle relaxation.",
                    image: "/images/listmenu/earcandle.webp",
                    options: [{ time: "30 Minutes", price: "159.000" }],
                  },
                  {
                    id: "beauty-eyelash",
                    name: "Eyelash",
                    desc: "Enhancing the appearance of lashes with a simple and neat beauty treatment.",
                    image: "/images/listmenu/eyelash.webp",
                    options: [
                      { time: "Normal Eyelash", price: "299.000" },
                      { time: "Volume", price: "359.000" },
                      { time: "Mega Volume", price: "399.000" },
                    ],
                  },
                  {
                    id: "beauty-manicure-pedicure",
                    name: "Manicure Pedicure",
                    desc: "Providing complete hand and foot care with a clean and polished finish.",
                    image: "/images/treatments/cards/manicurepedicure-warm.webp",
                    options: [
                      { time: "Manicure & Pedicure", price: "238.000" },
                      { time: "Manicure", price: "99.000" },
                      { time: "Pedicure", price: "139.000" },
                      { time: "Nail Color Feet & Hands", price: "138.000" },
                      { time: "Nail Color Feet or Hands", price: "69.000" },
                      { time: "Nail Remover Feet & Hands", price: "98.000" },
                      { time: "Nail Gel Feet & Hands", price: "438.000" },
                      { time: "Nail Gel Feet or Hands", price: "219.000" },
                    ],
                  },
                  {
                    id: "beauty-waxing",
                    name: "Waxing",
                    desc: "Removing unwanted hair using olive oil hot wax for smooth and well-cared-for skin.",
                    image: "/images/listmenu/waxing.webp",
                    options: [
                      { time: "Arms", price: "159.000" },
                      { time: "Under Arms", price: "99.000" },
                      { time: "Back", price: "Start from 139.000" },
                      { time: "Full Back", price: "299.000" },
                      { time: "Half Legs", price: "149.000" },
                      { time: "Full Legs", price: "299.000" },
                      { time: "Waxing Brazilian", price: "350.000" },
                    ],
                  },
                ],
              },
              {
                label: "For Couples",
                services: [
                  {
                    id: "couple-balinese",
                    name: "Couple Balinese Massage",
                    desc: "Designed for two to relax together while easing the body and sharing a calm moment.",
                    image: "/images/listmenu/couplebalinesemassage.webp",
                    options: [
                      { time: "1 Hour – Balinese Massage · 2 pax", price: "319.000" },
                      { time: "1.5 Hours – Balinese Massage · 2 pax", price: "479.000" },
                      { time: "2 Hours – Balinese Massage · 2 pax", price: "659.000" },
                    ],
                  },
                  {
                    id: "couple-deep-tissue",
                    name: "Couple Deep Tissue Massage",
                    desc: "Delivered with deeper pressure for two, aimed at easing tight muscles and improving comfort.",
                    image: "/images/listmenu/coupledeeptissumassage.webp",
                    options: [
                      { time: "1 Hour – Deep Tissue Massage · 2 pax", price: "539.000" },
                      { time: "1.5 Hours – Deep Tissue Massage · 2 pax", price: "719.000" },
                    ],
                  },
                  {
                    id: "couple-traditional",
                    name: "Couple Traditional Massage",
                    desc: "Applied with firmer pressure to help reduce tension while relaxing together.",
                    image: "/images/listmenu/coupletraditionalmassage.webp",
                    options: [
                      { time: "1 Hour – Traditional Massage · 2 pax", price: "339.000" },
                      { time: "1.5 Hours – Traditional Massage · 2 pax", price: "519.000" },
                      { time: "2 Hours – Traditional Massage · 2 pax", price: "679.000" },
                    ],
                  },
                  {
                    id: "couple-warm-candle",
                    name: "Couple Massage Warm Candle",
                    desc: "Using gently warmed candle oils to create comfort and a deeper sense of relaxation for couples.",
                    image: "/images/listmenu/couplewarmcandle.webp",
                    options: [
                      { time: "1 Hour – Warm Candle Massage · 2 pax", price: "539.000" },
                      { time: "1.5 Hours – Warm Candle Massage · 2 pax", price: "799.000" },
                      { time: "2.5 Hours – Warm Candle Massage · 2 pax", price: "999.000" },
                    ],
                  },
                ],
              },
              {
                label: "Couple Packages",
                services: [
                  {
                    id: "couple-package-a",
                    name: "Couple Massage Package A",
                    desc: "",
                    // One photo per package, as on /seminyak/ (live repeats A=B and C=D).
                    image: "/images/listmenu/couplemassagepackage.webp",
                    options: [{ time: "1.5 Hours – Balinese Massage + Ear Candle · 2 pax", price: "639.000" }],
                  },
                  {
                    id: "couple-package-b",
                    name: "Couple Massage Package B",
                    desc: "",
                    image: "/images/listmenu/couplemassagepackage.webp",
                    options: [{ time: "2.5 Hours – Balinese Massage + Bali Moon Facial · 2 pax", price: "709.000" }],
                  },
                  {
                    id: "couple-package-c",
                    name: "Couple Massage Package C",
                    desc: "",
                    image: "/images/listmenu/couplemassagepackage.webp",
                    options: [{ time: "1.5 Hours – Warm Candle + Ear Candle · 2 pax", price: "849.000" }],
                  },
                  {
                    id: "couple-package-d",
                    name: "Couple Massage Package D",
                    desc: "",
                    image: "/images/listmenu/couplemassagepackage.webp",
                    options: [{ time: "2.5 Hours – Warm Candle + Bali Moon Facial · 2 pax", price: "929.000" }],
                  },
                ],
              },
            ], ["Most Popular"])}
          />
        </div>
        {/* S13 · FAQs, S14 · closing banner */}
        <div className="outcall-closing-panel pb-100">
          <FaqSection
            subTitle="Frequently Asked Questions"
            title={<>Outcall &amp; Home Service Massage FAQs</>}
            items={FAQ}
            showImage={false}
            columns={2}
          />
          <ReserveCta
            bottomSpacing={0}
            title="Home Service Massage in Seminyak and Beyond"
            text="Professional treatments at your home, hotel, or villa for an extra IDR 75.000 per therapist around Seminyak. Our therapists bring everything the session needs, including oils and fresh linen."
            closingText="For in-spa treatments, bookings are made on-site at your preferred time."
            backgroundImage="/images/outcall/outcall-5.webp"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * One treatment of the home service list: its name a link to its page, then
 * what it is for. One <span>, because the list item lays out its children in a
 * row (tick, then text).
 */
function TreatmentItem({ href, name, children }: { href: string; name: string; children: string }) {
  return (
    <span>
      <Link prefetch={false} href={href}>
        {name}
      </Link>
      {" — "}
      {children}
    </span>
  );
}
