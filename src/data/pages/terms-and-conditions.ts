// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/terms-and-conditions/
// FEE-01 settled (22 Oct): 75k within Seminyak, varying outside, matches the fee by area in business.homeService.zones.

import type { TextPage } from "../types";

/**
 * PAGE TEXT (/terms-and-conditions/)
 * The page is a list of blocks shown top to bottom (heading, paragraph, list, link).
 * A link with href "whatsapp" opens the WhatsApp booking chat.
 */
export const termsPage: TextPage = {
  path: "/terms-and-conditions/",
  seo: {
    title: "Spa Bali Moon Terms and Conditions",
    description: "Review Spa Bali Moon’s terms and conditions outlining policies, services, and guest responsibilities for a seamless experience.",
  },
  title: "Terms & Conditions",
  blocks: [
    {
      kind: "paragraph",
      text: "Welcome to Spa Bali Moon. By booking our services in the spa or choosing home service treatments, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.",
    },
    { kind: "heading", level: 3, text: "Spa Etiquette" },
    {
      kind: "paragraph",
      text: "Our spa warmly welcomes guests of all genders aged 18 and above. Visitors between 16–18 years may join with written parental consent, while children under 16 must be accompanied by a parent throughout the treatment.",
    },
    { kind: "heading", level: 3, text: "Bookings & Arrival" },
    {
      kind: "paragraph",
      text: "We recommend arriving at least 12 minutes before your scheduled appointment. This allows time for a short consultation to understand your treatment goals. Please note that late arrivals may shorten your session to ensure punctuality for the next guest.",
    },
    { kind: "heading", level: 3, text: "Maintaining Serenity" },
    {
      kind: "paragraph",
      text: "Spa Bali Moon is designed as a sanctuary of calm. To preserve this tranquil environment, we kindly ask that you:",
    },
    {
      kind: "list",
      items: [
        { text: "Switch off or silence mobile devices before entering." },
        { text: "Keep voices low and respect the peaceful atmosphere." },
        { text: "Secure personal belongings and jewelry safely, as the spa cannot accept responsibility for lost items." },
        {
          text: "If you feel unsatisfied with your treatment, please notify reception within 10 minutes so we can resolve the matter promptly.",
        },
      ],
    },
    { kind: "heading", level: 3, text: "Respect & Professional Conduct" },
    {
      kind: "paragraph",
      text: "We uphold a strict zero‑tolerance policy against inappropriate behavior, including harassment of therapists or staff. Should such conduct occur, the treatment will be stopped immediately and the guest asked to leave. Protecting the safety and dignity of our team is our highest priority.",
    },
    { kind: "heading", level: 3, text: "Cancellation & Rescheduling" },
    {
      kind: "paragraph",
      text: "Appointments may be canceled or rescheduled up to 12 hours in advance without penalty. Cancellations made within 12 hours will incur a 50% fee, while no‑shows are charged the full treatment cost or deposit amount.",
    },
    { kind: "heading", level: 3, text: "Home Service Transport" },
    {
      kind: "paragraph",
      text: "For home service treatments, a transport fee of IDR 75.000 applies to accommodations within Seminyak. Fees for locations outside Seminyak vary depending on distance and travel time, and can be confirmed via WhatsApp prior to booking.",
    },
    { kind: "heading", level: 3, text: "Liability" },
    {
      kind: "paragraph",
      text: "Spa Bali Moon is not responsible for any accidents, injuries, or health issues that may occur during or after treatments.",
    },
    { kind: "heading", level: 4, text: "Hours of Operation" },
    { kind: "paragraph", text: "We are open daily from 9:00 AM to 11:00 PM, seven days a week." },
    {
      kind: "paragraph",
      text: "Should you require any further clarification regarding these Terms & Conditions, please reach out to us:",
    },
    { kind: "link", label: "Contact via WhatsApp", href: "whatsapp" },
  ],
};
