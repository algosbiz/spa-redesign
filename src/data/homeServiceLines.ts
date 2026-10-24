/**
 * HOME SERVICE LINKS: one sentence on each treatment page that links to the
 * outcall page (20 Oct dev brief, Task 6).
 *
 * The sentence sits directly after the page's opening block (the quick facts),
 * before the first heading of the page's own sections. The link words differ
 * from page to page on purpose, so the outcall page is linked with several of
 * the words people search for ("home service massage", "outcall massage in
 * Seminyak", "home massage in Seminyak", …): keep them as they are.
 *
 * They live here, not in the page bodies (src/content/treatments/ and the
 * versions saved in /admin/), so a page edited in /admin/ shows its sentence
 * too and none of the 25 pages needs editing. The treatment page template
 * adds it (app/(site)/seminyak/[slug]/page.tsx). Write a link as
 * [words](/address/).
 *
 * Hair braiding and nail art are home services too (the owner confirmed fact
 * C13 on 23 Oct).
 */
export const homeServiceLines: Record<string, string> = {
  "balinese-massage":
    "Staying in tonight? We also bring Balinese massage to your villa or hotel as a [home service massage](/outcall-home-service-massage/), for IDR 75.000 per therapist in the Seminyak area.",
  "deep-tissue-massage":
    "Too sore to travel? Book deep tissue as an [outcall massage in Seminyak](/outcall-home-service-massage/) and your therapist comes to you.",
  "thai-massage":
    "Thai massage is also available at your villa through our [home service](/outcall-home-service-massage/), anywhere from Seminyak to Canggu.",
  "traditional-massage":
    "Prefer to stay in? Book a traditional massage as a [home massage in Seminyak](/outcall-home-service-massage/) or anywhere nearby.",
  "couple-spa":
    "Want a couples massage in your own villa? Two therapists can come to you with our [outcall and home service massage](/outcall-home-service-massage/).",
  "shiatsu-massage":
    "Shiatsu needs no oil, so it works well as a [massage at your villa or hotel](/outcall-home-service-massage/).",
  "sport-massage":
    "After a surf or a long ride, book a sports massage at your villa with our [outcall massage service](/outcall-home-service-massage/) in Seminyak and Canggu.",
  "hot-stone-massage":
    "Hot stone massage is also available as a [home service massage in Bali](/outcall-home-service-massage/). Your therapist brings the stones and everything else needed.",
  "lymphatic-drainage-massage":
    "Lymphatic drainage massage can also be booked at your villa or hotel through our [home service](/outcall-home-service-massage/).",
  "foot-massage":
    "Tired feet after a day of sightseeing? A foot massage is just as relaxing at your villa with our [home massage service](/outcall-home-service-massage/).",
  "foot-reflexology":
    "Foot reflexology is also available as an [outcall massage](/outcall-home-service-massage/), a good choice the evening you arrive in Bali.",
  "head-massage":
    "Book a head massage at your villa or hotel with our [home service massage](/outcall-home-service-massage/), or add it to another treatment.",
  "coconut-oil-massage":
    "Our coconut oil massage is also available as a [home massage across Bali](/outcall-home-service-massage/), from IDR 75.000 per therapist.",
  "cupping-therapy":
    "Cupping is also available as [home service at your villa or hotel](/outcall-home-service-massage/): your therapist brings the cups and pump, from IDR 75.000 per therapist.",
  "warm-candle-massage":
    "We bring the candles too: the warm candle massage is also available as [home service at your villa or hotel](/outcall-home-service-massage/), from IDR 75.000 per therapist.",
  "anti-cellulite-massage":
    "Cellulite massage can also be booked at your villa through our [outcall and home service](/outcall-home-service-massage/).",
  "sunburn-massage":
    "Too sunburnt to go out? We bring our cooling aloe vera treatment to your villa or hotel with our [home service massage](/outcall-home-service-massage/).",
  "body-scrub":
    "Body scrubs are also available at your villa with our [home service](/outcall-home-service-massage/), on their own or after a massage.",
  creambath:
    "Enjoy a cream bath without leaving your villa: book it through our [outcall home service](/outcall-home-service-massage/).",
  facial:
    "Our facials can also be booked at your villa or hotel with our [home service in Seminyak](/outcall-home-service-massage/).",
  "manicure-pedicure":
    "Manicures and pedicures are available at your villa too. See our [home service](/outcall-home-service-massage/) for prices and areas.",
  "ear-candle":
    "Ear candling is also available as part of our [home service in Bali](/outcall-home-service-massage/), often added to a massage.",
  "waxing-salon":
    "Waxing can also be booked at your villa with our [home service](/outcall-home-service-massage/).",
  "hair-braiding": "Hair braiding is also available at your villa with our [home service](/outcall-home-service-massage/).",
  "nail-spa": "Nail art is also available at your villa with our [home service](/outcall-home-service-massage/).",
  "day-spa":
    "Prefer to stay in? Our home service is delivered by the same therapists who work here. See [outcall and home service massage](/outcall-home-service-massage/).",
};

/** The price list page (/seminyak/), which is not a treatment page. */
export const priceListHomeServiceLine =
  "Many treatments on this list are also available at your villa or hotel. See [home service massage prices](/outcall-home-service-massage/#home-service-prices).";
