import { PuzzleAnimalType } from '@/lib/puzzle-types';
import { CatBody, CAT_PART_COMPONENTS } from './CatParts';
import { DogBody, DOG_PART_COMPONENTS } from './DogParts';
import { CowBody, COW_PART_COMPONENTS } from './CowParts';
import { BirdBody, BIRD_PART_COMPONENTS } from './BirdParts';

interface PartProps {
  color: string;
}

export const BODY_COMPONENTS: Record<PuzzleAnimalType, React.FC<PartProps>> = {
  cat: CatBody,
  dog: DogBody,
  cow: CowBody,
  bird: BirdBody,
};

export const PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  ...CAT_PART_COMPONENTS,
  ...DOG_PART_COMPONENTS,
  ...COW_PART_COMPONENTS,
  ...BIRD_PART_COMPONENTS,
};
