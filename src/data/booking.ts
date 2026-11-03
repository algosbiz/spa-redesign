import type { Locale } from "@/i18n/config";

/**
 * BOOKING CHAT PER LANGUAGE (migration/multi-language-plan-2026-11.md §3.7) —
 * the chat app the floating button and the phones' bottom bar open on each
 * language's pages. Guests from Japan mostly use LINE, from Korea
 * KakaoTalk, from mainland China WeChat (WhatsApp is blocked there); India
 * uses WhatsApp, as the English pages do.
 *
 * `null` = WhatsApp, until the owner opens the account and someone can
 * answer in that language. Then fill in the account's chat link, e.g.
 *   ja: { app: "LINE", url: "https://lin.ee/xxxxxxx" },
 *   ko: { app: "KakaoTalk", url: "https://pf.kakao.com/_xxxxxx/chat" },
 * WeChat has no chat link a web page can open: it needs the account's QR
 * code shown on the page, to be designed when the account exists.
 */
export type BookingChat = { app: string; url: string };

export const bookingChats: Partial<Record<Locale, BookingChat | null>> = {
  ja: null,
  ko: null,
  zh: null,
  hi: null,
};
