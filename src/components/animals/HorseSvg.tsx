interface Props {
  color: string;
}

export function HorseSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Tail */}
      <path d="M84 48 Q96 56 90 72 Q88 78 92 82" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="55" cy="55" rx="30" ry="20" fill={color} />
      {/* Neck */}
      <path d="M32 48 L22 18 L38 16 L42 44 Z" fill={color} />
      {/* Mane along neck */}
      <path d="M26 10 L30 18 L26 26 L32 34 L28 42 L34 48" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" />
      <path d="M26 10 L30 18 L26 26 L32 34 L28 42 L34 48" fill="none" stroke="#111" strokeWidth="8" strokeLinecap="round" opacity="0.15" />
      {/* Head */}
      <ellipse cx="26" cy="16" rx="16" ry="11" fill={color} />
      {/* Ear */}
      <path d="M22 6 L18 -2 L26 4 Z" fill={color} />
      {/* Eye */}
      <circle cx="20" cy="14" r="4" fill="#111" />
      <circle cx="21" cy="13" r="1.5" fill="white" />
      {/* Nostril */}
      <circle cx="13" cy="20" r="2.5" fill="#111" opacity="0.3" />
      {/* Mouth line */}
      <path d="M12 22 L18 23" fill="none" stroke="#111" strokeWidth="1" opacity="0.3" />
      {/* Legs */}
      <rect x="32" y="70" width="10" height="22" rx="3" fill={color} />
      <rect x="60" y="70" width="10" height="22" rx="3" fill={color} />
      {/* Hooves */}
      <rect x="31" y="90" width="12" height="5" rx="2" fill="#555" />
      <rect x="59" y="90" width="12" height="5" rx="2" fill="#555" />
    </svg>
  );
}
