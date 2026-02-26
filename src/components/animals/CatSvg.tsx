interface Props {
  color: string;
}

export function CatSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Tail */}
      <path d="M75 72 Q92 50 86 30 Q84 24 88 20" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="50" cy="72" rx="26" ry="18" fill={color} />
      {/* Head */}
      <circle cx="50" cy="44" r="22" fill={color} />
      {/* Ears */}
      <path d="M30 32 L22 10 L42 28 Z" fill={color} />
      <path d="M70 32 L58 28 L78 10 Z" fill={color} />
      {/* Inner ears */}
      <path d="M31 30 L26 16 L39 28 Z" fill="#F472B6" opacity="0.5" />
      <path d="M69 30 L61 28 L74 16 Z" fill="#F472B6" opacity="0.5" />
      {/* Eyes */}
      <ellipse cx="40" cy="42" rx="5" ry="6" fill="#111" />
      <ellipse cx="60" cy="42" rx="5" ry="6" fill="#111" />
      {/* Pupils - vertical cat slit */}
      <ellipse cx="40" cy="42" rx="2" ry="5" fill="#2D5A1B" />
      <ellipse cx="60" cy="42" rx="2" ry="5" fill="#2D5A1B" />
      {/* Eye highlights */}
      <circle cx="42" cy="40" r="1.5" fill="white" />
      <circle cx="62" cy="40" r="1.5" fill="white" />
      {/* Nose */}
      <path d="M48 50 L50 53 L52 50 Z" fill="#F472B6" />
      {/* Mouth */}
      <path d="M50 53 L47 57" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 53 L53 57" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="30" y1="48" x2="14" y2="45" stroke="#111" strokeWidth="1" opacity="0.4" />
      <line x1="30" y1="52" x2="14" y2="53" stroke="#111" strokeWidth="1" opacity="0.4" />
      <line x1="70" y1="48" x2="86" y2="45" stroke="#111" strokeWidth="1" opacity="0.4" />
      <line x1="70" y1="52" x2="86" y2="53" stroke="#111" strokeWidth="1" opacity="0.4" />
      {/* Paws */}
      <ellipse cx="34" cy="88" rx="8" ry="5" fill={color} />
      <ellipse cx="66" cy="88" rx="8" ry="5" fill={color} />
    </svg>
  );
}
