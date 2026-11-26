"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __sbmHydrated?: boolean;
  }
}

/**
 * Tells the page that React has arrived. A page loads its scripts at the
 * reader's first interaction (tools/speed/README.md); a tap or a form sent
 * before then is held by the inline script and done again on `sbm:hydrated`.
 */
export default function Hydrated() {
  useEffect(() => {
    window.__sbmHydrated = true;
    // Text typed into a field before React was there: React takes it for the
    // field's own starting value, so the form behind it would not know of it.
    document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach((field) => {
      if (!field.value || field.value === field.defaultValue || field.type === "hidden") return;
      (field as { _valueTracker?: { setValue(value: string): void } })._valueTracker?.setValue("");
      field.dispatchEvent(new Event("input", { bubbles: true }));
    });
    document.dispatchEvent(new Event("sbm:hydrated"));
  }, []);
  return null;
}
