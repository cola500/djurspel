interface Props {
  color: string;
}

export function LionSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Mane - big circle of spiky edges */}
      <circle cx="50" cy="42" r="36" fill={color} />
      {/* Mane spikes */}
      <circle cx="50" cy="8" r="10" fill={color} />
      <circle cx="26" cy="12" r="10" fill={color} />
      <circle cx="74" cy="12" r="10" fill={color} />
      <circle cx="14" cy="32" r="10" fill={color} />
      <circle cx="86" cy="32" r="10" fill={color} />
      <circle cx="14" cy="52" r="10" fill={color} />
      <circle cx="86" cy="52" r="10" fill={color} />
      <circle cx="26" cy="72" r="10" fill={color} />
      <circle cx="74" cy="72" r="10" fill={color} />
      {/* Face - slightly lighter */}
      <circle cx="50" cy="42" r="22" fill={color} />
      <circle cx="50" cy="42" r="22" fill="white" opacity="0.08" />
      {/* Ears */}
      <circle cx="32" cy="22" r="6" fill={color} />
      <circle cx="68" cy="22" r="6" fill={color} />
      <circle cx="32" cy="22" r="3" fill="#111" opacity="0.15" />
      <circle cx="68" cy="22" r="3" fill="#111" opacity="0.15" />
      {/* Eyes */}
      <ellipse cx="40" cy="38" rx="5" ry="4" fill="#111" />
      <ellipse cx="60" cy="38" rx="5" ry="4" fill="#111" />
      <circle cx="42" cy="37" r="1.5" fill="white" />
      <circle cx="62" cy="37" r="1.5" fill="white" />
      {/* Nose */}
      <path d="M47 47 L50 50 L53 47 Z" fill="#111" />
      {/* Whisker dots */}
      <circle cx="38" cy="50" r="1" fill="#111" opacity="0.3" />
      <circle cx="34" cy="48" r="1" fill="#111" opacity="0.3" />
      <circle cx="62" cy="50" r="1" fill="#111" opacity="0.3" />
      <circle cx="66" cy="48" r="1" fill="#111" opacity="0.3" />
      {/* Mouth */}
      <path d="M50 50 L46 55" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 50 L54 55" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="50" cy="84" rx="18" ry="12" fill={color} />
      {/* Paws */}
      <ellipse cx="38" cy="94" rx="7" ry="4" fill={color} />
      <ellipse cx="62" cy="94" rx="7" ry="4" fill={color} />
    </svg>
  );
}
