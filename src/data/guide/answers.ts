/**
 * GUIDE ARTICLES: the short answer shown above each article's text.
 *
 * AEO roadmap (R32, R59, R69, 17 Oct 2026): every guide article opens with
 * two sentences that name Spa Bali Moon, give the price and link to the
 * treatment page, so an AI answer quoting the article also finds the spa.
 * The texts are the drafts in migration/copy-rewrite-2026-10.md. They live
 * here, not in the article body in the database, so no article needs to be
 * edited in /admin/ for them; an article without an entry shows no box
 * (IV Drip, the back massage techniques, and any new article until a line is
 * added here). The slimming cream is the cellulite massage's, not the
 * lymphatic one's (owner, 23 Oct).
 *
 * Write a link as [words](/address/). Prices: keep them equal to the price list.
 */
export const guideAnswers: Record<string, string> = {
  "jet-lag-recovery-best-treatments-after-a-long-flight":
    "At Spa Bali Moon in Seminyak, a [lymphatic drainage massage](/seminyak/lymphatic-drainage-massage/) is often chosen after a long flight, from IDR 300.000 per person for one hour. For a full-body massage, a one-hour [Balinese massage](/seminyak/balinese-massage/) is IDR 159.000.",
  "what-is-balinese-massage":
    "At Spa Bali Moon in Seminyak, a [Balinese massage](/seminyak/balinese-massage/) is IDR 159.000 for 1 hour, IDR 239.000 for 1.5 hours and IDR 330.000 for 2 hours per person, at our spa or at your villa or hotel. It is the treatment we recommend most often for first-time guests.",
  "what-is-thai-massage":
    "At Spa Bali Moon in Seminyak, [Thai massage](/seminyak/thai-massage/) is IDR 133.000 for 30 minutes, IDR 259.000 for 1 hour and IDR 379.000 for 1.5 hours per person. It is oil-free, so wear comfortable clothing you can move in.",
  "facial-massage-for-relaxation":
    "At Spa Bali Moon in Seminyak, every [Bali Moon Facial](/seminyak/facial/) includes an argan oil lymphatic facial massage. The Tea Tree Facial is IDR 196.000 and the Gold Facial IDR 269.000 per person.",
  "what-is-a-slimming-massage":
    "At Spa Bali Moon in Seminyak, the closest treatment is the [cellulite massage](/seminyak/anti-cellulite-massage/), a firm massage with slimming cream on the thighs, hips, buttocks and abdomen from IDR 350.000 per person for one hour. For a gentler option, [lymphatic drainage massage](/seminyak/lymphatic-drainage-massage/) starts at IDR 300.000.",
  // The guide promised help with the budget but gave no prices (blog review, 23 Oct).
  "balinese-vs-thai-massage":
    "At Spa Bali Moon in Seminyak, a [Balinese massage](/seminyak/balinese-massage/) is IDR 159.000 for 1 hour (up to IDR 330.000 for 2 hours) and a [Thai massage](/seminyak/thai-massage/) IDR 133.000 for 30 minutes or IDR 259.000 for 1 hour, per person. A couple Balinese massage is IDR 319.000 for two for 1 hour.",
  "lymphatic-drainage-massage-all-you-need-to-know":
    "At Spa Bali Moon in Seminyak, a [lymphatic drainage massage](/seminyak/lymphatic-drainage-massage/) is a slow, very light massage from IDR 300.000 per person for one hour, at our spa or at your villa or hotel. It is a relaxation treatment, not a medical one.",
};

/** "Text [words](/address/) text" -> text and links, in order. */
export function answerParts(text: string): (string | { text: string; href: string })[] {
  const parts: (string | { text: string; href: string })[] = [];
  let last = 0;
  for (const m of text.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push({ text: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
