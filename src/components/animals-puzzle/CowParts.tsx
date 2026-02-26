interface PartProps {
  color: string;
}

export function CowBody({ color }: PartProps) {
  return (
    <g>
      {/* Body */}
      <rect x="15" y="42" width="60" height="35" rx="12" fill={color} />
      {/* Spots */}
      <ellipse cx="28" cy="54" rx="8" ry="6" fill="#111" opacity="0.12" />
      <ellipse cx="55" cy="50" rx="6" ry="5" fill="#111" opacity="0.12" />
      {/* Head */}
      <circle cx="45" cy="32" r="20" fill={color} />
      {/* Ears */}
      <ellipse cx="22" cy="28" rx="7" ry="4" fill={color} transform="rotate(-20 22 28)" />
      <ellipse cx="68" cy="28" rx="7" ry="4" fill={color} transform="rotate(20 68 28)" />
      {/* Muzzle */}
      <ellipse cx="45" cy="40" rx="12" ry="8" fill="#F8C8DC" />
      {/* Nostrils */}
      <ellipse cx="40" cy="40" rx="2.5" ry="1.8" fill="#111" opacity="0.3" />
      <ellipse cx="50" cy="40" rx="2.5" ry="1.8" fill="#111" opacity="0.3" />
      {/* Eyes */}
      <circle cx="35" cy="28" r="4" fill="#111" />
      <circle cx="55" cy="28" r="4" fill="#111" />
      <circle cx="36" cy="27" r="1.5" fill="white" />
      <circle cx="56" cy="27" r="1.5" fill="white" />
      {/* Bell */}
      <circle cx="45" cy="48" r="3.5" fill="#FBBF24" />
      <rect x="43" y="44" width="4" height="3" rx="1" fill="#FBBF24" />
      {/* Legs */}
      <rect x="20" y="72" width="12" height="18" rx="5" fill={color} />
      <rect x="55" y="72" width="12" height="18" rx="5" fill={color} />
      {/* Hooves */}
      <rect x="20" y="86" width="12" height="4" rx="2" fill="#555" />
      <rect x="55" y="86" width="12" height="4" rx="2" fill="#555" />
    </g>
  );
}

export function CowLeftHorn({ color }: PartProps) {
  void color;
  return (
    <path
      d="M32 18 L22 2 L30 14"
      fill="#FBBF24"
      stroke="#FBBF24"
      strokeWidth="5"
      strokeLinecap="round"
    />
  );
}

export function CowRightHorn({ color }: PartProps) {
  void color;
  return (
    <path
      d="M58 18 L68 2 L60 14"
      fill="#FBBF24"
      stroke="#FBBF24"
      strokeWidth="5"
      strokeLinecap="round"
    />
  );
}

export function CowTail({ color }: PartProps) {
  return (
    <g>
      <path
        d="M72 55 Q92 45 88 28"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="88" cy="26" r="5" fill={color} />
    </g>
  );
}

export const COW_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'cow-left-horn': CowLeftHorn,
  'cow-right-horn': CowRightHorn,
  'cow-tail': CowTail,
};
