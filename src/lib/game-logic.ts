import { Card, PairCount, AnimalType } from './types';
import { ANIMALS } from './animals';

export function createShuffledDeck(pairCount: PairCount): Card[] {
  const selectedAnimals = ANIMALS.slice(0, pairCount);
  const cards: Card[] = [];

  selectedAnimals.forEach((animal, index) => {
    cards.push(
      { id: index * 2, animal: animal.type, state: 'facedown' },
      { id: index * 2 + 1, animal: animal.type, state: 'facedown' },
    );
  });

  // Fisher-Yates shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

export function checkForMatch(animal1: AnimalType, animal2: AnimalType): boolean {
  return animal1 === animal2;
}
