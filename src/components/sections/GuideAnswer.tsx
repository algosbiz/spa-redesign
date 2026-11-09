import Link from "next/link";
import { answerParts } from "@/data/guide/answers";

/**
 * The short answer above a guide article's text (src/data/guide/answers.ts):
 * a plain definition of what the article explains, without prices or the
 * spa's name (owner, 9 Nov 2026: the guides inform, they don't sell).
 *
 * The look, picked from three options (17 Oct), is a magazine's standfirst:
 * no box, "THE SHORT ANSWER" in small gold capitals, the answer in larger
 * light serif type, a hairline under it.
 */
export default function GuideAnswer({ text }: { text: string }) {
  return (
    <aside className="guide-answer">
      <p className="guide-answer__label">The short answer</p>
      <p className="guide-answer__text">
        {answerParts(text).map((part, i) =>
          typeof part === "string" ? (
            part
          ) : (
            <Link key={i} prefetch={false} href={part.href}>
              {part.text}
            </Link>
          )
        )}
      </p>
    </aside>
  );
}
