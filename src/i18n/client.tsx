"use client";

import { createContext, use, useContext, useMemo, type ReactNode } from "react";
import { defaultLocale, localeSettings, type Locale } from "./config";
import {
  format,
  translateElement,
  translateTemplate,
  translateText,
  translateValue,
  type Messages,
  type Translator,
} from "./translate";

/**
 * The translations Client Components need (src/i18n/messages/<lang>/ui.json),
 * one file per language, fetched by the browser once, with the scripts. They
 * used to come as a prop of I18nProvider, so each translated page carried all
 * of them in its HTML: 164 KB compressed for /jp/ against 67 KB for English
 * (25 Nov, speed).
 */
const loaders: Record<Exclude<Locale, "en">, () => Promise<{ default: Messages }>> = {
  ja: () => import("./messages/ja/ui.json"),
  ko: () => import("./messages/ko/ui.json"),
  zh: () => import("./messages/zh/ui.json"),
  hi: () => import("./messages/hi/ui.json"),
};

const loaded = new Map<Locale, Promise<Messages>>();

function uiMessages(locale: Exclude<Locale, "en">): Promise<Messages> {
  let messages = loaded.get(locale);
  if (!messages) {
    messages = loaders[locale]().then((file) => file.default);
    loaded.set(locale, messages);
  }
  return messages;
}

const noMessages: Messages = {};

// In the browser: asked for as soon as this file runs, not when React gets to
// the provider.
if (typeof document !== "undefined") {
  const page = (Object.keys(loaders) as Exclude<Locale, "en">[]).find((l) => localeSettings[l].htmlLang === document.documentElement.lang);
  // A failed download is tried again when the provider asks.
  if (page) uiMessages(page).catch(() => loaded.delete(page));
}

/**
 * The page's language for Client Components, its translations (above) and the
 * languages the site serves (for the language switcher), given by RootDocument:
 *
 *   const { t, el, localize, locale } = useI18n();
 *   return el(<p>Join Our Newsletter</p>);
 *
 * English returns everything as it is.
 */

type I18nValue = { locale: Locale; messages: Messages; languages?: readonly Locale[] };

const I18nContext = createContext<I18nValue>({ locale: defaultLocale, messages: {} });
const englishOnly: readonly Locale[] = [defaultLocale];

export function I18nProvider({ locale, languages, children }: Omit<I18nValue, "messages"> & { children: ReactNode }) {
  const messages = locale === "en" ? noMessages : use(uiMessages(locale));
  const value = useMemo(() => ({ locale, messages, languages }), [locale, messages, languages]);
  return <I18nContext value={value}>{children}</I18nContext>;
}

export type ClientI18n = {
  locale: Locale;
  /** The <html lang> value, for dates and numbers (Intl). */
  htmlLang: string;
  t: (text: string, values?: Record<string, string | number>) => string;
  localize: <T>(value: T) => T;
  /** The elements a component returns, with their text and text props translated. */
  el: (node: ReactNode) => ReactNode;
  /** The languages the site serves: the live ones, and those in preview (src/i18n/config.ts). */
  languages: readonly Locale[];
};

const english: Omit<ClientI18n, "languages"> = {
  locale: defaultLocale,
  htmlLang: localeSettings[defaultLocale].htmlLang,
  t: (text, values) => (values ? format(text, values) : text),
  localize: (value) => value,
  el: (node) => node,
};

export function useI18n(): ClientI18n {
  const { locale, messages, languages = englishOnly } = useContext(I18nContext);
  return useMemo(() => {
    if (locale === defaultLocale) return { ...english, languages };
    // While the server renders the page, untranslated text is reported (src/i18n/server.ts).
    const report = (globalThis as { __i18nMissing?: (locale: Locale, text: string) => void }).__i18nMissing;
    const translator: Translator = {
      locale,
      messages,
      wordSpaces: localeSettings[locale].wordSpaces,
      onMissing: report && ((text) => report(locale, text)),
    };
    return {
      locale,
      htmlLang: localeSettings[locale].htmlLang,
      t: (text, values) => (values ? translateTemplate(text, values, translator) : translateText(text, translator)),
      localize: (value) => translateValue(value, translator),
      el: (node) => translateElement(node, translator),
      languages,
    };
  }, [locale, messages, languages]);
}
