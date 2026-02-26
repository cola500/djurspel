interface Props {
  color: string;
}

export function CowSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Big rectangular body */}
      <rect x="15" y="40" width="70" height="40" rx="12" fill={color} />
      {/* Head */}
      <circle cx="50" cy="32" r="22" fill={color} />
      {/* Horns - thick and bold */}
      <path d="M32 18 L22 4 L30 15" fill={color} stroke={color} strokeWidth="6" strokeLinecap="round" />
      <path d="M68 18 L78 4 L70 15" fill={color} stroke={color} strokeWidth="6" strokeLinecap="round" />
      {/* Legs - thick stumps */}
      <rect x="22" y="75" width="14" height="18" rx="5" fill={color} />
      <rect x="64" y="75" width="14" height="18" rx="5" fill={color} />
      {/* Eyes */}
      <circle cx="40" cy="30" r="4" fill="#111" />
      <circle cx="60" cy="30" r="4" fill="#111" />
      {/* Spots for recognition */}
      <circle cx="35" cy="55" r="8" fill="#111" opacity="0.2" />
      <circle cx="60" cy="50" r="6" fill="#111" opacity="0.2" />
    </svg>
  );
}
