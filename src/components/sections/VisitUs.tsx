/* eslint-disable @next/next/no-img-element -- the site serves its photos as plain <img> */
import Link from "next/link";
import type { ReactNode } from "react";
import { MenuIcon, type MenuIconName } from "@/components/layout/MenuIcons";
import SectionShapes from "@/components/ui/SectionShapes";
import { business } from "@/data/business";
import { getI18n } from "@/i18n/server";
import { whatsappChatUrl } from "@/lib/whatsapp";

/** "IDR 75.000": the price, with a space that never breaks after "IDR". */
const fee = `IDR ${String(business.homeService.feePerTherapist).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

const directions = (
  <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
    Get directions
  </a>
);

const villaLinks = (
  <>
    <Link prefetch={false} href="/villa-hotel-massage/">
      villa &amp; hotel massage in Seminyak
    </Link>
    , or{" "}
    <Link prefetch={false} href="/outcall-home-service-massage/">
      home service elsewhere in Bali
    </Link>
  </>
);

/** A fact's link in the columns look, drawn as a small button. `plain`: no arrow (the phone number). */
type FactLink = { href: string; label: ReactNode; external?: boolean; plain?: boolean };

/**
 * `treatment` is how the heading names it: "Book {treatment} in
 * Seminyak", e.g. "a Balinese Massage", "a Facial"; `inline` how the
 * sentence under it does, in lower case ("a facial"; defaults to `treatment`).
 *
 * "Visit us" on every treatment page and the About page (AEO roadmap R17 and
 * R40, 17 Oct): the address, the hours, in the spa or at your villa, the home
 * service fee and the booking line, in the page itself rather than only in
 * the header and footer, with links to the villa, home service and price
 * pages. Every fact comes from src/data/business.ts, so the pages never
 * disagree. Added by the treatment page template, not the page's tree: the
 * admin does not need to keep it.
 *
 * The looks follow luxury spa sites (Four Seasons Sayan, Belmond): the facts
 * as label and value rows on gold hairlines, one gold button and a text link.
 *  split  a spa photo across half the width, beside a warm paper panel
 *         (default, tried 17 Oct)
 *  light  the heading centred on white (17 Oct; a dark band was turned down)
 * A frangipani and a leaf hang over the card's corners, as on the theme's
 * other sections (owner, 17 Oct).
 *
 * `look="columns"` (all treatment pages until 4 Nov; owner, 19 Oct: the plain rows said
 * too much, white tiles looked templated, and a card over the photo hid the
 * therapist; of three tries the owner kept this): no photo, a paper-coloured
 * panel with the heading and the answer centred, then the four facts in
 * columns between gold hairlines, each under its gold icon in a white
 * circle (address, hours, booking, villa fee); the price list link goes
 * beside the button, where "Get directions" was (the address keeps that
 * link). Two columns on tablets, one on phones.
 *
 * `look="photo"` (About page, 19 Oct): the same facts and buttons, two by
 * two, beside the split look's photo, so the therapist stays in view.
 *
 * `look="card"` (every treatment page, the homepage and About since 4 Nov;
 * owner: the columns look "a bit jumbly", and "the phone number should be a
 * button"): the paper card with the heading and the answer centred, three
 * facts in even columns between gold hairlines (address, hours, the villa fee
 * with its home service link), then two buttons: the WhatsApp number itself,
 * filled gold, and "Full Price List". On phones the facts are rows and the
 * buttons full width. It replaced `look="columns"`, whose layers of fixes
 * (21–28 Oct) made the facts start at different heights.
 */
export default async function VisitUs({
  treatment,
  inline = treatment,
  title,
  homeService = true,
  variant = "split",
  photo = "/images/services/dayspaseminyak/dayspa-2.webp",
  look = "rows",
  leftShapeSrc = "/images/shape/testimonial-two-shape-left.png",
  rightShapeSrc = "/images/shape/leaf/2a.png",
  note,
}: {
  /** A sentence after the lead (the homepage: the spa's showers and Wi-Fi). */
  note?: string;
  treatment: string;
  inline?: string;
  /** In place of "Book … in Seminyak" (the About page). */
  title?: string;
  homeService?: boolean;
  variant?: "split" | "light";
  /** The split look's photo; the About page, which shows the default one higher up, passes another. */
  photo?: string;
  /** How the facts are set: label and value rows, the card without the photo, or the facts beside the photo (see above). */
  look?: "rows" | "card" | "photo";
  /** Corner decorations (components/ui/SectionShapes.tsx); `null` leaves a side empty. */
  leftShapeSrc?: string | null;
  rightShapeSrc?: string | null;
}) {
  const { t } = await getI18n();
  const rows: { label: string; body: ReactNode }[] = [
    {
      label: "Address",
      body: (
        <>
          {business.address.full}. {directions}
        </>
      ),
    },
    { label: "Open daily", body: "9am–11pm" },
    ...(homeService
      ? [
          {
            label: "In your villa",
            body: (
              <>
                +{fee} per therapist in the Seminyak area: {villaLinks}
              </>
            ),
          },
        ]
      : []),
    {
      label: "Booking",
      body: (
        <>
          WhatsApp{" "}
          <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer" style={{ whiteSpace: "nowrap" }}>
            {business.phoneDisplay}
          </a>
        </>
      ),
    },
    {
      label: "Prices",
      body: (
        <Link prefetch={false} href="/seminyak/">
          Full Spa Bali Moon price list
        </Link>
      ),
    },
  ];
  const card = look === "card";
  const tiles = look === "photo";
  // The photo look: each fact under its icon, its links as small buttons
  // (owner, 19 Oct: buttons, not underlined links), the price list beside
  // "Book on WhatsApp".
  const facts: { label: string; icon: MenuIconName; text: ReactNode; links?: FactLink[] }[] = [
    {
      label: "Address",
      icon: "pin",
      text: business.address.full,
      links: [{ href: business.mapsUrl, label: "Get directions", external: true }],
    },
    { label: "Open daily", icon: "clock", text: "9am–11pm" },
    {
      label: "Booking",
      icon: "chat",
      text: "WhatsApp",
      links: [
        {
          href: whatsappChatUrl,
          label: (
            <>
              <i className="fa-brands fa-whatsapp" aria-hidden="true" /> {business.phoneDisplay}
            </>
          ),
          external: true,
          plain: true,
        },
      ],
    },
    ...(homeService
      ? [
          {
            label: "In your villa",
            icon: "home" as const,
            text: `+${fee} per therapist (Seminyak area)`,
            links: [
              { href: "/villa-hotel-massage/", label: "Villa & hotel massage" },
              { href: "/outcall-home-service-massage/", label: "Home service in Bali" },
            ],
          },
        ]
      : []),
  ];
  // The card look: three facts (the booking number is the card's button), the
  // villa fee with one gold link under it.
  const cardFacts: { label: string; icon: MenuIconName; text: ReactNode; link?: { href: string; label: string } }[] = [
    { label: "Address", icon: "pin", text: business.address.full },
    { label: "Open daily", icon: "clock", text: "9am–11pm" },
    ...(homeService
      ? [
          {
            label: "At your villa",
            icon: "home" as const,
            text: `+${fee} per therapist in the Seminyak area`,
            link: { href: "/outcall-home-service-massage/", label: "Home service in Bali" },
          },
        ]
      : []),
  ];

  const content = (
    <>
      <p className="visit-us__kicker">Visit Spa Bali Moon</p>
      <h2 className="title">{title ?? t("Book {name} in Seminyak", { name: treatment })}</h2>
      <p className="visit-us__lead">
        You can book {inline} at Spa Bali Moon, {business.address.short}, open daily from 9am to 11pm
        {homeService ? (
          // "The same at the spa and at your villa", then a fee, read as a contradiction (4 Nov).
          <>, or have it at your villa or hotel for the same treatment price plus {fee} per therapist in the Seminyak area.</>
        ) : (
          "."
        )}
        {note && <> {note}</>}
      </p>
      {card ? (
        <dl className="visit-us__facts">
          {cardFacts.map((fact) => (
            <div key={fact.label} className="visit-us__fact">
              <dt>
                <MenuIcon name={fact.icon} className="visit-us__fact-icon" />
                <span>{fact.label}</span>
              </dt>
              <dd>
                {fact.text}
                {fact.link ? (
                  <Link prefetch={false} href={fact.link.href} className="visit-us__fact-link">
                    {fact.link.label} <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      ) : tiles ? (
        <dl className="visit-us__tiles">
          {facts.map((fact) => (
            <div key={fact.label} className="visit-us__tile">
              <dt>
                <MenuIcon name={fact.icon} className="visit-us__tile-icon" />
                {fact.label}
              </dt>
              <dd>
                {fact.text}
                {fact.links ? (
                  <span className="visit-us__pills">
                    {fact.links.map((link) => {
                      const label = (
                        <>
                          {link.label}
                          {link.plain ? null : <span aria-hidden="true"> →</span>}
                        </>
                      );
                      return link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="visit-us__pill"
                        >
                          {label}
                        </a>
                      ) : (
                        <Link key={link.href} prefetch={false} href={link.href} className="visit-us__pill">
                          {label}
                        </Link>
                      );
                    })}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <dl className="visit-us__rows">
          {rows.map((r) => (
            <div key={r.label} className="visit-us__line">
              <dt>{r.label}</dt>
              <dd>{r.body}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className="visit-us__actions">
        {/* The card look: the number itself is the button (owner, 4 Nov; a separate "Book on WhatsApp"
            button was taken out of the columns look on 21 and 28 Oct). */}
        {card ? (
          <a
            href={whatsappChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-us__cta"
            aria-label={`Book on WhatsApp: ${business.phoneDisplay}`}
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        ) : (
          <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer" className="visit-us__btn">
            Book on WhatsApp
          </a>
        )}
        {card ? (
          <Link prefetch={false} href="/seminyak/" className="visit-us__cta visit-us__cta--outline">
            Full Price List
          </Link>
        ) : tiles ? (
          <Link prefetch={false} href="/seminyak/" className="visit-us__btn visit-us__btn--outline">
            Full price list
          </Link>
        ) : (
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="visit-us__more">
            Get directions <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </>
  );

  if (variant === "light") {
    return (
      <section className="visit-us">
        <SectionShapes left={leftShapeSrc} right={rightShapeSrc} />
        <div className="container">
          <div className="visit-us__band">{content}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={`visit-us visit-us--split${look === "rows" ? "" : ` visit-us--${look}`}`}>
      <SectionShapes left={leftShapeSrc} right={rightShapeSrc} />
      <div className="visit-us__split">
        {card ? null : (
          <div className="visit-us__split-photo">
            <img
              loading="lazy"
              decoding="async"
              src={photo}
              alt={`A massage at ${business.name} in Seminyak`}
              width={578}
              height={601}
            />
          </div>
        )}
        <div className="visit-us__split-body">{content}</div>
      </div>
    </section>
  );
}
