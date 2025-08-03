import React from 'react';
import type { GameGridImageProps } from '@/types/GameTypes';

export default function GameGridImage({ game }: GameGridImageProps) {
  const [src, setSrc] = React.useState(`/Preview_${game.id}.png`);

  const handleError = React.useCallback(() => {
    if (src !== '/Preview_Empty.png') {
      setSrc('/Preview_Empty.png');
    }
  }, [src]);

  return (
    <img
      src={src}
      alt={`Preview picture of ${game.name}`}
      className="max-w-60 max-h-75 mx-auto mb-4"
      onError={handleError}
    />
  );
}