import { allTreatments } from "@/components/home/treatments";
import { treatmentMenu } from "@/data/navigation";
import { localePath } from "@/i18n/config";
import { getLocale } from "@/i18n/server";
import { getBlogMenu } from "@/lib/blog/posts";

/** One row in the mobile menu's Treatments or Blog panel. */
export type MobileMenuEntry = { label: string; href: string; image: string; note?: string };
export type MobileMenuGroup = { title: string; items: MobileMenuEntry[] };
export type MobileMenuData = { treatments: MobileMenuGroup[]; posts: MobileMenuEntry[] };

/**
 * What the mobile menu's two inner panels list, built on the server and handed
 * to the (client) header as props, so the treatment and guide data stays out
 * of every page's JavaScript.
 *  - Treatments: the header's 23 treatments in their menu order and wording,
 *    split into massage and beauty as the homepage menu does, each with the
 *    homepage slider's photo and starting price ("From IDR 159.000").
 *  - Blog: the blog menu from the database (titles as set in /admin/), with
 *    the cover photos, in the page's language and linked in its folder
 *    (/jp/guide/…/). The desktop Blog dropdown lists the same entries.
 */
export async function mobileMenuData(): Promise<MobileMenuData> {
  const locale = await getLocale();
  const entries = treatmentMenu.map((t) => {
    const card = allTreatments.find((a) => a.href === t.href);
    return {
      group: card?.group ?? "massage",
      entry: { label: t.label, href: t.href, image: card?.image ?? "", note: card?.price ?? undefined },
    };
  });
  return {
    treatments: [
      { title: "Massage", items: entries.filter((e) => e.group === "massage").map((e) => e.entry) },
      { title: "Beauty & Body", items: entries.filter((e) => e.group === "beauty").map((e) => e.entry) },
    ],
    posts: (await getBlogMenu(locale)).map((p) => ({
      label: p.title,
      href: localePath(`/guide/${p.slug}/`, locale),
      image: p.cover_image ?? "",
    })),
  };
}
