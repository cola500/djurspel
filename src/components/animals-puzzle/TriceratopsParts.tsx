interface PartProps {
  color: string;
}

export function TriceratopsBody({ color }: PartProps) {
  return (
    <g>
      {/* Big chunky body */}
      <ellipse cx="50" cy="60" rx="28" ry="22" fill={color} />
      {/* Head */}
      <circle cx="45" cy="35" r="16" fill={color} />
      {/* Eye */}
      <circle cx="40" cy="33" r="4" fill="#111" />
      <circle cx="41" cy="32" r="1.5" fill="white" />
      {/* Mouth/beak shape */}
      <path d="M32 40 L28 42 L32 44" fill={color} stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Four thick legs */}
      <rect x="26" y="76" width="12" height="18" rx="5" fill={color} />
      <rect x="52" y="76" width="12" height="18" rx="5" fill={color} />
    </g>
  );
}

export function TriceratopsFrill({ color }: PartProps) {
  return (
    <g>
      {/* Big frill/shield behind head */}
      <path
        d="M25 20 Q20 4 30 0 Q40 -2 45 2 Q50 -2 55 0 Q65 4 60 20 Z"
        fill={color}
        opacity="0.7"
      />
      {/* Frill edge decoration */}
      <path
        d="M25 20 Q20 4 30 0 Q40 -2 45 2 Q50 -2 55 0 Q65 4 60 20"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      {/* Scalloped edge dots */}
      <circle cx="27" cy="10" r="3" fill={color} opacity="0.5" />
      <circle cx="38" cy="3" r="3" fill={color} opacity="0.5" />
      <circle cx="52" cy="3" r="3" fill={color} opacity="0.5" />
      <circle cx="62" cy="10" r="3" fill={color} opacity="0.5" />
    </g>
  );
}

export function TriceratopsHorn({ color }: PartProps) {
  void color;
  return (
    <g>
      {/* Big nose horn */}
      <path d="M40 38 L45 18 L50 38 Z" fill="#FBBF24" />
      {/* Two smaller brow horns */}
      <path d="M34 30 L30 18 L38 28 Z" fill="#FBBF24" opacity="0.8" />
      <path d="M52 30 L56 18 L48 28 Z" fill="#FBBF24" opacity="0.8" />
    </g>
  );
}

export function TriceratopsTail({ color }: PartProps) {
  return (
    <path
      d="M72 58 Q88 50 90 40 Q91 35 94 32"
      fill="none"
      stroke={color}
      strokeWidth="8"
      strokeLinecap="round"
    />
  );
}

export const TRIC_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'tric-frill': TriceratopsFrill,
  'tric-horn': TriceratopsHorn,
  'tric-tail': TriceratopsTail,
};
