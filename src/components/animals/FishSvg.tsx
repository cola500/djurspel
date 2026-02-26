interface Props {
  color: string;
}

export function FishSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Classic fish body - large oval pointed at ends */}
      <path
        d="M15 50 Q30 20 55 20 Q80 20 85 50 Q80 80 55 80 Q30 80 15 50 Z"
        fill={color}
      />
      {/* Tail fin - bold V shape */}
      <path d="M12 50 L0 25 L0 75 Z" fill={color} />
      {/* Eye - big for recognition */}
      <circle cx="68" cy="45" r="7" fill="#fff" />
      <circle cx="70" cy="45" r="4" fill="#111" />
      {/* Dorsal fin on top */}
      <path d="M40 22 L50 5 L60 22" fill={color} />
      {/* Bottom fin */}
      <path d="M40 78 L50 95 L60 78" fill={color} />
    </svg>
  );
}
