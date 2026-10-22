// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.

import type { Testimonial } from "./types";

/**
 * GUEST REVIEWS — the 23 Google reviews shown in the review slider on the old site,
 * in the same order, copied exactly (including the guests' own spelling).
 *
 * Please only add real reviews here (copy them from Google). Do not write new ones.
 *
 * Note: the old site showed 5 stars on every review. Stars are NOT stored here on
 * purpose — see migration-audit.md SEO-03 before adding any rating display.
 */
export const testimonials: Testimonial[] = [
  { name: "Bea Tan", text: "Enjoyed our treatment by Sumi and Fera. Highly recommended!" },
  { name: "Michael Smith", text: "Great customer service,friendly staff" },
  { name: "Trisna faris", text: "I felt so relaxed after my session. Perfect way to end the day" },
  { name: "Elena Lagovskaya", text: "Good quality massage and good price" },
  { name: "Chantal Haban", text: "cheap and great massage! would recommend ear wax as well" },
  { name: "Bill Peterson", text: "Good massage,nice person&professional staff ." },
  { name: "Ava Saraskittya", text: "Verry recomended , good massage and nice place." },
  { name: "J. L.H.D", text: "Very nice place!" },
  { name: "Pong ki", text: "Love the full body massage!" },
  { name: "Lina Kamsiana", text: "Best Spa in Bali for me" },
  { name: "Putra Wirawan", text: "Good massage and professional." },
  { name: "wulan Dhari", text: "Nice place for massage." },
  { name: "Eny Harnani", text: "Love it body massage." },
  { name: "Aziz", text: "Good massage 👍" },
  {
    name: "Sascha US TT (Hothouse2001)",
    text: "Nice small Shop, with very friendly therapist there. The massage was very strong and helpful. Everytime again.",
  },
  { name: "Pur Nami", text: "Come to balimoon for relaxing,massage,scrub,facial, was good am missing" },
  { name: "Soojung Park", text: "Real good massage, best massage place to end your trip. Thank you" },
  { name: "WILLY COPPENOLLE", text: "Best spa in Bali for me, it's affordable, its professional. Very Recommended" },
  { name: "Agita Ajeng", text: "Good massages in this spa! I have wonderful experience 😊😍" },
  { name: "Tudor Dinu", text: "Nice people . good masage . medium price so i recomand it !" },
  { name: "Надежда Селезнева", text: "Very good massage, nice staff" },
  { name: "Komang Eka", text: "Spa Balimoon, nice place, very professional massage" },
  { name: "WAWAN DARMAWAN", text: "The place and service are 5 stars..comfortable and clean.." },
];

/**
 * The six reviews on the treatment pages and /massage-kuta/ (copy rewrite,
 * 15 Oct): ones that fit a gentle treatment as well as a firm one, under the
 * heading "Reviews of Spa Bali Moon" because they are about the spa, not the
 * treatment on the page. Texts exactly as in the list above; names as the
 * rewrite writes them.
 */
export const treatmentPageReviews: Testimonial[] = [
  { name: "Bea Tan", text: "Enjoyed our treatment by Sumi and Fera. Highly recommended!" },
  { name: "Trisna Faris", text: "I felt so relaxed after my session. Perfect way to end the day" },
  { name: "Elena Lagovskaya", text: "Good quality massage and good price" },
  { name: "Willy Coppenolle", text: "Best spa in Bali for me, it's affordable, its professional. Very Recommended" },
  { name: "Wawan Darmawan", text: "The place and service are 5 stars..comfortable and clean.." },
  { name: "Soojung Park", text: "Real good massage, best massage place to end your trip. Thank you" },
];

/**
 * Home service guests' own words, for the outcall page (S11, 21 Oct): sent by
 * the owner, copied exactly. No Review or AggregateRating schema is made from
 * them (Google ignores a business's reviews of itself).
 */
export const homeServiceReviews: Testimonial[] = [
  {
    name: "Charlotte Patterson",
    text: "ordered two at home massages and they were both incredible they know what they are doing to the point falling asleep is just so easy. Will definitely be booking with them again",
  },
  {
    name: "Diana Diep",
    text: "Booked an in home massage and facial for my friend and I. Was super easy to message them over what's app to organize and the two ladies that came provided great balinese massages and facials. Also super affordable considering they came to our villa.",
  },
  {
    name: "Ana Figueiredo",
    text: "We did a home massage in our villa. It was amazing, very relaxing as a kick off for the beggining of the holidays. I definitly recommend it!",
  },
  {
    name: "Mei Kristian Laoli",
    text: "Tried their home service for a massage. It was simple to book, and the therapist was professional",
  },
];

/**
 * Spa Bali Moon on Google Maps (the place in the /contact/ map), where the rest of the reviews are.
 * Not linked from the review sections (owner, 22 Oct: keep visitors on the site); kept for the
 * schema's sameAs (roadmap R9) if wanted.
 */
export const googleReviewsUrl = "https://www.google.com/maps?cid=16249037415237189663";
