import { PuzzleAnimal } from './puzzle-types';

export const PUZZLE_ANIMALS: PuzzleAnimal[] = [
  {
    type: 'cat',
    label: 'Katt',
    color: '#FACC15',
    parts: [
      { id: 'cat-left-ear', label: 'Vänster öra', slotPosition: { x: 25, y: 15 }, previewViewBox: '12 2 32 36' },
      { id: 'cat-right-ear', label: 'Höger öra', slotPosition: { x: 65, y: 15 }, previewViewBox: '46 2 32 36' },
      { id: 'cat-tail', label: 'Svans', slotPosition: { x: 80, y: 55 }, previewViewBox: '56 8 32 70' },
    ],
  },
  {
    type: 'dog',
    label: 'Hund',
    color: '#EF4444',
    parts: [
      { id: 'dog-left-ear', label: 'Vänster öra', slotPosition: { x: 18, y: 20 }, previewViewBox: '4 10 30 46' },
      { id: 'dog-right-ear', label: 'Höger öra', slotPosition: { x: 68, y: 20 }, previewViewBox: '54 10 30 46' },
      { id: 'dog-tail', label: 'Svans', slotPosition: { x: 82, y: 50 }, previewViewBox: '58 4 38 64' },
    ],
  },
  {
    type: 'cow',
    label: 'Ko',
    color: '#F8FAFC',
    parts: [
      { id: 'cow-left-horn', label: 'Vänster horn', slotPosition: { x: 28, y: 8 }, previewViewBox: '14 -4 28 30' },
      { id: 'cow-right-horn', label: 'Höger horn', slotPosition: { x: 62, y: 8 }, previewViewBox: '50 -4 28 30' },
      { id: 'cow-tail', label: 'Svans', slotPosition: { x: 85, y: 50 }, previewViewBox: '64 16 34 46' },
    ],
  },
  {
    type: 'bird',
    label: 'Fågel',
    color: '#22C55E',
    parts: [
      { id: 'bird-left-wing', label: 'Vänster vinge', slotPosition: { x: 10, y: 45 }, previewViewBox: '-2 24 32 36' },
      { id: 'bird-right-wing', label: 'Höger vinge', slotPosition: { x: 78, y: 45 }, previewViewBox: '60 24 32 36' },
      { id: 'bird-beak', label: 'Näbb', slotPosition: { x: 62, y: 28 }, previewViewBox: '44 28 30 20' },
    ],
  },
  {
    type: 'trex',
    label: 'T-Rex',
    color: '#10B981',
    parts: [
      { id: 'trex-teeth', label: 'Tänder', slotPosition: { x: 55, y: 30 }, previewViewBox: '44 22 30 24' },
      { id: 'trex-left-arm', label: 'Vänster arm', slotPosition: { x: 32, y: 48 }, previewViewBox: '18 38 22 24' },
      { id: 'trex-right-arm', label: 'Höger arm', slotPosition: { x: 58, y: 48 }, previewViewBox: '50 38 22 24' },
    ],
  },
  {
    type: 'triceratops',
    label: 'Triceratops',
    color: '#8B5CF6',
    parts: [
      { id: 'tric-frill', label: 'Nacksköld', slotPosition: { x: 45, y: 12 }, previewViewBox: '18 -4 54 30' },
      { id: 'tric-horn', label: 'Horn', slotPosition: { x: 45, y: 28 }, previewViewBox: '30 10 30 28' },
      { id: 'tric-tail', label: 'Svans', slotPosition: { x: 85, y: 55 }, previewViewBox: '64 30 34 40' },
    ],
  },
];
