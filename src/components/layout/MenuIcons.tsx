import { LotusPaths } from "@/components/ui/Lotus";

export type MenuIconName = "lotus" | "tag" | "stones" | "home" | "calendar" | "book" | "chat" | "mail" | "clock";

/** One line icon per menu item, drawn alike (24px grid, 1.5 stroke, round). */
const PATHS: Record<Exclude<MenuIconName, "lotus">, React.ReactNode> = {
  tag: (
    <>
      <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  stones: (
    <>
      <ellipse cx="12" cy="18.5" rx="8.5" ry="2.8" />
      <ellipse cx="12" cy="13.2" rx="6.3" ry="2.4" />
      <ellipse cx="12" cy="8.4" rx="4.2" ry="2" />
      <path d="M9 4.2c.8-.7.8-1.4 0-2.1M12 4.2c.8-.7.8-1.4 0-2.1M15 4.2c.8-.7.8-1.4 0-2.1" />
    </>
  ),
  home: (
    <>
      <path d="M3 10.5L12 3.5l9 7" />
      <path d="M5.5 9v11.5h13V9" />
      <path d="M12 17.5s-3.2-1.9-3.2-3.9a1.7 1.7 0 0 1 3.2-.8 1.7 1.7 0 0 1 3.2.8c0 2-3.2 3.9-3.2 3.9z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M9 15.5l2 2 4-4" />
    </>
  ),
  book: (
    <>
      <path d="M3 5.5c2.6-1.5 6-1.5 9 .6 3-2.1 6.4-2.1 9-.6V19c-2.6-1.5-6-1.5-9 .6-3-2.1-6.4-2.1-9-.6z" />
      <path d="M12 6.1v13.5" />
    </>
  ),
  chat: <path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.6L3.5 20.5l1.4-4.4a8.5 8.5 0 1 1 15.6-4.6z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

/** The mobile menu's and the footer's line icons, in the current colour. */
export function MenuIcon({ name, className }: { name: MenuIconName; className?: string }) {
  if (name === "lotus")
    return (
      <svg viewBox="0 0 25 26" aria-hidden="true" className={className}>
        <LotusPaths fill="currentColor" />
      </svg>
    );
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
