interface Props {
  color: string;
}

export function FrogSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <ellipse cx="50" cy="58" rx="36" ry="26" fill={color} />
      {/* Belly - lighter */}
      <ellipse cx="50" cy="64" rx="24" ry="16" fill="white" opacity="0.15" />
      {/* Back legs */}
      <path d="M18 68 L6 82 L14 80 L18 90 L22 78 Z" fill={color} />
      <path d="M82 68 L94 82 L86 80 L82 90 L78 78 Z" fill={color} />
      {/* Bulging eyes */}
      <circle cx="32" cy="30" r="15" fill={color} />
      <circle cx="68" cy="30" r="15" fill={color} />
      {/* Eyeballs */}
      <circle cx="32" cy="28" r="9" fill="white" />
      <circle cx="68" cy="28" r="9" fill="white" />
      {/* Pupils */}
      <circle cx="34" cy="28" r="5" fill="#111" />
      <circle cx="70" cy="28" r="5" fill="#111" />
      {/* Eye highlights */}
      <circle cx="36" cy="26" r="2" fill="white" />
      <circle cx="72" cy="26" r="2" fill="white" />
      {/* Wide smile */}
      <path d="M24 60 Q50 76 76 60" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
      {/* Nostrils */}
      <circle cx="42" cy="48" r="2" fill="#111" opacity="0.3" />
      <circle cx="58" cy="48" r="2" fill="#111" opacity="0.3" />
      {/* Front feet */}
      <ellipse cx="22" cy="78" rx="6" ry="3" fill={color} />
      <ellipse cx="78" cy="78" rx="6" ry="3" fill={color} />
      {/* Spots on back */}
      <circle cx="40" cy="52" r="4" fill="#111" opacity="0.08" />
      <circle cx="60" cy="50" r="3" fill="#111" opacity="0.08" />
    </svg>
  );
}
