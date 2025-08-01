import type { Game, GameGridProps } from '../types/GameTypes';
import type { FilterKey } from '../types/FilterTypes';

export default function GameGrid({ initialGames, filters }: GameGridProps) {
  const filterMap = new Map<FilterKey, keyof Game>([
    ['categories', 'category_id'],
    ['publishers', 'publisher_id'],
    ['quiz_styles', 'quiz_style_id'],
    ['answer_types', 'answer_type_id'],
    ['languages', 'language_id']
  ]);

  const games = initialGames.filter((game: Game) => {
    for (const [filterKey, gameColumn] of filterMap.entries()) {
      const filterList = filters[filterKey];
      const gameColumnValue = game[gameColumn];

      if (typeof gameColumnValue !== 'number') {
        throw new Error(`Expected gameColumnValue to be a number, got ${typeof gameColumnValue} for game: ${game.name}`);
      }

      if (filterList && !filterList.includes(0) && !filterList.includes(gameColumnValue)) {
        return false;
      }
    }

    return true;
  });

  if (!games || games.length === 0) {
    return (
      <div id="no-games" className="flex flex-col p-4">
        <p>No games with the chosen filters available.</p>
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => window.location.reload()}>
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 pl-20 pr-20">
      {games.map((game: Game) => (
        <div
          key={game.id}
          className="p-4 bg-slate-300 rounded-lg m-2 relative h-30
            hover:bg-slate-400 hover:-translate-y-1 hover:scale-105
            transition duration-500 ease-in-out">
          <a
            href={game.link}
            target="_blank"
            className="text-xl font-bold text-gray-700 truncate">
            {game.name}
            <span className="absolute w-full h-full top-0 left-0 z-1"> </span>
          </a>
          <p className="text-gray-700 line-clamp-2">{game.description}</p>
        </div>
      ))}
    </div>
  );
}
