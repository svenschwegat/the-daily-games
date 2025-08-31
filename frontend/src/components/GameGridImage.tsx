import React from 'react';
import type { GameGridImageProps } from '@/types/GameTypes';
import Image from 'next/image';

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
    <div
      id={`ImageContainer${game.id}`}
      className="w-full h-65 flex justify-center items-center mt-2 mb-4"
    >
      <Image
        id={`GameImage${game.id}`}
        src={src}
        alt={`Preview picture of ${game.name}`}
        onError={() => setSrc(`${imageBaseUrl}Empty.png`)}
        width={0}
        height={0}
        sizes="100%"
        className="w-full h-70 object-contain"
        loading="lazy"
      />
    </div>
  );
}