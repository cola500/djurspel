interface PartProps {
  color: string;
}

export function TrexBody({ color }: PartProps) {
  return (
    <g>
      {/* Big body */}
      <ellipse cx="45" cy="60" rx="22" ry="24" fill={color} />
      {/* Belly - lighter */}
      <ellipse cx="45" cy="65" rx="14" ry="16" fill="white" opacity="0.1" />
      {/* Big head */}
      <ellipse cx="45" cy="30" rx="18" ry="14" fill={color} />
      {/* Eye */}
      <circle cx="38" cy="27" r="5" fill="white" />
      <circle cx="39" cy="27" r="3" fill="#111" />
      <circle cx="40" cy="26" r="1.2" fill="white" />
      {/* Brow ridge */}
      <path d="M32 22 L44 20" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M32 22 L44 20" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" opacity="0.15" />
      {/* Nostril */}
      <circle cx="54" cy="28" r="2" fill="#111" opacity="0.3" />
      {/* Thick legs */}
      <rect x="28" y="78" width="14" height="18" rx="5" fill={color} />
      <rect x="48" y="78" width="14" height="18" rx="5" fill={color} />
      {/* Toes/claws */}
      <circle cx="28" cy="96" r="3" fill={color} />
      <circle cx="35" cy="96" r="3" fill={color} />
      <circle cx="42" cy="96" r="3" fill="#111" opacity="0.2" />
      <circle cx="48" cy="96" r="3" fill={color} />
      <circle cx="55" cy="96" r="3" fill={color} />
      <circle cx="62" cy="96" r="3" fill="#111" opacity="0.2" />
      {/* Back ridges */}
      <path d="M30 42 L28 38 L34 42 L32 37 L38 42" fill={color} />
      <path d="M30 42 L28 38 L34 42 L32 37 L38 42" fill="#111" opacity="0.1" />
    </g>
  );
}

export function TrexTeeth({ color }: PartProps) {
  void color;
  return (
    <g>
      {/* Upper jaw */}
      <path d="M50 30 L64 28 L62 36 Z" fill="#FBBF24" />
      {/* Teeth - white zigzag */}
      <path d="M50 34 L53 38 L56 34 L59 38 L62 34" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Lower jaw */}
      <path d="M50 36 L64 34 L62 42 Z" fill="#FBBF24" opacity="0.8" />
    </g>
  );
}

export function TrexLeftArm({ color }: PartProps) {
  return (
    <g>
      {/* Tiny arm */}
      <path d="M30 48 L22 44 L20 50 Z" fill={color} />
      <circle cx="20" cy="47" r="2" fill={color} />
    </g>
  );
}

export function TrexRightArm({ color }: PartProps) {
  return (
    <g>
      {/* Tiny arm */}
      <path d="M60 48 L68 44 L70 50 Z" fill={color} />
      <circle cx="70" cy="47" r="2" fill={color} />
    </g>
  );
}

export const TREX_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'trex-teeth': TrexTeeth,
  'trex-left-arm': TrexLeftArm,
  'trex-right-arm': TrexRightArm,
};
