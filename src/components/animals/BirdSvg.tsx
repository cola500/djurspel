interface Props {
  color: string;
}

export function BirdSvg({ color }: Props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Tail feathers */}
      <path d="M40 72 L25 94 L45 78 L55 78 L75 94 L60 72 Z" fill={color} />
      {/* Body */}
      <ellipse cx="50" cy="55" rx="22" ry="20" fill={color} />
      {/* Chest - lighter area */}
      <ellipse cx="50" cy="60" rx="14" ry="14" fill="white" opacity="0.15" />
      {/* Left wing */}
      <path d="M28 52 L4 28 L8 42 L14 52 Z" fill={color} />
      {/* Right wing */}
      <path d="M72 52 L96 28 L92 42 L86 52 Z" fill={color} />
      {/* Wing feather lines */}
      <line x1="10" y1="36" x2="22" y2="50" stroke="#111" strokeWidth="1" opacity="0.15" />
      <line x1="90" y1="36" x2="78" y2="50" stroke="#111" strokeWidth="1" opacity="0.15" />
      {/* Head */}
      <circle cx="50" cy="30" r="16" fill={color} />
      {/* Beak */}
      <path d="M56 32 L70 38 L56 40 Z" fill="#FF8C00" />
      <line x1="56" y1="36" x2="68" y2="38" stroke="#CC6600" strokeWidth="0.8" />
      {/* Eye */}
      <circle cx="46" cy="27" r="5" fill="white" />
      <circle cx="47" cy="27" r="3" fill="#111" />
      <circle cx="48" cy="26" r="1" fill="white" />
      {/* Crest/tuft on top */}
      <path d="M48 15 L44 6 L50 12 L54 4 L52 15" fill={color} />
      {/* Legs */}
      <line x1="42" y1="74" x2="38" y2="88" stroke="#FF8C00" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="74" x2="62" y2="88" stroke="#FF8C00" strokeWidth="3" strokeLinecap="round" />
      {/* Feet */}
      <path d="M34 88 L38 88 L42 88" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 88 L62 88 L66 88" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
