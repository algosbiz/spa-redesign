import { priceOf } from "@/data/pricelist";
import { priceValue } from "@/lib/price";

/**
 * Each package treatment's own price on the price list, by length in minutes
 * and name ("60|balinese massage"). The Bali Moon Facial counts as the Tea
 * Tree Facial, the cheaper of the two (owner, 23 Oct). A couple package's
 * massage is the couple massage (for two) and its add-ons count twice.
 * A cream bath or body scrub takes 30 to 60 minutes at its menu price;
 * packages list the cream bath as 45 minutes (owner, 25 Oct: 45–55 was
 * confusing) and the scrub as 30, and both count at the menu price.
 */
const PRICES: Record<string, (twoPax: boolean) => number> = {
  "60|balinese massage": (two) =>
    two ? priceOf("couple-balinese-massage", "1 Hour · Balinese Massage · 2 Pax") : priceOf("balinese-massage", "1 Hour"),
  "60|thai massage": () => priceOf("thai-massage", "1 Hour"),
  "60|hot stone": () => priceOf("hot-stone-massage", "1 Hour"),
  "90|hot stone": () => priceOf("hot-stone-massage", "1.5 Hours"),
  "60|warm candle": (two) =>
    two
      ? priceOf("couple-warm-candle-massage", "1 Hour · Warm Candle Massage · 2 Pax")
      : priceOf("organic-warm-candle-oil-massage", "1 Hour"),
  "60|bali moon facial": (two) => priceOf("bali-moon-tea-tree-facial", "Price") * (two ? 2 : 1),
  "45|cream bath": () => priceOf("cream-bath", "Ginseng"),
  "30|body scrub": () => priceOf("body-scrub", "Body Massage & Scrub · Start From"),
  "30|head": () => priceOf("head-massage", "30 Minutes"),
  "30|reflexology": () => priceOf("foot-reflexology", "30 Minutes"),
  "30|manicure": () => priceOf("manicure-pedicure", "Manicure"),
  "30|pedicure": () => priceOf("manicure-pedicure", "Pedicure"),
  "60|mani & pedi": () => priceOf("manicure-pedicure", "Manicure & Pedicure"),
  "30|ear candle": (two) => priceOf("ear-candle", "30 Minutes") * (two ? 2 : 1),
  "60|lymphatic": () => priceOf("lymphatic-massage", "1 Hour"),
  "60|bali moon gold facial": () => priceOf("bali-moon-gold-facial", "Price"),
};

/** "1 Hr", "1,5 Hr", "30 Mins", "45–55 Mins" -> [shortest, longest] in minutes; null when it is not a length. */
export function lengthOf(duration: string): [number, number] | null {
  const m = /^(\d+(?:[.,]\d+)?)(?:\s*[–-]\s*(\d+(?:[.,]\d+)?))?\s*(hr|hour|min)/i.exec(duration.trim());
  if (!m) return null;
  const unit = /^min/i.test(m[3]) ? 1 : 60;
  const low = parseFloat(m[1].replace(",", ".")) * unit;
  return [low, m[2] ? parseFloat(m[2].replace(",", ".")) * unit : low];
}

/**
 * How much less a package costs than its treatments booked one by one (owner,
 * 24 Oct: "maybe we can see what it looks like"), or null when a treatment
 * has no like-for-like price on the menu or there is no saving.
 */
export function packageSaving(
  items: { duration: string; service: string }[],
  price: string,
  twoPax = false
): number | null {
  let separately = 0;
  for (const item of items) {
    // "Hot Stone Massage" and "Warm Candle Massage" are listed as "Hot Stone" and "Warm Candle" too.
    const name = item.service.trim().toLowerCase();
    const own = PRICES[`${lengthOf(item.duration)?.[0]}|${/^(balinese|thai) massage$/.test(name) ? name : name.replace(/ massage$/, "")}`];
    if (!own) return null;
    separately += own(twoPax);
  }
  const saving = separately - priceValue(price);
  return saving > 0 ? saving : null;
}
