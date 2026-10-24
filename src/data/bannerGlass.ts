/**
 * How dark the glass behind a phone banner's text is, per `mobilePhoto`
 * (PageBanner; outcall.css, 19): the final alpha of the dark gradient over
 * the blurred photo. One gradient for all left the spa-room photos dark and
 * the light ones too pale for white text (24 Oct: "some pages' glass is still
 * dark"); these bring every banner to about the homepage glass's brightness,
 * with white text at 4.5:1 or more. Worked out by
 * tools/banners/glass-shade.mjs: run it again when a banner photo is added or
 * changed. A photo not listed (one uploaded in /admin/) gets the CSS default.
 */
export const glassShade: Record<string, number> = {
  "/images/banners/anti-cellulite-massage-wide-sm.webp": 0.62,
  "/images/banners/balinese-massage-wide-sm.webp": 0.46,
  "/images/banners/body-scrub-wide-sm.webp": 0.36,
  "/images/banners/coconut-oil-massage-wide-sm.webp": 0.36,
  "/images/banners/contact-wide-sm.webp": 0.38,
  "/images/banners/couple-spa-wide-sm.webp": 0.44,
  "/images/banners/creambath-wide-sm.webp": 0.45,
  "/images/banners/deep-tissue-massage-wide-sm.webp": 0.42,
  "/images/banners/ear-candle-wide-sm.webp": 0.36,
  "/images/banners/facial-wide-sm.webp": 0.37,
  "/images/banners/foot-massage-wide-sm.webp": 0.62,
  "/images/banners/foot-reflexology-wide-sm.webp": 0.48,
  "/images/banners/hair-braiding-wide-sm.webp": 0.2,
  "/images/banners/head-massage-wide-sm.webp": 0.31,
  "/images/banners/homeservice-hero-wide-sm.webp": 0.36,
  "/images/banners/hot-stone-massage-wide-sm.webp": 0.57,
  "/images/banners/lymphatic-drainage-massage-wide-sm.webp": 0.66,
  "/images/banners/manicure-pedicure-wide-sm.webp": 0.64,
  "/images/banners/massage-kuta-wide-sm.webp": 0.52,
  "/images/banners/nail-spa-wide-sm.webp": 0.41,
  "/images/banners/pricelist-wide-sm.webp": 0.32,
  "/images/banners/reservation-wide-sm.webp": 0.59,
  "/images/banners/shiatsu-massage-wide-sm.webp": 0.48,
  "/images/banners/sport-massage-wide-sm.webp": 0.41,
  "/images/banners/sunburn-massage-wide-sm.webp": 0.5,
  "/images/banners/thai-massage-wide-sm.webp": 0.54,
  "/images/banners/traditional-massage-wide-sm.webp": 0.59,
  "/images/banners/villa-hotel-massage-wide-sm.webp": 0.64,
  "/images/banners/waxing-salon-wide-sm.webp": 0.51,
  "/images/services/dayspaseminyak/dayspa-1-wide-sm.webp": 0.59,
};
