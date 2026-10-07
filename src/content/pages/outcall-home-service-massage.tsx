import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import Funfacts from "@/components/sections/Funfacts";
import AboutSplit from "@/components/sections/AboutSplit";
import AboutSplitAlt from "@/components/sections/AboutSplitAlt";
import MenuDurations from "@/components/home/MenuDurations";
import { menuTabs } from "@/components/pricelist/menuTabs";
import HomeServiceInfo from "@/components/sections/HomeServiceInfo";
import FaqSection from "@/components/sections/FaqSection";
import ReserveCta from "@/components/sections/ReserveCta";
import RowButton from "@/components/ui/RowButton";
import { business } from "@/data/business";
import { whatsappChatUrl } from "@/lib/whatsapp";

/** /outcall-home-service-massage/ — generated from the live page's component tree, section for section. */
export default function OutcallPage() {
  return (
    <div className="page-wrapper lh p-outcall-home-service-massage">
      <div className="outcall-page">
        <PageBanner
          subTitle="Outcall Spa Service"
          titleSpan="Home Service"
          title="Massage in Bali"
          text="Experience our traditional massage and spa treatments in the comfort of your home, hotel, or villa."
          openingText="OPENING TIMES: Open Daily: 9:00 - 23:00"
          image="/images/homepage/homepage-28.webp"
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
                href="#outcall-prices"
                icon="tag"
                label="View Price List"
                note="Home service prices"
                className="row-btn--glass"
              />
            </>
          }
        />
        <AboutIntro
          subTitle="Spa Bali Moon in Seminyak, Bali"
          title={<>Home Service Balinese Massage</>}
          text={
            <>
              Find an authentic Balinese massage without the hassle. Let the stress of the week ease away as you enjoy a
              quiet, well-prepared session that fits naturally into your day.
              <span style={{ display: "block", marginTop: "16px" }}>
                Explore treatment and package options that can be customized to your preferences.
              </span>
            </>
          }
          feature1Title="Easy Booking via WhatsApp"
          feature1Text={
            <>
              Check <a href="#outcall-prices">available treatments</a> and arrange your spa
              session easily through WhatsApp.
            </>
          }
          feature2Title="Spa Treatments at Your Place"
          feature2Text="Select your preferred treatment and book a spa session delivered to your location."
          primaryImage="/images/outcall/outcall-2.webp"
          secondaryImage="/images/outcall/outcall-3.webp"
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
        <div className="outcall-treatment-panel section__decoration-top section__decoration-bottom bg-sub">
          <AboutSplit
            treatmentLayout
            subTitle="Spa & Beauty Service"
            title={<>{"Outcall Massage & Body Treatments"}</>}
            text="Enjoy professional massage and body treatments in the comfort of your villa, hotel, or accommodation. Choose from our selection of treatments:"
            featuresLeft={[
              "Couple Massage — Relax side by side while sharing a massage experience together.",
              "Shiatsu — Release muscle tension using gentle Japanese pressure-point techniques.",
              "Thai Massage — Improve flexibility and posture with assisted stretching and acupressure.",
              "Cream Bath — Revitalize your hair while supporting softness and freshness.",
            ]}
            featuresRight={[
              "Body Scrub — Softly exfoliate the skin and promote smoothness.",
              "Mani-Pedi — Maintain clean and well-groomed hands and feet with professional care.",
              "Hot Stone — Soothe muscle tension using warm stones for deeper relaxation.",
              "Facial Care — Cleanse and refresh the skin to restore a healthy appearance.",
            ]}
            buttonText="Book Now"
            buttonLink="https://wa.me/6287863175144"
            image="/images/homepage/homepage-3.webp"
          />
        </div>
        <AboutSplitAlt
          paperDecoration={false}
          treatmentLayout
          subTitle="Reserve Your Home Service Massage"
          badgeTopText="Home Spa"
          badgeBottomText="Booking"
          title={<>Get Your Massage Service at Home</>}
          text="Enjoy professional Balinese massage and spa treatments at your home, hotel, or villa throughout the day. With flexible appointment times and responsive booking support, the process is simple and convenient. When booking a home service, you can expect:"
          featuresLeft={[
            "Individual and group bookings",
            "Flexible appointment times",
            "Treatments at your hotel, villa, or home",
          ]}
          featuresRight={["Clear treatment prices", "Responsive booking support", "Quick availability confirmation"]}
          buttonText="Book Now"
          buttonLink="https://wa.me/6287863175144"
          image="/images/outcall/outcall-4.webp"
        />
        {/* The homepage price list (prices by duration), on the owner's request
            (1 Oct); the tabs and prices are this page's, as on live. */}
        <div id="outcall-prices">
          <MenuDurations
            subTitle="Prices"
            title="Professional Care with Thoughtful Details Focused on Comfort and Relaxation"
            spacing="pt-130 pb-130"
            sticky
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
                      { time: "1 Hour", price: "159K" },
                      { time: "1.5 Hours", price: "239K" },
                      { time: "2 Hours", price: "330K" },
                      { time: "1 Hour Aloe Vera", price: "195K" },
                    ],
                  },
                  {
                    id: "popular-cream-bath",
                    name: "Cream Bath",
                    desc: "Caring for the hair and scalp through cleansing, conditioning, and relaxation.",
                    image: "/images/listmenu/creambath.webp",
                    options: [
                      { time: "Ginseng", price: "165K" },
                      { time: "Avocado", price: "165K" },
                      { time: "Aloe Vera", price: "165K" },
                      { time: "L’Oreal", price: "195K" },
                      { time: "NR", price: "165K" },
                      { time: "Hair Mask", price: "165K" },
                    ],
                  },
                  {
                    id: "popular-four-hand",
                    name: "Four Hand Massage",
                    desc: "Delivered by two therapists working together in synchronized movements.",
                    image: "/images/listmenu/fourhandmassage.webp",
                    options: [
                      { time: "1 Hour", price: "339K" },
                      { time: "1.5 Hours", price: "499K" },
                      { time: "2 Hours", price: "669K" },
                    ],
                  },
                  {
                    id: "popular-lymphatic",
                    name: "Lymphatic Massage",
                    desc: "Applied gently to support natural drainage and promote healthy circulation.",
                    image: "/images/listmenu/lymphaticmassage%20.webp",
                    options: [
                      { time: "1 Hour", price: "300K" },
                      { time: "1.5 Hours", price: "440K" },
                      { time: "2 Hours", price: "580K" },
                    ],
                  },
                  {
                    id: "popular-manicure-pedicure",
                    name: "Manicure Pedicure",
                    desc: "Providing complete hand and foot care with a clean and polished finish.",
                    image: "/images/listmenu/manicurepedicure.webp",
                    options: [
                      { time: "Manicure & Pedicure", price: "238K" },
                      { time: "Manicure", price: "99K" },
                      { time: "Pedicure", price: "139K" },
                      { time: "Nail Color Feet & Hands", price: "138K" },
                      { time: "Nail Color Feet or Hands", price: "69K" },
                      { time: "Nail Remover Feet & Hands", price: "98K" },
                      { time: "Nail Gel Feet & Hands", price: "438K" },
                      { time: "Nail Gel Feet or Hands", price: "219K" },
                    ],
                  },
                  {
                    id: "popular-sports",
                    name: "Sport Massage",
                    desc: "Targeted to ease muscle soreness, reduce stiffness, and support physical recovery.",
                    image: "/images/listmenu/sportmassage.webp",
                    options: [
                      { time: "1 Hour", price: "269K" },
                      { time: "1.5 Hours", price: "359K" },
                    ],
                  },
                  {
                    id: "popular-traditional",
                    name: "Traditional Massage",
                    desc: "Focused on firmer pressure to help release muscle tension throughout the body.",
                    image: "/images/listmenu/traditionalmassage.webp",
                    options: [
                      { time: "30 Minutes", price: "90K" },
                      { time: "1 Hour", price: "169K" },
                      { time: "1.5 Hours", price: "259K" },
                      { time: "2 Hours", price: "339K" },
                    ],
                  },
                  {
                    id: "popular-thai",
                    name: "Thai Massage",
                    desc: "Performed without oil, combining assisted stretches and rhythmic pressure techniques.",
                    image: "/images/listmenu/thaimassage.webp",
                    options: [
                      { time: "30 Minutes", price: "133K" },
                      { time: "1 Hour", price: "259K" },
                      { time: "1.5 Hours", price: "379K" },
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
                    options: [{ time: "1 Hour", price: "250K" }],
                  },
                  {
                    id: "massage-aromatherapy",
                    name: "Aromatherapy Massage",
                    desc: "Essential oils combined with gentle movements promote calm and body relaxation.",
                    image: "/images/listmenu/aromatherapymassage.webp",
                    options: [
                      { time: "1 Hour", price: "199K" },
                      { time: "1.5 Hours", price: "339K" },
                      { time: "2 Hours", price: "439K" },
                    ],
                  },
                  {
                    id: "massage-balinese",
                    name: "Balinese Massage",
                    desc: "Designed to calm the body with steady pressure, gentle stretching, and aromatic oils.",
                    image: "/images/listmenu/balinesemassage.webp",
                    options: [
                      { time: "1 Hour", price: "159K" },
                      { time: "1.5 Hours", price: "239K" },
                      { time: "2 Hours", price: "330K" },
                      { time: "1 Hour Aloe Vera", price: "195K" },
                    ],
                  },
                  {
                    id: "massage-back",
                    name: "Back Massage",
                    desc: "Focusing on the upper body to help relieve tightness and restore comfort.",
                    image: "/images/listmenu/backmassage.webp",
                    options: [
                      { time: "30 Minutes", price: "90K" },
                      { time: "1 Hour", price: "199K" },
                      { time: "1.5 Hours", price: "259K" },
                      { time: "2 Hours", price: "339K" },
                    ],
                  },
                  {
                    id: "massage-cellulite",
                    name: "Cellulite Massage",
                    desc: "Targeting specific areas to help stimulate circulation and support skin firmness.",
                    image: "/images/listmenu/cellulitemassage.webp",
                    options: [
                      { time: "1 Hour", price: "350K" },
                      { time: "1.5 Hours", price: "520K" },
                      { time: "2 Hours", price: "695K" },
                    ],
                  },
                  {
                    id: "massage-couple",
                    name: "Couple Massage",
                    desc: "Designed for two to relax together while easing the body and sharing a calm moment.",
                    image: "/images/listmenu/couplemassage.webp",
                    options: [],
                    children: [
                      {
                        name: "Couple Massage Balinese",
                        desc: "Performed side by side using steady pressure and flowing techniques for shared relaxation.",
                        options: [
                          { time: "1 Hour – Balinese Massage · 2 pax", price: "319K" },
                          { time: "1.5 Hours – Balinese Massage · 2 pax", price: "479K" },
                          { time: "2 Hours – Balinese Massage · 2 pax", price: "659K" },
                        ],
                      },
                      {
                        name: "Couple Traditional Massage",
                        desc: "Applied with firmer pressure to help reduce tension while relaxing together.",
                        options: [
                          { time: "1 Hour – Traditional Massage · 2 pax", price: "339K" },
                          { time: "1.5 Hours – Traditional Massage · 2 pax", price: "519K" },
                          { time: "2 Hours – Traditional Massage · 2 pax", price: "679K" },
                        ],
                      },
                      {
                        name: "Couple Deep Tissue Massage",
                        desc: "Delivered with deeper pressure for two, aimed at easing tight muscles and improving comfort.",
                        options: [
                          { time: "1 Hour – Deep Tissue Massage · 2 pax", price: "539K" },
                          { time: "1.5 Hours – Deep Tissue Massage · 2 pax", price: "719K" },
                        ],
                      },
                      {
                        name: "Couple Massage Warm Candle",
                        desc: "Using gently warmed candle oils to create comfort and a deeper sense of relaxation for couples.",
                        options: [
                          { time: "1 Hour – Warm Candle Massage · 2 pax", price: "539K" },
                          { time: "1.5 Hours – Warm Candle Massage · 2 pax", price: "799K" },
                          { time: "2.5 Hours – Warm Candle Massage · 2 pax", price: "999K" },
                        ],
                      },
                      {
                        name: "Couple Massage Packages",
                        desc: "A well-balanced couple’s massage package created for relaxing together.",
                        options: [
                          { time: "Package A · 1.5 Hours – Balinese Massage + Ear Candle · 2 pax", price: "639K" },
                          {
                            time: "Package B · 2.5 Hours – Balinese Massage + Bali Moon Facial · 2 pax",
                            price: "709K",
                          },
                          { time: "Package C · 1.5 Hours – Warm Candle + Ear Candle · 2 pax", price: "849K" },
                          { time: "Package D · 2.5 Hours – Warm Candle + Bali Moon Facial · 2 pax", price: "929K" },
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
                      { time: "1 Hour", price: "269K" },
                      { time: "1.5 Hours", price: "359K" },
                    ],
                  },
                  {
                    id: "massage-four-hand",
                    name: "Four Hand Massage",
                    desc: "Delivered by two therapists working together in synchronized movements.",
                    image: "/images/listmenu/fourhandmassage.webp",
                    options: [
                      { time: "1 Hour", price: "339K" },
                      { time: "1.5 Hours", price: "499K" },
                      { time: "2 Hours", price: "669K" },
                    ],
                  },
                  {
                    id: "massage-four-hand-candle",
                    name: "Four Hand Warm Candle",
                    desc: "Performed by two therapists working in synchronized movements for deeper relaxation.",
                    image: "/images/listmenu/organicwarmcandle.webp",
                    options: [
                      { time: "1 Hour – Four Hand Warm Candle", price: "539K" },
                      { time: "1.5 Hours – Four Hand Warm Candle", price: "799K" },
                      { time: "2 Hours – Four Hand Warm Candle", price: "999K" },
                    ],
                  },
                  {
                    id: "massage-foot-reflexology",
                    name: "Foot Reflexology",
                    desc: "Applying pressure to reflex points on the feet to help restore body balance.",
                    image: "/images/listmenu/footreflexology.webp",
                    options: [
                      { time: "30 Minutes", price: "99K" },
                      { time: "1 Hour", price: "169K" },
                      { time: "1.5 Hours", price: "239K" },
                    ],
                  },
                  {
                    id: "massage-foot",
                    name: "Foot Massage",
                    desc: "A focused massage on the soles, heels, and ankles to ease stiffness and restore comfort.",
                    image: "/images/listmenu/footmassage.webp",
                    options: [
                      { time: "1 Hour", price: "159K" },
                      { time: "1.5 Hours", price: "239K" },
                      { time: "2 Hours", price: "330K" },
                    ],
                  },
                  {
                    id: "massage-head",
                    name: "Head Massage",
                    desc: "Focused on the head area to help release built-up stress and promote mental ease.",
                    image: "/images/listmenu/headmassage.webp",
                    options: [
                      { time: "1 Hour", price: "159K" },
                      { time: "1.5 Hours", price: "239K" },
                      { time: "2 Hours", price: "330K" },
                    ],
                  },
                  {
                    id: "massage-herbal",
                    name: "Herbal Massage",
                    desc: "Using herbal ingredients to support relaxation and encourage circulation.",
                    image: "/images/listmenu/herbalmassage.webp",
                    options: [
                      { time: "1 Hour", price: "199K" },
                      { time: "2 Hours", price: "399K" },
                    ],
                  },
                  {
                    id: "massage-lymphatic",
                    name: "Lymphatic Massage",
                    desc: "Applied gently to support natural drainage and promote healthy circulation.",
                    image: "/images/listmenu/lymphaticmassage%20.webp",
                    options: [
                      { time: "1 Hour", price: "300K" },
                      { time: "1.5 Hours", price: "440K" },
                      { time: "2 Hours", price: "580K" },
                    ],
                  },
                  {
                    id: "massage-warm-candle",
                    name: "Organic Warm Candle Oil Massage",
                    desc: "Using natural, warmed oils to help relax the body and soften muscle tension.",
                    image: "/images/listmenu/organicwarmcandle.webp",
                    options: [
                      { time: "1 Hour – Warm Candle Wax Balinese", price: "269K" },
                      { time: "1.5 Hours – Warm Candle Wax Balinese", price: "399K" },
                      { time: "2 Hours – Warm Candle Wax Balinese", price: "499K" },
                    ],
                  },
                  {
                    id: "massage-sports",
                    name: "Sport Massage",
                    desc: "Targeted to ease muscle soreness, reduce stiffness, and support physical recovery.",
                    image: "/images/listmenu/sportmassage.webp",
                    options: [
                      { time: "1 Hour", price: "269K" },
                      { time: "1.5 Hours", price: "359K" },
                    ],
                  },
                  {
                    id: "massage-shiatsu",
                    name: "Shiatsu Massage",
                    desc: "Using Japanese pressure-point techniques without oil to help ease body tension.",
                    image: "/images/listmenu/shiatsumassage.webp",
                    options: [
                      { time: "30 Minutes", price: "119K" },
                      { time: "1 Hour", price: "219K" },
                      { time: "1.5 Hours", price: "329K" },
                    ],
                  },
                  {
                    id: "massage-traditional",
                    name: "Traditional Massage",
                    desc: "Focused on firmer pressure to help release muscle tension throughout the body.",
                    image: "/images/listmenu/traditionalmassage.webp",
                    options: [
                      { time: "30 Minutes", price: "90K" },
                      { time: "1 Hour", price: "169K" },
                      { time: "1.5 Hours", price: "259K" },
                      { time: "2 Hours", price: "339K" },
                    ],
                  },
                  {
                    id: "massage-thai",
                    name: "Thai Massage",
                    desc: "Performed without oil, combining assisted stretches and rhythmic pressure techniques.",
                    image: "/images/listmenu/thaimassage.webp",
                    options: [
                      { time: "30 Minutes", price: "133K" },
                      { time: "1 Hour", price: "259K" },
                      { time: "1.5 Hours", price: "379K" },
                    ],
                  },
                  {
                    id: "massage-coconut-oil",
                    name: "Virgin Cold-Press Coconut Oil Massage",
                    desc: "Using pure coconut oil to help nourish the skin and promote deep relaxation.",
                    image: "/images/listmenu/coconutoilmassage.webp",
                    options: [
                      { time: "1 Hour", price: "300K" },
                      { time: "1.5 Hours", price: "440K" },
                      { time: "2 Hours", price: "580K" },
                    ],
                  },
                  {
                    id: "massage-warm-stone",
                    name: "Hot Stone Massage",
                    desc: "Using heated stones to help relax muscles and support healthy circulation.",
                    image: "/images/listmenu/hotstonemassage.webp",
                    options: [
                      { time: "1 Hour", price: "250K" },
                      { time: "1.5 Hours", price: "380K" },
                      { time: "2 Hours", price: "495K" },
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
                    options: [{ time: "Price", price: "196K" }],
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
                    options: [{ time: "Price", price: "269K" }],
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
                      { time: "Body Massage & Scrub · Start From", price: "169K" },
                      { time: "Chocolate", price: "169K" },
                      { time: "Coconut", price: "169K" },
                      { time: "Strawberry", price: "169K" },
                      { time: "Bengkoang", price: "169K" },
                      { time: "Jasmine", price: "169K" },
                      { time: "Green Tea", price: "169K" },
                      { time: "Spa Sari", price: "169K" },
                      { time: "Additional Body Mask", price: "100K" },
                    ],
                  },
                  {
                    id: "beauty-foot-scrub",
                    name: "Foot Scrub",
                    desc: "Exfoliating the feet to help soften rough skin and leave them feeling refreshed.",
                    image: "/images/listmenu/footscrub.webp",
                    options: [{ time: "30 Minutes", price: "100K" }],
                  },
                  {
                    id: "beauty-biokos-facial",
                    name: "Biokos Facial",
                    desc: "Custom facial care adjusted for dry, normal, or oily skin, including facial massage and mask application.",
                    image: "/images/listmenu/biokosfacial.webp",
                    options: [
                      { time: "Biokos", price: "179K" },
                      { time: "Mustika Ratu", price: "169K" },
                      { time: "Sari Ayu", price: "169K" },
                      { time: "Viva", price: "169K" },
                    ],
                  },
                  {
                    id: "beauty-cream-bath",
                    name: "Cream Bath",
                    desc: "Caring for the hair and scalp through cleansing, conditioning, and relaxation.",
                    image: "/images/listmenu/creambath.webp",
                    options: [
                      { time: "Ginseng", price: "165K" },
                      { time: "Avocado", price: "165K" },
                      { time: "Aloe Vera", price: "165K" },
                      { time: "L’Oreal", price: "195K" },
                      { time: "NR", price: "165K" },
                      { time: "Hair Mask", price: "165K" },
                    ],
                  },
                  {
                    id: "beauty-ear-candle",
                    name: "Ear Candle",
                    desc: "Providing a traditional ear candle experience focused on comfort and gentle relaxation.",
                    image: "/images/listmenu/earcandle.webp",
                    options: [{ time: "30 Minutes", price: "159K" }],
                  },
                  {
                    id: "beauty-eyelash",
                    name: "Eyelash",
                    desc: "Enhancing the appearance of lashes with a simple and neat beauty treatment.",
                    image: "/images/listmenu/eyelash.webp",
                    options: [
                      { time: "Normal Eyelash", price: "299K" },
                      { time: "Volume", price: "359K" },
                      { time: "Mega Volume", price: "399K" },
                    ],
                  },
                  {
                    id: "beauty-manicure-pedicure",
                    name: "Manicure Pedicure",
                    desc: "Providing complete hand and foot care with a clean and polished finish.",
                    image: "/images/listmenu/manicurepedicure.webp",
                    options: [
                      { time: "Manicure & Pedicure", price: "238K" },
                      { time: "Manicure", price: "99K" },
                      { time: "Pedicure", price: "139K" },
                      { time: "Nail Color Feet & Hands", price: "138K" },
                      { time: "Nail Color Feet or Hands", price: "69K" },
                      { time: "Nail Remover Feet & Hands", price: "98K" },
                      { time: "Nail Gel Feet & Hands", price: "438K" },
                      { time: "Nail Gel Feet or Hands", price: "219K" },
                    ],
                  },
                  {
                    id: "beauty-waxing",
                    name: "Waxing",
                    desc: "Removing unwanted hair using olive oil hot wax for smooth and well-cared-for skin.",
                    image: "/images/listmenu/waxing.webp",
                    options: [
                      { time: "Arms", price: "159K" },
                      { time: "Under Arms", price: "99K" },
                      { time: "Back", price: "Start from 139K" },
                      { time: "Full Back", price: "299K" },
                      { time: "Half Legs", price: "149K" },
                      { time: "Full Legs", price: "299K" },
                      { time: "Waxing Brazilian", price: "350K" },
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
                      { time: "1 Hour – Balinese Massage · 2 pax", price: "319K" },
                      { time: "1.5 Hours – Balinese Massage · 2 pax", price: "479K" },
                      { time: "2 Hours – Balinese Massage · 2 pax", price: "659K" },
                    ],
                  },
                  {
                    id: "couple-deep-tissue",
                    name: "Couple Deep Tissue Massage",
                    desc: "Delivered with deeper pressure for two, aimed at easing tight muscles and improving comfort.",
                    image: "/images/listmenu/coupledeeptissumassage.webp",
                    options: [
                      { time: "1 Hour – Deep Tissue Massage · 2 pax", price: "539K" },
                      { time: "1.5 Hours – Deep Tissue Massage · 2 pax", price: "719K" },
                    ],
                  },
                  {
                    id: "couple-traditional",
                    name: "Couple Traditional Massage",
                    desc: "Applied with firmer pressure to help reduce tension while relaxing together.",
                    image: "/images/listmenu/coupletraditionalmassage.webp",
                    options: [
                      { time: "1 Hour – Traditional Massage · 2 pax", price: "339K" },
                      { time: "1.5 Hours – Traditional Massage · 2 pax", price: "519K" },
                      { time: "2 Hours – Traditional Massage · 2 pax", price: "679K" },
                    ],
                  },
                  {
                    id: "couple-warm-candle",
                    name: "Couple Massage Warm Candle",
                    desc: "Using gently warmed candle oils to create comfort and a deeper sense of relaxation for couples.",
                    image: "/images/listmenu/couplewarmcandle.webp",
                    options: [
                      { time: "1 Hour – Warm Candle Massage · 2 pax", price: "539K" },
                      { time: "1.5 Hours – Warm Candle Massage · 2 pax", price: "799K" },
                      { time: "2.5 Hours – Warm Candle Massage · 2 pax", price: "999K" },
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
                    options: [{ time: "1.5 Hours – Balinese Massage + Ear Candle · 2 pax", price: "639K" }],
                  },
                  {
                    id: "couple-package-b",
                    name: "Couple Massage Package B",
                    desc: "",
                    image: "/images/listmenu/couplebalinesemassage.webp",
                    options: [{ time: "2.5 Hours – Balinese Massage + Bali Moon Facial · 2 pax", price: "709K" }],
                  },
                  {
                    id: "couple-package-c",
                    name: "Couple Massage Package C",
                    desc: "",
                    image: "/images/listmenu/couplewarmcandle.webp",
                    options: [{ time: "1.5 Hours – Warm Candle + Ear Candle · 2 pax", price: "849K" }],
                  },
                  {
                    id: "couple-package-d",
                    name: "Couple Massage Package D",
                    desc: "",
                    image: "/images/listmenu/couplemassage.webp",
                    options: [{ time: "2.5 Hours – Warm Candle + Bali Moon Facial · 2 pax", price: "929K" }],
                  },
                ],
              },
            ])}
          />
        </div>
        <HomeServiceInfo plain />
        <div className="outcall-closing-panel section__decoration-top section__decoration-bottom bg-sub pb-100">
          <FaqSection
            subTitle="Frequently Asked Questions"
            title={<>Home Service Massage</>}
            items={[
              {
                question: "What is an outcall massage?",
                answer:
                  "An outcall massage is a professional treatment delivered by a therapist who travels to you, rather than you visiting the spa. Our therapists come to your villa, hotel room, or private residence with everything needed for the session. It is also known as home service or mobile massage.",
              },
              {
                question: "Do I need to prepare anything?",
                answer:
                  "No. Our therapists bring the massage bed, clean linens, towels, and oils. All you need is a space of roughly two by two metres and a bedroom, terrace, or living area all work well. If you have a preference for where the session takes place, tell us when you book.",
              },
              {
                question: "What does the therapist bring?",
                answer:
                  "A portable massage bed, freshly laundered linens and towels, professional massage oils, and any equipment specific to your chosen treatment. Nothing is reused between guests. You do not need to supply towels, sheets, or anything else.",
              },
              {
                question: "How long does setup take?",
                answer:
                  "Around five to ten minutes on arrival, and a similar time to pack down afterwards. Your treatment time begins once setup is complete, so a booked 60-minute massage is a full 60 minutes of treatment.",
              },
              {
                question: "Which areas do you cover for home service?",
                answer:
                  "Our spa is in Seminyak, and home service is available across Seminyak, Kerobokan, Petitenget, Canggu, and North Kuta. We also travel to Kuta, Jimbaran, Uluwatu, Nusa Dua, Sanur, Denpasar, and Ubud, subject to therapist availability and travel time. Message us with your location and we will confirm.",
              },
              {
                question: "What if my hotel doesn't allow outside therapists?",
                answer:
                  "Some hotels and resorts restrict external therapists, particularly larger properties with their own spa. Please check with reception before booking. Private villas and guesthouses rarely have this restriction. If your property does not permit home service, you are very welcome at our Seminyak spa instead.",
              },
              {
                question: "Which massage is best after a long flight?",
                answer:
                  "A one-hour Balinese or aromatherapy massage suits most guests arriving in Bali. Both use steady, flowing pressure rather than deep work, which helps with circulation and sleep after a long journey. Foot reflexology is a good shorter option if your legs and feet feel swollen.",
              },
            ]}
            showImage={false}
            columns={2}
          />
          <ReserveCta
            bottomSpacing={0}
            title="Home Service Massage in Seminyak"
            text="Professional treatments at your home, hotel, or villa for an extra IDR 75,000 per therapist around Seminyak. Our therapists bring everything the session needs, including oils and fresh linen."
            closingText="For in-spa treatments, bookings are made on-site at your preferred time."
            backgroundImage="/images/outcall/outcall-5.webp"
          />
        </div>
      </div>
    </div>
  );
}
