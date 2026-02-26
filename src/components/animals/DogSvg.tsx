interface Props {
  color: string;
}

export function DogSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Dog body: big rounded body */}
      <ellipse cx="50" cy="65" rx="32" ry="25" fill={color} />
      {/* Head */}
      <circle cx="50" cy="35" r="22" fill={color} />
      {/* Floppy ears */}
      <ellipse cx="26" cy="38" rx="10" ry="18" fill={color} transform="rotate(-15 26 38)" />
      <ellipse cx="74" cy="38" rx="10" ry="18" fill={color} transform="rotate(15 74 38)" />
      {/* Snout */}
      <ellipse cx="50" cy="45" rx="10" ry="7" fill={color} />
      <ellipse cx="50" cy="46" rx="6" ry="4" fill="#111" />
      {/* Eyes */}
      <circle cx="40" cy="32" r="4" fill="#111" />
      <circle cx="60" cy="32" r="4" fill="#111" />
    </svg>
  );
}
