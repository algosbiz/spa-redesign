// ⚠️  Copied from the live sitemap (spabalimoon.com/sitemap.xml), in its order.

/**
 * SITEMAP: every page except the guide articles, which
 * src/app/sitemap.xml/route.ts adds from the blog database after these.
 * Add a new page here, with the date it last changed and its main photo.
 */
export type SitemapEntry = { loc: string; lastmod: string; image?: string };

export const sitemapPages: SitemapEntry[] = [
  { loc: "https://spabalimoon.com/", lastmod: "2026-07-08T01:37:02+00:00" },
  { loc: "https://spabalimoon.com/contact/", lastmod: "2026-01-21T06:55:30+00:00", image: "https://spabalimoon.com/images/contact/contact-1.webp" },
  { loc: "https://spabalimoon.com/guide/", lastmod: "2026-07-06T08:14:14+00:00", image: "https://spabalimoon.com/images/blog/blog-1.webp" },
  { loc: "https://spabalimoon.com/massage-kuta/", lastmod: "2026-05-26T01:45:12+00:00", image: "https://spabalimoon.com/images/services/massagekuta/massagekuta-1.webp" },
  { loc: "https://spabalimoon.com/outcall-home-service-massage/", lastmod: "2026-07-08T01:43:32+00:00", image: "https://spabalimoon.com/images/homepage/homepage-28.webp" },
  { loc: "https://spabalimoon.com/privacy-policy/", lastmod: "2026-03-24T07:03:50+00:00", image: "https://spabalimoon.com/images/bg/page-title-bg.jpg" },
  { loc: "https://spabalimoon.com/reservation/", lastmod: "2026-07-06T06:53:00+00:00" },
  { loc: "https://spabalimoon.com/seminyak/", lastmod: "2026-07-08T01:50:34+00:00", image: "https://spabalimoon.com/images/pricelist/pricelist-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/anti-cellulite-massage/", lastmod: "2026-07-07T05:26:17+00:00", image: "https://spabalimoon.com/images/services/cellulitemassage/cellulitemassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/balinese-massage/", lastmod: "2026-07-06T06:40:25+00:00", image: "https://spabalimoon.com/images/services/balinesemassage/balinesemassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/body-scrub/", lastmod: "2026-07-06T06:29:01+00:00", image: "https://spabalimoon.com/images/services/bodyscrub/bodyscrub-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/coconut-oil-massage/", lastmod: "2026-07-06T06:40:43+00:00", image: "https://spabalimoon.com/images/services/coconutoilmassage/coconutoilmassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/couple-spa/", lastmod: "2026-07-06T05:10:55+00:00", image: "https://spabalimoon.com/images/services/couplemassage/couplemassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/creambath/", lastmod: "2026-07-06T06:37:10+00:00", image: "https://spabalimoon.com/images/services/creambath/creambath-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/day-spa/", lastmod: "2026-07-06T06:39:18+00:00", image: "https://spabalimoon.com/images/services/dayspaseminyak/dayspa-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/deep-tissue-massage/", lastmod: "2026-07-07T05:25:27+00:00", image: "https://spabalimoon.com/images/services/deeptissuemassage/deeptissuemassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/ear-wax-removal/", lastmod: "2026-07-06T06:22:17+00:00", image: "https://spabalimoon.com/images/services/earcandle/earcandle-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/facial/", lastmod: "2026-07-06T06:17:36+00:00", image: "https://spabalimoon.com/images/services/balimoonfacial/balimoonfacial-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/foot-massage/", lastmod: "2026-07-07T06:14:25+00:00", image: "https://spabalimoon.com/images/services/footmassage/footmassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/foot-reflexology/", lastmod: "2026-07-07T05:22:52+00:00", image: "https://spabalimoon.com/images/services/footreflexology/footreflexology-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/hair-braiding/", lastmod: "2026-07-06T05:11:42+00:00", image: "https://spabalimoon.com/images/services/hairbraiding/hairbraiding-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/head-massage/", lastmod: "2026-07-06T06:25:57+00:00", image: "https://spabalimoon.com/images/services/headmassage/headmassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/hot-stone-massage/", lastmod: "2026-07-06T06:29:51+00:00", image: "https://spabalimoon.com/images/services/hotstonemassage/hotstonemassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/lymphatic-drainage-massage/", lastmod: "2026-07-07T05:32:03+00:00", image: "https://spabalimoon.com/images/services/lymphaticmassage/lymphaticmassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/manicure-pedicure/", lastmod: "2026-07-06T06:16:51+00:00", image: "https://spabalimoon.com/images/services/manicurepedicure/manicurepedicure-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/nail-spa/", lastmod: "2026-07-06T06:27:58+00:00", image: "https://spabalimoon.com/images/services/nailart/nailart-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/shiatsu-massage/", lastmod: "2026-07-06T05:13:16+00:00", image: "https://spabalimoon.com/images/services/shiatsumassage/shiatsumassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/sport-massage/", lastmod: "2026-07-07T05:23:53+00:00", image: "https://spabalimoon.com/images/services/sportsmassage/sportsmassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/sunburn-massage/", lastmod: "2026-07-06T06:23:11+00:00", image: "https://spabalimoon.com/images/services/sunburntreatment/sunburntreatment-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/thai-massage/", lastmod: "2026-07-06T06:22:41+00:00", image: "https://spabalimoon.com/images/services/thaimassage/thaimassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/traditional-massage/", lastmod: "2026-07-06T06:42:02+00:00", image: "https://spabalimoon.com/images/services/traditionalmassage/traditionalmassage-1.webp" },
  { loc: "https://spabalimoon.com/seminyak/waxing-salon/", lastmod: "2026-07-06T05:12:10+00:00", image: "https://spabalimoon.com/images/services/waxing/waxing-1.webp" },
  { loc: "https://spabalimoon.com/terms-and-conditions/", lastmod: "2026-03-24T07:00:23+00:00", image: "https://spabalimoon.com/images/bg/page-title-bg.jpg" },
  { loc: "https://spabalimoon.com/villa-hotel-massage/", lastmod: "2026-07-06T06:38:12+00:00", image: "https://spabalimoon.com/images/services/massagehotelvilla/massagehotelvilla-1.webp" },
];
