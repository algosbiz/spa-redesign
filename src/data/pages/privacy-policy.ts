// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/privacy-policy/
// TODO CONTACT-01: this page shows spabalimoon@gmail.com; the old homepage schema used info@spabalimoon.com.
// FEE-01 settled (22 Oct): the fee depends on the area, so "calculated based on distance and time" stays true.

import type { TextPage } from "../types";

/**
 * PAGE TEXT (/privacy-policy/)
 * The page is a list of blocks shown top to bottom (heading, paragraph, list, link).
 * A link with href "whatsapp" opens the WhatsApp booking chat.
 */
export const privacyPolicyPage: TextPage = {
  path: "/privacy-policy/",
  seo: {
    title: "Spa Bali Moon Privacy Policy",
    description: "Read Spa Bali Moon’s privacy policy detailing data protection, guest confidentiality, and secure handling of personal information.",
  },
  title: "Privacy Policy",
  blocks: [
    {
      kind: "paragraph",
      text: "At Spa Bali Moon, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our spa or request home service treatments.",
    },
    { kind: "heading", level: 3, text: "Information We Collect" },
    { kind: "paragraph", text: "We may collect personal details in the following ways:" },
    {
      kind: "list",
      items: [
        {
          text: "When booking appointments, completing forms, or contacting us via phone, WhatsApp, or email.",
          lead: "Directly from you:",
        },
        {
          text: "Information such as health conditions, preferences, or treatment notes to ensure safe and personalized care.",
          lead: "During services:",
        },
        { text: "For processing transactions securely (e.g., card or digital payments).", lead: "Payment details:" },
      ],
    },
    {
      kind: "paragraph",
      text: "When you use our website or social media platforms, we may collect basic browsing data (cookies, device info).",
      lead: "Online interactions:",
    },
    { kind: "heading", level: 3, text: "How We Use Your Information" },
    { kind: "paragraph", text: "Your information helps us:" },
    {
      kind: "list",
      items: [
        { text: "Schedule and manage spa and home service appointments." },
        { text: "Provide safe, customized treatments based on your preferences." },
        { text: "Process payments and issue receipts." },
        { text: "Communicate promotions, updates, or special offers (with your consent)." },
        { text: "Improve our services and client experience." },
        { text: "Ensure the safety of our therapists during home visits." },
      ],
    },
    { kind: "heading", level: 3, text: "Data Protection" },
    {
      kind: "paragraph",
      text: "We implement physical, electronic, and managerial safeguards to protect your information against unauthorized access, misuse, or disclosure. While we strive to maintain high standards of security, no system is completely impenetrable, and we cannot guarantee absolute protection.",
    },
    { kind: "heading", level: 3, text: "Sharing of Information" },
    { kind: "paragraph", text: "We do not sell your personal information. We may share limited data only with:" },
    {
      kind: "list",
      items: [
        { text: "For payment processing or booking systems.", lead: "Service providers:" },
        { text: "To deliver your requested treatment safely.", lead: "Therapists:" },
        { text: "If required by law or to protect the safety of our staff and clients.", lead: "Legal authorities:" },
      ],
    },
    { kind: "heading", level: 3, text: "Home Service Privacy" },
    { kind: "paragraph", text: "For home service treatments:" },
    {
      kind: "list",
      items: [
        { text: "Your address and contact details are used solely to arrange transport and confirm bookings." },
        {
          text: "Therapists are instructed to maintain strict confidentiality regarding your location and personal details.",
        },
        { text: "Transport fees are calculated based on distance and time, and discussed transparently before service." },
      ],
    },
    { kind: "heading", level: 3, text: "Your Rights" },
    { kind: "paragraph", text: "You have the right to:" },
    {
      kind: "list",
      items: [
        { text: "Access the personal information we hold about you." },
        { text: "Request corrections to inaccurate details." },
        { text: "Opt out of marketing communications at any time." },
        { text: "Request deletion of your data, subject to legal and operational requirements." },
      ],
    },
    { kind: "heading", level: 4, text: "Hours of Operation" },
    {
      kind: "paragraph",
      text: "Spa Bali Moon operates daily from 9:00 AM to 11:00 PM, offering both in‑spa and home service treatments.",
    },
    { kind: "heading", level: 3, text: "Contact Us" },
    {
      kind: "paragraph",
      text: "If you have questions about this Privacy Policy or wish to exercise your rights, please contact us via:",
    },
    { kind: "heading", level: 6, text: "Email" },
    { kind: "link", label: "spabalimoon@gmail.com", href: "mailto:spabalimoon@gmail.com" },
    { kind: "heading", level: 6, text: "WhatsApp" },
    { kind: "link", label: "+62 878-6317-5144", href: "whatsapp" },
    { kind: "heading", level: 6, text: "Address" },
    { kind: "paragraph", text: "Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361" },
  ],
};
