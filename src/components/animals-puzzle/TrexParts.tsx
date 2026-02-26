interface PartProps {
  color: string;
}

export function TrexBody({ color }: PartProps) {
  return (
    <g>
      <defs>
        {/* Body gradient - darker at bottom */}
        <linearGradient id="trex-body-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="trex-head-grad" cx="0.4" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="black" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* Shadow under body */}
      <ellipse cx="45" cy="96" rx="28" ry="4" fill="black" opacity="0.15" />

      {/* Big body */}
      <ellipse cx="45" cy="60" rx="22" ry="24" fill="url(#trex-body-grad)" />
      {/* Belly - lighter */}
      <ellipse cx="45" cy="66" rx="14" ry="16" fill="white" opacity="0.12" />
      {/* Skin texture lines on body */}
      <path d="M30 52 Q35 50 38 53" fill="none" stroke="black" strokeWidth="0.5" opacity="0.12" />
      <path d="M50 55 Q54 52 58 55" fill="none" stroke="black" strokeWidth="0.5" opacity="0.12" />
      <path d="M35 68 Q40 66 44 69" fill="none" stroke="black" strokeWidth="0.5" opacity="0.1" />

      {/* Big head */}
      <ellipse cx="45" cy="30" rx="18" ry="14" fill={color} />
      <ellipse cx="45" cy="30" rx="18" ry="14" fill="url(#trex-head-grad)" />
      {/* Skin fold on head */}
      <path d="M30 28 Q33 32 36 28" fill="none" stroke="black" strokeWidth="0.6" opacity="0.1" />

      {/* Eye - reptile style with vertical pupil */}
      <circle cx="38" cy="27" r="5" fill="#E8E050" />
      <ellipse cx="38" cy="27" rx="1.8" ry="4.5" fill="#111" />
      <circle cx="39.5" cy="25.5" r="1" fill="white" opacity="0.7" />
      {/* Brow ridge - pronounced */}
      <path d="M31 21 L45 19" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M31 21 L45 19" fill="none" stroke="black" strokeWidth="4.5" strokeLinecap="round" opacity="0.2" />

      {/* Nostril */}
      <circle cx="54" cy="28" r="2.2" fill="black" opacity="0.35" />
      <circle cx="54" cy="27.5" r="0.8" fill="black" opacity="0.1" />

      {/* Thick legs with muscle definition */}
      <rect x="28" y="78" width="14" height="18" rx="5" fill={color} />
      <rect x="48" y="78" width="14" height="18" rx="5" fill={color} />
      {/* Leg muscle shading */}
      <path d="M30 80 Q35 84 30 90" fill="none" stroke="black" strokeWidth="1" opacity="0.08" />
      <path d="M50 80 Q55 84 50 90" fill="none" stroke="black" strokeWidth="1" opacity="0.08" />

      {/* Toes with claws */}
      <circle cx="28" cy="96" r="3" fill={color} />
      <circle cx="35" cy="96" r="3" fill={color} />
      <circle cx="48" cy="96" r="3" fill={color} />
      <circle cx="55" cy="96" r="3" fill={color} />
      {/* Claws */}
      <path d="M26 96 L24 99" stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M33 96 L31 99" stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M46 96 L44 99" stroke="#555" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M53 96 L51 99" stroke="#555" strokeWidth="1.2" strokeLinecap="round" />

      {/* Back ridges - more defined */}
      <path d="M28 42 L26 36 L32 42 L30 35 L36 42 L34 37 L40 42" fill={color} />
      <path d="M28 42 L26 36 L32 42 L30 35 L36 42 L34 37 L40 42" fill="black" opacity="0.12" />
    </g>
  );
}

export function TrexTeeth({ color }: PartProps) {
  void color;
  return (
    <g>
      <defs>
        <linearGradient id="trex-jaw-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Upper jaw */}
      <path d="M50 30 L64 28 L62 36 Z" fill="url(#trex-jaw-grad)" />
      {/* Upper teeth - individual triangles */}
      <path d="M51 34 L53 39 L55 34" fill="white" />
      <path d="M55 34 L57 38 L59 34" fill="white" />
      <path d="M59 33 L61 37 L62 33" fill="white" />
      {/* Teeth shadow */}
      <path d="M51 34 L53 39 L55 34 M55 34 L57 38 L59 34 M59 33 L61 37 L62 33" fill="none" stroke="#ccc" strokeWidth="0.3" />
      {/* Lower jaw */}
      <path d="M50 36 L64 34 L62 42 Z" fill="url(#trex-jaw-grad)" opacity="0.85" />
      {/* Lower teeth */}
      <path d="M52 37 L54 34 L56 37" fill="white" opacity="0.9" />
      <path d="M57 37 L59 34 L61 37" fill="white" opacity="0.9" />
    </g>
  );
}

export function TrexLeftArm({ color }: PartProps) {
  return (
    <g>
      {/* Tiny arm with more definition */}
      <path d="M30 48 L22 44 L20 50 Z" fill={color} />
      <path d="M30 48 L22 44 L20 50 Z" fill="black" opacity="0.08" />
      <circle cx="20" cy="47" r="2" fill={color} />
      {/* Tiny claws */}
      <path d="M19 45 L17 43" stroke="#555" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M18 48 L16 47" stroke="#555" strokeWidth="0.8" strokeLinecap="round" />
    </g>
  );
}

export function TrexRightArm({ color }: PartProps) {
  return (
    <g>
      {/* Tiny arm with more definition */}
      <path d="M60 48 L68 44 L70 50 Z" fill={color} />
      <path d="M60 48 L68 44 L70 50 Z" fill="black" opacity="0.08" />
      <circle cx="70" cy="47" r="2" fill={color} />
      {/* Tiny claws */}
      <path d="M71 45 L73 43" stroke="#555" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M72 48 L74 47" stroke="#555" strokeWidth="0.8" strokeLinecap="round" />
    </g>
  );
}

export const TREX_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'trex-teeth': TrexTeeth,
  'trex-left-arm': TrexLeftArm,
  'trex-right-arm': TrexRightArm,
};
