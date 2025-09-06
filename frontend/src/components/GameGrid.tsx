import GameGridCard from './GameGridCard';
import { Button } from "@heroui/react";
import type { Game, GameGridProps } from '../types/GameTypes';
import type { FilterKey } from '../types/FilterTypes';

import { filterNamingScheme } from '@/utils/FilterNamingScheme';

export default function GameGrid({ initialGames, filters, sortOrder, searchValue }: GameGridProps) {
  let games = initialGames.filter((game: Game) => {
    for (const key in filterNamingScheme) {
      const filter = filterNamingScheme[key as FilterKey];
      const gameColumnValue = game[filter.id_column];
      const filterList = filters[filter.key];

      if (typeof gameColumnValue !== 'number') {
        throw new Error(`Expected gameColumnValue to be a number, got ${typeof gameColumnValue} for game: ${game.name}`);
      }

      if (filterList && !filterList.includes(0) && !filterList.includes(gameColumnValue)) {
        return false;
      }
    };
    return true;
  });

  // Sort games based on sortOrder
  const sortKey = sortOrder.values().next().value;
  switch (sortKey) {
    case 'alphabet-a-z':
      games.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'alphabet-z-a':
      games.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'recommended':
    default:
      games.sort((a, b) => a.id - b.id);
      break;
  }

  // Filter games based on searchValue
  const searchLower = searchValue.toLowerCase();
  games = games.filter((game) => game.name.toLowerCase().includes(searchLower) || game.description.toLowerCase().includes(searchLower));

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
