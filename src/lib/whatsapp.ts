/**
 * WHATSAPP LINKS — every "Book" / "Reserve" button uses this file.
 *
 * The phone number is NOT written here. It comes from `whatsappNumber`
 * in src/data/business.ts, so you only ever change it in one place.
 *
 * Examples:
 *   whatsappLink()                                     -> opens chat with a general booking message
 *   whatsappLink({ treatment: "Balinese Massage" })    -> "Hi Spa Bali Moon, I'd like to book Balinese Massage."
 *   whatsappLink({ packageName: "Hot Stone Package A" })
 */
import { business } from "@/data/business";

type WhatsAppOptions = {
  /** Treatment the guest wants to book, e.g. "Balinese Massage". */
  treatment?: string;
  /** Package the guest wants to book, e.g. "Couple Massage Package B". */
  packageName?: string;
  /**
   * Which page the button is on, e.g. "Home Service page".
   * Added at the end of the message as "(Website: Home Service page)" so the team
   * knows where the guest came from. Leave it out when it would not help the team.
   */
  source?: string;
};

// The message's sentences, as templates: the translation memory
// (src/i18n/translate.ts) translates them, with the treatment's name, on the
// other languages' pages (translateWhatsAppUrl below).
const GREETING = "Hi Spa Bali Moon,";
const BOOK = "I'd like to book {name}.";
const BOOK_ANY = "I'd like to make a booking.";
const FROM = "(Website: {source})";

const fill = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (match, name: string) => values[name] ?? match);

/**
 * The one message format used by the whole site.
 * TODO FLOW-01: the old site opened WhatsApp without a message; a pre-filled
 * message was requested in the redesign brief. Adjust the wording here if needed.
 */
export function whatsappMessage({ treatment, packageName, source }: WhatsAppOptions = {}): string {
  const lines = [GREETING];

  if (treatment) {
    lines.push(fill(BOOK, { name: treatment }));
  } else if (packageName) {
    lines.push(fill(BOOK, { name: packageName }));
  } else {
    lines.push(BOOK_ANY);
  }

  if (source) {
    lines.push("", fill(FROM, { source }));
  }

  return lines.join("\n");
}

/**
 * A wa.me link from a page in another language, with its message translated
 * line by line, and the language's code on a last line ("[JA]") so the team
 * knows which language the guest reads. A link without a message is kept.
 */
export function translateWhatsAppUrl(
  url: string,
  t: (text: string, values?: Record<string, string>) => string,
  locale: string,
): string {
  const match = /^(https:\/\/wa\.me\/\d+)\?text=(.*)$/.exec(url);
  if (!match) return url;
  const book = /^I'd like to book (.+)\.$/;
  const from = /^\(Website: (.+)\)$/;
  const lines = decodeURIComponent(match[2])
    .split("\n")
    .map((line) => {
      if (!line) return line;
      const booked = book.exec(line);
      if (booked) return t(BOOK, { name: t(booked[1]) });
      const page = from.exec(line);
      if (page) return t(FROM, { source: t(page[1]) });
      return t(line);
    });
  lines.push(`[${locale.toUpperCase()}]`);
  return `${match[1]}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Full wa.me link with the message already filled in. */
export function whatsappLink(options: WhatsAppOptions = {}): string {
  const text = encodeURIComponent(whatsappMessage(options));
  return `https://wa.me/${business.whatsappNumber}?text=${text}`;
}

/** wa.me link with any ready-made message (used by forms that write their own text). */
export function whatsappNumberLink(message: string): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Plain chat link with no message — what every WhatsApp button on the live
 * site opens (header, hero, reserve banner, floating button).
 */
export const whatsappChatUrl = `https://wa.me/${business.whatsappNumber}`;
