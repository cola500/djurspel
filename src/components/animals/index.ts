import { AnimalType } from '@/lib/types';
import { CatSvg } from './CatSvg';
import { DogSvg } from './DogSvg';
import { CowSvg } from './CowSvg';
import { HorseSvg } from './HorseSvg';
import { BirdSvg } from './BirdSvg';
import { FrogSvg } from './FrogSvg';
import { FishSvg } from './FishSvg';
import { LionSvg } from './LionSvg';
import { PigSvg } from './PigSvg';
import { OwlSvg } from './OwlSvg';

export const AnimalSvgMap: Record<AnimalType, React.FC<{ color: string }>> = {
  cat: CatSvg,
  dog: DogSvg,
  cow: CowSvg,
  horse: HorseSvg,
  bird: BirdSvg,
  frog: FrogSvg,
  fish: FishSvg,
  lion: LionSvg,
  pig: PigSvg,
  owl: OwlSvg,
};
