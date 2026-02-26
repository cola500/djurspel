interface PartProps {
  color: string;
}

export function CatBody({ color }: PartProps) {
  return (
    <g>
      {/* Body */}
      <ellipse cx="45" cy="65" rx="25" ry="22" fill={color} />
      {/* Head */}
      <circle cx="45" cy="38" r="18" fill={color} />
      {/* Eyes */}
      <ellipse cx="37" cy="36" rx="4" ry="5" fill="#111" />
      <ellipse cx="53" cy="36" rx="4" ry="5" fill="#111" />
      {/* Vertical cat pupils */}
      <ellipse cx="37" cy="36" rx="1.5" ry="4" fill="#2D5A1B" />
      <ellipse cx="53" cy="36" rx="1.5" ry="4" fill="#2D5A1B" />
      {/* Eye highlights */}
      <circle cx="39" cy="34" r="1.5" fill="white" />
      <circle cx="55" cy="34" r="1.5" fill="white" />
      {/* Nose */}
      <path d="M43 42 L45 45 L47 42 Z" fill="#F472B6" />
      {/* Mouth */}
      <path d="M45 45 L42 48" fill="none" stroke="#111" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M45 45 L48 48" fill="none" stroke="#111" strokeWidth="1.2" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="30" y1="40" x2="18" y2="38" stroke="#111" strokeWidth="0.8" opacity="0.3" />
      <line x1="30" y1="44" x2="18" y2="46" stroke="#111" strokeWidth="0.8" opacity="0.3" />
      <line x1="60" y1="40" x2="72" y2="38" stroke="#111" strokeWidth="0.8" opacity="0.3" />
      <line x1="60" y1="44" x2="72" y2="46" stroke="#111" strokeWidth="0.8" opacity="0.3" />
      {/* Legs */}
      <rect x="25" y="80" width="10" height="14" rx="4" fill={color} />
      <rect x="50" y="80" width="10" height="14" rx="4" fill={color} />
      {/* Paws */}
      <ellipse cx="30" cy="93" rx="6" ry="3" fill={color} />
      <ellipse cx="55" cy="93" rx="6" ry="3" fill={color} />
    </g>
  );
}

export function CatLeftEar({ color }: PartProps) {
  return (
    <g>
      <path d="M28 30 L18 8 L38 24 Z" fill={color} />
      <path d="M28 28 L22 14 L34 25 Z" fill="#F472B6" opacity="0.5" />
    </g>
  );
}

export function CatRightEar({ color }: PartProps) {
  return (
    <g>
      <path d="M62 30 L52 24 L72 8 Z" fill={color} />
      <path d="M62 28 L56 25 L68 14 Z" fill="#F472B6" opacity="0.5" />
    </g>
  );
}

export function CatTail({ color }: PartProps) {
  return (
    <path
      d="M65 70 Q85 45 78 25 Q75 18 80 15"
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
    />
  );
}

export const CAT_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'cat-left-ear': CatLeftEar,
  'cat-right-ear': CatRightEar,
  'cat-tail': CatTail,
};
