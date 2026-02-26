import { PuzzleAnimal, PlacedPart, Position } from './puzzle-types';

const SNAP_DISTANCE = 60;

export function checkPlacement(
  dropPosition: Position,
  slotPosition: Position,
  containerSize: number,
): boolean {
  const slotPixelX = (slotPosition.x / 100) * containerSize;
  const slotPixelY = (slotPosition.y / 100) * containerSize;
  const dx = dropPosition.x - slotPixelX;
  const dy = dropPosition.y - slotPixelY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance <= SNAP_DISTANCE;
}

export function isComplete(placedParts: PlacedPart[]): boolean {
  return placedParts.length > 0 && placedParts.every(p => p.placed);
}

export function initPlacedParts(animal: PuzzleAnimal): PlacedPart[] {
  return animal.parts.map(part => ({
    partId: part.id,
    placed: false,
  }));
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
