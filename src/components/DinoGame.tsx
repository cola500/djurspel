'use client';

import { useRef, useEffect } from 'react';
import { initDinoGame } from '@/lib/dino-game';

export function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cleanup = initDinoGame(canvas);
    return cleanup;
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{ touchAction: 'none' }}
      />
    </div>
  );
}
