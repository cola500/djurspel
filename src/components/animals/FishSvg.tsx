interface Props {
  color: string;
}

export function FishSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Tail fin */}
      <path d="M12 50 L0 24 L0 76 Z" fill={color} />
      {/* Body */}
      <path d="M15 50 Q30 18 58 18 Q82 18 88 50 Q82 82 58 82 Q30 82 15 50 Z" fill={color} />
      {/* Belly - lighter */}
      <path d="M30 55 Q50 70 78 55 Q50 75 30 55 Z" fill="white" opacity="0.15" />
      {/* Scales pattern */}
      <path d="M35 38 Q42 32 50 38" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.1" />
      <path d="M45 45 Q52 39 60 45" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.1" />
      <path d="M55 38 Q62 32 70 38" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.1" />
      <path d="M35 52 Q42 46 50 52" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.1" />
      <path d="M50 52 Q57 46 65 52" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.1" />
      {/* Dorsal fin */}
      <path d="M38 20 L48 4 L58 20" fill={color} />
      <path d="M38 20 L48 4 L58 20" fill="#111" opacity="0.08" />
      {/* Bottom fin */}
      <path d="M42 80 L50 94 L58 80" fill={color} />
      {/* Side fin */}
      <path d="M55 55 L65 68 L55 62" fill={color} />
      {/* Gill line */}
      <path d="M72 36 Q68 50 72 64" fill="none" stroke="#111" strokeWidth="1.5" opacity="0.15" />
      {/* Eye */}
      <circle cx="76" cy="44" r="7" fill="white" />
      <circle cx="78" cy="44" r="4.5" fill="#111" />
      <circle cx="79" cy="42" r="1.5" fill="white" />
      {/* Mouth */}
      <path d="M88 52 Q92 50 88 48" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
