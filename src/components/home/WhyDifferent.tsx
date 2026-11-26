/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import { ArrowBox, ICON_BOXES } from "@/components/home/icons";
import { LotusIcon } from "@/components/ui/Lotus";
import { home } from "@/data/pages/home";
import { whatsappChatUrl } from "@/lib/whatsapp";

/**
 * Homepage v2 "What Makes Spa Bali Moon Different" — the live service-section
 * blocks as white cards in a 2×2 grid, with the heading and a booking button
 * in a column on their left (live centres the heading over a row of four).
 */
export default function WhyDifferent() {
  const { services, about } = home;
  return (
    <div className="jsx-home homepage-pricing-services-join homepage-services-section">
      <section id="services" className="service-section section__decoration-top section__decoration-bottom bg-sub pt-130 pb-130 v2-why">
        {/* Only the top-right leaf: live's bottom-left spa tray would sit on the heading column. */}
        <div className="shape2">
          <img loading="lazy" decoding="async" className="animation__arryUpDown" src="/images/shape/service-shape-right.webp" alt="" />
        </div>
        <div className="container">
          <div className="v2-why__grid">
            <div className="v2-why__intro">
              <div className="section-header">
                <div className="sub-title look-h4">
                  <LotusIcon className="icon" />
                  {services.subTitle}
                </div>
                <h2 className="title">{services.title}</h2>
                <p className="text">{about.brandMark.text}</p>
              </div>
              <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer" className="btn-two">
                Book on WhatsApp
                <ArrowBox />
              </a>
            </div>
            <div className="v2-why__cards">
              {services.items.map((s, i) => (
                <div key={s.title} className="service-block">
                  <div className="inner-box">
                    <div className="icon-box">{ICON_BOXES[i]}</div>
                    <div className="v2-why__body">
                      <div className="title look-h4">
                        <Link prefetch={false} href={s.href}>
                          {s.title}
                        </Link>
                      </div>
                      <p className="text">{s.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
