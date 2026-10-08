import { MenuIcon } from "@/components/layout/MenuIcons";
import { business } from "@/data/business";
import { whatsappChatUrl } from "@/lib/whatsapp";

/**
 * Phones only (below 768px): a bar fixed to the bottom of the screen with a
 * WhatsApp button, in place of the round floating button. The owner compared
 * two layouts (1 Oct) and chose the second one (WhatsApp + Contact Us side by
 * side) with one button only, outlined: the site's pill .btn-two as it is,
 * at the size it had there (half the bar). Owner, 8 Oct: the button on the
 * left half and, on the right, the hours the chat is answered in a
 * paper-coloured pill (picked from five mock-ups): a gold clock in a white
 * circle and "From 9am - 11pm" (the footer's hours, src/data/business.ts).
 * Styles in
 * src/styles/custom.css; the floating button only hides while this bar is on
 * the page, so removing it from src/app/layout.tsx brings the floating
 * button back on phones.
 */
export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar lh">
      <div className="mobile-action-bar__row">
        <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer" className="btn-two mobile-action-bar__btn">
          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
          WhatsApp
        </a>
        <span className="mobile-action-bar__hours">
          <span className="mobile-action-bar__hours-icon">
            <MenuIcon name="clock" />
          </span>
          <span className="mobile-action-bar__hours-text">
            <span className="mobile-action-bar__hours-from">From</span> {business.openingHours.display}
          </span>
        </span>
      </div>
    </div>
  );
}
