'use client';

import { Card } from '@/lib/types';
import { ANIMALS } from '@/lib/animals';
import { AnimalSvgMap } from '@/components/animals';

interface Props {
  card: Card;
  onClick: () => void;
  disabled: boolean;
}

export function MemoryCard({ card, onClick, disabled }: Props) {
  const isFaceUp = card.state === 'faceup' || card.state === 'matched';
  const isMatched = card.state === 'matched';
  const animalConfig = ANIMALS.find(a => a.type === card.animal)!;
  const AnimalSvg = AnimalSvgMap[card.animal];

  return (
    <button
      onClick={onClick}
      disabled={disabled || isFaceUp}
      className="aspect-square w-full [perspective:600px]"
      aria-label={isFaceUp ? animalConfig.label : 'Vänd kort'}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFaceUp ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Back of card (facedown) */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl border-4 border-white/30 bg-gray-800 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-white/20" />
        </div>

        {/* Front of card (faceup) */}
        <div
          className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border-4 bg-gray-900 flex items-center justify-center p-3 ${
            isMatched
              ? 'border-green-400 animate-[glow-pulse_2s_ease-in-out_infinite]'
              : 'border-white/40'
          }`}
        >
          <AnimalSvg color={animalConfig.color} />
        </div>
      </div>
    </button>
  );
}
