import { GameGridImageProps } from "../types/GameTypes";
import Image from "next/image";

export default function GameGridCardSmall({ game }: GameGridImageProps) {
  return (
    <a key={`GameGridSmall${game.id}`} href={game.link} target="_blank" rel="noopener noreferrer">
      <div className="flex justify-center">
        <Image
          unoptimized
          id={`GameImage${game.id}`}
          src={game.favicon_url}
          alt={`Favicon of ${game.name}`}
          width={0}
          height={0}
          sizes="100%"
          className="w-20 h-20 object-contain"
          loading="lazy"
        />
      </div>
      <div className="text-center font-semibold text-sm mb-2 mt-1">
        {game.name}
      </div>
    </a>
  );
}