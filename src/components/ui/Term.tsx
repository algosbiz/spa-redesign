/**
 * A short definition behind a small button at the end of a paragraph
 * ("What is MLD?"), opened as a card (owner, 10 Nov: a basic information
 * pop-up on the service pages, piloted on the lymphatic page).
 *
 * - The card's text is in the page's HTML from the start, so search engines
 *   and AI answers read it like the rest of the page; only its display waits
 *   for a tap. It uses the browser's own popover (no script): Escape or a tap
 *   outside closes it, and the button reports open/closed to screen readers.
 * - It sits after the paragraph's last sentence, not inside one, so every
 *   sentence stays whole for translation (word order differs in ja/ko).
 * - Everything is phrasing content (spans), as the paragraph is a <p>.
 * - Styles: src/styles/term.css.
 * - Two terms on one page need different titles: the title names the card.
 */
const idPart = (s: string) => {
  const ascii = s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (ascii) return ascii;
  // A title with no Latin letters (a translation): a short hash of it instead.
  let h = 0;
  for (const c of s) h = (h * 31 + c.codePointAt(0)!) >>> 0;
  return h.toString(36);
};
export default function Term({
  label,
  eyebrow,
  title,
  definition,
  more,
  href,
  linkText,
}: {
  /** The button's words, a whole phrase: "What is MLD?" */
  label: string;
  /** The small line above the title: "MLD, explained" */
  eyebrow?: string;
  /** The term in full: "Manual lymphatic drainage (MLD)" */
  title: string;
  /** One or two sentences that answer the question. */
  definition: string;
  /** An optional second, smaller paragraph. */
  more?: string;
  /** An optional link to read more (a guide), with its words. */
  href?: string;
  linkText?: string;
}) {
  // From the title as shown (already translated on the language pages), so
  // the button and its card share it. Not useId(): the language pages call
  // server components as plain functions (src/i18n/server.ts), where hooks fail.
  const id = `term-${idPart(title)}`;
  return (
    <span className="term">
      <button type="button" className="term__button" popoverTarget={id}>
        {label}
        <span className="term__badge" aria-hidden="true">
          ?
        </span>
      </button>
      <span id={id} popover="auto" role="dialog" aria-label={title} className="term__card">
        <span className="term__head">
          {eyebrow ? <span className="term__eyebrow">{eyebrow}</span> : null}
          <button type="button" className="term__close" popoverTarget={id} popoverTargetAction="hide" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </span>
        <span className="term__title">{title}</span>
        <span className="term__definition">{definition}</span>
        {more ? <span className="term__more">{more}</span> : null}
        {href && linkText ? (
          <a className="term__link" href={href}>
            {linkText} <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </span>
    </span>
  );
}
