import { describe, it, expect } from 'vitest';
import { checkPlacement, isComplete, initPlacedParts, shuffleArray } from '../puzzle-logic';
import { PUZZLE_ANIMALS } from '../puzzle-animals';

describe('checkPlacement', () => {
  const containerSize = 300;

  it('returns true when drop is within snap distance of slot', () => {
    // Slot at 50% = 150px. Drop at 160px,150px → distance = 10px
    expect(checkPlacement({ x: 160, y: 150 }, { x: 50, y: 50 }, containerSize)).toBe(true);
  });

  it('returns true when drop is exactly on slot', () => {
    expect(checkPlacement({ x: 150, y: 150 }, { x: 50, y: 50 }, containerSize)).toBe(true);
  });

  it('returns false when drop is too far from slot', () => {
    // Slot at 50% = 150px. Drop at 0px,0px → distance ~212px
    expect(checkPlacement({ x: 0, y: 0 }, { x: 50, y: 50 }, containerSize)).toBe(false);
  });

  it('returns true at exactly snap distance', () => {
    // Slot at 50% = 150px. Drop at 150+60, 150 → distance = 60px
    expect(checkPlacement({ x: 210, y: 150 }, { x: 50, y: 50 }, containerSize)).toBe(true);
  });

  it('returns false just outside snap distance', () => {
    expect(checkPlacement({ x: 211, y: 150 }, { x: 50, y: 50 }, containerSize)).toBe(false);
  });
});

describe('isComplete', () => {
  it('returns true when all parts are placed', () => {
    expect(isComplete([
      { partId: 'a', placed: true },
      { partId: 'b', placed: true },
    ])).toBe(true);
  });

  it('returns false when some parts are not placed', () => {
    expect(isComplete([
      { partId: 'a', placed: true },
      { partId: 'b', placed: false },
    ])).toBe(false);
  });

  it('returns false for empty array', () => {
    expect(isComplete([])).toBe(false);
  });
});

describe('initPlacedParts', () => {
  it('creates placed parts from animal definition', () => {
    const cat = PUZZLE_ANIMALS[0];
    const parts = initPlacedParts(cat);
    expect(parts).toHaveLength(cat.parts.length);
    parts.forEach(p => {
      expect(p.placed).toBe(false);
    });
  });

  it('maps correct part IDs', () => {
    const cat = PUZZLE_ANIMALS[0];
    const parts = initPlacedParts(cat);
    const ids = parts.map(p => p.partId);
    expect(ids).toEqual(cat.parts.map(p => p.id));
  });
});

describe('shuffleArray', () => {
  it('returns array with same length', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffleArray(arr)).toHaveLength(5);
  });

  it('contains all original elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray(arr);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  it('does not mutate original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const original = [...arr];
    shuffleArray(arr);
    expect(arr).toEqual(original);
  });
});
