/**
 * The questions of an article's "Frequently asked questions" section, for
 * FAQPage structured data (28 Oct 2026). Each <h3> under that <h2> is a
 * question and everything up to the next heading is its answer, so a section
 * the owner adds in /admin/ is picked up without code. An article without the
 * section gives none.
 */
export function faqFromHtml(html: string | null | undefined): { question: string; answer: string }[] {
  if (!html) return [];
  const start = html.search(/<h2[^>]*>\s*(frequently asked questions|faqs?)\b/i);
  if (start < 0) return [];
  // The section runs from its heading to the next <h2> (or the article's end).
  const section = html
    .slice(start)
    .replace(/^<h2[\s\S]*?<\/h2>/i, "")
    .split(/<h2[\s>]/i)[0];
  return section
    .split(/<h3[^>]*>/i)
    .slice(1)
    .map((part) => {
      const [question, answer = ""] = part.split(/<\/h3>/i);
      return { question: textOf(question), answer: textOf(answer) };
    })
    .filter((item) => item.question && item.answer);
}

const ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”", ndash: "–", mdash: "—", hellip: "…",
};

/** HTML as plain text: tags dropped, entities decoded, spaces collapsed. */
function textOf(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (whole, code: string) =>
      code[0] === "#"
        ? String.fromCodePoint(parseInt(code.slice(code[1].toLowerCase() === "x" ? 2 : 1), code[1].toLowerCase() === "x" ? 16 : 10))
        : (ENTITIES[code.toLowerCase()] ?? whole)
    )
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:!?])/g, "$1")
    .trim();
}
