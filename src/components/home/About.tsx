/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import { LotusIcon } from "@/components/ui/Lotus";
import { home } from "@/data/pages/home";

/** The gold tick in front of each reason. */
function Tick() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-about">
      <path d="M11.54 22.16a.5.5 0 0 1-.36-.16L1.67 11.7a.48.48 0 0 1 .35-.8H6.6a.5.5 0 0 1 .36.16l3.18 3.66c.35-.73 1.01-1.96 2.18-3.45 1.73-2.2 4.94-5.44 10.43-8.37a.48.48 0 0 1 .53.8c-.02.02-2.14 1.69-4.58 4.74A35 35 0 0 0 12 21.8a.5.5 0 0 1-.46.37" fill="#A78627" className="jsx-about" />
    </svg>
  );
}

/**
 * "Why Spa Bali Moon Is Part of the Bali Experience" — the live
 * about-section-three inside its paper-textured band. `subTitle` replaces
 * live's kicker ("Beyond Relaxation"; the homepage has "About Us").
 */
export default function About({ subTitle }: { subTitle?: string } = {}) {
  const { about } = home;
  const lists = [about.features.slice(0, 3), about.features.slice(3)];
  return (
    <div className="jsx-home homepage-about-paper-section section__decoration-top section__decoration-bottom bg-sub">
      <section id="about" className="jsx-about about-section-three pt-130 pb-130 paralax__animation">
        <div className="jsx-about shape">
          <img loading="lazy" decoding="async" src="/images/shape/about-three-shape.png" alt="image" className="jsx-about animation__floatBob" />
        </div>
        <div className="jsx-about container">
          <div className="jsx-about row g-0 align-items-center">
            <div className="jsx-about col-xl-6 image-column">
              <div className="jsx-about inner-column">
                <div className="jsx-about image">
                  <img loading="lazy" decoding="async" src="/images/home/homepage-3.webp" alt="Spa massage treatment" className="jsx-about image1" />
                </div>
                <img loading="lazy" decoding="async" src="/images/home/homepage-4.webp" alt="Spa treatment room" className="jsx-about image2" />
                <div className="info">
                  {/* The lotus in a turning ring of words (owner, 23 Oct: "much cooler,
                      should have an effect"), without the white card. */}
                  <div className="about-brand-mark">
                    <span className="about-brand-mark__seal" aria-hidden="true">
                      <svg className="about-brand-mark__ring" viewBox="0 0 100 100">
                        <defs>
                          <path id="about-brand-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                        </defs>
                        <text>
                          <textPath href="#about-brand-circle" textLength="236" lengthAdjust="spacing">
                            SEMINYAK · BALI · SINCE 2009 ·{" "}
                          </textPath>
                        </text>
                      </svg>
                      <img
                        className="about-brand-mark__logo"
                        src="/images/logo/sbm.webp"
                        alt=""
                        width="56"
                        height="44"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="about-brand-mark__name">{about.brandMark.name}</span>
                    <span className="about-brand-mark__meta">{about.brandMark.meta}</span>
                    <p className="about-brand-mark__text">{about.brandMark.text}</p>
                  </div>
                </div>
                <div className="jsx-about shape-one">
                  <span aria-hidden="true" className="jsx-about about-leaf-gold animation__arryUpDown" />
                </div>
                <div className="jsx-about shape-two">
                  <img loading="lazy" decoding="async" data-depth="0.03" src="/images/about/shape2.png" alt="image" className="jsx-about" />
                </div>
                <div className="jsx-about shape-three">
                  <img loading="lazy" decoding="async" src="/images/about/shape3.png" alt="image" className="jsx-about animation__arryLeftRight" />
                </div>
              </div>
            </div>
            <div className="jsx-about col-xl-6 content-column">
              <div className="jsx-about inner-column">
                <div className="jsx-about section-header">
                  <div data-wow-delay="00ms" data-wow-duration="1500ms" className="jsx-about sub-title look-h4 wow fadeInUp">
                    <LotusIcon className="icon" scope="jsx-about" />
                    {subTitle ?? about.subTitle}
                  </div>
                  <h2 data-wow-delay="200ms" data-wow-duration="1500ms" className="jsx-about title wow fadeInUp">
                    {about.title}
                  </h2>
                  <p data-wow-delay="400ms" data-wow-duration="1500ms" className="jsx-about text wow fadeInUp">
                    {about.text}
                  </p>
                </div>
                <div data-wow-delay="200ms" data-wow-duration="1500ms" className="jsx-about list mt-25 wow fadeInDown">
                  {lists.map((list, i) => (
                    <ul key={i} className="jsx-about">
                      {list.map((feature) => (
                        <li key={feature} className="jsx-about">
                          <Tick />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
                <Link
                  prefetch={false}
                  className="btn-two mt-40 wow fadeInDown"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                  href={about.cta.href}
                >
                  {about.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
