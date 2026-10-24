/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import PageBanner from "@/components/sections/PageBanner";
import { LotusIcon } from "@/components/ui/Lotus";

const HOME_SERVICE = [
  {
    title: "We Bring Everything",
    text: "Our therapists arrive with fresh linens, premium oils, and all the tools needed for your treatment.",
  },
  {
    title: "Stress-Free Setup",
    text: "Your therapist has everything ready in 5 to 10 minutes, and your treatment time starts once setup is done.",
  },
  {
    title: "Flexible Hours",
    text: "Daily 9am–11pm. In the Seminyak area a therapist usually arrives within 30 to 60 minutes.",
  },
  {
    title: "Quick Booking",
    text: "Message us via WhatsApp to confirm your treatment and address. Home service is available for an additional IDR 75.000 per therapist in the Seminyak area.",
  },
];

const DAY_SPA = [
  { title: "Open Daily", text: "Daily 9am–11pm; walk-ins welcome or book ahead." },
  { title: "Tranquil Setting", text: "Air-conditioned rooms, soft music, and a calming ambience for your comfort." },
  { title: "Variety of Treatments", text: "Choose from 23 treatments, including Balinese massage, facials and coconut oil massage." },
  { title: "Cash or Card", text: "Pay by cash, Visa or Mastercard." },
];

/** One of the two booking routes: heading, gold tagline and a lotus list. */
function Option({
  title,
  tagline,
  items,
  animation,
}: {
  title: string;
  tagline: string;
  items: { title: string; text: string }[];
  animation: string;
}) {
  return (
    <div className="col-lg-6 content-column">
      <div
        className={`inner-column wow ${animation}`}
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
        style={{ margin: "0 auto" }}
      >
        <div className="section-header">
          <h2 className="look-h3" style={{ marginBottom: "10px" }}>
            {title}
          </h2>
          <p style={{ color: "var(--theme-color1)", marginBottom: "30px" }}>{tagline}</p>
        </div>
        <div className="list mt-25">
          <ul>
            {items.map((item) => (
              <li key={item.title} style={{ display: "flex", gap: "15px", marginBottom: "20px", alignItems: "flex-start" }}>
                <span style={{ minWidth: "25px", paddingTop: "3px" }}>
                  <LotusIcon className="brand-lotus-icon-svg" />
                </span>
                <div>
                  <h3 className="look-h5" style={{ marginBottom: "5px" }}>
                    {item.title}
                  </h3>
                  <p className="text" style={{ margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * /reservation/ — the live page: one "Book Your Treatment" band, no banner.
 * Since 15 October it opens with a photo banner like /contact/ (the owner's
 * Reservation photo), whose title is the H1; the band title is then an H2.
 * Live has no H1. The two booking routes are H2 and their points H3 (owner,
 * 5 Oct), each keeping its old heading look (look-h2/h3/h5 in
 * src/styles/custom.css).
 */
export default function ReservationPage() {
  return (
    <div className="page-wrapper lh p-reservation">
      <PageBanner
        subTitle="In-Spa or Home Service"
        titleSpan="Reserve Your Massage"
        title="at Spa Bali Moon"
        image="/images/banners/reservation.webp"
        // Phones: the whole photo above the text, on its blurred copy (24 Oct: every hero).
        mobilePhoto="/images/banners/reservation-wide-sm.webp"
        imagePosition="35% 50%"
      />
      <section className="book-treatment-section about-section section__decoration-top section__decoration-bottom bg-sub pt-130 pb-130">
        <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
          <img loading="lazy" decoding="async" src="/images/shape/service-shape-left.png" alt="shape" />
        </div>
        <div className="shape2 wow slideInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
          <img
            loading="lazy"
            decoding="async"
            className="sway_Y__animation"
            src="/images/shape/service-shape-right.png"
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="section-header center mb-60">
            <div className="sub-title look-h4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <LotusIcon className="brand-lotus-icon-svg" />
              Book on WhatsApp
            </div>
            <h2 className="title look-h2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ marginBottom: "20px" }}>
              Book Your Treatment
            </h2>
            <p
              className="text wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
              style={{ maxWidth: "800px", margin: "0 auto" }}
            >
              Book on WhatsApp at +62 878-6317-5144, daily 9am–11pm. Tell us the treatment and time, and whether you&apos;d
              like it at our Seminyak spa or at your villa or hotel; we confirm availability and the total price.
            </p>
          </div>
          <div className="row g-4">
            <Option
              title="Home Service Massage (Hotel & Villa)"
              tagline="A therapist comes to your villa, hotel or home"
              items={HOME_SERVICE}
              animation="fadeInLeft"
            />
            <Option
              title="Day Spa Bookings (Seminyak Location)"
              tagline="Jl. Pangkung Sari No. 30, Petitenget, Seminyak"
              items={DAY_SPA}
              animation="fadeInRight"
            />
          </div>
          <div className="text-center mt-40 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
            <a href="https://wa.me/6287863175144" target="_blank" rel="noopener noreferrer" className="btn-one">
              Book Now
              <span className="icon_box">
                <i className="fa-regular icon_first fa-arrow-right-long" />
                <i className="fa-regular icon_second fa-arrow-right-long" />
              </span>
            </a>
            <p className="text mt-15" style={{ fontWeight: 700 }}>
              Home service extra IDR 75.000 per therapist (Seminyak area)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
