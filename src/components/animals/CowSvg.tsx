interface Props {
  color: string;
}

export function CowSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Horns */}
      <path d="M30 20 L20 4 L28 16" fill="#FBBF24" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
      <path d="M70 20 L80 4 L72 16" fill="#FBBF24" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
      {/* Body */}
      <rect x="15" y="42" width="70" height="38" rx="14" fill={color} />
      {/* Spots */}
      <ellipse cx="32" cy="54" rx="10" ry="8" fill="#111" opacity="0.15" />
      <ellipse cx="62" cy="50" rx="8" ry="6" fill="#111" opacity="0.15" />
      <ellipse cx="50" cy="68" rx="7" ry="5" fill="#111" opacity="0.12" />
      {/* Head */}
      <circle cx="50" cy="30" r="22" fill={color} />
      {/* Ears */}
      <ellipse cx="25" cy="28" rx="8" ry="5" fill={color} transform="rotate(-20 25 28)" />
      <ellipse cx="75" cy="28" rx="8" ry="5" fill={color} transform="rotate(20 75 28)" />
      {/* Muzzle */}
      <ellipse cx="50" cy="40" rx="14" ry="9" fill="#F8C8DC" />
      {/* Nostrils */}
      <ellipse cx="44" cy="40" rx="3" ry="2" fill="#111" opacity="0.3" />
      <ellipse cx="56" cy="40" rx="3" ry="2" fill="#111" opacity="0.3" />
      {/* Eyes */}
      <circle cx="38" cy="28" r="4" fill="#111" />
      <circle cx="62" cy="28" r="4" fill="#111" />
      <circle cx="39" cy="27" r="1.5" fill="white" />
      <circle cx="63" cy="27" r="1.5" fill="white" />
      {/* Legs */}
      <rect x="22" y="76" width="12" height="18" rx="5" fill={color} />
      <rect x="66" y="76" width="12" height="18" rx="5" fill={color} />
      {/* Hooves */}
      <rect x="22" y="90" width="12" height="4" rx="2" fill="#555" />
      <rect x="66" y="90" width="12" height="4" rx="2" fill="#555" />
      {/* Bell */}
      <circle cx="50" cy="48" r="4" fill="#FBBF24" />
      <rect x="48" y="44" width="4" height="3" rx="1" fill="#FBBF24" />
    </svg>
  );
}
