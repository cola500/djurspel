'use client';

import { PuzzleAnimal } from '@/lib/puzzle-types';
import { BODY_COMPONENTS, PART_COMPONENTS } from './animals-puzzle';

interface CompletedAnimalViewProps {
  animal: PuzzleAnimal;
  isLast: boolean;
  onNext: () => void;
}

export function CompletedAnimalView({ animal, isLast, onNext }: CompletedAnimalViewProps) {
  const BodySvg = BODY_COMPONENTS[animal.type];

  return (
    <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center gap-6 z-50 animate-fade-in">
      {/* Completed animal - big and centered */}
      <div className="w-[80vw] max-w-sm aspect-square">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          <BodySvg color={animal.color} />
          {animal.parts.map(part => {
            const PartSvg = PART_COMPONENTS[part.id];
            if (!PartSvg) return null;
            return <PartSvg key={part.id} color={animal.color} />;
          })}
        </svg>
      </div>

      {/* Animal name */}
      <h2 className="text-4xl font-bold text-white">
        {animal.label}!
      </h2>

      {/* Next button */}
      <button
        onClick={onNext}
        className="mt-4 px-10 py-5 bg-green-500 text-gray-950 rounded-2xl text-3xl font-bold active:scale-95 transition-transform shadow-[0_0_30px_rgba(74,222,128,0.5)]"
      >
        {isLast ? 'Börja om!' : 'Nästa djur!'}
      </button>
    </div>
  );
}
