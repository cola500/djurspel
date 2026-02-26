import { describe, it, expect } from 'vitest';
import { createShuffledDeck, checkForMatch } from '../game-logic';

describe('createShuffledDeck', () => {
  it('creates correct number of cards for 4 pairs', () => {
    const cards = createShuffledDeck(4);
    expect(cards).toHaveLength(8);
  });

  it('creates correct number of cards for 6 pairs', () => {
    const cards = createShuffledDeck(6);
    expect(cards).toHaveLength(12);
  });

  it('creates correct number of cards for 8 pairs', () => {
    const cards = createShuffledDeck(8);
    expect(cards).toHaveLength(16);
  });

  it('each animal appears exactly twice', () => {
    const cards = createShuffledDeck(4);
    const animalCounts = new Map<string, number>();
    cards.forEach(card => {
      animalCounts.set(card.animal, (animalCounts.get(card.animal) || 0) + 1);
    });
    animalCounts.forEach(count => {
      expect(count).toBe(2);
    });
  });

  it('all cards start facedown', () => {
    const cards = createShuffledDeck(4);
    cards.forEach(card => {
      expect(card.state).toBe('facedown');
    });
  });

  it('each card has a unique id', () => {
    const cards = createShuffledDeck(8);
    const ids = cards.map(c => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('checkForMatch', () => {
  it('returns true when two cards have the same animal', () => {
    expect(checkForMatch('cat', 'cat')).toBe(true);
  });

  it('returns false when two cards have different animals', () => {
    expect(checkForMatch('cat', 'dog')).toBe(false);
  });
});
