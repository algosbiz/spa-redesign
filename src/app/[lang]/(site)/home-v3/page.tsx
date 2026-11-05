import { redirect } from "next/navigation";

/**
 * The v3 draft became the homepage on 1 October (src/app/(site)/page.tsx).
 * Links to the draft that were shared with the owner land there instead
 * (307, temporary: the draft URL was never public).
 */
export default function HomeV3Page() {
  redirect("/");
}
