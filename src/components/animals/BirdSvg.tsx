interface Props {
  color: string;
}

export function BirdSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body - round */}
      <ellipse cx="50" cy="55" rx="22" ry="20" fill={color} />
      {/* Head */}
      <circle cx="50" cy="30" r="16" fill={color} />
      {/* Left wing spread */}
      <path d="M28 55 L5 30 L15 55 Z" fill={color} />
      {/* Right wing spread */}
      <path d="M72 55 L95 30 L85 55 Z" fill={color} />
      {/* Beak - bold triangle */}
      <path d="M50 35 L62 42 L50 44 Z" fill="#FF8C00" />
      {/* Tail feathers */}
      <path d="M42 72 L30 92 L50 78 L70 92 L58 72 Z" fill={color} />
      {/* Eye */}
      <circle cx="44" cy="28" r="4" fill="#111" />
    </svg>
  );
}
