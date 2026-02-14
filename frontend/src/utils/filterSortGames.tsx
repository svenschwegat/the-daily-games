import { Game, FilterSortGamesProps } from '../types/GameTypes';
import type { FilterKey } from '../types/FilterTypes';

import { filterNamingScheme } from '@/utils/FilterNamingScheme';

export default function filterSortGames({ initialGames, filters, sortOrder, searchValue, favoriteGames, showFavorites}: FilterSortGamesProps): Game[] {
  // Show/hide favorites
  if(showFavorites){
    initialGames = initialGames.filter(game => favoriteGames.has(game.id));
  }
  
  // Filter games based on filters  
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

  return games;
}