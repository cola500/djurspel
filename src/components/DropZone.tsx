'use client';

import { BodyPart } from '@/lib/puzzle-types';

interface DropZoneProps {
  part: BodyPart;
  placed: boolean;
}

export function DropZone({ part, placed }: DropZoneProps) {
  if (placed) return null;

  return (
    <circle
      cx={part.slotPosition.x}
      cy={part.slotPosition.y}
      r="8"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeDasharray="4 3"
      opacity="0.5"
      className="animate-pulse"
    />
  );
}
