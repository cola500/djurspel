'use client';

import Link from 'next/link';

const GAMES = [
  {
    href: '/memory',
    label: 'Memory',
    color: 'from-yellow-400 to-orange-500',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Two cards overlapping */}
        <rect x="10" y="15" width="45" height="60" rx="8" fill="#FACC15" opacity="0.8" />
        <rect x="30" y="25" width="45" height="60" rx="8" fill="#EF4444" />
        <text x="52" y="65" textAnchor="middle" fontSize="28" fill="white">?</text>
      </svg>
    ),
  },
  {
    href: '/build-animal',
    label: 'Bygg djur',
    color: 'from-green-400 to-emerald-500',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Puzzle pieces */}
        <rect x="15" y="15" width="35" height="35" rx="5" fill="#22C55E" opacity="0.8" />
        <rect x="55" y="15" width="35" height="35" rx="5" fill="#22C55E" />
        <rect x="15" y="55" width="35" height="35" rx="5" fill="#22C55E" />
        <rect x="55" y="55" width="35" height="35" rx="5" fill="#22C55E" opacity="0.6" stroke="white" strokeWidth="2" strokeDasharray="5 3" />
      </svg>
    ),
  },
  {
    href: '/which-is-missing',
    label: 'Vilken saknas?',
    color: 'from-purple-400 to-violet-500',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Three animals, one with question mark */}
        <circle cx="25" cy="40" r="18" fill="#A855F7" />
        <circle cx="75" cy="40" r="18" fill="#A855F7" />
        <circle cx="50" cy="75" r="18" fill="none" stroke="white" strokeWidth="3" strokeDasharray="6 4" />
        <text x="50" y="82" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">?</text>
      </svg>
    ),
  },
  {
    href: '/dino-hopp',
    label: 'Dino Hopp!',
    color: 'from-lime-400 to-green-500',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Simple dino silhouette */}
        <ellipse cx="50" cy="55" rx="22" ry="28" fill="#22C55E" />
        <circle cx="62" cy="32" r="14" fill="#22C55E" />
        <circle cx="67" cy="29" r="4" fill="white" />
        <circle cx="68" cy="28" r="2" fill="#1a1a1a" />
        <rect x="36" y="72" width="8" height="14" rx="3" fill="#16A34A" />
        <rect x="54" y="72" width="8" height="14" rx="3" fill="#16A34A" />
        <path d="M30 50 L18 38 L28 42" fill="#22C55E" />
        <circle cx="42" cy="26" r="4" fill="#4ADE80" />
        <circle cx="50" cy="24" r="4" fill="#4ADE80" />
        <circle cx="58" cy="26" r="4" fill="#4ADE80" />
      </svg>
    ),
  },
  {
    href: '/djurljud',
    label: 'Vem låter så?',
    color: 'from-cyan-400 to-blue-500',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Speaker with music notes */}
        <rect x="15" y="35" width="20" height="30" rx="3" fill="white" />
        <polygon points="35,30 60,15 60,85 35,70" fill="white" opacity="0.9" />
        <text x="72" y="35" fontSize="20" fill="white" opacity="0.8">&#9835;</text>
        <text x="80" y="60" fontSize="16" fill="white" opacity="0.6">&#9833;</text>
        <text x="70" y="78" fontSize="18" fill="white" opacity="0.7">&#9835;</text>
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-gray-950 flex flex-col items-center justify-center p-6 select-none">
      <h1 className="text-4xl font-bold mb-10 text-white">Djurspel</h1>

      <div className="flex flex-col gap-6 w-full max-w-xs">
        {GAMES.map(game => (
          <Link
            key={game.href}
            href={game.href}
            className={`flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-br ${game.color} active:scale-95 transition-transform shadow-lg`}
          >
            <div className="w-20 h-20 flex-shrink-0">{game.icon}</div>
            <span className="text-2xl font-bold text-white">{game.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
