/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import type { ReactNode } from "react";
import { MenuIcon, type MenuIconName } from "@/components/layout/MenuIcons";
import { LotusIcon } from "@/components/ui/Lotus";
import RowButton from "@/components/ui/RowButton";
import { business } from "@/data/business";
import { priceOf } from "@/data/pricelist";
import { whatsappChatUrl } from "@/lib/whatsapp";

/**
 * The sections added to /outcall-home-service-massage/ in the October 20
 * dev brief (outcall-page-dev-brief.md): prices with the fee added, how a
 * booking works, the areas, home service against the day spa, groups and who
 * is coming. The copy is the brief's, word for word. Where the brief asks for
 * a fact only the owner can give (the brief's C1 to C14), the sentence is
 * left out, as the brief's fallback says; the places are marked "Owner fact Cx"
 * in the comments, so a sentence can be added back once the owner confirms it.
 *
 * Card and column titles are bold text, not headings, so they do not repeat
 * the H3s of the price list. Styles: src/styles/outcall.css.
 */

const fee = business.homeService.feePerTherapist;

/** 159000 -> "IDR 159.000". */
const idr = (amount: number) => `IDR ${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

/**
 * Background of the sections that sit on paper (the theme's cream colour with torn
 * edges). The outcall page alternates paper and plain from the prices down
 * (the first paper section touches the hero: layout in outcall.css, part 10):
 * prices (paper), intro, how it works (paper), treatments, areas (paper),
 * comparison, groups (paper), why choose us, licensed band (paper), price
 * list (plain, MenuDurations `paper={false}`), FAQs (paper).
 */
const PAPER = "bg-sub section__decoration-top section__decoration-bottom";

/**
 * The theme's buttons: `btn-two` (filled gold, the footer's "Book on WhatsApp")
 * for the main action, `btn-one` (gold outline with the sliding arrow, "Book
 * Now") for the other. Addresses that leave the site open in a new tab.
 */
function Button({
  href,
  children,
  filled = false,
  whatsapp = false,
}: {
  href: string;
  children: ReactNode;
  filled?: boolean;
  whatsapp?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      prefetch={false}
      className={filled ? "btn-two" : "btn-one"}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {whatsapp ? <i className="fa-brands fa-whatsapp" aria-hidden="true" /> : null}
      {children}
      {whatsapp ? null : (
        <span className="icon_box">
          <i className="fa-regular icon_first fa-arrow-right-long" />
          <i className="fa-regular icon_second fa-arrow-right-long" />
        </span>
      )}
    </Link>
  );
}

/** Centred heading of a section, as the theme sets them: the lotus and a small line, the H2, and a line of text. */
function Header({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="section-header center price-table__header oc-header">
      <p className="sub-title">
        <LotusIcon className="icon" />
        {eyebrow}
      </p>
      <h2 className="title">{title}</h2>
      {children ? <p className="price-table__text">{children}</p> : null}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* S02 · Home Service Massage Prices in Seminyak                              */
/* ------------------------------------------------------------------------ */

/**
 * The most-booked home treatments. Totals are worked out from the price list, so they follow it when prices change.
 * A row reads "Balinese Massage, 60 min", or "… (2 therapists)" when two come.
 */
const POPULAR: { name: string; length: string; id: string; label: string; therapists: number }[] = [
  { name: "Balinese Massage", length: "60 min", id: "balinese-massage", label: "1 Hour", therapists: 1 },
  { name: "Traditional Massage", length: "60 min", id: "traditional-massage", label: "1 Hour", therapists: 1 },
  { name: "Aromatherapy Massage", length: "60 min", id: "aromatherapy-massage", label: "1 Hour", therapists: 1 },
  { name: "Deep Tissue Massage", length: "60 min", id: "deep-tissue-massage", label: "1 Hour", therapists: 1 },
  // Lymphatic added on the owner's request (22 Oct).
  { name: "Lymphatic Massage", length: "60 min", id: "lymphatic-massage", label: "1 Hour", therapists: 1 },
  {
    name: "Couple Balinese Massage",
    length: "60 min",
    id: "couple-balinese-massage",
    label: "1 Hour · Balinese Massage · 2 Pax",
    therapists: 2,
  },
  { name: "Four Hand Massage", length: "60 min", id: "four-hand-massage", label: "1 Hour", therapists: 2 },
];

/** The fee in Canggu, North Kuta and Kuta. */
const outerFee = business.homeService.feeOuterPerTherapist;

export function HomeServicePrices() {
  const rows = POPULAR.map((row) => {
    const price = priceOf(row.id, row.label);
    const homeFee = fee * row.therapists;
    return { name: row.name, length: row.length, therapists: row.therapists, price, homeFee, total: price + homeFee };
  });
  return (
    <section id="home-service-prices" className={`oc-section oc-prices ${PAPER} pt-130 pb-130`}>
      <div className="container">
        <Header eyebrow="Prices at Your Villa" title="Home Service Massage Prices in Seminyak">
          In the Seminyak area, what you pay at your villa, hotel or home is the treatment price plus {idr(fee)} per
          therapist. These are our most-booked home treatments, with the fee already added:
        </Header>
        <div className="oc-table-wrap">
          {/* Phones: one white card, the treatment and its total on one line, the length as a small
              tag and the price + fee under it (outcall.css, 15). */}
          <table className="oc-table oc-table--prices oc-table--villa">
            <caption className="oc-sr-only">Home service prices with the fee added</caption>
            <thead>
              <tr>
                <th scope="col">Treatment</th>
                <th scope="col">Treatment price</th>
                <th scope="col">Home service fee</th>
                <th scope="col">Total at your villa</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name}>
                  {/* The comma and brackets are hidden on phones, where the length and therapists are tags. */}
                  <th scope="row">
                    <span className="oc-villa__name">{r.name}</span>
                    <span className="oc-villa__punct">, </span>
                    <span className="oc-villa__tag">{r.length}</span>
                    {r.therapists > 1 ? (
                      <>
                        {" "}
                        <span className="oc-villa__punct">(</span>
                        <span className="oc-villa__tag">{r.therapists} therapists</span>
                        <span className="oc-villa__punct">)</span>
                      </>
                    ) : null}
                  </th>
                  <td className="oc-villa__price" data-label="Treatment price">
                    {idr(r.price)}
                  </td>
                  <td className="oc-villa__fee" data-label="Home service fee">
                    {idr(r.homeFee)}
                  </td>
                  <td data-label="Total at your villa" className="oc-table__total">
                    <strong>{idr(r.total)}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Fees by area: business.homeService.zones (owner, 22 Oct), shown in full in S06. */}
        <p className="oc-note">
          Totals apply in Seminyak, Petitenget and Kerobokan. In Canggu, North Kuta and Kuta the fee is{" "}
          {idr(outerFee)} per therapist, and for areas further away we confirm the total on WhatsApp before you book.{" "}
          <a href="#areas">See every area</a>.
        </p>
        <div className="oc-actions">
          <Button href={whatsappChatUrl} filled whatsapp>
            Book on WhatsApp
          </Button>
          {/* The second action is a row button, not a second pill, so the two stand apart (owner, 22 Oct). */}
          <RowButton href="#price-list" icon="book" label="See the full price list" note="Every outcall treatment and duration" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* S04 · How Our Outcall Massage Works                                        */
/* ------------------------------------------------------------------------ */

const STEPS: { title: string; text: string }[] = [
  {
    title: "Message us on WhatsApp",
    text: "Send your treatment, date and time, number of guests and your villa or hotel address.",
  },
  {
    title: "We confirm your booking",
    // Owner fact C6: "Same-day bookings are usually possible." (the FAQ below already says "Often, yes".)
    text: "We reply with the total price, including the home service fee, and your therapist's arrival time.",
  },
  {
    title: "Your therapist sets up",
    text: "They bring fresh linen, towels, oils and the tools your treatment needs, and have everything ready in 5 to 10 minutes.",
  },
  {
    title: "Relax, then pay",
    text: "Your treatment time starts once setup is done, so a 60-minute massage is a full 60 minutes. Pay your therapist after the session, in cash or by Visa or Mastercard."
  },
];

/** The six bullets the old "Book Home Service Massage in Bali" section had. */
const EXPECT = [
  "Individual and group bookings",
  "Flexible appointment times",
  "Treatments at your hotel, villa, or home",
  "Clear treatment prices",
  "Responsive booking support",
  "Quick availability confirmation",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className={`oc-section oc-how ${PAPER} pt-130 pb-130`}>
      <div className="container">
        <Header eyebrow="From Message to Massage" title="How Our Outcall Massage Works" />
        {/* Four steps in a row of cards, then the photo beside what to expect. */}
        <ol className="oc-steps">
          {STEPS.map((step, i) => (
            <li key={step.title} className="oc-steps__item">
              <span className="oc-steps__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="oc-steps__title">{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="oc-how__aside">
          <img
            loading="lazy"
            decoding="async"
            src="/images/outcall/outcall-4.webp"
            alt="Therapist giving a leg massage to a guest draped in a white towel"
            className="oc-how__photo"
          />
          <div className="oc-how__expect">
            <h3 className="oc-how__expect-title">What to expect</h3>
            <ul className="oc-ticks">
              {EXPECT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href={whatsappChatUrl} target="_blank" rel="noopener noreferrer" className="btn-one">
              Book Now
              <span className="icon_box">
                <i className="fa-regular icon_first fa-arrow-right-long" />
                <i className="fa-regular icon_second fa-arrow-right-long" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* S06 · Home Service Areas Around Seminyak                                   */
/* ------------------------------------------------------------------------ */

/**
 * One short note per fee level under the table. The H3s keep the area searches
 * ("outcall massage canggu" and the like) in headings without the old six cards.
 */
// Plain text, no links: the owner found links too busy here (22 Oct).
const AREA_NOTES: { name: string; text: string }[] = [
  {
    name: "Outcall Massage in Seminyak, Petitenget & Kerobokan",
    text: `Our spa is here, so this is where we arrive fastest, for ${idr(fee)} per therapist. We come to villas, hotels and homes across all three areas.`,
  },
  {
    name: "Outcall Massage in Canggu & Kuta",
    text: `Villas and hotels across Canggu, North Kuta and Kuta, for ${idr(outerFee)} per therapist. After a day of surfing, a sports massage eases tired legs.`,
  },
  {
    name: "Uluwatu, Nusa Dua, Ubud & Further",
    text: "We travel further when a therapist is free and confirm the fee on WhatsApp. Some larger resorts don't allow outside therapists, so check with reception first.",
  },
];

export function HomeServiceAreas() {
  return (
    <section id="areas" className={`oc-section oc-areas ${PAPER} pt-130 pb-130`}>
      <div className="container">
        <Header eyebrow="Where We Travel" title="Home Service Areas Around Seminyak">
          Our therapists leave from our spa on Jl. Pangkung Sari in Seminyak, so the closer you stay, the sooner they
          reach you. In the Seminyak area a therapist usually arrives within 30 to 60 minutes of booking. Here is the
          home service fee and the usual drive time from the spa for each area:
        </Header>
        <div className="oc-table-wrap">
          <table className="oc-table oc-table--prices oc-table--arrival">
            <caption className="oc-sr-only">Home service fee and travel time from the spa, by area</caption>
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">Home service fee</th>
                <th scope="col">Travel time from our spa</th>
              </tr>
            </thead>
            <tbody>
              {/* Phones: one white card, the fee under each area's name and the drive time as a
                  small tag (outcall.css, 15). */}
              {business.homeService.zones.map((z) => (
                <tr key={z.area}>
                  <th scope="row">{z.area}</th>
                  <td className="oc-arrival__fee" data-label="Home service fee">
                    {z.fee === null ? "Confirmed on WhatsApp" : `${idr(z.fee)} per therapist`}
                  </td>
                  <td className="oc-arrival__time" data-label="Travel time from our spa">
                    <span className="oc-arrival__clock" aria-hidden="true">
                      <MenuIcon name="clock" />
                    </span>
                    {z.travel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="oc-table-note">Usual drive times from our spa; allow longer in heavy traffic.</p>
        </div>
        <div className="oc-area-notes">
          {AREA_NOTES.map((note) => (
            <div key={note.name} className="oc-area-notes__item">
              <h3 className="oc-area-notes__title">{note.name}</h3>
              <p>{note.text}</p>
            </div>
          ))}
        </div>
        <p className="oc-note">
          Send your address on WhatsApp and we confirm the fee and your therapist&apos;s arrival time before you book.
        </p>
        <div className="oc-actions">
          <Button href={whatsappChatUrl} filled whatsapp>
            Book on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* S07 · Home Service or Our Seminyak Day Spa?                                */
/* ------------------------------------------------------------------------ */

const COMPARE: { row: string; icon: MenuIconName; home: string; spa: string }[] = [
  { row: "Where", icon: "pin", home: "Your villa, hotel or home", spa: "Jl. Pangkung Sari No. 30, Seminyak" },
  {
    row: "Price",
    icon: "tag",
    home: `Treatment + ${idr(fee)} per therapist in the Seminyak area`,
    spa: "Treatment price only",
  },
  { row: "Hours", icon: "clock", home: "Daily, 9am–11pm", spa: "Daily, 9am–11pm" },
  {
    row: "Setup",
    icon: "home",
    home: "Therapist brings fresh linen, oils and everything needed",
    spa: "Private treatment rooms, nothing to arrange",
  },
  {
    row: "Menu",
    icon: "book",
    home: "Most massages and selected beauty treatments",
    spa: "The full menu and every spa package",
  },
  {
    row: "Best for",
    icon: "lotus",
    home: "Couples and groups staying in, the evening you land, late bookings",
    spa: "Combining massage with nails, waxing or hair care in one visit",
  },
];

export function HomeVsSpa() {
  return (
    <section className="oc-section oc-compare pt-130 pb-130">
      <div className="container">
        <Header eyebrow="Two Ways to Book" title="Home Service Compared with Our Seminyak Spa">
          Every home service therapist works from our day spa in Seminyak. Here&apos;s how the two options compare:
        </Header>
        {/*
          Phones (owner, 22 Oct): a switch shows one option at a time, styled like the
          price list's duration switch. Plain radio buttons, so it works without
          script and both columns stay in the HTML. From 768px the table shows both.
        */}
        <div className="oc-compare__box">
          <input type="radio" name="oc-compare" id="oc-compare-home" className="oc-compare__radio" defaultChecked />
          <input type="radio" name="oc-compare" id="oc-compare-spa" className="oc-compare__radio" />
          <div className="oc-compare__switch" role="radiogroup" aria-label="Show">
            <label htmlFor="oc-compare-home">Home service</label>
            <label htmlFor="oc-compare-spa">Our Seminyak spa</label>
          </div>
          <div className="oc-table-wrap oc-table-wrap--scroll">
            <table className="oc-table oc-table--compare">
              <caption className="oc-sr-only">Home service compared with our Seminyak day spa</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="oc-sr-only">Option</span>
                  </th>
                  <th scope="col">Home service</th>
                  <th scope="col">Our Seminyak spa</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r) => (
                  <tr key={r.row}>
                    <th scope="row">
                      <span className="oc-compare__icon" aria-hidden="true">
                        <MenuIcon name={r.icon} />
                      </span>
                      <strong>{r.row}</strong>
                    </th>
                    <td>{r.home}</td>
                    <td>{r.spa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* The fee and travel time by area moved up into S06 (owner, 22 Oct). */}
        <div className="oc-actions">
          <Button href={whatsappChatUrl} filled whatsapp>
            Book home service
          </Button>
          {/* Directions to the spa rather than the day spa page, which is not finished yet (owner, 22 Oct). */}
          <RowButton
            href={business.mapsUrl}
            icon="pin"
            label="Get directions to our spa"
            note="Jl. Pangkung Sari No. 30 · 9am–11pm"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* S08 · Couples, Families & Villa Group Massage                              */
/* ------------------------------------------------------------------------ */

/** A gold line icon in a paper circle, as the row buttons and the menu draw them. */
function CardIcon({ name }: { name: MenuIconName }) {
  return (
    <span className="oc-card__icon" aria-hidden="true">
      <MenuIcon name={name} />
    </span>
  );
}

export function GroupMassage() {
  const couple = idr(priceOf("couple-balinese-massage", "1 Hour · Balinese Massage · 2 Pax"));
  const fourHand = idr(priceOf("four-hand-massage", "1 Hour"));
  return (
    <section className={`oc-section oc-group ${PAPER} pt-130 pb-130`}>
      <div className="container">
        {/* Owner fact C10 ("We can send up to X therapists to one booking.") and C14 ("We also look after
            wedding parties, birthdays and retreats.") would follow the first paragraph. */}
        <Header eyebrow="More Than One Guest" title="Couples, Families & Villa Group Massage">
          We send several therapists at once, so your partner, family or friends are all treated at the same time in
          your villa. Tell us how many guests and which treatments on WhatsApp, and we&apos;ll
          confirm how many therapists we can send for your chosen time.
        </Header>
        <div className="oc-cards">
          <div className="oc-card oc-card--group">
            <CardIcon name="lotus" />
            <p className="oc-card__title">Couple massage at your villa</p>
            <p>
              Side by side, 60 minutes from {couple} for two, plus {idr(fee)} per therapist in the Seminyak area.{" "}
              <Link prefetch={false} href="/seminyak/couple-spa/">
                See couple massage
              </Link>
            </p>
          </div>
          <div className="oc-card oc-card--group">
            <CardIcon name="stones" />
            <p className="oc-card__title">Four hand massage</p>
            <p>
              Two therapists working together, from {fourHand} for 60 minutes, plus {idr(fee)} per therapist in the Seminyak area.
            </p>
          </div>
          <div className="oc-card oc-card--group">
            <CardIcon name="tag" />
            <p className="oc-card__title">Mix your treatments</p>
            <p>One guest has a massage while another has a manicure pedicure or a cream bath.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* S10 · A Licensed Seminyak Spa, Coming to You                               */
/* ------------------------------------------------------------------------ */

/** `plain`: no paper band of its own (the outcall page puts it in one band with the reviews under it). */
export function LicensedSpa({ plain = false }: { plain?: boolean }) {
  return (
    <section className={`oc-section oc-licensed ${plain ? "" : PAPER} pt-130 pb-130`}>
      <div className="container">
        <Header eyebrow="Who's Coming to Your Villa" title="A Licensed Seminyak Spa, Coming to You">
          Spa Bali Moon has run a day spa at Jl. Pangkung Sari No. 30, Seminyak since {business.foundedYear}. Home
          service is delivered by the same therapists who work in our spa, and you&apos;re welcome to visit us before
          you book. We offer professional relaxation and therapeutic massage only.
        </Header>
        {/* Owner fact C11: a fourth chip, "Rated 4.2 from 193 Google reviews", once the owner confirms the current rating. */}
        <ul className="oc-chips">
          <li>Licensed spa since {business.foundedYear}</li>
          <li>Same therapists as our spa</li>
          <li>Fresh linen for every guest</li>
        </ul>
      </div>
    </section>
  );
}
