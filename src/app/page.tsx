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
