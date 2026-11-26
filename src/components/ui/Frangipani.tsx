import { useId } from "react";

/**
 * Frangipani ornaments, drawn exactly as on the live site: five rotated
 * petals filled with a gold-to-white gradient, a gold radial glow at the heart.
 * Class names are the live CSS-module names (renamed, see src/styles/live.css).
 */
const PETAL = "M18 6C34-12 52-28 56-54c4-26-12-49-40-51-28-2-48 15-47 41 1 24 15 50 19 70z";
const STROKE = "rgba(150, 118, 44, 0.28)";

/** React ids contain characters that are awkward inside url(#…). */
const useSvgId = () => useId().replace(/[^a-zA-Z0-9_-]/g, "");

function PetalGradient({ id }: { id: string }) {
  return (
    <linearGradient id={`${id}-p`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="-106">
      <stop offset="0%" stopColor="#D9A52C" />
      <stop offset="16%" stopColor="#F3D488" />
      <stop offset="42%" stopColor="#FCF2DE" />
      <stop offset="100%" stopColor="#FFFFFF" />
    </linearGradient>
  );
}

function HeartGradient({ id }: { id: string }) {
  return (
    <radialGradient id={`${id}-c`}>
      <stop offset="0%" stopColor="#C79422" stopOpacity="0.85" />
      <stop offset="45%" stopColor="#DCAE3A" stopOpacity="0.45" />
      <stop offset="100%" stopColor="#DCAE3A" stopOpacity="0" />
    </radialGradient>
  );
}

function Petals({ id }: { id: string }) {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          transform={`rotate(${72 * i})`}
          d={PETAL}
          fill={`url(#${id}-p)`}
          stroke={STROKE}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      ))}
      <circle r="42" fill={`url(#${id}-c)`} />
    </>
  );
}

/** A whole flower. */
export function Bloom({ className }: { className?: string }) {
  const id = useSvgId();
  return (
    <svg className={className} viewBox="-120 -120 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <PetalGradient id={id} />
        <HeartGradient id={id} />
      </defs>
      <Petals id={id} />
    </svg>
  );
}

/** A single loose petal. */
export function Petal({ className }: { className?: string }) {
  const id = useSvgId();
  return (
    <svg className={className} viewBox="-36 -112 96 124" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <PetalGradient id={id} />
      </defs>
      <path d={PETAL} fill={`url(#${id}-p)`} stroke={STROKE} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

/** The drifting spray of three flowers and two petals behind the hero. */
export function FrangipaniSpray() {
  return (
    <div className="frangipani-spray__spray" aria-hidden="true">
      <span className="frangipani-spray__glow" />
      <Bloom className="frangipani-spray__bloom frangipani-spray__one" />
      <Bloom className="frangipani-spray__bloom frangipani-spray__two" />
      <Bloom className="frangipani-spray__bloom frangipani-spray__three" />
      <Petal className="frangipani-spray__petal frangipani-spray__petal-a" />
      <Petal className="frangipani-spray__petal frangipani-spray__petal-b" />
    </div>
  );
}

/** Rule · bud · flower · bud · rule, above the hero title. */
export function FrangipaniMark() {
  return (
    <span className="frangipani-spray__mark" aria-hidden="true">
      <i className="frangipani-spray__rule" />
      <Bloom className="frangipani-spray__mark-bud" />
      <Bloom className="frangipani-spray__mark-bloom" />
      <Bloom className="frangipani-spray__mark-bud" />
      <i className="frangipani-spray__rule frangipani-spray__rule-flip" />
    </span>
  );
}
