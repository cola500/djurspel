'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { PlacedPart, Position, PuzzleState } from '@/lib/puzzle-types';
import { PUZZLE_ANIMALS } from '@/lib/puzzle-animals';
import { checkPlacement, isComplete, initPlacedParts, shuffleArray } from '@/lib/puzzle-logic';
import { playAnimalSound, playSnapSound, playErrorSound, playWinSound, initAudio } from '@/lib/sounds';
import { BODY_COMPONENTS, PART_COMPONENTS } from './animals-puzzle';
import { DropZone } from './DropZone';
import { DraggablePart } from './DraggablePart';
import { CompletedAnimalView } from './CompletedAnimalView';

export function PuzzleBoard() {
  const [animalOrder] = useState(() => shuffleArray(PUZZLE_ANIMALS));
  const [animalIndex, setAnimalIndex] = useState(0);
  const [placedParts, setPlacedParts] = useState<PlacedPart[]>(() =>
    initPlacedParts(animalOrder[0])
  );
  const [shuffledPartIds, setShuffledPartIds] = useState<string[]>(() =>
    shuffleArray(animalOrder[0].parts.map(p => p.id))
  );
  const [puzzleState, setPuzzleState] = useState<PuzzleState>('playing');
  const [mounted, setMounted] = useState(false);
  const [audioInit, setAudioInit] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animal = animalOrder[animalIndex];
  const BodySvg = BODY_COMPONENTS[animal.type];

  const ensureAudio = useCallback(() => {
    if (!audioInit) {
      initAudio();
      setAudioInit(true);
    }
  }, [audioInit]);

  const handleDrop = useCallback((partId: string, dropPosition: Position): boolean => {
    ensureAudio();
    const container = containerRef.current;
    if (!container) return false;

    const containerSize = container.getBoundingClientRect().width;
    const part = animal.parts.find(p => p.id === partId);
    if (!part) return false;

    const success = checkPlacement(dropPosition, part.slotPosition, containerSize);

    if (success) {
      playSnapSound();
      setPlacedParts(prev => {
        const updated = prev.map(p =>
          p.partId === partId ? { ...p, placed: true } : p
        );
        if (isComplete(updated)) {
          setTimeout(() => {
            playAnimalSound(animal.type);
            setTimeout(() => playWinSound(), 600);
            setPuzzleState('complete');
          }, 300);
        }
        return updated;
      });
      return true;
    } else {
      playErrorSound();
      return false;
    }
  }, [animal, ensureAudio]);

  const goToNextAnimal = useCallback(() => {
    const nextIndex = (animalIndex + 1) % animalOrder.length;
    const nextAnimal = animalOrder[nextIndex];
    setAnimalIndex(nextIndex);
    setPlacedParts(initPlacedParts(nextAnimal));
    setShuffledPartIds(shuffleArray(nextAnimal.parts.map(p => p.id)));
    setPuzzleState('playing');
  }, [animalIndex, animalOrder]);

  if (!mounted) {
    return (
      <div className="min-h-dvh bg-gray-950 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-950 flex flex-col items-center p-4 select-none">
      {/* Animal name */}
      <h2 className="text-2xl font-bold mb-4 text-white">
        Bygg en {animal.label}!
      </h2>

      {/* Animal canvas */}
      <div
        ref={containerRef}
        className="relative w-full max-w-xs aspect-square bg-gray-900 rounded-2xl border-2 border-white/10 overflow-visible"
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Body is always visible */}
          <BodySvg color={animal.color} />

          {/* Placed parts appear on the body */}
          {placedParts.map(pp => {
            if (!pp.placed) return null;
            const PartSvg = PART_COMPONENTS[pp.partId];
            if (!PartSvg) return null;
            return <PartSvg key={pp.partId} color={animal.color} />;
          })}

          {/* Drop zone indicators for unplaced parts */}
          {animal.parts.map(part => {
            const pp = placedParts.find(p => p.partId === part.id);
            return (
              <DropZone key={part.id} part={part} placed={pp?.placed ?? false} />
            );
          })}
        </svg>
      </div>

      {/* Draggable parts tray */}
      <div className="flex gap-3 mt-6 flex-wrap justify-center">
        {shuffledPartIds.map(partId => {
          const part = animal.parts.find(p => p.id === partId);
          const pp = placedParts.find(p => p.partId === partId);
          if (!part || pp?.placed) return null;
          return (
            <DraggablePart
              key={partId}
              part={part}
              color={animal.color}
              placed={pp?.placed ?? false}
              containerRef={containerRef}
              onDrop={handleDrop}
            />
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="flex gap-2 mt-6">
        {animalOrder.map((a, i) => (
          <div
            key={a.type}
            className={`w-4 h-4 rounded-full transition-colors ${
              i === animalIndex
                ? 'bg-white scale-125'
                : i < animalIndex
                  ? 'bg-green-500'
                  : 'bg-gray-700'
            }`}
          />
        ))}
      </div>

      {/* Completed animal view */}
      {puzzleState === 'complete' && (
        <CompletedAnimalView
          animal={animal}
          isLast={animalIndex >= animalOrder.length - 1}
          onNext={goToNextAnimal}
        />
      )}
    </div>
  );
}
