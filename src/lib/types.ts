export type AnimalType = 'cat' | 'dog' | 'cow' | 'horse' | 'bird' | 'frog' | 'fish' | 'lion' | 'pig' | 'owl';

export type CardState = 'facedown' | 'faceup' | 'matched';

export interface Card {
  id: number;
  animal: AnimalType;
  state: CardState;
}

export type PairCount = 4 | 6 | 8 | 10;

export interface GameState {
  cards: Card[];
  firstPick: number | null;
  secondPick: number | null;
  pairCount: PairCount;
  matchedPairs: number;
  isChecking: boolean;
  isComplete: boolean;
}
