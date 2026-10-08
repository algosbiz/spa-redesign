/**
 * REDIRECTS FROM OLD URLS
 * Source: migration/url-map.md
 *
 * `liveRedirects`     = redirects the old website ALREADY serves (url-map section B, plus the
 *                       rules of the live project's next.config.js, checked 2 October 2026).
 *                       They are active: next.config.ts loads this list.
 * `proposedRedirects` = ideas that still need the owner's approval (url-map sections C and D).
 *                       They are NOT active. To approve one, move it into `liveRedirects`.
 *
 * All redirects answer HTTP 301, as the live site does.
 * Write every path with a trailing slash, except file names ending in ".html" / ".xml".
 * Next uses the first rule that matches, so keep a specific rule above a ":slug" pattern.
 */

export type OldUrlRedirect = {
  /** Old address on spabalimoon.com */
  from: string;
  /** New address on this website */
  to: string;
};

export const liveRedirects: OldUrlRedirect[] = [
  // Old price-list pages
  { from: "/cheap-massage-seminyak-bali-price-list.html", to: "/seminyak/" },
  { from: "/cheap-massage-seminyak-bali-price-list/", to: "/seminyak/" },
  { from: "/spa-massage-seminyak-bali-price-list/", to: "/seminyak/" },

  // Old /spa-treatments/ section
  { from: "/spa-treatments/", to: "/seminyak/" },
  { from: "/spa-treatments/foot-reflexology-seminyak-bali/", to: "/seminyak/foot-reflexology/" },
  { from: "/spa-treatments/reflexology-bali/", to: "/seminyak/foot-reflexology/" },
  { from: "/spa-treatments/waxing-bali/", to: "/seminyak/waxing-salon/" },
  { from: "/spa-treatments/couple-spa-bali/", to: "/seminyak/couple-spa/" },
  { from: "/spa-treatments/ear-candle-bali/", to: "/seminyak/ear-wax-removal/" },
  { from: "/spa-treatments/lymphatic-drainage-massage-bali/", to: "/seminyak/lymphatic-drainage-massage/" },
  { from: "/spa-treatments/facial-seminyak/", to: "/seminyak/facial/" },
  { from: "/spa-treatments/body-scrub-bali/", to: "/seminyak/body-scrub/" },
  { from: "/spa-treatments/nails-seminyak/", to: "/seminyak/nail-spa/" },
  { from: "/spa-treatments/creambath-seminyak/", to: "/seminyak/creambath/" },
  { from: "/spa-treatments/manicure-pedicure-seminyak/", to: "/seminyak/manicure-pedicure/" },
  { from: "/spa-treatments/sport-massage-bali/", to: "/seminyak/sport-massage/" },
  { from: "/spa-treatments/sunburn-massage-treatment-bali/", to: "/seminyak/sunburn-massage/" },
  { from: "/spa-treatments/thai-massage-bali/", to: "/seminyak/thai-massage/" },
  { from: "/spa-treatments/anti-cellulite-massage-bali/", to: "/seminyak/anti-cellulite-massage/" },
  { from: "/spa-treatments/hot-stone-massage-bali/", to: "/seminyak/hot-stone-massage/" },
  { from: "/spa-treatments/coconut-oil-massage/", to: "/seminyak/coconut-oil-massage/" },
  { from: "/spa-treatments/deep-tissue-massage-bali/", to: "/seminyak/deep-tissue-massage/" },
  { from: "/spa-treatments/hair-braiding-bali/", to: "/seminyak/hair-braiding/" },
  { from: "/spa-treatments/head-massage-bali/", to: "/seminyak/head-massage/" },
  { from: "/spa-treatments/shiatsu-massage-bali/", to: "/seminyak/shiatsu-massage/" },

  // Other old pages
  { from: "/massage-bali/", to: "/" },
  { from: "/massage-seminyak/", to: "/seminyak/" },
  { from: "/day-spa-seminyak/", to: "/seminyak/day-spa/" },
  { from: "/villa-hotel-massage-seminyak/", to: "/villa-hotel-massage/" },
  { from: "/spa-packages/", to: "/seminyak/" },
  { from: "/pricing/", to: "/seminyak/" },
  { from: "/page-services/", to: "/seminyak/" },
  { from: "/team/", to: "/seminyak/" },
  { from: "/blog/", to: "/guide/" },
  { from: "/home-service/", to: "/outcall-home-service-massage/" },

  // Section G: the live site redirects /sitemap_index.xml (301, checked 29 September 2026)
  { from: "/sitemap_index.xml", to: "/sitemap.xml" },

  // --- Rules of the live project's next.config.js, missing above (checked 2 October 2026) ---

  // Old Yoast sitemaps
  { from: "/page-sitemap.xml", to: "/sitemap.xml" },
  { from: "/post-sitemap.xml", to: "/sitemap.xml" },

  // Treatment pages of the first Next.js site, before they moved under /seminyak/
  { from: "/bali-moon-facial/", to: "/seminyak/facial/" },
  { from: "/balinese-massage/", to: "/seminyak/balinese-massage/" },
  { from: "/body-scrub/", to: "/seminyak/body-scrub/" },
  { from: "/cellulite-massage/", to: "/seminyak/anti-cellulite-massage/" },
  { from: "/couple-massage/", to: "/seminyak/couple-spa/" },
  { from: "/deep-tissue-massage/", to: "/seminyak/deep-tissue-massage/" },
  { from: "/ear-candle/", to: "/seminyak/ear-wax-removal/" },
  { from: "/foot-massage/", to: "/seminyak/foot-massage/" },
  { from: "/foot-reflexology/", to: "/seminyak/foot-reflexology/" },
  { from: "/hair-braiding/", to: "/seminyak/hair-braiding/" },
  { from: "/hair-creambath/", to: "/seminyak/creambath/" },
  { from: "/head-massage/", to: "/seminyak/head-massage/" },
  { from: "/hot-stone-massage/", to: "/seminyak/hot-stone-massage/" },
  { from: "/lymphatic-massage/", to: "/seminyak/lymphatic-drainage-massage/" },
  { from: "/manicure-pedicure/", to: "/seminyak/manicure-pedicure/" },
  { from: "/nail-art/", to: "/seminyak/nail-spa/" },
  { from: "/shiatsu-massage/", to: "/seminyak/shiatsu-massage/" },
  { from: "/sports-massage/", to: "/seminyak/sport-massage/" },
  { from: "/sunburn-treatment/", to: "/seminyak/sunburn-massage/" },
  { from: "/thai-massage/", to: "/seminyak/thai-massage/" },
  { from: "/traditional-massage/", to: "/seminyak/traditional-massage/" },
  { from: "/virgin-coconut-oil-massage/", to: "/seminyak/coconut-oil-massage/" },
  { from: "/waxing/", to: "/seminyak/waxing-salon/" },

  // Old slugs under /seminyak/
  { from: "/seminyak/bali-moon-facial/", to: "/seminyak/facial/" },
  { from: "/seminyak/cellulite-massage/", to: "/seminyak/anti-cellulite-massage/" },
  { from: "/seminyak/couple-massage/", to: "/seminyak/couple-spa/" },
  { from: "/seminyak/ear-candle/", to: "/seminyak/ear-wax-removal/" },
  { from: "/seminyak/hair-creambath/", to: "/seminyak/creambath/" },
  { from: "/seminyak/lymphatic-massage/", to: "/seminyak/lymphatic-drainage-massage/" },
  { from: "/seminyak/nail-art/", to: "/seminyak/nail-spa/" },
  { from: "/seminyak/sports-massage/", to: "/seminyak/sport-massage/" },
  { from: "/seminyak/sunburn-treatment/", to: "/seminyak/sunburn-massage/" },
  { from: "/seminyak/virgin-coconut-oil-massage/", to: "/seminyak/coconut-oil-massage/" },
  { from: "/seminyak/waxing/", to: "/seminyak/waxing-salon/" },
  { from: "/seminyak/pricing/", to: "/seminyak/" },

  // More old /spa-treatments/ slugs
  { from: "/spa-treatments/balinese-massage/", to: "/seminyak/balinese-massage/" },
  { from: "/spa-treatments/foot-massage-seminyak-bali/", to: "/seminyak/foot-massage/" },
  { from: "/spa-treatments/lymphatic-massage/", to: "/seminyak/lymphatic-drainage-massage/" },
  { from: "/spa-treatments/traditional-massage/", to: "/seminyak/traditional-massage/" },

  // More old page names
  { from: "/massage-petitenget/", to: "/contact/" },
  { from: "/spa-bali-massage-packages/", to: "/seminyak/" },
  { from: "/day-spa-seminyak-6/", to: "/seminyak/day-spa/" },
  { from: "/reservation-spa-bali-moon-massage/", to: "/reservation/" },
  { from: "/wellness-bali/", to: "/guide/" },
  // The old "Wellness Guide in Bali" page, removed on 8 October 2026 (owner):
  // no page linked to it and it mostly promoted other spas. Its text is kept in
  // migration/source-data/pages/wellness-in-bali.md.
  { from: "/wellness-in-bali/", to: "/guide/" },
  { from: "/terms-conditions/", to: "/terms-and-conditions/" },
  { from: "/massage-hotel-villa/", to: "/villa-hotel-massage/" },
  { from: "/page-about/", to: "/seminyak/" },
  { from: "/page-contact/", to: "/contact/" },
  { from: "/page-team/", to: "/seminyak/" },
  // Not carried over: /page-faq/, /page-testimonial/ and /page-team-details/. Live sends them
  // to theme-demo pages (/faq/, /testimonials/, /team-details/) that this site does not have
  // (url-map section E), so they would only redirect into a 404.

  // Old blog addresses. The two renamed articles stay above the ":slug" rules.
  { from: "/iv-drip-bali/", to: "/guide/iv-drip/" },
  { from: "/news-grid/", to: "/guide/" },
  { from: "/local-health-wellness-news/", to: "/guide/" },
  { from: "/news/best-massage-after-flight/", to: "/guide/best-massages-after-a-long-flight/" },
  { from: "/blog/best-massage-after-flight/", to: "/guide/best-massages-after-a-long-flight/" },
  { from: "/news/a-practical-guide-to-slimming-massage/", to: "/guide/understanding-slimming-massage/" },
  { from: "/blog/a-practical-guide-to-slimming-massage/", to: "/guide/understanding-slimming-massage/" },
  { from: "/news/:slug/", to: "/guide/:slug/" },
  { from: "/blog/:slug/", to: "/guide/:slug/" },
];

/**
 * NOT ACTIVE — waiting for the owner's approval (migration-audit URL-03).
 * These URLs return 404 on the old website today.
 */
export const proposedRedirects: OldUrlRedirect[] = [
  // Section C: short aliases that match common page names
  { from: "/pricelist/", to: "/seminyak/" },
  { from: "/treatments/", to: "/seminyak/" },
  { from: "/terms/", to: "/terms-and-conditions/" },

  // Section D: old URLs that other websites still link to
  { from: "/bali-moon-best-massage-bali-seminyak-our-team.html", to: "/" },
  { from: "/bali-moon-best-massage-bali-seminyak-our-team-html.html", to: "/" },
  { from: "/spa-treatments/balinese-massage-bali/", to: "/seminyak/balinese-massage/" },
  { from: "/spa-treatments/traditional-massage-bali/", to: "/seminyak/traditional-massage/" },
  { from: "/spa-treatments/foot-massage-bali/", to: "/seminyak/foot-massage/" },
  { from: "/cheap-massage-seminyak-bali-price-list/best-body-scrub-in-bali.html", to: "/seminyak/body-scrub/" },
  { from: "/cheap-massage-seminyak-bali-price-list/extra-massage-service-in-seminyak.html", to: "/outcall-home-service-massage/" },
  { from: "/cheap-massage-seminyak-bali-price-list/facial.html", to: "/seminyak/facial/" },
  { from: "/cheap-massage-seminyak-bali-price-list/the-packages.html", to: "/seminyak/" },
  { from: "/index.html", to: "/" },
  { from: "/contact.html", to: "/contact/" },
  { from: "/appointments.html", to: "/reservation/" },
  { from: "/reservation-spa-bali-moon-massage.html", to: "/reservation/" },
];
