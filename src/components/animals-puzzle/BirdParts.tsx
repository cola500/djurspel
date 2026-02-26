interface PartProps {
  color: string;
}

export function BirdBody({ color }: PartProps) {
  return (
    <g>
      {/* Body */}
      <ellipse cx="45" cy="55" rx="20" ry="18" fill={color} />
      {/* Head */}
      <circle cx="45" cy="30" r="15" fill={color} />
      {/* Eye */}
      <circle cx="40" cy="28" r="4" fill="#111" />
      {/* Tail feathers */}
      <path d="M38 70 L28 90 L45 76 L62 90 L52 70 Z" fill={color} />
      {/* Legs */}
      <line x1="38" y1="72" x2="35" y2="88" stroke="#FF8C00" strokeWidth="3" strokeLinecap="round" />
      <line x1="52" y1="72" x2="55" y2="88" stroke="#FF8C00" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

export function BirdLeftWing({ color }: PartProps) {
  return (
    <path d="M25 55 L2 30 L12 55 Z" fill={color} />
  );
}

export function BirdRightWing({ color }: PartProps) {
  return (
    <path d="M65 55 L88 30 L78 55 Z" fill={color} />
  );
}

export function BirdBeak() {
  return (
    <path d="M50 33 L68 40 L50 42 Z" fill="#FF8C00" />
  );
}

export const BIRD_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'bird-left-wing': BirdLeftWing,
  'bird-right-wing': BirdRightWing,
  'bird-beak': BirdBeak,
};
