interface Props {
  color: string;
}

export function FrogSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Wide body */}
      <ellipse cx="50" cy="60" rx="38" ry="28" fill={color} />
      {/* Big bulging eyes on top - characteristic frog feature */}
      <circle cx="30" cy="28" r="14" fill={color} />
      <circle cx="70" cy="28" r="14" fill={color} />
      {/* Eye pupils */}
      <circle cx="30" cy="26" r="7" fill="#111" />
      <circle cx="70" cy="26" r="7" fill="#111" />
      {/* Wide mouth line */}
      <path
        d="M22 62 Q50 78 78 62"
        fill="none"
        stroke="#111"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Front legs */}
      <path d="M18 70 L5 85 L15 82 L20 90 L22 75" fill={color} />
      <path d="M82 70 L95 85 L85 82 L80 90 L78 75" fill={color} />
    </svg>
  );
}
