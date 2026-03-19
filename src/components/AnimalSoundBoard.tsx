'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimalType } from '@/lib/types';
import { ANIMALS } from '@/lib/animals';
import { AnimalSvgMap } from '@/components/animals';
import {
  playAnimalSound,
  stopAnimalSound,
  playMatchSound,
  playErrorSound,
  playWinSound,
  initAudio,
} from '@/lib/sounds';
import { generateRound, getAllAnimalTypes, SoundRound } from '@/lib/animal-sound-logic';

type GamePhase = 'start' | 'playing' | 'complete';

const TOTAL_ROUNDS = 8;

function getAnimalLabel(type: AnimalType): string {
  return ANIMALS.find((a) => a.type === type)?.label ?? type;
}

function getAnimalColor(type: AnimalType): string {
  return ANIMALS.find((a) => a.type === type)?.color ?? '#888';
}

export function AnimalSoundBoard() {
  const [gamePhase, setGamePhase] = useState<GamePhase>('start');
  const [currentRound, setCurrentRound] = useState<SoundRound | null>(null);
  const [roundNumber, setRoundNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalType | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const allAnimals = getAllAnimalTypes();

  const startNewRound = useCallback(
    (prevCorrect?: AnimalType) => {
      const round = generateRound(allAnimals, prevCorrect);
      setCurrentRound(round);
      setSelectedAnimal(null);
      setIsCorrect(null);
    },
    [allAnimals],
  );

  const handleStart = () => {
    initAudio();
    setGamePhase('playing');
    setRoundNumber(1);
    setScore(0);
    startNewRound();
  };

  // Spela djurljudet när en ny runda startar
  useEffect(() => {
    if (gamePhase === 'playing' && currentRound && selectedAnimal === null) {
      const timeout = setTimeout(() => {
        playAnimalSound(currentRound.correctAnimal);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [gamePhase, currentRound, selectedAnimal]);

  const handleReplay = () => {
    if (currentRound) {
      playAnimalSound(currentRound.correctAnimal);
    }
  };

  const handlePick = (animal: AnimalType) => {
    if (selectedAnimal !== null) return;
    if (!currentRound) return;

    setSelectedAnimal(animal);

    if (animal === currentRound.correctAnimal) {
      setIsCorrect(true);
      stopAnimalSound();
      playMatchSound();
      const newScore = score + 1;
      setScore(newScore);

      setTimeout(() => {
        if (roundNumber >= TOTAL_ROUNDS) {
          setGamePhase('complete');
          playWinSound();
        } else {
          setRoundNumber((r) => r + 1);
          startNewRound(currentRound.correctAnimal);
        }
      }, 1500);
    } else {
      setIsCorrect(false);
      stopAnimalSound();
      playErrorSound();
      // Tillåt nytt försök efter kort paus
      setTimeout(() => {
        setSelectedAnimal(null);
        setIsCorrect(null);
      }, 800);
    }
  };

  // -- Startskärm --
  if (gamePhase === 'start') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8">
        <h1 className="text-4xl font-bold text-white text-center">Vem låter så?</h1>
        <p className="text-lg text-gray-300 text-center">
          Lyssna på djurljudet och tryck på rätt djur!
        </p>
        <button
          onClick={handleStart}
          className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        >
          <svg viewBox="0 0 24 24" className="w-14 h-14 fill-white ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    );
  }

  // -- Avslutskärm --
  if (gamePhase === 'complete') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6">
        <h2 className="text-4xl font-bold text-white">Bra jobbat!</h2>
        <p className="text-2xl text-gray-200">
          {score} av {TOTAL_ROUNDS} rätt
        </p>
        <button
          onClick={handleStart}
          className="px-8 py-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-xl font-bold shadow-lg active:scale-95 transition-transform"
        >
          Spela igen
        </button>
      </div>
    );
  }

  // -- Spelvy --
  return (
    <div className="flex flex-col items-center gap-6 py-4">
      {/* Rundräknare */}
      <p className="text-gray-400 text-lg font-medium">
        {roundNumber} av {TOTAL_ROUNDS}
      </p>

      {/* Replay-knapp */}
      <button
        onClick={handleReplay}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg active:scale-95 transition-transform"
        aria-label="Spela ljud igen"
      >
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
      </button>

      {/* Djurkort */}
      <div className="flex gap-4 justify-center flex-wrap">
        {currentRound?.options.map((animal) => {
          const AnimalComponent = AnimalSvgMap[animal];
          const color = getAnimalColor(animal);
          const label = getAnimalLabel(animal);

          let borderColor = 'border-gray-700';
          let animationClass = '';

          if (selectedAnimal === animal) {
            if (isCorrect) {
              borderColor = 'border-green-400';
              animationClass = 'animate-bounce';
            } else if (isCorrect === false) {
              borderColor = 'border-red-400';
              animationClass = 'animate-shake';
            }
          }

          return (
            <button
              key={animal}
              onClick={() => handlePick(animal)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-4 ${borderColor} bg-gray-800 active:scale-95 transition-all ${animationClass}`}
            >
              <div className="w-24 h-24">
                <AnimalComponent color={color} />
              </div>
              <span className="text-white font-bold text-lg">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
