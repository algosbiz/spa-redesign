import type { Metadata } from "next";
import AllTreatmentsGrid from "@/components/home/drafts/AllTreatmentsGrid";
import AllTreatmentsSlider from "@/components/home/AllTreatmentsSlider";
import MenuDurations from "@/components/home/MenuDurations";
import MenuTable from "@/components/home/drafts/MenuTable";
import TreatmentMenu from "@/components/home/drafts/TreatmentMenu";
import { pageMetadata } from "@/i18n/metadata";
import "@/styles/home-v2.css";
import "@/styles/home-v2-options.css";

// A design draft: kept out of search results.
export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: "Homepage v2 options",
  description: "Design options for the Spa Bali Moon homepage draft.",
  path: "/home-v2/options/",
  index: false,
});

function Label({ name, text }: { name: string; text: string }) {
  return (
    <div className="v2-opt-label">
      <div className="container">
        <strong>{name}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

/**
 * Options the owner is choosing between for /home-v2/, each labelled: two
 * ways to show all treatments, and two alternatives to the current spa-menu
 * prices (shown first, for comparison).
 */
export default function HomeV2OptionsPage() {
  return (
    <div className="page-wrapper lh p-home home-v2 v2-options">
      <Label name="Treatments · Opsi 1" text="Slider: semua 23 treatment dalam satu baris geser" />
      <AllTreatmentsSlider />
      <Label name="Treatments · Opsi 2" text="Grid: semua treatment sekaligus, dengan filter Massage / Beauty" />
      <AllTreatmentsGrid />
      <Label name="Price list · Sekarang" text="Harga awal di tiap baris, klik untuk daftar lengkap (yang ada di /home-v2/)" />
      <TreatmentMenu />
      <Label name="Price list · Opsi A" text="Pilih durasi sekali, semua harga ikut berubah" />
      <MenuDurations />
      <Label name="Price list · Opsi B" text="Tabel harga: semua durasi langsung terlihat" />
      <MenuTable />
    </div>
  );
}
