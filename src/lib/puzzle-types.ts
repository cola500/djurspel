export type PuzzleAnimalType = 'cat' | 'dog' | 'cow' | 'bird';

export interface Position {
  x: number;
  y: number;
}

export interface BodyPart {
  id: string;
  label: string;
  slotPosition: Position;
  previewViewBox: string;
}

export interface PuzzleAnimal {
  type: PuzzleAnimalType;
  label: string;
  color: string;
  parts: BodyPart[];
}

export interface PlacedPart {
  partId: string;
  placed: boolean;
}

export type PuzzleState = 'playing' | 'complete';
