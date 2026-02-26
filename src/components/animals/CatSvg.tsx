interface Props {
  color: string;
}

export function CatSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Cat silhouette: pointy ears, rounded body, tail */}
      <path
        d="M25 90 L25 50 L15 18 L32 38 L50 28 L68 38 L85 18 L75 50 L75 90 Z"
        fill={color}
      />
      {/* Rounded belly */}
      <ellipse cx="50" cy="75" rx="28" ry="18" fill={color} />
      {/* Eyes */}
      <circle cx="38" cy="48" r="5" fill="#111" />
      <circle cx="62" cy="48" r="5" fill="#111" />
    </svg>
  );
}
