import type { TreeValue } from "./tree";

/**
 * What /admin/ may edit on a treatment page, section by section: the content
 * props of each section component, with the words the owner sees. Anything
 * not listed (decoration shapes, spacing flags, class names) is layout and
 * always comes from the page's built-in version (src/content/treatments/).
 *
 * `placeholder` is what the component shows when the field is left empty.
 */

export type FieldKind =
  | "text" // one line
  | "textarea" // a paragraph
  | "link" // a button's address
  | "image" // one photo
  | "list" // several lines of text (bullet points)
  | "images" // several photos
  | "items"; // repeated groups of fields (packages, questions…)

export type Field = {
  key: string;
  label: string;
  kind: FieldKind;
  hint?: string;
  placeholder?: string;
  /** "items": the fields of one item, and what one item is called. */
  fields?: Field[];
  itemLabel?: string;
  /** "textarea": may hold links, written [words](/address/) in the admin. */
  links?: boolean;
  /** Inside "items": left out of the item when empty. */
  optional?: boolean;
  /** "items": exactly as many as now (one per icon), no adding or removing. */
  fixedCount?: boolean;
  /** "image"/"images": longest side after upload; "banner" also makes the phone crop. */
  maxWidth?: number;
  banner?: boolean;
  /** Hidden when it does not apply, e.g. single sessions on a page that shows groups. */
  hideIf?: (props: Record<string, TreeValue>) => boolean;
};

export type SectionSchema = {
  label: string;
  fields: Field[];
  /** Shown instead of fields for a section whose content is shared site-wide. */
  note?: string;
};

const heading = (placeholder?: string): Field[] => [
  { key: "subTitle", label: "Small heading", kind: "text", hint: "The short line above the heading.", placeholder },
  { key: "title", label: "Heading", kind: "text" },
];

const sessionFields: Field[] = [
  { key: "duration", label: "Duration", kind: "text", placeholder: "1 Hour" },
  { key: "price", label: "Price", kind: "text", placeholder: "IDR 159.000" },
  { key: "details", label: "Points", kind: "list", optional: true },
];

/** A paragraph that may link to other pages. */
const paragraph: Field = {
  key: "text",
  label: "Paragraph",
  kind: "textarea",
  links: true,
  hint: "To add a link, write [the words](/seminyak/deep-tissue-massage/).",
};

const textAndPhoto: SectionSchema = {
  label: "Text & photo",
  fields: [
    ...heading(),
    paragraph,
    { key: "featuresLeft", label: "Bullet points, left column", kind: "list" },
    { key: "featuresRight", label: "Bullet points, right column", kind: "list" },
    { key: "image", label: "Photo", kind: "image", maxWidth: 1200 },
    // A section whose decorative badge was removed (showBadge: false) has none to edit.
    {
      key: "badgeTopText",
      label: "Photo badge, top line",
      kind: "text",
      placeholder: "17+ Years",
      hideIf: (p) => p.showBadge === false,
    },
    {
      key: "badgeBottomText",
      label: "Photo badge, bottom line",
      kind: "text",
      placeholder: "Experience",
      hideIf: (p) => p.showBadge === false,
    },
    { key: "buttonText", label: "Button text", kind: "text", placeholder: "Learn More" },
    { key: "buttonLink", label: "Button link", kind: "link", placeholder: "/seminyak/" },
  ],
};

export const SECTIONS: Record<string, SectionSchema> = {
  PageBanner: {
    label: "Banner",
    fields: [
      { key: "subTitle", label: "Small heading", kind: "text", hint: "The short line above the page title." },
      {
        key: "titleSpan",
        label: "Page title, first part",
        kind: "text",
        hint: "The page’s main heading (H1) is this part followed by the next one.",
      },
      { key: "title", label: "Page title, second part", kind: "text" },
      { key: "text", label: "Text under the title", kind: "textarea", hint: "Optional." },
      // No button fields: every banner has the same "Book on WhatsApp" button
      // and opening-hours badge (owner, 22 Oct).
      {
        key: "image",
        label: "Banner photo",
        kind: "image",
        banner: true,
        maxWidth: 1920,
        hint: "A wide photo (about 1920 × 850). A phone version is cut from the middle automatically.",
      },
    ],
  },
  QuickFacts: {
    label: "Opening & quick facts",
    fields: [
      {
        ...paragraph,
        label: "Opening paragraph",
        hint: "Answer first: the spa, Seminyak, the price and the options. To add a link, write [the words](/seminyak/).",
      },
      {
        key: "items",
        label: "Quick facts",
        kind: "items",
        itemLabel: "Fact",
        fields: [
          { key: "label", label: "Label", kind: "text", placeholder: "Treatment" },
          { key: "value", label: "Text", kind: "textarea" },
        ],
      },
    ],
  },
  AboutIntro: {
    label: "Introduction",
    fields: [
      ...heading(),
      paragraph,
      { key: "feature1Title", label: "Highlight 1, title", kind: "text" },
      { key: "feature1Text", label: "Highlight 1, text", kind: "textarea" },
      { key: "feature2Title", label: "Highlight 2, title", kind: "text" },
      { key: "feature2Text", label: "Highlight 2, text", kind: "textarea" },
      { key: "primaryImage", label: "Large photo", kind: "image", maxWidth: 1200 },
      { key: "secondaryImage", label: "Small photo", kind: "image", maxWidth: 1200 },
    ],
  },
  SessionOptions: {
    label: "Session prices",
    fields: [
      ...heading(),
      paragraph,
      {
        key: "sessions",
        label: "Sessions",
        kind: "items",
        itemLabel: "Session",
        fields: sessionFields,
        hideIf: (p) => Array.isArray(p.groups) && p.groups.length > 0,
      },
      {
        key: "groups",
        label: "Session groups",
        kind: "items",
        itemLabel: "Group",
        fields: [
          { key: "title", label: "Group title", kind: "text" },
          { key: "sessions", label: "Sessions", kind: "items", itemLabel: "Session", fields: sessionFields },
        ],
        hideIf: (p) => !Array.isArray(p.groups) || p.groups.length === 0,
      },
    ],
  },
  TreatmentPricing: {
    label: "Packages",
    fields: [
      ...heading(),
      paragraph,
      {
        key: "packages",
        label: "Packages",
        kind: "items",
        itemLabel: "Package",
        fields: [
          { key: "name", label: "Name", kind: "text", placeholder: "Package A" },
          { key: "price", label: "Price", kind: "text", placeholder: "IDR 449.000" },
          { key: "suffix", label: "After the price", kind: "text", hint: "Optional, e.g. / Hr", optional: true },
          { key: "treatments", label: "Included treatments", kind: "list" },
        ],
      },
      {
        key: "images",
        label: "Package photos",
        kind: "images",
        maxWidth: 1200,
        hint: "One photo per package, in the same order.",
      },
    ],
  },
  Funfacts: {
    label: "Highlights bar",
    fields: [
      {
        key: "items",
        label: "Highlights",
        kind: "items",
        itemLabel: "Highlight",
        fixedCount: true,
        hint: "Four, one per icon.",
        fields: [
          { key: "title", label: "Big words", kind: "text" },
          { key: "text", label: "Small words", kind: "text" },
        ],
      },
    ],
  },
  TreatmentTestimonials: {
    label: "Guest reviews",
    fields: [],
    note: "The six guest reviews are the same on every treatment page, so they are not edited here.",
  },
  AboutSplit: textAndPhoto,
  AboutSplitAlt: textAndPhoto,
  FaqSection: {
    label: "FAQ",
    fields: [
      ...heading(),
      // No placeholder: left empty, the photo shows no words (copy rewrite, 15 Oct).
      { key: "imageTitle", label: "Words on the photo", kind: "text", hint: "Optional." },
      { key: "image", label: "Photo", kind: "image", maxWidth: 1200 },
      {
        key: "items",
        label: "Questions",
        kind: "items",
        itemLabel: "Question",
        fields: [
          { key: "question", label: "Question", kind: "text" },
          { key: "answer", label: "Answer", kind: "textarea" },
        ],
      },
    ],
  },
  TreatmentLinks: {
    label: "Treatment links",
    fields: [{ key: "title", label: "Heading", kind: "text" }, paragraph],
    note: "The list of treatments under the text comes from the website menu.",
  },
  ServiceSlider: {
    label: "Other treatments",
    fields: [{ key: "title", label: "Heading", kind: "text" }],
    note: "The four treatment cards in this slider are chosen for each page in the code.",
  },
  ReserveCta: {
    label: "Closing banner",
    fields: [
      { key: "title", label: "Heading", kind: "text" },
      { key: "text", label: "Paragraph", kind: "textarea" },
      { key: "closingText", label: "Last line", kind: "textarea" },
      { key: "backgroundImage", label: "Background photo", kind: "image", maxWidth: 1920 },
    ],
  },
};
