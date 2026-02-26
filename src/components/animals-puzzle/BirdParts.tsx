interface PartProps {
  color: string;
}

export function BirdBody({ color }: PartProps) {
  return (
    <g>
      {/* Tail feathers */}
      <path d="M38 70 L28 90 L45 76 L62 90 L52 70 Z" fill={color} />
      {/* Body */}
      <ellipse cx="45" cy="55" rx="20" ry="18" fill={color} />
      {/* Chest - lighter */}
      <ellipse cx="45" cy="60" rx="12" ry="12" fill="white" opacity="0.15" />
      {/* Head */}
      <circle cx="45" cy="30" r="15" fill={color} />
      {/* Crest */}
      <path d="M43 16 L40 8 L45 13 L50 6 L47 16" fill={color} />
      {/* Eye */}
      <circle cx="40" cy="27" r="4.5" fill="white" />
      <circle cx="41" cy="27" r="2.8" fill="#111" />
      <circle cx="42" cy="26" r="1" fill="white" />
      {/* Legs */}
      <line x1="38" y1="72" x2="35" y2="88" stroke="#FF8C00" strokeWidth="3" strokeLinecap="round" />
      <line x1="52" y1="72" x2="55" y2="88" stroke="#FF8C00" strokeWidth="3" strokeLinecap="round" />
      {/* Feet */}
      <path d="M31 88 L35 88 L39 88" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
      <path d="M51 88 L55 88 L59 88" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

export function BirdLeftWing({ color }: PartProps) {
  return (
    <g>
      <path d="M25 55 L2 30 L12 55 Z" fill={color} />
      <line x1="8" y1="38" x2="18" y2="52" stroke="#111" strokeWidth="0.8" opacity="0.15" />
    </g>
  );
}

export function BirdRightWing({ color }: PartProps) {
  return (
    <g>
      <path d="M65 55 L88 30 L78 55 Z" fill={color} />
      <line x1="82" y1="38" x2="72" y2="52" stroke="#111" strokeWidth="0.8" opacity="0.15" />
    </g>
  );
}

export function BirdBeak() {
  return (
    <g>
      <path d="M50 33 L68 40 L50 42 Z" fill="#FF8C00" />
      <line x1="50" y1="38" x2="66" y2="40" stroke="#CC6600" strokeWidth="0.6" />
    </g>
  );
}

export const BIRD_PART_COMPONENTS: Record<string, React.FC<{ color: string }>> = {
  'bird-left-wing': BirdLeftWing,
  'bird-right-wing': BirdRightWing,
  'bird-beak': BirdBeak,
};
