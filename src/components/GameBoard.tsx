'use client';

import { useState, useCallback, useEffect } from 'react';
import { Card, PairCount, GameState } from '@/lib/types';
import { createShuffledDeck, checkForMatch } from '@/lib/game-logic';
import { playAnimalSound, playMatchSound, playWinSound, initAudio } from '@/lib/sounds';
import { MemoryCard } from './MemoryCard';

const GRID_COLS: Record<PairCount, string> = {
  4: 'grid-cols-2',
  6: 'grid-cols-3',
  8: 'grid-cols-4',
  10: 'grid-cols-4',
};

export function GameBoard() {
  const [game, setGame] = useState<GameState>(() => ({
    cards: createShuffledDeck(4),
    firstPick: null,
    secondPick: null,
    pairCount: 4,
    matchedPairs: 0,
    isChecking: false,
    isComplete: false,
  }));

  const [mounted, setMounted] = useState(false);
  const [audioInitialized, setAudioInitialized] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInit = useCallback(() => {
    if (!audioInitialized) {
      initAudio();
      setAudioInitialized(true);
    }
  }, [audioInitialized]);

  const startNewGame = useCallback((pairCount: PairCount) => {
    setGame({
      cards: createShuffledDeck(pairCount),
      firstPick: null,
      secondPick: null,
      pairCount,
      matchedPairs: 0,
      isChecking: false,
      isComplete: false,
    });
  }, []);

  const handleCardClick = useCallback((index: number) => {
    handleInit();

    setGame(prev => {
      if (prev.isChecking) return prev;
      const card = prev.cards[index];
      if (card.state !== 'facedown') return prev;

      const newCards = [...prev.cards];
      newCards[index] = { ...card, state: 'faceup' };

      playAnimalSound(card.animal);

      if (prev.firstPick === null) {
        return { ...prev, cards: newCards, firstPick: index };
      }

      return { ...prev, cards: newCards, secondPick: index, isChecking: true };
    });
  }, [handleInit]);

  // Check for match after second pick
  useEffect(() => {
    if (game.firstPick === null || game.secondPick === null || !game.isChecking) return;

    const first = game.cards[game.firstPick];
    const second = game.cards[game.secondPick];
    const isMatch = checkForMatch(first.animal, second.animal);

    const timer = setTimeout(() => {
      setGame(prev => {
        const newCards = [...prev.cards];
        if (isMatch) {
          newCards[prev.firstPick!] = { ...newCards[prev.firstPick!], state: 'matched' };
          newCards[prev.secondPick!] = { ...newCards[prev.secondPick!], state: 'matched' };
          playMatchSound();
        } else {
          newCards[prev.firstPick!] = { ...newCards[prev.firstPick!], state: 'facedown' };
          newCards[prev.secondPick!] = { ...newCards[prev.secondPick!], state: 'facedown' };
        }

        const matchedPairs = isMatch ? prev.matchedPairs + 1 : prev.matchedPairs;
        const isComplete = matchedPairs === prev.pairCount;

        if (isComplete) {
          playWinSound();
        }

        return {
          ...prev,
          cards: newCards,
          firstPick: null,
          secondPick: null,
          matchedPairs,
          isChecking: false,
          isComplete,
        };
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [game.isChecking, game.firstPick, game.secondPick, game.cards]);

  // Show loading spinner until client-side mount (prevents hydration mismatch from Math.random())
  if (!mounted) {
    return (
      <div className="min-h-dvh bg-gray-950 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  const pairOptions: PairCount[] = [4, 6, 8, 10];

  return (
    <div className="min-h-dvh bg-gray-950 flex flex-col items-center p-4 select-none">
      {/* Difficulty selector */}
      <div className="flex gap-3 mb-6">
        {pairOptions.map(count => (
          <button
            key={count}
            onClick={() => { handleInit(); startNewGame(count); }}
            className={`px-5 py-3 rounded-xl text-lg font-bold transition-colors ${
              game.pairCount === count
                ? 'bg-white text-gray-950'
                : 'bg-gray-800 text-white/60 border-2 border-white/20'
            }`}
          >
            {count}
          </button>
        ))}
      </div>

      {/* Game grid */}
      <div className={`grid ${GRID_COLS[game.pairCount]} gap-3 w-full max-w-sm`}>
        {game.cards.map((card, index) => (
          <MemoryCard
            key={card.id}
            card={card}
            onClick={() => handleCardClick(index)}
            disabled={game.isChecking}
          />
        ))}
      </div>

      {/* Win screen */}
      {game.isComplete && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="text-center relative">
            {/* Multiple floating stars */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute text-6xl animate-bounce"
                style={{
                  left: `${-60 + i * 30}px`,
                  top: `${-80 + Math.abs(i - 2) * 20}px`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s',
                }}
              >
                &#11088;
              </div>
            ))}
            <div className="mt-16">
              <button
                onClick={() => startNewGame(game.pairCount)}
                className="px-10 py-5 bg-green-500 text-gray-950 rounded-2xl text-3xl font-bold active:scale-95 transition-transform shadow-[0_0_30px_rgba(74,222,128,0.5)]"
              >
                Igen!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
