import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Body from "@/content/pages/reservation";
import { reservationPage } from "@/data/pages/reservation";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import { pageSchema } from "@/lib/schema";

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: reservationPage.seo.title,
  description: reservationPage.seo.description,
  path: reservationPage.path,
});

/** /reservation/ — the live page (src/content/pages/reservation.tsx) under a photo banner whose title is the H1 (live has none). */
export default async function ReservationPage() {
  const { render } = await getI18n();
  return render(
    <>
      <JsonLd data={pageSchema("Reservation", reservationPage.path)} />
      <Body />
    </>
  );
}
