"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { useEffect, useRef, type ReactNode } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LotusPaths25 } from "@/components/ui/Lotus";
import RowButton from "@/components/ui/RowButton";
import { glassShade } from "@/data/bannerGlass";
import { business } from "@/data/business";
import type { PriceTiles } from "@/lib/priceTiles";
import { whatsappChatUrl } from "@/lib/whatsapp";

export type PageBannerProps = {
  subTitle?: string;
  /** First words of the heading, set apart in a span. */
  titleSpan?: string;
  title?: string;
  text?: string;
  openingText?: string;
  image: string;
  /**
   * Where the photo's subject is, as a CSS background-position ("38% 50%"),
   * for screens from 768px where the banner shows only part of the width.
   * Phones get the `-sm` file, already cut around the subject.
   */
  imagePosition?: string;
  shapeImage?: string;
  /**
   * Buttons in place of the one "Book on WhatsApp" row button with the
   * number, which every banner has otherwise (owner, 22 Oct: tried on the
   * cellulite page, then "all heros can have the new hero button"; it
   * replaced live's "Book Now").
   */
  actions?: ReactNode;
  /**
   * Small badges under the buttons: the opening hours on every banner
   * (owner, 22 Oct, as on the treatment pages); the outcall page adds since
   * 2009, what is included and the fee.
   */
  chips?: string[];
  /**
   * The session lengths and prices under the title, on a glass strip (owner,
   * 19 Oct: "like the homepage, where the important part is in the banner").
   * Read from the page's quick facts by the treatment page template.
   */
  prices?: PriceTiles;
  /** Written after each price: "/ pax", or "/ 2 pax" on the couples page. */
  priceUnit?: string;
  /**
   * Phones only (owner, 22 Oct, tried on the outcall page first): the whole
   * landscape photo at this path is shown above the text, uncropped, instead
   * of the `-sm` cut behind it; the text sits on a blurred, darkened copy of
   * the same photo. A ~828px-wide copy of `image` (styles: outcall.css, 19),
   * darkened as much as src/data/bannerGlass.ts says for it.
   */
  mobilePhoto?: string;
  /**
   * With `mobilePhoto`: the photo on top fills a taller box, cropped at its
   * sides around `imagePosition`, from the full-size file on sharp screens;
   * the glass behind the text still comes from `mobilePhoto` (24 Oct: on the
   * treatment pages' close-ups the whole landscape photo was a thin strip, a
   * third of it under the header).
   */
  mobileTall?: boolean;
};

/** How wide the photo is drawn in the taller box (outcall.css, 19): 72vw tall, 1920x850. */
const TALL_SIZES = "163vw";

const S = "jsx-page-banner";

/**
 * Full-width photo banner at the top of inner pages — the live
 * "banner-two-area". The photo is a CSS variable so phones get the `-sm`
 * file; both are preloaded with media queries, as live.
 */
export default function PageBanner({
  subTitle = "Rejuvenate You Today",
  titleSpan = "Indulge in",
  title = "Pure Tranquility",
  text = "",
  openingText = "",
  image,
  imagePosition,
  shapeImage = "/images/shape/banner-two-shape.png",
  actions = (
    <RowButton
      href={whatsappChatUrl}
      icon="whatsapp"
      label="Book on WhatsApp"
      note={business.phoneDisplay}
      className="row-btn--glass"
    />
  ),
  chips = ["Open daily 9am–11pm"],
  prices,
  priceUnit,
  mobilePhoto,
  mobileTall = false,
}: PageBannerProps) {
  const small = mobilePhoto ?? image.replace(/(\.[a-z0-9]+)$/i, "-sm$1");
  const tall = !!mobilePhoto && mobileTall;
  // The `-wide-sm` copy for 1x phones (it is loaded for the glass anyway), the full photo for sharper ones.
  const tallSrcSet = tall && mobilePhoto !== image ? `${mobilePhoto} 828w, ${image} 1920w` : undefined;
  const shade = mobilePhoto ? glassShade[mobilePhoto] : undefined;

  // Swiper adds `swiper-backface-hidden` (translateZ(0) on the slide) straight
  // to the DOM while it initialises, then React re-renders the class list it
  // was told about and drops it. Live ends with the class last in the list;
  // running Swiper's own check once more after that re-render does the same.
  const swiperRef = useRef<SwiperInstance | null>(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const swiper = swiperRef.current;
      if (swiper && !swiper.destroyed) swiper.updateSlides();
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={small}
        {...(tallSrcSet && { imageSrcSet: tallSrcSet, imageSizes: TALL_SIZES })}
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <link rel="preload" as="image" href={image} media="(min-width: 768px)" fetchPriority="high" />
      <section
        className={`${S} banner-two-area section__decoration-bottom${mobilePhoto ? " banner-two-area--photo-top" : ""}${
          tall ? " banner-two-area--photo-tall" : ""
        }`}
      >
        <div className={`${S} banner-two__shape`}>
          <img src={shapeImage} alt="" aria-hidden="true" fetchPriority="low" decoding="async" className={S} />
        </div>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          loop={false}
          allowTouchMove={false}
          pagination={{ clickable: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="swiper  banner-two__slider"
        >
          <SwiperSlide className="swiper-slide">
            <div
              style={
                {
                  "--hero-lg": `url(${image})`,
                  "--hero-sm": `url(${small})`,
                  ...(imagePosition && { "--hero-pos": imagePosition }),
                  ...(shade !== undefined && { "--glass-shade": shade }),
                } as React.CSSProperties
              }
              className={`${S} slide-bg`}
            />
            {mobilePhoto && (
              <div className={`${S} banner-two__photo`}>
                <img
                  src={mobilePhoto}
                  {...(tallSrcSet && { srcSet: tallSrcSet, sizes: TALL_SIZES })}
                  alt=""
                  width={828}
                  height={367}
                  fetchPriority="high"
                  decoding="async"
                  className={S}
                  {...(tall && imagePosition && { style: { objectPosition: imagePosition } })}
                />
              </div>
            )}
            <div className={`${S} container`}>
              <div className={`${S}  banner-two__content`}>
                {subTitle !== "" && (
                  <p data-animation="fadeInUp" data-delay=".3s" className={`${S} sub-title`}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={S}>
                      <g clipPath="url(#clip0_1_451)" className={S}>
                        <LotusPaths25 fill="white" className={S} />
                      </g>
                    </svg>
                    {subTitle}
                  </p>
                )}
                <h1 data-animation="fadeInUp" data-delay=".5s" className={`${S} title`}>
                  <span className={S}>{titleSpan}</span> {title}
                </h1>
                {prices && (
                  <div className={`${S} banner-prices`}>
                    <ul className={`${S} banner-prices__list`}>
                      {prices.tiles.map((tile) => (
                        <li key={tile.length} className={`${S} banner-prices__item`}>
                          <span className={`${S} banner-prices__length`}>
                            {tile.length}
                            {priceUnit ? <span className={`${S} banner-prices__unit`}> {priceUnit.toUpperCase()}</span> : null}
                          </span>{" "}
                          <span className={`${S} banner-prices__amount`}>
                            {tile.was ? (
                              <s className={`${S} banner-prices__was`}>
                                <span className="sr-only">Normally </span>IDR {tile.was}
                              </s>
                            ) : null}
                            <span className={`${S} banner-prices__cur`}>IDR</span> {tile.amount}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {/* The caption ("Per person", "Balinese, for two") is no longer shown: "/ pax" and "/ 2 pax" say it (owner, 21 Oct). */}
                  </div>
                )}
                {/* "IDR" never ends a line without its amount. */}
                {text && <p className={`${S} text`}>{text.replace(/IDR /g, "IDR ")}</p>}
                <div className={`${S} banner-two__actions mt-50`}>{actions}</div>
                {chips && chips.length > 0 && (
                  <ul className={`${S} banner-chips`}>
                    {chips.map((chip) => (
                      <li key={chip} className={`${S} banner-chips__item`}>
                        {chip}
                      </li>
                    ))}
                  </ul>
                )}
                {openingText && <p className={`${S} opening-times`}>{openingText}</p>}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`${S} banner-two__pagination`} />
      </section>
    </>
  );
}
