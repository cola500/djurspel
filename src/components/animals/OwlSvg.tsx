interface Props {
  color: string;
}

export function OwlSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <ellipse cx="50" cy="62" rx="26" ry="28" fill={color} />
      {/* Belly pattern */}
      <ellipse cx="50" cy="68" rx="16" ry="18" fill="white" opacity="0.12" />
      {/* Belly lines */}
      <path d="M40 58 Q50 62 60 58" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.15" />
      <path d="M38 64 Q50 68 62 64" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.15" />
      <path d="M39 70 Q50 74 61 70" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.15" />
      {/* Head */}
      <circle cx="50" cy="32" r="22" fill={color} />
      {/* Ear tufts */}
      <path d="M30 18 L24 2 L38 16 Z" fill={color} />
      <path d="M70 18 L62 16 L76 2 Z" fill={color} />
      {/* Eye circles (facial disc) */}
      <circle cx="38" cy="30" r="12" fill="white" opacity="0.2" />
      <circle cx="62" cy="30" r="12" fill="white" opacity="0.2" />
      {/* Eyes - large and round */}
      <circle cx="38" cy="30" r="8" fill="#111" />
      <circle cx="62" cy="30" r="8" fill="#111" />
      {/* Irises */}
      <circle cx="38" cy="30" r="6" fill="#F59E0B" />
      <circle cx="62" cy="30" r="6" fill="#F59E0B" />
      {/* Pupils */}
      <circle cx="38" cy="30" r="3" fill="#111" />
      <circle cx="62" cy="30" r="3" fill="#111" />
      {/* Eye highlights */}
      <circle cx="40" cy="28" r="2" fill="white" />
      <circle cx="64" cy="28" r="2" fill="white" />
      {/* Beak */}
      <path d="M46 38 L50 46 L54 38 Z" fill="#F59E0B" />
      {/* Wings */}
      <path d="M24 50 Q18 62 22 80 Q26 72 30 64 Q28 56 24 50 Z" fill={color} stroke="#111" strokeWidth="0.5" opacity="0.8" />
      <path d="M76 50 Q82 62 78 80 Q74 72 70 64 Q72 56 76 50 Z" fill={color} stroke="#111" strokeWidth="0.5" opacity="0.8" />
      {/* Feet */}
      <path d="M38 88 L34 94 L38 92 L42 94 L38 88 Z" fill="#F59E0B" />
      <path d="M62 88 L58 94 L62 92 L66 94 L62 88 Z" fill="#F59E0B" />
    </svg>
  );
}
