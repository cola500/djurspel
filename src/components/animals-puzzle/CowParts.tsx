interface PartProps {
  color: string;
}

export function CowBody({ color }: PartProps) {
  return (
    <g>
      {/* Body */}
      <rect x="15" y="42" width="60" height="35" rx="12" fill={color} />
      {/* Head */}
      <circle cx="45" cy="32" r="20" fill={color} />
      {/* Eyes */}
      <circle cx="37" cy="30" r="4" fill="#111" />
      <circle cx="53" cy="30" r="4" fill="#111" />
      {/* Nostrils */}
      <circle cx="41" cy="40" r="2" fill="#111" opacity="0.4" />
      <circle cx="49" cy="40" r="2" fill="#111" opacity="0.4" />
      {/* Spots */}
      <circle cx="30" cy="55" r="7" fill="#111" opacity="0.15" />
      <circle cx="55" cy="50" r="5" fill="#111" opacity="0.15" />
      {/* Legs */}
      <rect x="20" y="72" width="12" height="18" rx="5" fill={color} />
      <rect x="55" y="72" width="12" height="18" rx="5" fill={color} />
    </g>
  );
}

export function CowLeftHorn({ color }: PartProps) {
  return (
    <path
      d="M32 18 L22 2 L30 14"
      fill={color}
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
    />
  );
}

export function CowRightHorn({ color }: PartProps) {
  return (
    <path
      d="M58 18 L68 2 L60 14"
      fill={color}
      stroke={color}
      strokeWidth="6"
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
      {/* Tail tuft */}
      <circle cx="88" cy="26" r="5" fill={color} />
    </g>
  );
}

export const COW_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'cow-left-horn': CowLeftHorn,
  'cow-right-horn': CowRightHorn,
  'cow-tail': CowTail,
};
