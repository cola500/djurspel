interface PartProps {
  color: string;
}

export function BirdBody({ color }: PartProps) {
  return (
    <g>
      <defs>
        <radialGradient id="bird-body-grad" cx="0.45" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="black" stopOpacity="0.08" />
        </radialGradient>
        <linearGradient id="bird-belly-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="45" cy="92" rx="14" ry="2.5" fill="black" opacity="0.12" />

      {/* Tail feathers - layered */}
      <path d="M36 70 L24 92 L40 76 Z" fill={color} opacity="0.8" />
      <path d="M42 70 L38 92 L48 76 Z" fill={color} opacity="0.9" />
      <path d="M48 70 L52 92 L50 76 Z" fill={color} opacity="0.8" />
      <path d="M54 70 L66 92 L50 76 Z" fill={color} opacity="0.7" />
      {/* Tail feather texture */}
      <line x1="30" y1="82" x2="38" y2="74" stroke="black" strokeWidth="0.4" opacity="0.1" />
      <line x1="44" y1="84" x2="44" y2="74" stroke="black" strokeWidth="0.4" opacity="0.1" />
      <line x1="58" y1="82" x2="52" y2="74" stroke="black" strokeWidth="0.4" opacity="0.1" />

      {/* Body */}
      <ellipse cx="45" cy="55" rx="20" ry="18" fill={color} />
      <ellipse cx="45" cy="55" rx="20" ry="18" fill="url(#bird-body-grad)" />

      {/* Chest - lighter with feather texture */}
      <ellipse cx="45" cy="60" rx="12" ry="12" fill="url(#bird-belly-grad)" />
      {/* Feather lines on body */}
      <path d="M35 50 Q38 48 41 51" fill="none" stroke="black" strokeWidth="0.5" opacity="0.08" />
      <path d="M49 50 Q52 48 55 51" fill="none" stroke="black" strokeWidth="0.5" opacity="0.08" />
      <path d="M37 57 Q40 55 43 58" fill="none" stroke="black" strokeWidth="0.4" opacity="0.06" />
      <path d="M47 57 Q50 55 53 58" fill="none" stroke="black" strokeWidth="0.4" opacity="0.06" />
      <path d="M39 63 Q42 61 45 64" fill="none" stroke="black" strokeWidth="0.4" opacity="0.05" />

      {/* Head */}
      <circle cx="45" cy="30" r="15" fill={color} />
      <circle cx="45" cy="30" r="15" fill="url(#bird-body-grad)" />

      {/* Crest - more feathered */}
      <path d="M42 16 L39 6 L44 14" fill={color} />
      <path d="M44 14 L45 4 L46 14" fill={color} />
      <path d="M46 14 L51 6 L48 16" fill={color} />
      {/* Crest tips darker */}
      <path d="M39 6 L40 10" stroke="black" strokeWidth="0.5" opacity="0.1" />
      <path d="M45 4 L45 9" stroke="black" strokeWidth="0.5" opacity="0.1" />
      <path d="M51 6 L50 10" stroke="black" strokeWidth="0.5" opacity="0.1" />

      {/* Eye with ring */}
      <circle cx="40" cy="27" r="5.5" fill="white" />
      {/* Eye ring */}
      <circle cx="40" cy="27" r="5.5" fill="none" stroke={color} strokeWidth="1.5" />
      <circle cx="40" cy="27" r="5.5" fill="none" stroke="black" strokeWidth="1.5" opacity="0.1" />
      {/* Iris */}
      <circle cx="41" cy="27" r="3" fill="#111" />
      {/* Pupil highlight */}
      <circle cx="42.5" cy="25.5" r="1.2" fill="white" opacity="0.9" />
      <circle cx="40" cy="28.5" r="0.6" fill="white" opacity="0.4" />

      {/* Cheek blush */}
      <circle cx="36" cy="33" r="3" fill="#FF6B6B" opacity="0.1" />

      {/* Legs */}
      <line x1="38" y1="72" x2="35" y2="86" stroke="#E07000" strokeWidth="3" strokeLinecap="round" />
      <line x1="52" y1="72" x2="55" y2="86" stroke="#E07000" strokeWidth="3" strokeLinecap="round" />
      {/* Leg scales texture */}
      <path d="M36 78 L38 78" stroke="#CC6000" strokeWidth="0.5" opacity="0.3" />
      <path d="M36 81 L37 81" stroke="#CC6000" strokeWidth="0.5" opacity="0.3" />
      <path d="M53 78 L55 78" stroke="#CC6000" strokeWidth="0.5" opacity="0.3" />
      <path d="M54 81 L55 81" stroke="#CC6000" strokeWidth="0.5" opacity="0.3" />

      {/* Feet with toes */}
      <path d="M30 88 L35 86 L37 90" fill="none" stroke="#E07000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 89 L35 86 L39 88" fill="none" stroke="#E07000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 88 L55 86 L57 90" fill="none" stroke="#E07000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M53 89 L55 86 L59 88" fill="none" stroke="#E07000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

export function BirdLeftWing({ color }: PartProps) {
  return (
    <g>
      {/* Wing base */}
      <path d="M25 55 L2 30 L12 55 Z" fill={color} />
      {/* Wing shading */}
      <path d="M25 55 L2 30 L12 55 Z" fill="black" opacity="0.05" />
      {/* Feather lines */}
      <line x1="5" y1="35" x2="15" y2="52" stroke="black" strokeWidth="0.6" opacity="0.1" />
      <line x1="8" y1="38" x2="17" y2="52" stroke="black" strokeWidth="0.5" opacity="0.08" />
      <line x1="11" y1="41" x2="19" y2="53" stroke="black" strokeWidth="0.4" opacity="0.06" />
      {/* Wing tip feathers */}
      <path d="M2 30 L-1 28 L5 33" fill={color} opacity="0.7" />
      <path d="M4 32 L1 29 L7 35" fill={color} opacity="0.6" />
    </g>
  );
}

export function BirdRightWing({ color }: PartProps) {
  return (
    <g>
      {/* Wing base */}
      <path d="M65 55 L88 30 L78 55 Z" fill={color} />
      {/* Wing shading */}
      <path d="M65 55 L88 30 L78 55 Z" fill="black" opacity="0.05" />
      {/* Feather lines */}
      <line x1="85" y1="35" x2="75" y2="52" stroke="black" strokeWidth="0.6" opacity="0.1" />
      <line x1="82" y1="38" x2="73" y2="52" stroke="black" strokeWidth="0.5" opacity="0.08" />
      <line x1="79" y1="41" x2="71" y2="53" stroke="black" strokeWidth="0.4" opacity="0.06" />
      {/* Wing tip feathers */}
      <path d="M88 30 L91 28 L85 33" fill={color} opacity="0.7" />
      <path d="M86 32 L89 29 L83 35" fill={color} opacity="0.6" />
    </g>
  );
}

export function BirdBeak() {
  return (
    <g>
      <defs>
        <linearGradient id="bird-beak-grad" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#FFB020" />
          <stop offset="100%" stopColor="#E07000" />
        </linearGradient>
      </defs>
      {/* Upper beak */}
      <path d="M50 33 L68 38 L50 39 Z" fill="url(#bird-beak-grad)" />
      {/* Lower beak */}
      <path d="M50 39 L65 39 L50 42 Z" fill="#CC6600" opacity="0.8" />
      {/* Beak line */}
      <line x1="50" y1="39" x2="67" y2="38.5" stroke="#8B4000" strokeWidth="0.5" opacity="0.3" />
      {/* Beak highlight */}
      <path d="M52 35 L60 37" stroke="white" strokeWidth="0.5" opacity="0.2" />
      {/* Nostril */}
      <circle cx="54" cy="36" r="0.8" fill="#8B4000" opacity="0.3" />
    </g>
  );
}

export const BIRD_PART_COMPONENTS: Record<string, React.FC<{ color: string }>> = {
  'bird-left-wing': BirdLeftWing,
  'bird-right-wing': BirdRightWing,
  'bird-beak': BirdBeak,
};
