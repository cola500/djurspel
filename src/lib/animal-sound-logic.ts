import { AnimalType } from './types';
import { ANIMALS } from './animals';

export interface SoundRound {
  correctAnimal: AnimalType;
  options: AnimalType[];
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateRound(
  allAnimals: AnimalType[],
  previousCorrect?: AnimalType,
): SoundRound {
  const candidates = previousCorrect
    ? allAnimals.filter((a) => a !== previousCorrect)
    : allAnimals;

  const correctAnimal = candidates[Math.floor(Math.random() * candidates.length)];

  const distractors = shuffle(
    allAnimals.filter((a) => a !== correctAnimal),
  ).slice(0, 2);

  const options = shuffle([correctAnimal, ...distractors]);

  return { correctAnimal, options };
}

export function getAllAnimalTypes(): AnimalType[] {
  return ANIMALS.map((a) => a.type);
}
