interface PartProps {
  color: string;
}

export function TriceratopsBody({ color }: PartProps) {
  return (
    <g>
      <defs>
        <linearGradient id="tric-body-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="tric-head-grad" cx="0.4" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="black" stopOpacity="0.08" />
        </radialGradient>
      </defs>

      {/* Shadow under body */}
      <ellipse cx="50" cy="95" rx="32" ry="4" fill="black" opacity="0.15" />

      {/* Big chunky body */}
      <ellipse cx="50" cy="60" rx="28" ry="22" fill="url(#tric-body-grad)" />
      {/* Belly - lighter */}
      <ellipse cx="50" cy="66" rx="18" ry="14" fill="white" opacity="0.1" />
      {/* Skin texture */}
      <path d="M30 55 Q36 52 40 56" fill="none" stroke="black" strokeWidth="0.5" opacity="0.1" />
      <path d="M55 58 Q60 55 65 58" fill="none" stroke="black" strokeWidth="0.5" opacity="0.1" />
      <path d="M40 68 Q45 65 50 68" fill="none" stroke="black" strokeWidth="0.5" opacity="0.08" />

      {/* Head */}
      <circle cx="45" cy="35" r="16" fill={color} />
      <circle cx="45" cy="35" r="16" fill="url(#tric-head-grad)" />

      {/* Eye - friendly herbivore */}
      <circle cx="40" cy="33" r="4.5" fill="white" />
      <circle cx="41" cy="33" r="2.8" fill="#3B2506" />
      <circle cx="42" cy="31.5" r="1" fill="white" opacity="0.8" />

      {/* Mouth/beak - parrot-like */}
      <path d="M30 40 L24 42 L30 44" fill={color} stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M30 40 L24 42 L30 44" fill="black" opacity="0.15" />
      <path d="M25 42 L28 42" stroke="black" strokeWidth="0.5" opacity="0.15" />

      {/* Back ridges - more defined */}
      <path d="M66 44 L68 39 L72 44 L74 38 L78 44 L80 40 L82 45" fill={color} />
      <path d="M66 44 L68 39 L72 44 L74 38 L78 44 L80 40 L82 45" fill="black" opacity="0.12" />

      {/* Legs */}
      <rect x="26" y="76" width="14" height="18" rx="5" fill={color} />
      <rect x="52" y="76" width="14" height="18" rx="5" fill={color} />
      {/* Leg shading */}
      <path d="M28 78 Q33 82 28 88" fill="none" stroke="black" strokeWidth="0.8" opacity="0.08" />
      <path d="M54 78 Q59 82 54 88" fill="none" stroke="black" strokeWidth="0.8" opacity="0.08" />

      {/* Toes with hooves */}
      <circle cx="28" cy="94" r="3.2" fill={color} />
      <circle cx="36" cy="94" r="3.2" fill={color} />
      <circle cx="54" cy="94" r="3.2" fill={color} />
      <circle cx="62" cy="94" r="3.2" fill={color} />
      {/* Hoof nails */}
      <path d="M26 95 L25 97" stroke="#555" strokeWidth="1" strokeLinecap="round" />
      <path d="M34 95 L33 97" stroke="#555" strokeWidth="1" strokeLinecap="round" />
      <path d="M52 95 L51 97" stroke="#555" strokeWidth="1" strokeLinecap="round" />
      <path d="M60 95 L59 97" stroke="#555" strokeWidth="1" strokeLinecap="round" />
    </g>
  );
}

export function TriceratopsFrill({ color }: PartProps) {
  return (
    <g>
      <defs>
        <radialGradient id="tric-frill-grad" cx="0.5" cy="0.7" r="0.6">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </radialGradient>
      </defs>
      {/* Frill/shield with gradient */}
      <path
        d="M25 20 Q20 4 30 0 Q40 -2 45 2 Q50 -2 55 0 Q65 4 60 20 Z"
        fill="url(#tric-frill-grad)"
      />
      {/* Frill outline */}
      <path
        d="M25 20 Q20 4 30 0 Q40 -2 45 2 Q50 -2 55 0 Q65 4 60 20"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      <path
        d="M25 20 Q20 4 30 0 Q40 -2 45 2 Q50 -2 55 0 Q65 4 60 20"
        fill="none"
        stroke="black"
        strokeWidth="3"
        opacity="0.15"
      />
      {/* Decorative circles on frill */}
      <circle cx="30" cy="10" r="4" fill={color} opacity="0.4" />
      <circle cx="30" cy="10" r="2.5" fill={color} opacity="0.6" />
      <circle cx="42" cy="4" r="3.5" fill={color} opacity="0.4" />
      <circle cx="42" cy="4" r="2" fill={color} opacity="0.6" />
      <circle cx="53" cy="4" r="3.5" fill={color} opacity="0.4" />
      <circle cx="53" cy="4" r="2" fill={color} opacity="0.6" />
      <circle cx="60" cy="10" r="4" fill={color} opacity="0.4" />
      <circle cx="60" cy="10" r="2.5" fill={color} opacity="0.6" />
      {/* Scalloped edge highlights */}
      <circle cx="27" cy="12" r="2" fill="white" opacity="0.1" />
      <circle cx="62" cy="12" r="2" fill="white" opacity="0.1" />
    </g>
  );
}

export function TriceratopsHorn({ color }: PartProps) {
  void color;
  return (
    <g>
      <defs>
        <linearGradient id="tric-horn-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
      </defs>
      {/* Big nose horn with gradient */}
      <path d="M40 38 L45 16 L50 38 Z" fill="url(#tric-horn-grad)" />
      <path d="M40 38 L45 16 L50 38 Z" fill="none" stroke="#B45309" strokeWidth="0.5" opacity="0.3" />
      {/* Horn ridges */}
      <path d="M43 30 L45 20 L47 30" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3" />
      {/* Brow horns with gradient */}
      <path d="M34 30 L30 16 L38 28 Z" fill="url(#tric-horn-grad)" opacity="0.9" />
      <path d="M52 30 L56 16 L48 28 Z" fill="url(#tric-horn-grad)" opacity="0.9" />
    </g>
  );
}

export function TriceratopsTail({ color }: PartProps) {
  return (
    <g>
      <path
        d="M72 58 Q88 50 90 40 Q91 35 94 32"
        fill="none"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* Tail shading - darker underside */}
      <path
        d="M72 58 Q88 50 90 40 Q91 35 94 32"
        fill="none"
        stroke="black"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.08"
      />
      {/* Tail highlight */}
      <path
        d="M73 56 Q87 49 89 39"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.1"
      />
    </g>
  );
}

export const TRIC_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'tric-frill': TriceratopsFrill,
  'tric-horn': TriceratopsHorn,
  'tric-tail': TriceratopsTail,
};
