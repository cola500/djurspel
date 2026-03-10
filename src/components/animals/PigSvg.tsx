interface Props {
  color: string;
}

export function PigSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <ellipse cx="50" cy="62" rx="32" ry="24" fill={color} />
      {/* Belly */}
      <ellipse cx="50" cy="68" rx="22" ry="14" fill="white" opacity="0.15" />
      {/* Head */}
      <circle cx="50" cy="38" r="22" fill={color} />
      {/* Ears */}
      <path d="M30 28 L24 12 L40 24 Z" fill={color} />
      <path d="M70 28 L60 24 L76 12 Z" fill={color} />
      {/* Inner ears */}
      <path d="M31 27 L27 16 L38 24 Z" fill="#F472B6" opacity="0.4" />
      <path d="M69 27 L62 24 L73 16 Z" fill="#F472B6" opacity="0.4" />
      {/* Eyes */}
      <circle cx="40" cy="34" r="4" fill="#111" />
      <circle cx="60" cy="34" r="4" fill="#111" />
      {/* Eye highlights */}
      <circle cx="42" cy="32" r="1.5" fill="white" />
      <circle cx="62" cy="32" r="1.5" fill="white" />
      {/* Snout */}
      <ellipse cx="50" cy="46" rx="12" ry="8" fill={color} stroke="#111" strokeWidth="1" opacity="0.8" />
      <ellipse cx="50" cy="46" rx="12" ry="8" fill="white" opacity="0.15" />
      {/* Nostrils */}
      <ellipse cx="45" cy="46" rx="2.5" ry="2" fill="#111" opacity="0.5" />
      <ellipse cx="55" cy="46" rx="2.5" ry="2" fill="#111" opacity="0.5" />
      {/* Mouth */}
      <path d="M44 52 Q50 56 56 52" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
      {/* Curly tail */}
      <path d="M78 55 Q90 48 86 38 Q84 32 88 28 Q92 24 88 20" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Legs */}
      <rect x="30" y="80" width="8" height="12" rx="3" fill={color} />
      <rect x="42" y="80" width="8" height="12" rx="3" fill={color} />
      <rect x="54" y="80" width="8" height="12" rx="3" fill={color} />
      <rect x="66" y="80" width="8" height="12" rx="3" fill={color} />
      {/* Hooves */}
      <rect x="30" y="88" width="8" height="4" rx="2" fill="#111" opacity="0.3" />
      <rect x="42" y="88" width="8" height="4" rx="2" fill="#111" opacity="0.3" />
      <rect x="54" y="88" width="8" height="4" rx="2" fill="#111" opacity="0.3" />
      <rect x="66" y="88" width="8" height="4" rx="2" fill="#111" opacity="0.3" />
    </svg>
  );
}
