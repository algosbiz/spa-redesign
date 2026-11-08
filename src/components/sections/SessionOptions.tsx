/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import type { ReactNode } from "react";
import LocalName from "@/components/ui/LocalName";
import { displayPrice } from "@/lib/price";

type Session = { duration: string; price: string; details?: string[]; icon?: string };

export type SessionOptionsProps = {
  sessions?: Session[];
  /** Several titled rows of sessions instead of one. */
  groups?: { title: string | null; sessions: Session[] }[];
  subTitle?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  icon?: string;
  layout?: string;
  className?: string;
};

const DEFAULT_SESSIONS: Session[] = [
  {
    duration: "1 Hour",
    price: "IDR 159.000",
    details: ["Full-body relaxation", "Everyday muscle tension", "Guests with limited time"],
  },
  {
    duration: "1.5 Hour",
    price: "IDR 239.000",
    details: ["More complete full-body care", "Extra focus on tense areas", "Guests wanting deeper relaxation"],
  },
  {
    duration: "2 Hour",
    price: "IDR 330.000",
    details: ["Extended full-body treatment", "More time for problem areas", "Guests seeking longer relaxation"],
  },
];
/**
 * Session cards above a treatment's packages — duration, price and what the
 * session suits (the live "balinese-session-options").
 */
export default function SessionOptions({
  sessions = DEFAULT_SESSIONS,
  groups,
  subTitle = "Flexible Sessions",
  title = "Balinese Massage Session",
  text = "Pick a session that fits your schedule and how much time you want to spend relaxing. Longer sessions give our therapists more time to work across the body and focus on areas that need extra attention.",
  icon = "/images/spa/Balinese.svg",
  layout = "cards",
  className = "",
}: SessionOptionsProps) {
  const rows = groups && groups.length ? groups : [{ title: null, sessions }];
  return (
    <div className={"jsx-treatment-layout " + `balinese-session-options${className ? ` ${className}` : ""}`}>
      <div className="jsx-treatment-layout session-options__header">
        {subTitle !== "" && (
          <p data-wow-delay="00ms" data-wow-duration="1500ms" className="jsx-treatment-layout sub-title wow fadeInUp">
            <span aria-hidden="true" className="jsx-treatment-layout session-options__logo-mark">
              <img
                loading="lazy"
                decoding="async"
                src="/images/logo/SMBtitle.svg"
                alt=""
                className="jsx-treatment-layout"
              />
            </span>
            {subTitle}
          </p>
        )}
        <h2 data-wow-delay="200ms" data-wow-duration="1500ms" className="jsx-treatment-layout title wow fadeInUp">
          {title}
        </h2>
        <p data-wow-delay="400ms" data-wow-duration="1500ms" className="jsx-treatment-layout text wow fadeInUp">
          {text}
        </p>
      </div>
      {"compact" === layout ? (
        <div className="jsx-treatment-layout row g-4 align-items-stretch justify-content-center">
          {sessions.map((e) => (
            <div className="jsx-treatment-layout col-lg-3 col-md-4 col-6" key={`${e.duration}-`.concat(e.price)}>
              <div className="jsx-treatment-layout session-option-chip">
                <span aria-hidden="true" className="jsx-treatment-layout session-option-chip__icon">
                  <img loading="lazy" decoding="async" src={e.icon || icon} alt="" className="jsx-treatment-layout" />
                </span>
                <span className="jsx-treatment-layout session-option-chip__name">{e.duration}</span>
                <span className="jsx-treatment-layout session-option-chip__price">{displayPrice(e.price)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        rows.map((e, i) => {
          // Under a group title (h3) the durations are h4, with the h3 look.
          const Duration = e.title ? "h4" : "h3";
          return (
            <div className="jsx-treatment-layout session-option-group" key={e.title || `session-group-${i}`}>
              {e.title ? (
                <h3 data-wow-duration="1500ms" className="jsx-treatment-layout session-option-group__title wow fadeInUp">
                  {e.title}
                  <LocalName englishName={e.title} />
                </h3>
              ) : null}
              <div className="jsx-treatment-layout row g-4 align-items-stretch justify-content-center">
                {e.sessions.map((e) => (
                  <div
                    className="jsx-treatment-layout col-lg-4 col-md-6 service-block-two"
                    key={`${e.duration}-`.concat(e.price)}
                  >
                    <div className="jsx-treatment-layout inner-box session-option-card">
                      <div aria-hidden="true" className="jsx-treatment-layout session-option-shape">
                        <img
                          loading="lazy"
                          decoding="async"
                          src="/images/pricing/shape.png"
                          alt=""
                          className="jsx-treatment-layout"
                        />
                      </div>
                      <div className="jsx-treatment-layout image-box">
                        <div className="jsx-treatment-layout icon">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={e.icon || icon}
                            alt=""
                            aria-hidden="true"
                            className="jsx-treatment-layout service-treatment-icon"
                          />
                        </div>
                      </div>
                      <div className="jsx-treatment-layout content">
                        <p className="jsx-treatment-layout session-option-price">{displayPrice(e.price)}</p>
                        <Duration
                          className={`jsx-treatment-layout title session-option-duration${Duration === "h4" ? " look-h3" : ""}`}
                        >
                          {e.duration}
                        </Duration>
                        {e.details && e.details.length ? (
                          <ul className="jsx-treatment-layout session-option-list">
                            {e.details.map((e) => (
                              <li className="jsx-treatment-layout" key={e}>
                                {e}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
