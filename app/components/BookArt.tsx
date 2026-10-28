// Original flat illustrations for the /book page, drawn in the editorial palette
// (sage #c4d2c5, deep green #314f49, coral #ef765d, gold #eabf7d, cream #ebe9e1).

const SAGE = "#c4d2c5";
const DEEP = "#314f49";
const CORAL = "#ef765d";
const GOLD = "#eabf7d";
const SKIN = "#e7c8a2";
const CREAM = "#ebe9e1";
const LEAF = "#88a48b";

type Props = { className?: string; label: string };

export function HeroArt({ className, label }: Props) {
  return (
    <svg viewBox="0 0 560 620" role="img" aria-label={label} className={className}>
      <rect width="560" height="620" fill={SAGE} />
      <circle cx="420" cy="120" r="88" fill={GOLD} />
      <path d="M90 620V330a190 190 0 0 1 380 0v290z" fill={DEEP} />
      <path d="M170 620V360a110 110 0 0 1 220 0v260z" fill={SKIN} />
      <ellipse cx="190" cy="340" rx="44" ry="150" fill="none" stroke="rgba(49,79,73,.35)" transform="rotate(22 190 340)" />
      <ellipse cx="370" cy="420" rx="26" ry="95" fill="none" stroke="rgba(49,79,73,.35)" transform="rotate(-23 370 420)" />
      <path d="M30 330c34-70 44-130 20-200 46 36 60 120 24 200z" fill={LEAF} />
      <path d="M60 200c18-40 20-76 4-112 30 20 36 70 8 112z" fill="#e4a36a" />
      <path d="M520 560c-28-60-34-108-14-168 40 32 50 100 14 168z" fill={CORAL} />
      <g transform="translate(300 420)">
        <rect width="210" height="140" rx="12" fill="#fff" />
        <rect x="9" y="9" width="192" height="122" rx="7" fill={CREAM} />
        <circle cx="105" cy="52" r="22" fill={DEEP} />
        <path d="M63 124a42 42 0 0 1 84 0z" fill={DEEP} />
        <rect x="150" y="84" width="44" height="34" rx="5" fill={DEEP} />
        <circle cx="172" cy="97" r="6" fill={SKIN} />
        <path d="M158 118a14 14 0 0 1 28 0z" fill={SKIN} />
        <rect x="-18" y="140" width="246" height="10" rx="5" fill="#fff" />
      </g>
      <circle cx="318" cy="468" r="5" fill={CORAL} />
    </svg>
  );
}

export function StepChooseArt({ className, label }: Props) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} className={className}>
      <rect width="400" height="300" fill={SAGE} />
      <circle cx="320" cy="70" r="40" fill={GOLD} />
      <rect x="40" y="110" width="150" height="150" rx="6" fill="#fff" />
      <path d="M60 260v-70a55 55 0 0 1 110 0v70z" fill={DEEP} />
      <path d="M92 260v-52a23 23 0 0 1 46 0v52z" fill={SKIN} />
      <rect x="210" y="150" width="150" height="110" rx="6" fill={DEEP} />
      <rect x="226" y="166" width="118" height="62" rx="4" fill={CREAM} />
      <circle cx="285" cy="190" r="12" fill={DEEP} />
      <path d="M262 228a23 23 0 0 1 46 0z" fill={DEEP} />
      <circle cx="198" cy="140" r="9" fill={CORAL} />
      <path d="M20 280c14-30 18-56 6-88 24 18 30 56 10 88z" fill={LEAF} />
    </svg>
  );
}

export function StepTimeArt({ className, label }: Props) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} className={className}>
      <rect width="400" height="300" fill={GOLD} opacity=".55" />
      <rect x="70" y="50" width="260" height="210" rx="10" fill="#fff" />
      <rect x="70" y="50" width="260" height="46" rx="10" fill={DEEP} />
      <circle cx="120" cy="50" r="7" fill={CORAL} />
      <circle cx="280" cy="50" r="7" fill={CORAL} />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <rect key={`${r}-${c}`} x={92 + c * 46} y={114 + r * 34} width="32" height="22" rx="4" fill={r === 1 && c === 2 ? CORAL : CREAM} />
        )),
      )}
      <circle cx="338" cy="236" r="40" fill={DEEP} />
      <circle cx="338" cy="236" r="30" fill={CREAM} />
      <path d="M338 214v22l14 8" stroke={DEEP} strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function StepSendArt({ className, label }: Props) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={label} className={className}>
      <rect width="400" height="300" fill={CORAL} opacity=".85" />
      <circle cx="70" cy="70" r="46" fill={GOLD} />
      <rect x="120" y="70" width="170" height="150" rx="22" fill="#fff" />
      <rect x="140" y="98" width="110" height="12" rx="6" fill={SAGE} />
      <rect x="140" y="124" width="130" height="12" rx="6" fill={CREAM} />
      <rect x="140" y="150" width="90" height="12" rx="6" fill={CREAM} />
      <path d="M150 220l-16 36 44-24z" fill="#fff" />
      <rect x="230" y="168" width="130" height="64" rx="18" fill={DEEP} />
      <path d="M246 200l16 16 30-34" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="300" y="188" width="46" height="10" rx="5" fill={SAGE} />
    </svg>
  );
}

export function CalmArt({ className, label }: Props) {
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label={label} className={className}>
      <rect width="640" height="360" fill={DEEP} />
      <circle cx="500" cy="120" r="70" fill={GOLD} />
      <path d="M0 360V250c120-70 240-70 360 0s200 40 280-20v130z" fill="#3d5f58" />
      <path d="M0 360V290c140-50 260-30 380 10s190 10 260-10v70z" fill={SAGE} opacity=".9" />
      <path d="M120 300c-10-50-6-90 14-130 24 38 24 86 2 130z" fill={CORAL} />
      <path d="M160 300c10-40 24-72 52-96-6 40-22 74-52 96z" fill={LEAF} />
    </svg>
  );
}
