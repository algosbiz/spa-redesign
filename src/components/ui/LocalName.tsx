"use client";

import { useI18n } from "@/i18n/client";
import { localName } from "@/i18n/localNames";

/**
 * A treatment's name in the page's language, as a small line under its
 * English name (src/i18n/localNames.ts). Nothing on the English site, nor for
 * a name without one. `englishName` is never translated (src/i18n/translate.ts
 * leaves it alone), so the lookup gets the name as the menu writes it.
 */
export default function LocalName({ englishName }: { englishName: string }) {
  const { locale, htmlLang } = useI18n();
  const name = localName(englishName, locale);
  if (!name) return null;
  return (
    <span className="local-name" lang={htmlLang}>
      {name}
    </span>
  );
}
