import { AnimalType } from './types';

export interface AnimalConfig {
  type: AnimalType;
  color: string;
  label: string;
}

export const ANIMALS: AnimalConfig[] = [
  { type: 'cat', color: '#FACC15', label: 'Katt' },
  { type: 'dog', color: '#EF4444', label: 'Hund' },
  { type: 'cow', color: '#F8FAFC', label: 'Ko' },
  { type: 'horse', color: '#F97316', label: 'Hast' },
  { type: 'bird', color: '#22C55E', label: 'Fagel' },
  { type: 'frog', color: '#84CC16', label: 'Groda' },
  { type: 'fish', color: '#06B6D4', label: 'Fisk' },
  { type: 'lion', color: '#EAB308', label: 'Lejon' },
];
