interface Props {
  color: string;
}

export function DogSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Tail - wagging */}
      <path d="M78 58 Q92 42 88 28" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="50" cy="62" rx="30" ry="22" fill={color} />
      {/* Head */}
      <circle cx="50" cy="34" r="22" fill={color} />
      {/* Floppy ears */}
      <ellipse cx="24" cy="38" rx="10" ry="20" fill={color} transform="rotate(-15 24 38)" />
      <ellipse cx="76" cy="38" rx="10" ry="20" fill={color} transform="rotate(15 76 38)" />
      {/* Inner ears - darker */}
      <ellipse cx="24" cy="40" rx="6" ry="14" fill="#111" opacity="0.1" transform="rotate(-15 24 40)" />
      <ellipse cx="76" cy="40" rx="6" ry="14" fill="#111" opacity="0.1" transform="rotate(15 76 40)" />
      {/* Muzzle - lighter area */}
      <ellipse cx="50" cy="42" rx="12" ry="9" fill={color} />
      <ellipse cx="50" cy="42" rx="12" ry="9" fill="white" opacity="0.2" />
      {/* Nose */}
      <ellipse cx="50" cy="40" rx="5" ry="3.5" fill="#111" />
      <circle cx="48" cy="39" r="1" fill="white" opacity="0.3" />
      {/* Eyes */}
      <circle cx="39" cy="30" r="5" fill="#111" />
      <circle cx="61" cy="30" r="5" fill="#111" />
      <circle cx="41" cy="28" r="2" fill="white" />
      <circle cx="63" cy="28" r="2" fill="white" />
      {/* Eyebrows */}
      <path d="M33 24 L44 23" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M56 23 L67 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="50" cy="50" rx="4" ry="6" fill="#F472B6" />
      {/* Paws */}
      <ellipse cx="32" cy="82" rx="9" ry="5" fill={color} />
      <ellipse cx="68" cy="82" rx="9" ry="5" fill={color} />
    </svg>
  );
}
