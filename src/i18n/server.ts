import { appendFileSync } from "node:fs";
import { lang } from "next/root-params";
import { cache, createElement, Fragment, isValidElement, type ReactElement, type ReactNode } from "react";
import { defaultLocale, isServedLocale, type Locale } from "./config";
import {
  cloneWith,
  format,
  isHostElement,
  isSkippedKey,
  translateAttribute,
  translateEntry,
  translateTemplate,
  translateText,
  translateValue,
  type Messages,
  type OnMissing,
  type Translator,
} from "./translate";

/**
 * The language of the page being built, and its translations, for Server
 * Components (src/i18n/translate.ts explains the translation memory).
 *
 *   const { t, localize, render, locale } = await getI18n();
 *
 * English returns everything as it is, so the English pages are built
 * exactly as before.
 */

/** The page's language: the [lang] segment (next/root-params); English outside it (admin, 404). */
export const getLocale = cache(async (): Promise<Locale> => {
  try {
    const value = await lang();
    return value && isServedLocale(value) ? value : defaultLocale;
  } catch {
    return defaultLocale;
  }
});

type MessageFiles = { ui: Messages; content: Messages };

// One pair of files per language: ui.json for the text Client Components show
// (sent to the browser with the page), content.json for the rest (server only).
const loaders: Record<Exclude<Locale, "en">, () => Promise<MessageFiles>> = {
  ja: async () => ({ ui: (await import("./messages/ja/ui.json")).default, content: (await import("./messages/ja/content.json")).default }),
  ko: async () => ({ ui: (await import("./messages/ko/ui.json")).default, content: (await import("./messages/ko/content.json")).default }),
  zh: async () => ({ ui: (await import("./messages/zh/ui.json")).default, content: (await import("./messages/zh/content.json")).default }),
  hi: async () => ({ ui: (await import("./messages/hi/ui.json")).default, content: (await import("./messages/hi/content.json")).default }),
};

const loadMessages = cache(async (locale: Locale): Promise<MessageFiles> =>
  locale === "en" ? { ui: {}, content: {} } : loaders[locale](),
);

/** The translations Client Components get (I18nProvider in RootDocument). */
export async function getUiMessages(locale: Locale): Promise<Messages> {
  return (await loadMessages(locale)).ui;
}

/**
 * Untranslated text, written to I18N_MISSING_FILE (one JSON line each) when
 * that is set: tools/i18n/missing.mjs turns the lines into the list to
 * translate. `file` says which messages file the text belongs in.
 */
function missingRecorder(locale: Locale, known: Set<string>, file: "ui" | "content"): OnMissing | undefined {
  const target = process.env.I18N_MISSING_FILE;
  if (!target) return undefined;
  const seen = new Set<string>();
  return (text) => {
    // Already translated text passing through a second time is not missing,
    // nor text with no Latin letter: it was written in the language itself
    // (a translated article from the database).
    if (known.has(text) || seen.has(text) || !/[A-Za-z]/.test(text)) return;
    seen.add(text);
    // Text that already has letters of another script was put together from
    // translated pieces ("60分 · IDR 199.000"): listed for review, not to translate.
    const mixed = /[^\P{L}\p{Script=Latin}]|[　-〿・！-･]/u.test(text);
    appendFileSync(target, JSON.stringify({ locale, file, text, ...(mixed ? { mixed: true } : {}) }) + "\n");
  };
}

// Client Components report from the server render through this hook (src/i18n/client.tsx).
if (process.env.I18N_MISSING_FILE) {
  const recorders = new Map<Locale, OnMissing | undefined>();
  (globalThis as { __i18nMissing?: (locale: Locale, text: string) => void }).__i18nMissing = (locale, text) => {
    if (!recorders.has(locale)) recorders.set(locale, missingRecorder(locale, new Set(), "ui"));
    recorders.get(locale)?.(text);
  };
}

export type I18n = {
  locale: Locale;
  /** One text; {name} placeholders filled from `values`. */
  t: (text: string, values?: Record<string, string | number>) => string;
  /** A copy of data (strings, arrays, objects) with its text translated. */
  localize: <T>(value: T) => T;
  /**
   * What a page returns, translated all the way down: every Server Component
   * in it is rendered here so its text is reached too. Client Components get
   * translated props and translate their own text (useI18n).
   */
  render: (node: ReactNode) => Promise<ReactNode>;
};

const english: I18n = {
  locale: defaultLocale,
  t: (text, values) => (values ? format(text, values) : text),
  localize: (value) => value,
  render: async (node) => node,
};

export const getI18n = cache(async (): Promise<I18n> => {
  const locale = await getLocale();
  if (locale === defaultLocale) return english;
  const files = await loadMessages(locale);
  const messages: Messages = { ...files.content, ...files.ui };
  const translator: Translator = {
    locale,
    messages,
    onMissing: missingRecorder(locale, new Set(Object.values(messages)), "content"),
  };
  return {
    locale,
    t: (text, values) => (values ? translateTemplate(text, values, translator) : translateText(text, translator)),
    localize: (value) => translateValue(value, translator),
    render: (node) => renderTranslated(node, translator),
  };
});

const CLIENT_REFERENCE = Symbol.for("react.client.reference");

/**
 * Renders the Server Components in `node` (calling them, as React would) and
 * translates the text of everything that comes out. Stops at Client
 * Components, whose props it translates, and at anything it cannot call
 * (memo, forwardRef, lazy), whose props it translates too.
 */
async function renderTranslated(node: ReactNode, translator: Translator): Promise<ReactNode> {
  if (typeof node === "string") return translateText(node, translator);
  if (Array.isArray(node)) return Promise.all(node.map((child) => renderTranslated(child, translator)));
  if (node instanceof Promise) return renderTranslated(await node, translator);
  if (!isValidElement(node)) return node;

  const element = node as ReactElement<Record<string, unknown>>;
  const { type } = element;
  const isServerComponent =
    typeof type === "function" && (type as { $$typeof?: symbol }).$$typeof !== CLIENT_REFERENCE && !isClassComponent(type);

  // Props first; elements in them (children, a title written as <>…</>) are
  // rendered too. An HTML element keeps its attributes but the ones people read.
  const host = isHostElement(element);
  const entries = await Promise.all(
    Object.entries(element.props).map(async ([key, value]) => {
      if (key === "children") return [key, await renderTranslated(value as ReactNode, translator)] as const;
      if (host) return [key, translateAttribute(key, value, translator)] as const;
      if (isValidElement(value) || (Array.isArray(value) && value.some(isValidElement))) {
        return [key, isSkippedKey(key) ? value : await renderTranslated(value as ReactNode, translator)] as const;
      }
      return [key, translateEntry(key, value, translator)] as const;
    }),
  );
  const changed = Object.fromEntries(entries.filter(([key, value]) => value !== element.props[key]));

  if (isServerComponent) {
    // The component gets its props translated, so it works with whole
    // translated sentences (it may split or join them); then its own text is
    // translated on the way out.
    const props = { ...element.props, ...changed };
    const output = await (type as (props: Record<string, unknown>) => ReactNode | Promise<ReactNode>)(props);
    const translated = await renderTranslated(output, translator);
    // Keep the element's key: lists of components stay keyed.
    return element.key == null ? translated : createElement(Fragment, { key: element.key }, translated);
  }

  return cloneWith(element, changed);
}

const isClassComponent = (type: unknown) =>
  typeof type === "function" && Boolean((type as { prototype?: { isReactComponent?: unknown } }).prototype?.isReactComponent);
