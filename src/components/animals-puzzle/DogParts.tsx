interface PartProps {
  color: string;
}

export function DogBody({ color }: PartProps) {
  return (
    <g>
      {/* Body */}
      <ellipse cx="45" cy="62" rx="28" ry="22" fill={color} />
      {/* Head */}
      <circle cx="45" cy="35" r="20" fill={color} />
      {/* Snout */}
      <ellipse cx="45" cy="42" rx="8" ry="5" fill={color} />
      <ellipse cx="45" cy="43" rx="5" ry="3" fill="#111" />
      {/* Eyes */}
      <circle cx="37" cy="32" r="4" fill="#111" />
      <circle cx="53" cy="32" r="4" fill="#111" />
      {/* Legs */}
      <rect x="22" y="78" width="12" height="16" rx="5" fill={color} />
      <rect x="52" y="78" width="12" height="16" rx="5" fill={color} />
    </g>
  );
}

export function DogLeftEar({ color }: PartProps) {
  return (
    <ellipse cx="20" cy="32" rx="10" ry="18" fill={color} transform="rotate(-15 20 32)" />
  );
}

export function DogRightEar({ color }: PartProps) {
  return (
    <ellipse cx="70" cy="32" rx="10" ry="18" fill={color} transform="rotate(15 70 32)" />
  );
}

export function DogTail({ color }: PartProps) {
  return (
    <path
      d="M68 58 Q88 40 85 22 Q84 16 88 12"
      fill="none"
      stroke={color}
      strokeWidth="7"
      strokeLinecap="round"
    />
  );
}

export const DOG_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'dog-left-ear': DogLeftEar,
  'dog-right-ear': DogRightEar,
  'dog-tail': DogTail,
};
