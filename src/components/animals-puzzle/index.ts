import { PuzzleAnimalType } from '@/lib/puzzle-types';
import { CatBody, CAT_PART_COMPONENTS } from './CatParts';
import { DogBody, DOG_PART_COMPONENTS } from './DogParts';
import { CowBody, COW_PART_COMPONENTS } from './CowParts';
import { BirdBody, BIRD_PART_COMPONENTS } from './BirdParts';
import { TrexBody, TREX_PART_COMPONENTS } from './TrexParts';
import { TriceratopsBody, TRIC_PART_COMPONENTS } from './TriceratopsParts';

interface PartProps {
  color: string;
}

export const BODY_COMPONENTS: Record<PuzzleAnimalType, React.FC<PartProps>> = {
  cat: CatBody,
  dog: DogBody,
  cow: CowBody,
  bird: BirdBody,
  trex: TrexBody,
  triceratops: TriceratopsBody,
};

export const PART_COMPONENTS: Record<string, React.FC<PartProps>> = {
  ...CAT_PART_COMPONENTS,
  ...DOG_PART_COMPONENTS,
  ...COW_PART_COMPONENTS,
  ...BIRD_PART_COMPONENTS,
  ...TREX_PART_COMPONENTS,
  ...TRIC_PART_COMPONENTS,
};
