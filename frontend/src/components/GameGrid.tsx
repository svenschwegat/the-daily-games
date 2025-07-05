'use client';
import type { Game, GameGridProps } from '../types/GameTypes';

export default function GameGrid({games}: GameGridProps) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 p-4">
      {games.map((game: Game) => (
        <div 
          key={game.id} 
          className="p-4 bg-slate-300 rounded-lg m-2 relative h-27 
            hover:bg-slate-400 hover:-translate-y-1 hover:scale-105
            transition duration-500 ease-in-out">
          <a 
            href={game.link} 
            target="_blank" 
            className="text-xl font-bold text-gray-700 truncate ">
              {game.name}
            <span className="absolute w-full h-full top-0 left-0 z-1"> </span>
          </a>
          <p className="text-gray-700 line-clamp-2">{game.description}</p>
        </div>
      ))}
    </div>
  );
}
