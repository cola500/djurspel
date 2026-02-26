interface Props {
  color: string;
}

export function HorseSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body - large oval */}
      <ellipse cx="55" cy="60" rx="30" ry="22" fill={color} />
      {/* Long neck */}
      <path d="M35 52 L25 20 L40 18 L45 48 Z" fill={color} />
      {/* Head */}
      <ellipse cx="28" cy="18" rx="16" ry="12" fill={color} />
      {/* Mane - thick zigzag along neck */}
      <path
        d="M28 8 L32 16 L28 24 L34 32 L30 40 L36 48"
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Legs - thick */}
      <rect x="32" y="76" width="12" height="20" rx="4" fill={color} />
      <rect x="60" y="76" width="12" height="20" rx="4" fill={color} />
      {/* Tail */}
      <path d="M85 50 Q95 60 88 75" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
      {/* Eye */}
      <circle cx="22" cy="16" r="3" fill="#111" />
    </svg>
  );
}
