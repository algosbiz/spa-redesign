import ReserveCta from "@/components/sections/ReserveCta";
import { home } from "@/data/pages/home";

/** "A Better Way to Experience Wellness in Bali" — the homepage's closing banner. */
export default function HomeReserveCta() {
  return (
    <div className="jsx-home homepage-closing-section section__decoration-top section__decoration-bottom bg-sub">
      <ReserveCta
        standardSpacing
        {...home.reserve}
        leftShapeSrc="/images/shape/banner-six-shape2.png"
        rightShapeSrc="/images/shape/step-shape-left.png"
      />
    </div>
  );
}
