import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Body from "@/content/pages/reservation";
import { reservationPage } from "@/data/pages/reservation";
import { pageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: reservationPage.seo.title,
  description: reservationPage.seo.description,
  path: reservationPage.path,
});

/** /reservation/ — the live page (src/content/pages/reservation.tsx) under a photo banner whose title is the H1 (live has none). */
export default function ReservationPage() {
  return (
    <>
      <JsonLd data={pageSchema("Reservation", reservationPage.path)} />
      <Body />
    </>
  );
}
