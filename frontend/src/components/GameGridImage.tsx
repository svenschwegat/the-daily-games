import React from 'react';
import type { GameGridImageProps } from '@/types/GameTypes';

export default function GameGridImage({ game }: GameGridImageProps) {
  const imageBaseUrl = `/supabase/storage/v1/object/public/pictures/Preview_`;
  const [src, setSrc] = React.useState(`${imageBaseUrl}Empty.png`);
  
  React.useEffect(() => {
    
    fetch(src, { method: 'HEAD' }).then((res) => {
      if (res.status === 200 || res.status === 204) {
        setSrc(`${imageBaseUrl}${game.id}.png`);
      } else {
        setSrc(`${imageBaseUrl}Empty.png`);
      }
    })
  }, []);

  return (
    <img
      src={src}
      alt={`Preview picture of ${game.name}`}
      className="max-w-60 max-h-75 mx-auto mb-4"
      onError={() => setSrc(`${imageBaseUrl}Empty.png`)}
    />
  );
}