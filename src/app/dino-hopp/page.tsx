import { GameMenu } from '@/components/GameMenu';
import { DinoGame } from '@/components/DinoGame';

export default function DinoHoppPage() {
  return (
    <div className="h-dvh flex flex-col">
      <div className="landscape:hidden">
        <GameMenu />
      </div>
      <DinoGame />
    </div>
  );
}
