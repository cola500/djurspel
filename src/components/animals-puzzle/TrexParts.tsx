interface PartProps {
  color: string;
}

export function TrexBody({ color }: PartProps) {
  return (
    <g>
      {/* Big body */}
      <ellipse cx="45" cy="60" rx="22" ry="24" fill={color} />
      {/* Big head */}
      <ellipse cx="45" cy="30" rx="18" ry="14" fill={color} />
      {/* Eye */}
      <circle cx="38" cy="27" r="4" fill="#111" />
      <circle cx="39" cy="26" r="1.5" fill="white" />
      {/* Thick legs */}
      <rect x="28" y="78" width="14" height="18" rx="5" fill={color} />
      <rect x="48" y="78" width="14" height="18" rx="5" fill={color} />
      {/* Toes */}
      <circle cx="30" cy="96" r="3" fill={color} />
      <circle cx="40" cy="96" r="3" fill={color} />
      <circle cx="50" cy="96" r="3" fill={color} />
      <circle cx="60" cy="96" r="3" fill={color} />
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
      {/* Tiny arm - comically small */}
      <path d="M30 48 L22 44 L20 50 Z" fill={color} />
      {/* Little claw */}
      <circle cx="20" cy="47" r="2" fill={color} />
    </g>
  );
}

export function TrexRightArm({ color }: PartProps) {
  return (
    <g>
      {/* Tiny arm - comically small */}
      <path d="M60 48 L68 44 L70 50 Z" fill={color} />
      {/* Little claw */}
      <circle cx="70" cy="47" r="2" fill={color} />
    </g>
  );
}

export const TREX_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'trex-teeth': TrexTeeth,
  'trex-left-arm': TrexLeftArm,
  'trex-right-arm': TrexRightArm,
};
