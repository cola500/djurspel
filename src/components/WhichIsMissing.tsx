'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimalType } from '@/lib/types';
import { ANIMALS, AnimalConfig } from '@/lib/animals';
import { AnimalSvgMap } from './animals';
import { shuffleArray } from '@/lib/puzzle-logic';
import {
  playAnimalSound,
  playMatchSound,
  playErrorSound,
  playWinSound,
  initAudio,
} from '@/lib/sounds';

type Difficulty = 3 | 4 | 5;
type Phase =
  | 'choosing-difficulty'
  | 'memorize'
  | 'hidden'
  | 'guessing'
  | 'feedback'
  | 'results';

const TOTAL_ROUNDS = 5;

function pickRandomAnimals(count: number): AnimalConfig[] {
  return shuffleArray([...ANIMALS]).slice(0, count);
}

function getStars(score: number): number {
  if (score === 5) return 3;
  if (score >= 3) return 2;
  return 1;
}

export function WhichIsMissing() {
  const [difficulty, setDifficulty] = useState<Difficulty>(3);
  const [phase, setPhase] = useState<Phase>('choosing-difficulty');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [currentAnimals, setCurrentAnimals] = useState<AnimalConfig[]>([]);
  const [missingAnimal, setMissingAnimal] = useState<AnimalConfig | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<AnimalType | null>(null);
  const [countdown, setCountdown] = useState(3);
  const [audioInitialized, setAudioInitialized] = useState(false);

  const handleInit = useCallback(() => {
    if (!audioInitialized) {
      initAudio();
      setAudioInitialized(true);
    }
  }, [audioInitialized]);

  // Start a new round: pick random animals, choose one to remove
  const startRound = useCallback((diff: Difficulty) => {
    const animals = pickRandomAnimals(diff);
    const missingIndex = Math.floor(Math.random() * animals.length);
    setCurrentAnimals(animals);
    setMissingAnimal(animals[missingIndex]);
    setSelectedAnswer(null);
    setCountdown(6);
    setPhase('memorize');
  }, []);

  const startGame = useCallback((diff: Difficulty) => {
    handleInit();
    setDifficulty(diff);
    setRound(0);
    setScore(0);
    startRound(diff);
  }, [handleInit, startRound]);

  // Countdown during memorize phase: 3, 2, 1
  useEffect(() => {
    if (phase !== 'memorize') return;

    if (countdown <= 0) {
      setPhase('hidden');
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [phase, countdown]);

  // Hidden phase: brief blink then show guessing
  useEffect(() => {
    if (phase !== 'hidden') return;

    const timer = setTimeout(() => {
      setPhase('guessing');
    }, 800);

    return () => clearTimeout(timer);
  }, [phase]);

  // Feedback phase: auto-advance after 1.5s
  useEffect(() => {
    if (phase !== 'feedback') return;

    const timer = setTimeout(() => {
      const nextRound = round + 1;
      if (nextRound >= TOTAL_ROUNDS) {
        playWinSound();
        setPhase('results');
      } else {
        setRound(nextRound);
        startRound(difficulty);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [phase, round, difficulty, startRound]);

  const handleGuess = useCallback((animal: AnimalType) => {
    if (phase !== 'guessing' || !missingAnimal) return;

    setSelectedAnswer(animal);
    const isCorrect = animal === missingAnimal.type;

    if (isCorrect) {
      playAnimalSound(animal);
      playMatchSound();
      setScore(prev => prev + 1);
    } else {
      playErrorSound();
    }

    setPhase('feedback');
  }, [phase, missingAnimal]);

  // Visible animals during guessing/feedback (all except the missing one)
  const visibleAnimals = currentAnimals.filter(
    a => a.type !== missingAnimal?.type
  );

  // Answer options: all animals that were shown (shuffled)
  const answerOptions = shuffleArray([...currentAnimals]);

  const isCorrect = selectedAnswer === missingAnimal?.type;

  // --- Render per phase ---

  if (phase === 'choosing-difficulty') {
    const options: { value: Difficulty; label: string }[] = [
      { value: 3, label: '3 djur' },
      { value: 4, label: '4 djur' },
      { value: 5, label: '5 djur' },
    ];

    return (
      <div className="min-h-dvh bg-gray-950 flex flex-col items-center justify-center p-4 select-none">
        <h2 className="text-3xl font-bold text-white mb-2">Vilken saknas?</h2>
        <p className="text-white/60 text-lg mb-8">Hur många djur?</p>
        <div className="flex gap-4">
          {options.map(opt => (
            <button
              key={opt.value}
              onClick={() => startGame(opt.value)}
              className="px-6 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl text-xl font-bold active:scale-95 transition-transform shadow-lg"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (phase === 'results') {
    const stars = getStars(score);

    return (
      <div className="min-h-dvh bg-gray-950 flex flex-col items-center justify-center p-4 select-none animate-fade-in">
        <div className="text-center">
          <p className="text-5xl font-bold text-white mb-4">
            {score} av {TOTAL_ROUNDS} rätt!
          </p>
          <div className="text-6xl mb-8">
            {Array.from({ length: 3 }, (_, i) => (
              <span
                key={i}
                className={i < stars ? 'opacity-100' : 'opacity-20'}
              >
                &#11088;
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => startGame(difficulty)}
              className="px-10 py-5 bg-purple-600 text-white rounded-2xl text-2xl font-bold active:scale-95 transition-transform shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              Spela igen!
            </button>
            <button
              onClick={() => setPhase('choosing-difficulty')}
              className="px-10 py-4 bg-gray-800 text-white/80 rounded-2xl text-xl font-bold active:scale-95 transition-transform border-2 border-white/20"
            >
              Byt svårighet
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid columns based on difficulty
  const gridCols =
    difficulty <= 3 ? 'grid-cols-3' : difficulty === 4 ? 'grid-cols-4' : 'grid-cols-5';

  return (
    <div className="min-h-dvh bg-gray-950 flex flex-col items-center p-4 select-none">
      {/* Round indicator */}
      <div className="flex gap-2 mb-4">
        {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i < round
                ? 'bg-purple-400'
                : i === round
                  ? 'bg-white'
                  : 'bg-gray-700'
            }`}
          />
        ))}
      </div>

      {/* Memorize phase */}
      {phase === 'memorize' && (
        <div className="flex flex-col items-center animate-fade-in">
          <p className="text-2xl font-bold text-white mb-2">Titta noga!</p>
          <p className="text-5xl font-bold text-purple-400 mb-6">{countdown}</p>
          <div className={`grid ${gridCols} gap-4 w-full max-w-sm`}>
            {currentAnimals.map(animal => {
              const SvgComponent = AnimalSvgMap[animal.type];
              return (
                <div
                  key={animal.type}
                  className="aspect-square bg-gray-800 rounded-2xl p-3 flex flex-col items-center justify-center border-2 border-white/10"
                >
                  <div className="w-full h-3/4">
                    <SvgComponent color={animal.color} />
                  </div>
                  <p className="text-white text-sm font-bold mt-1">
                    {animal.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Hidden phase */}
      {phase === 'hidden' && (
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="w-16 h-16 rounded-full border-4 border-purple-400/30 border-t-purple-400 animate-spin" />
        </div>
      )}

      {/* Guessing phase */}
      {phase === 'guessing' && (
        <div className="flex flex-col items-center animate-fade-in">
          <p className="text-2xl font-bold text-white mb-6">
            Vilken saknas?
          </p>

          {/* Show remaining animals */}
          <div className={`grid ${gridCols} gap-4 w-full max-w-sm mb-8`}>
            {visibleAnimals.map(animal => {
              const SvgComponent = AnimalSvgMap[animal.type];
              return (
                <div
                  key={animal.type}
                  className="aspect-square bg-gray-800 rounded-2xl p-3 flex flex-col items-center justify-center border-2 border-white/10"
                >
                  <div className="w-full h-3/4">
                    <SvgComponent color={animal.color} />
                  </div>
                  <p className="text-white text-sm font-bold mt-1">
                    {animal.label}
                  </p>
                </div>
              );
            })}

            {/* Empty slot for the missing animal */}
            <div className="aspect-square bg-gray-800/50 rounded-2xl border-2 border-dashed border-purple-400/50 flex items-center justify-center">
              <span className="text-4xl text-purple-400/60">?</span>
            </div>
          </div>

          {/* Answer options */}
          <p className="text-lg text-white/60 mb-3">Välj det saknade djuret:</p>
          <div className={`grid ${gridCols} gap-3 w-full max-w-sm`}>
            {answerOptions.map(animal => {
              const SvgComponent = AnimalSvgMap[animal.type];
              return (
                <button
                  key={animal.type}
                  onClick={() => handleGuess(animal.type)}
                  className="aspect-square bg-purple-900/40 hover:bg-purple-800/60 rounded-2xl p-3 flex flex-col items-center justify-center border-2 border-purple-500/30 active:scale-95 transition-transform"
                >
                  <div className="w-full h-3/4">
                    <SvgComponent color={animal.color} />
                  </div>
                  <p className="text-white text-sm font-bold mt-1">
                    {animal.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Feedback phase */}
      {phase === 'feedback' && missingAnimal && (
        <div className="flex flex-col items-center animate-fade-in">
          <p className="text-2xl font-bold text-white mb-6">
            {isCorrect ? 'Rätt!' : 'Inte riktigt...'}
          </p>

          {/* Show remaining animals + highlight the missing one */}
          <div className={`grid ${gridCols} gap-4 w-full max-w-sm mb-8`}>
            {visibleAnimals.map(animal => {
              const SvgComponent = AnimalSvgMap[animal.type];
              return (
                <div
                  key={animal.type}
                  className="aspect-square bg-gray-800 rounded-2xl p-3 flex flex-col items-center justify-center border-2 border-white/10"
                >
                  <div className="w-full h-3/4">
                    <SvgComponent color={animal.color} />
                  </div>
                  <p className="text-white text-sm font-bold mt-1">
                    {animal.label}
                  </p>
                </div>
              );
            })}

            {/* Show the missing animal with feedback styling */}
            {(() => {
              const SvgComponent = AnimalSvgMap[missingAnimal.type];
              return (
                <div
                  className={`aspect-square rounded-2xl p-3 flex flex-col items-center justify-center border-2 ${
                    isCorrect
                      ? 'bg-green-900/40 border-green-400'
                      : 'bg-red-900/40 border-red-400'
                  }`}
                  style={
                    isCorrect
                      ? { animation: 'glow-pulse 1s ease-in-out infinite' }
                      : { animation: 'shake 0.5s ease-in-out' }
                  }
                >
                  <div className="w-full h-3/4">
                    <SvgComponent color={missingAnimal.color} />
                  </div>
                  <p className="text-white text-sm font-bold mt-1">
                    {missingAnimal.label}
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Show what was selected if wrong */}
          {!isCorrect && selectedAnswer && (
            <p className="text-red-400 text-lg">
              Du valde{' '}
              {ANIMALS.find(a => a.type === selectedAnswer)?.label ?? selectedAnswer}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
