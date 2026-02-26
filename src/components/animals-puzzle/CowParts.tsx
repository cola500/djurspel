interface PartProps {
  color: string;
}

export function CowBody({ color }: PartProps) {
  return (
    <g>
      <defs>
        <radialGradient id="cow-body-grad" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="white" stopOpacity="0.05" />
          <stop offset="100%" stopColor="black" stopOpacity="0.06" />
        </radialGradient>
        <radialGradient id="cow-nose-grad" cx="0.4" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="#FFB6C6" />
          <stop offset="100%" stopColor="#F8A0B0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="45" cy="93" rx="32" ry="3.5" fill="black" opacity="0.12" />

      {/* Body */}
      <rect x="15" y="42" width="60" height="35" rx="12" fill={color} />
      <rect x="15" y="42" width="60" height="35" rx="12" fill="url(#cow-body-grad)" />

      {/* Black spots - more prominent */}
      <ellipse cx="28" cy="52" rx="9" ry="7" fill="#1a1a1a" opacity="0.2" />
      <ellipse cx="58" cy="48" rx="7" ry="5" fill="#1a1a1a" opacity="0.18" />
      <ellipse cx="42" cy="68" rx="6" ry="4.5" fill="#1a1a1a" opacity="0.15" />
      <circle cx="65" cy="62" r="5" fill="#1a1a1a" opacity="0.12" />

      {/* Head */}
      <circle cx="45" cy="32" r="20" fill={color} />
      <circle cx="45" cy="32" r="20" fill="url(#cow-body-grad)" />
      {/* Head spot */}
      <ellipse cx="52" cy="24" rx="6" ry="5" fill="#1a1a1a" opacity="0.15" />

      {/* Ears */}
      <ellipse cx="22" cy="28" rx="7.5" ry="4.5" fill={color} transform="rotate(-20 22 28)" />
      <ellipse cx="22" cy="28" rx="5" ry="3" fill="#F8A0B0" opacity="0.3" transform="rotate(-20 22 28)" />
      <ellipse cx="68" cy="28" rx="7.5" ry="4.5" fill={color} transform="rotate(20 68 28)" />
      <ellipse cx="68" cy="28" rx="5" ry="3" fill="#F8A0B0" opacity="0.3" transform="rotate(20 68 28)" />

      {/* Muzzle - pink and detailed */}
      <ellipse cx="45" cy="40" rx="12" ry="8.5" fill="url(#cow-nose-grad)" />
      {/* Muzzle highlight */}
      <ellipse cx="43" cy="38" rx="4" ry="2" fill="white" opacity="0.2" />

      {/* Nostrils - more defined */}
      <ellipse cx="40" cy="40.5" rx="2.8" ry="2" fill="#111" opacity="0.3" />
      <ellipse cx="50" cy="40.5" rx="2.8" ry="2" fill="#111" opacity="0.3" />
      {/* Nostril inner */}
      <ellipse cx="40" cy="40" rx="1.5" ry="1" fill="#111" opacity="0.15" />
      <ellipse cx="50" cy="40" rx="1.5" ry="1" fill="#111" opacity="0.15" />

      {/* Mouth */}
      <path d="M40 44 Q45 47 50 44" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.15" />

      {/* Eyes */}
      <circle cx="35" cy="28" r="4.5" fill="#3B1F06" />
      <circle cx="55" cy="28" r="4.5" fill="#3B1F06" />
      {/* Eyelashes */}
      <path d="M31 25 L29 23" stroke="#111" strokeWidth="0.6" opacity="0.2" />
      <path d="M33 24 L32 21" stroke="#111" strokeWidth="0.6" opacity="0.2" />
      <path d="M57 24 L58 21" stroke="#111" strokeWidth="0.6" opacity="0.2" />
      <path d="M59 25 L61 23" stroke="#111" strokeWidth="0.6" opacity="0.2" />
      {/* Eye highlights */}
      <circle cx="36.5" cy="27" r="1.5" fill="white" opacity="0.7" />
      <circle cx="56.5" cy="27" r="1.5" fill="white" opacity="0.7" />

      {/* Bell */}
      <circle cx="45" cy="48" r="3.5" fill="#FBBF24" />
      <circle cx="45" cy="48" r="3.5" fill="white" opacity="0.15" />
      <rect x="43" y="44" width="4" height="3" rx="1" fill="#FBBF24" />
      {/* Bell highlight */}
      <circle cx="44" cy="47" r="0.8" fill="white" opacity="0.4" />

      {/* Udder hint */}
      <ellipse cx="45" cy="77" rx="6" ry="3" fill="#F8A0B0" opacity="0.25" />

      {/* Legs */}
      <rect x="20" y="72" width="12" height="18" rx="5" fill={color} />
      <rect x="55" y="72" width="12" height="18" rx="5" fill={color} />
      {/* Leg spots */}
      <ellipse cx="26" cy="80" rx="3" ry="4" fill="#1a1a1a" opacity="0.1" />

      {/* Hooves - more defined */}
      <rect x="19" y="87" width="14" height="5" rx="2.5" fill="#444" />
      <rect x="54" y="87" width="14" height="5" rx="2.5" fill="#444" />
      {/* Hoof split */}
      <line x1="26" y1="87" x2="26" y2="92" stroke="#333" strokeWidth="0.8" />
      <line x1="61" y1="87" x2="61" y2="92" stroke="#333" strokeWidth="0.8" />
    </g>
  );
}

export function CowLeftHorn({ color }: PartProps) {
  void color;
  return (
    <g>
      <defs>
        <linearGradient id="cow-lhorn-grad" x1="0" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="70%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#F5F5DC" />
        </linearGradient>
      </defs>
      <path
        d="M32 18 L22 2 L30 14"
        fill="url(#cow-lhorn-grad)"
        stroke="url(#cow-lhorn-grad)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Horn ridges */}
      <path d="M28 12 L29 10" stroke="#B45309" strokeWidth="0.4" opacity="0.3" />
      <path d="M26 8 L27 6" stroke="#B45309" strokeWidth="0.4" opacity="0.3" />
    </g>
  );
}

export function CowRightHorn({ color }: PartProps) {
  void color;
  return (
    <g>
      <defs>
        <linearGradient id="cow-rhorn-grad" x1="1" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="70%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#F5F5DC" />
        </linearGradient>
      </defs>
      <path
        d="M58 18 L68 2 L60 14"
        fill="url(#cow-rhorn-grad)"
        stroke="url(#cow-rhorn-grad)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Horn ridges */}
      <path d="M62 12 L61 10" stroke="#B45309" strokeWidth="0.4" opacity="0.3" />
      <path d="M64 8 L63 6" stroke="#B45309" strokeWidth="0.4" opacity="0.3" />
    </g>
  );
}

export function CowTail({ color }: PartProps) {
  return (
    <g>
      {/* Tail rope */}
      <path
        d="M72 55 Q92 45 88 28"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Tail shadow */}
      <path
        d="M72 55 Q92 45 88 28"
        fill="none"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.06"
      />
      {/* Tail tuft */}
      <ellipse cx="88" cy="25" rx="5.5" ry="6" fill="#333" opacity="0.6" />
      <ellipse cx="88" cy="25" rx="4" ry="4.5" fill="#444" opacity="0.4" />
      {/* Tuft hair lines */}
      <path d="M85 22 L84 19" stroke="#333" strokeWidth="0.6" opacity="0.3" />
      <path d="M88 21 L88 18" stroke="#333" strokeWidth="0.6" opacity="0.3" />
      <path d="M91 22 L92 19" stroke="#333" strokeWidth="0.6" opacity="0.3" />
    </g>
  );
}

export const COW_PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  'cow-left-horn': CowLeftHorn,
  'cow-right-horn': CowRightHorn,
  'cow-tail': CowTail,
};
