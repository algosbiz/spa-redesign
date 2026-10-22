/** 159000 -> "159.000": a dot between the thousands. */
export const withDots = (amount: number) => String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/**
 * Prices are written in full, with a dot between the thousands: "IDR 159K"
 * and "IDR 159,000" -> "IDR 159.000". For prices that may still be in an old
 * form (treatment pages saved in the admin keep their own copy of the prices
 * in the database).
 */
export function fullPrice(price: string): string {
  return price
    .replace(/\b(\d+(?:[.,]\d+)?)\s?K\b/gi, (_, amount: string) =>
      withDots(Math.round(Number(amount.replace(",", ".")) * 1000)),
    )
    .replace(/\b\d{1,3}(?:,\d{3})+\b/g, (amount) => amount.replace(/,/g, "."));
}

/**
 * How a price is shown: in full and with the currency. "449K", "449.000" and
 * "IDR 449.000" all show as "IDR 449.000"; "Start from 139.000" as
 * "Start from IDR 139.000".
 */
export function displayPrice(price: string): string {
  const full = fullPrice(price);
  return /\bIDR\b/i.test(full) ? full : full.replace(/\d[\d.]*/, "IDR $&");
}

/** "IDR 159.000" (or the old "IDR 159K") -> 159000, for comparing prices. */
export function priceValue(price: string): number {
  const m = /(\d[\d.,]*)\s?(K\b)?/i.exec(price || "");
  if (!m) return Number.POSITIVE_INFINITY;
  return m[2] ? Number(m[1].replace(",", ".")) * 1000 : Number(m[1].replace(/[.,]/g, ""));
}
