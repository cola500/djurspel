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
      <circle cx="38" cy="36" r="4" fill="#111" />
      <circle cx="52" cy="36" r="4" fill="#111" />
      {/* Nose */}
      <circle cx="45" cy="42" r="2" fill="#F472B6" />
      {/* Legs */}
      <rect x="25" y="80" width="10" height="14" rx="4" fill={color} />
      <rect x="50" y="80" width="10" height="14" rx="4" fill={color} />
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
