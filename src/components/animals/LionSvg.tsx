interface Props {
  color: string;
}

export function LionSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Big mane - the defining feature, fills most of the space */}
      <circle cx="50" cy="45" r="38" fill={color} />
      {/* Spiky mane edges for texture */}
      <circle cx="50" cy="10" r="10" fill={color} />
      <circle cx="25" cy="15" r="10" fill={color} />
      <circle cx="75" cy="15" r="10" fill={color} />
      <circle cx="14" cy="35" r="10" fill={color} />
      <circle cx="86" cy="35" r="10" fill={color} />
      <circle cx="14" cy="55" r="10" fill={color} />
      <circle cx="86" cy="55" r="10" fill={color} />
      <circle cx="25" cy="75" r="10" fill={color} />
      <circle cx="75" cy="75" r="10" fill={color} />
      {/* Face - lighter center */}
      <circle cx="50" cy="45" r="22" fill={color} />
      {/* Eyes */}
      <circle cx="40" cy="40" r="5" fill="#111" />
      <circle cx="60" cy="40" r="5" fill="#111" />
      {/* Nose */}
      <circle cx="50" cy="50" r="4" fill="#111" />
      {/* Mouth */}
      <path
        d="M44 56 Q50 62 56 56"
        fill="none"
        stroke="#111"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Body below */}
      <ellipse cx="50" cy="85" rx="20" ry="12" fill={color} />
    </svg>
  );
}
