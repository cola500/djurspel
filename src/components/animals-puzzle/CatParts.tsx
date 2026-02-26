interface PartProps {
  color: string;
}

export function CatBody({ color }: PartProps) {
  return (
    <g>
      <defs>
        <radialGradient id="cat-body-grad" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="black" stopOpacity="0.1" />
        </radialGradient>
        <linearGradient id="cat-belly-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="45" cy="96" rx="28" ry="3" fill="black" opacity="0.12" />

      {/* Body */}
      <ellipse cx="45" cy="65" rx="25" ry="22" fill={color} />
      <ellipse cx="45" cy="65" rx="25" ry="22" fill="url(#cat-body-grad)" />
      {/* Belly */}
      <ellipse cx="45" cy="70" rx="14" ry="12" fill="url(#cat-belly-grad)" />
      {/* Tabby stripes on body */}
      <path d="M30 56 Q35 54 38 58" fill="none" stroke="black" strokeWidth="1.2" opacity="0.1" />
      <path d="M52 56 Q55 54 60 58" fill="none" stroke="black" strokeWidth="1.2" opacity="0.1" />
      <path d="M28 64 Q32 62 35 66" fill="none" stroke="black" strokeWidth="1" opacity="0.08" />
      <path d="M55 64 Q58 62 62 66" fill="none" stroke="black" strokeWidth="1" opacity="0.08" />

      {/* Head */}
      <circle cx="45" cy="38" r="18" fill={color} />
      <circle cx="45" cy="38" r="18" fill="url(#cat-body-grad)" />
      {/* Tabby M on forehead */}
      <path d="M34 28 L38 24 L42 28 L45 22 L48 28 L52 24 L56 28" fill="none" stroke="black" strokeWidth="0.8" opacity="0.12" />

      {/* Eyes - cat slit pupils */}
      <ellipse cx="37" cy="36" rx="4.5" ry="5.5" fill="#2D5A1B" />
      <ellipse cx="53" cy="36" rx="4.5" ry="5.5" fill="#2D5A1B" />
      {/* Iris glow */}
      <ellipse cx="37" cy="36" rx="3.5" ry="4.5" fill="#4CAF50" opacity="0.5" />
      <ellipse cx="53" cy="36" rx="3.5" ry="4.5" fill="#4CAF50" opacity="0.5" />
      {/* Vertical cat pupils */}
      <ellipse cx="37" cy="36" rx="1.5" ry="4.5" fill="#111" />
      <ellipse cx="53" cy="36" rx="1.5" ry="4.5" fill="#111" />
      {/* Eye highlights */}
      <circle cx="39" cy="34" r="1.5" fill="white" opacity="0.8" />
      <circle cx="55" cy="34" r="1.5" fill="white" opacity="0.8" />

      {/* Nose - triangle with shine */}
      <path d="M43 42 L45 45 L47 42 Z" fill="#F472B6" />
      <path d="M44 42.5 L45 43.5 L46 42.5 Z" fill="white" opacity="0.3" />

      {/* Mouth */}
      <path d="M45 45 L42 48" fill="none" stroke="#111" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M45 45 L48 48" fill="none" stroke="#111" strokeWidth="1.2" strokeLinecap="round" />

      {/* Whiskers - more defined */}
      <line x1="30" y1="40" x2="14" y2="37" stroke="#111" strokeWidth="0.6" opacity="0.25" />
      <line x1="30" y1="43" x2="14" y2="44" stroke="#111" strokeWidth="0.6" opacity="0.25" />
      <line x1="30" y1="46" x2="16" y2="50" stroke="#111" strokeWidth="0.6" opacity="0.2" />
      <line x1="60" y1="40" x2="76" y2="37" stroke="#111" strokeWidth="0.6" opacity="0.25" />
      <line x1="60" y1="43" x2="76" y2="44" stroke="#111" strokeWidth="0.6" opacity="0.25" />
      <line x1="60" y1="46" x2="74" y2="50" stroke="#111" strokeWidth="0.6" opacity="0.2" />

      {/* Legs */}
      <rect x="25" y="80" width="10" height="14" rx="4" fill={color} />
      <rect x="50" y="80" width="10" height="14" rx="4" fill={color} />
      {/* Leg stripes */}
      <path d="M26 84 Q30 83 34 85" fill="none" stroke="black" strokeWidth="0.8" opacity="0.08" />
      <path d="M51 84 Q55 83 59 85" fill="none" stroke="black" strokeWidth="0.8" opacity="0.08" />

      {/* Paws with toe beans */}
      <ellipse cx="30" cy="93" rx="6" ry="3.5" fill={color} />
      <ellipse cx="55" cy="93" rx="6" ry="3.5" fill={color} />
      {/* Toe beans */}
      <circle cx="27" cy="94" r="1.2" fill="#F472B6" opacity="0.4" />
      <circle cx="30" cy="95" r="1.2" fill="#F472B6" opacity="0.4" />
      <circle cx="33" cy="94" r="1.2" fill="#F472B6" opacity="0.4" />
      <circle cx="52" cy="94" r="1.2" fill="#F472B6" opacity="0.4" />
      <circle cx="55" cy="95" r="1.2" fill="#F472B6" opacity="0.4" />
      <circle cx="58" cy="94" r="1.2" fill="#F472B6" opacity="0.4" />
    </g>
  );
}

export function CatLeftEar({ color }: PartProps) {
  return (
    <g>
      {/* Outer ear */}
      <path d="M28 30 L18 8 L38 24 Z" fill={color} />
      {/* Inner ear */}
      <path d="M28 28 L22 14 L34 25 Z" fill="#F472B6" opacity="0.45" />
      {/* Ear fur tuft */}
      <path d="M26 22 L24 18 L28 21" fill={color} stroke={color} strokeWidth="0.5" />
      {/* Ear edge shadow */}
      <path d="M18 8 L28 30" fill="none" stroke="black" strokeWidth="0.5" opacity="0.1" />
    </g>
  );
}

export function CatRightEar({ color }: PartProps) {
  return (
    <g>
      {/* Outer ear */}
      <path d="M62 30 L52 24 L72 8 Z" fill={color} />
      {/* Inner ear */}
      <path d="M62 28 L56 25 L68 14 Z" fill="#F472B6" opacity="0.45" />
      {/* Ear fur tuft */}
      <path d="M64 22 L66 18 L62 21" fill={color} stroke={color} strokeWidth="0.5" />
      {/* Ear edge shadow */}
      <path d="M72 8 L62 30" fill="none" stroke="black" strokeWidth="0.5" opacity="0.1" />
    </g>
  );
}

export function CatTail({ color }: PartProps) {
  return (
    <g>
      {/* Main tail */}
      <path
        d="M65 70 Q85 45 78 25 Q75 18 80 15"
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Tail shadow */}
      <path
        d="M65 70 Q85 45 78 25 Q75 18 80 15"
        fill="none"
        stroke="black"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.06"
      />
      {/* Tail stripes */}
      <path d="M77 40 Q80 38 82 41" fill="none" stroke="black" strokeWidth="1" opacity="0.1" />
      <path d="M76 32 Q79 30 80 33" fill="none" stroke="black" strokeWidth="1" opacity="0.1" />
      {/* Tail tip highlight */}
      <path
        d="M78 18 Q76 16 79 14"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.15"
      />
    </g>
  );
}

export const CAT_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'cat-left-ear': CatLeftEar,
  'cat-right-ear': CatRightEar,
  'cat-tail': CatTail,
};
