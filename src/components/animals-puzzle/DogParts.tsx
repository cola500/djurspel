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
      {/* Muzzle - lighter area */}
      <ellipse cx="45" cy="42" rx="10" ry="7" fill={color} />
      <ellipse cx="45" cy="42" rx="10" ry="7" fill="white" opacity="0.2" />
      {/* Nose */}
      <ellipse cx="45" cy="40" rx="4" ry="3" fill="#111" />
      <circle cx="43" cy="39" r="1" fill="white" opacity="0.3" />
      {/* Eyes */}
      <circle cx="36" cy="30" r="4.5" fill="#111" />
      <circle cx="54" cy="30" r="4.5" fill="#111" />
      <circle cx="38" cy="28" r="1.8" fill="white" />
      <circle cx="56" cy="28" r="1.8" fill="white" />
      {/* Eyebrows */}
      <path d="M30 24 L40 23" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 23 L60 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="45" cy="48" rx="3" ry="5" fill="#F472B6" />
      {/* Legs */}
      <rect x="22" y="78" width="12" height="16" rx="5" fill={color} />
      <rect x="52" y="78" width="12" height="16" rx="5" fill={color} />
      {/* Paws */}
      <ellipse cx="28" cy="93" rx="7" ry="3.5" fill={color} />
      <ellipse cx="58" cy="93" rx="7" ry="3.5" fill={color} />
    </g>
  );
}

export function DogLeftEar({ color }: PartProps) {
  return (
    <g>
      <ellipse cx="20" cy="32" rx="10" ry="18" fill={color} transform="rotate(-15 20 32)" />
      <ellipse cx="20" cy="34" rx="6" ry="12" fill="#111" opacity="0.1" transform="rotate(-15 20 34)" />
    </g>
  );
}

export function DogRightEar({ color }: PartProps) {
  return (
    <g>
      <ellipse cx="70" cy="32" rx="10" ry="18" fill={color} transform="rotate(15 70 32)" />
      <ellipse cx="70" cy="34" rx="6" ry="12" fill="#111" opacity="0.1" transform="rotate(15 70 34)" />
    </g>
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
