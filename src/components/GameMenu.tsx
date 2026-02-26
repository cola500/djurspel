'use client';

import Link from 'next/link';

export function GameMenu() {
  return (
    <div className="w-full p-3">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-xl text-lg font-bold active:scale-95 transition-transform border-2 border-white/20"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Tillbaka
      </Link>
    </div>
  );
}
