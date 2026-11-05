import { MenuIcon } from "@/components/layout/MenuIcons";
import { bookingChats } from "@/data/booking";
import { getLocale } from "@/i18n/server";
import { whatsappChatUrl } from "@/lib/whatsapp";

/**
 * The round WhatsApp button fixed to the bottom right — the live markup. On a
 * language whose guests use another chat app (src/data/booking.ts) it opens
 * that app instead.
 */
export default async function FloatingWhatsApp() {
  const chat = bookingChats[await getLocale()];
  if (chat) {
    return (
      <a className="whatsapp-float lh" href={chat.url} target="_blank" rel="noopener noreferrer" aria-label={`Chat on ${chat.app}`}>
        <MenuIcon name="chat" />
      </a>
    );
  }
  return (
    <a className="whatsapp-float lh" href={whatsappChatUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}
