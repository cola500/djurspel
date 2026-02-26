'use client';

import { useRef, useState, useCallback } from 'react';
import { BodyPart, Position } from '@/lib/puzzle-types';
import { PART_COMPONENTS } from './animals-puzzle';

interface DraggablePartProps {
  part: BodyPart;
  color: string;
  placed: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onDrop: (partId: string, position: Position) => boolean;
}

export function DraggablePart({ part, color, placed, containerRef, onDrop }: DraggablePartProps) {
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const [shaking, setShaking] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const startPos = useRef<Position>({ x: 0, y: 0 });

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (placed) return;
    e.preventDefault();
    const el = elementRef.current;
    if (!el) return;

    el.setPointerCapture(e.pointerId);
    startPos.current = { x: e.clientX, y: e.clientY };
    setDragging(true);
    setOffset({ x: 0, y: 0 });
  }, [placed]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    e.preventDefault();
    setOffset({
      x: e.clientX - startPos.current.x,
      y: e.clientY - startPos.current.y,
    });
  }, [dragging]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    e.preventDefault();
    setDragging(false);

    const container = containerRef.current;
    if (!container) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    const rect = container.getBoundingClientRect();
    const dropPos: Position = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    const success = onDrop(part.id, dropPos);
    if (!success) {
      setShaking(true);
      setTimeout(() => {
        setShaking(false);
        setOffset({ x: 0, y: 0 });
      }, 300);
    }
  }, [dragging, containerRef, onDrop, part.id]);

  if (placed) return null;

  const PartSvg = PART_COMPONENTS[part.id];
  if (!PartSvg) return null;

  return (
    <div
      ref={elementRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`w-20 h-20 cursor-grab touch-none select-none ${
        dragging ? 'z-50 scale-110' : ''
      } ${shaking ? 'animate-[shake_0.3s_ease-in-out]' : ''}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)${dragging ? ' scale(1.1)' : ''}`,
        transition: dragging ? 'none' : 'transform 0.3s ease',
        filter: dragging ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' : 'none',
      }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <PartSvg color={color} />
      </svg>
    </div>
  );
}
