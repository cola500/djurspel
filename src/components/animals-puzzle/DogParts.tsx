interface PartProps {
  color: string;
}

export function DogBody({ color }: PartProps) {
  return (
    <g>
      <defs>
        <radialGradient id="dog-body-grad" cx="0.45" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="black" stopOpacity="0.08" />
        </radialGradient>
        <radialGradient id="dog-nose-grad" cx="0.4" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#111" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="45" cy="96" rx="30" ry="3.5" fill="black" opacity="0.12" />

      {/* Body */}
      <ellipse cx="45" cy="62" rx="28" ry="22" fill={color} />
      <ellipse cx="45" cy="62" rx="28" ry="22" fill="url(#dog-body-grad)" />
      {/* Chest patch */}
      <ellipse cx="45" cy="68" rx="12" ry="10" fill="white" opacity="0.12" />
      {/* Fur texture */}
      <path d="M25 55 Q28 53 30 56" fill="none" stroke="black" strokeWidth="0.6" opacity="0.08" />
      <path d="M58 55 Q61 53 64 56" fill="none" stroke="black" strokeWidth="0.6" opacity="0.08" />
      <path d="M32 65 Q35 63 38 66" fill="none" stroke="black" strokeWidth="0.5" opacity="0.06" />

      {/* Head */}
      <circle cx="45" cy="35" r="20" fill={color} />
      <circle cx="45" cy="35" r="20" fill="url(#dog-body-grad)" />

      {/* Muzzle - lighter area with more shape */}
      <ellipse cx="45" cy="42" rx="11" ry="8" fill={color} />
      <ellipse cx="45" cy="42" rx="11" ry="8" fill="white" opacity="0.18" />
      {/* Muzzle shadow line */}
      <path d="M45 45 L45 48" stroke="black" strokeWidth="1" opacity="0.1" strokeLinecap="round" />

      {/* Nose - shiny */}
      <ellipse cx="45" cy="40" rx="4.5" ry="3.5" fill="url(#dog-nose-grad)" />
      {/* Nose shine */}
      <ellipse cx="43" cy="39" rx="1.5" ry="1" fill="white" opacity="0.35" />

      {/* Eyes - warm, friendly */}
      <circle cx="36" cy="30" r="4.5" fill="#3B1F06" />
      <circle cx="54" cy="30" r="4.5" fill="#3B1F06" />
      {/* Eye highlights */}
      <circle cx="38" cy="28.5" r="1.8" fill="white" opacity="0.8" />
      <circle cx="56" cy="28.5" r="1.8" fill="white" opacity="0.8" />
      {/* Lower eye reflection */}
      <circle cx="35" cy="31.5" r="0.8" fill="white" opacity="0.3" />
      <circle cx="53" cy="31.5" r="0.8" fill="white" opacity="0.3" />

      {/* Eyebrows - expressive */}
      <path d="M29 24 L40 22" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 22 L61 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M29 24 L40 22" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" opacity="0.12" />
      <path d="M50 22 L61 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" opacity="0.12" />

      {/* Tongue */}
      <ellipse cx="45" cy="49" rx="3.5" ry="5.5" fill="#F472B6" />
      <ellipse cx="45" cy="49" rx="3.5" ry="5.5" fill="white" opacity="0.1" />
      {/* Tongue line */}
      <line x1="45" y1="45" x2="45" y2="52" stroke="#E11D8C" strokeWidth="0.5" opacity="0.3" />

      {/* Legs */}
      <rect x="22" y="78" width="12" height="16" rx="5" fill={color} />
      <rect x="52" y="78" width="12" height="16" rx="5" fill={color} />
      {/* Leg shading */}
      <path d="M24 80 Q28 84 24 90" fill="none" stroke="black" strokeWidth="0.8" opacity="0.06" />
      <path d="M54 80 Q58 84 54 90" fill="none" stroke="black" strokeWidth="0.8" opacity="0.06" />

      {/* Paws with toe detail */}
      <ellipse cx="28" cy="93" rx="7.5" ry="4" fill={color} />
      <ellipse cx="58" cy="93" rx="7.5" ry="4" fill={color} />
      {/* Toe lines */}
      <path d="M24 93 L24 95" stroke="black" strokeWidth="0.5" opacity="0.1" />
      <path d="M28 93 L28 95" stroke="black" strokeWidth="0.5" opacity="0.1" />
      <path d="M32 93 L32 95" stroke="black" strokeWidth="0.5" opacity="0.1" />
      <path d="M54 93 L54 95" stroke="black" strokeWidth="0.5" opacity="0.1" />
      <path d="M58 93 L58 95" stroke="black" strokeWidth="0.5" opacity="0.1" />
      <path d="M62 93 L62 95" stroke="black" strokeWidth="0.5" opacity="0.1" />
    </g>
  );
}

export function DogLeftEar({ color }: PartProps) {
  return (
    <g>
      {/* Floppy ear */}
      <ellipse cx="20" cy="32" rx="10" ry="18" fill={color} transform="rotate(-15 20 32)" />
      {/* Inner ear shadow */}
      <ellipse cx="20" cy="34" rx="6" ry="13" fill="black" opacity="0.08" transform="rotate(-15 20 34)" />
      {/* Inner ear color */}
      <ellipse cx="20" cy="35" rx="4" ry="8" fill="#F472B6" opacity="0.15" transform="rotate(-15 20 35)" />
      {/* Ear edge highlight */}
      <path d="M12 20 Q14 30 16 42" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" />
    </g>
  );
}

export function DogRightEar({ color }: PartProps) {
  return (
    <g>
      {/* Floppy ear */}
      <ellipse cx="70" cy="32" rx="10" ry="18" fill={color} transform="rotate(15 70 32)" />
      {/* Inner ear shadow */}
      <ellipse cx="70" cy="34" rx="6" ry="13" fill="black" opacity="0.08" transform="rotate(15 70 34)" />
      {/* Inner ear color */}
      <ellipse cx="70" cy="35" rx="4" ry="8" fill="#F472B6" opacity="0.15" transform="rotate(15 70 35)" />
      {/* Ear edge highlight */}
      <path d="M78 20 Q76 30 74 42" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" />
    </g>
  );
}

export function DogTail({ color }: PartProps) {
  return (
    <g>
      {/* Main tail - thicker at base */}
      <path
        d="M68 58 Q88 40 85 22 Q84 16 88 12"
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Tail shadow */}
      <path
        d="M68 58 Q88 40 85 22 Q84 16 88 12"
        fill="none"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.06"
      />
      {/* Fluffy tip */}
      <circle cx="88" cy="12" r="4" fill={color} />
      <circle cx="88" cy="12" r="4" fill="white" opacity="0.1" />
      {/* Fur lines on tail */}
      <path d="M84 30 Q86 28 88 31" fill="none" stroke="white" strokeWidth="0.8" opacity="0.1" />
    </g>
  );
}

export const DOG_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'dog-left-ear': DogLeftEar,
  'dog-right-ear': DogRightEar,
  'dog-tail': DogTail,
};
