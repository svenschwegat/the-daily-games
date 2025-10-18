import GameGridCard from './GameGridCard';
import { Button } from "@heroui/react";
import type { Game, GameGridProps } from '../types/GameTypes';

export default function GameGrid({ games }: GameGridProps) {
  if (!games || games.length === 0) {
    return (
      <div id="no-games" className="flex flex-col gap-4 items-center">
        <span>No games with the chosen filters available</span>
        <Button
          color="primary"
          onPress={() => window.location.reload()}
        >
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="
      grid gap-4 p-4
      xl:grid-cols-3 
      lg:grid-cols-2 lg:pl-20 lg:pr-20"
    >
      {games.map((game: Game) => (
        <GameGridCard game={game} key={game.id}/>
      ))}
    </div>
  );
}
