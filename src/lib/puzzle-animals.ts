import { PuzzleAnimal } from './puzzle-types';

export const PUZZLE_ANIMALS: PuzzleAnimal[] = [
  {
    type: 'cat',
    label: 'Katt',
    color: '#FACC15',
    parts: [
      { id: 'cat-left-ear', label: 'Vanster ora', slotPosition: { x: 25, y: 15 } },
      { id: 'cat-right-ear', label: 'Hoger ora', slotPosition: { x: 65, y: 15 } },
      { id: 'cat-tail', label: 'Svans', slotPosition: { x: 80, y: 55 } },
    ],
  },
  {
    type: 'dog',
    label: 'Hund',
    color: '#EF4444',
    parts: [
      { id: 'dog-left-ear', label: 'Vanster ora', slotPosition: { x: 18, y: 20 } },
      { id: 'dog-right-ear', label: 'Hoger ora', slotPosition: { x: 68, y: 20 } },
      { id: 'dog-tail', label: 'Svans', slotPosition: { x: 82, y: 50 } },
    ],
  },
  {
    type: 'cow',
    label: 'Ko',
    color: '#F8FAFC',
    parts: [
      { id: 'cow-left-horn', label: 'Vanster horn', slotPosition: { x: 28, y: 8 } },
      { id: 'cow-right-horn', label: 'Hoger horn', slotPosition: { x: 62, y: 8 } },
      { id: 'cow-tail', label: 'Svans', slotPosition: { x: 85, y: 50 } },
    ],
  },
  {
    type: 'bird',
    label: 'Fagel',
    color: '#22C55E',
    parts: [
      { id: 'bird-left-wing', label: 'Vanster vinge', slotPosition: { x: 10, y: 45 } },
      { id: 'bird-right-wing', label: 'Hoger vinge', slotPosition: { x: 78, y: 45 } },
      { id: 'bird-beak', label: 'Nabb', slotPosition: { x: 62, y: 28 } },
    ],
  },
];
