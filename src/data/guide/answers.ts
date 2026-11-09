/**
 * GUIDE ARTICLES: the short answer shown above an article's text.
 *
 * The guides are informational: they answer what people search for
 * worldwide ("what is Thai massage", "facial massage"), not where to book
 * (owner, 9 Nov 2026). So the short answer is a plain definition, as a
 * reference book would give it: no prices, no brand, no place. The article
 * links to its treatment page further down, with "[treatment] in Seminyak".
 *
 * Only the "what is" guides have one. The comparison, jet lag, back massage
 * and IV drip guides open with a paragraph that already answers the
 * question, so a box there would only repeat it.
 *
 * (October's version named Spa Bali Moon and gave the price in every box,
 * for AI answers; retired with that approach, WRITING-GUIDE.md.) Write a
 * link as [words](/address/).
 */
export const guideAnswers: Record<string, string> = {
  "what-is-balinese-massage":
    "Balinese massage is a full-body oil massage from Bali that combines long gliding strokes, kneading, skin rolling, acupressure and gentle stretches. It grew out of the island's traditional healing, with Indian, Chinese and Javanese influences, and the pressure can be light or firm.",
  "what-is-thai-massage":
    "Thai massage, or nuad Thai, is a traditional massage from Thailand given without oil, in loose clothing. The therapist presses along the body with palms, thumbs and elbows and moves you through assisted, yoga-like stretches. UNESCO listed it as intangible cultural heritage in 2019.",
  "facial-massage-for-relaxation":
    "A facial massage is a few minutes of gentle strokes, kneading and pressure on the face, jaw and neck, by hand or with a tool such as a gua sha stone. It relaxes the jaw and forehead and brings blood to the skin for a while, but there is no good evidence that it lifts the face or removes wrinkles.",
  "what-is-a-slimming-massage":
    "A slimming massage is a firm massage on the thighs, hips, buttocks and abdomen, often with a slimming cream. It can make skin look smoother and legs feel less puffy for a while, but it does not remove fat or cellulite, and it is not a weight-loss treatment.",
  "lymphatic-drainage-massage-all-you-need-to-know":
    "Lymphatic drainage massage is a slow, very light massage that moves the skin in the direction lymph flows, towards the lymph nodes. Many people find that puffy legs and ankles feel lighter for a while afterwards. It is a relaxing treatment, not a medical one.",
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
