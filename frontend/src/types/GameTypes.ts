import { Filter, FilterKey } from './FilterTypes';
import { SortKey } from './SortTypes';

export type GameGridSize = 'sm' | 'lg';

export type Game = {
    id: number;
    name: string;
    description: string;
    category_id: number;
    publisher_id: number;
    quiz_style_id: number;
    answer_type_id: number;
    is_exact_answer: number;
    language_id: number;
    link: string;
    picture_link: string | null;
    ranking: number | null;
    favicon_url: string;
}

export type GameGridProps = {
  games: Game[];
  gameGridSize: GameGridSize;
}

export type GameGridImageProps = {
  game: Game;
}

export type AddGameModalProps = {
  games: Game[];
  filterContent: Record<string, Filter[]>;
}

export type FilterSortGamesProps = {
  initialGames: Game[];
  filters: Record<FilterKey, number[]>;
  sortOrder: Set<SortKey>;
  searchValue: string;
}

export type GameGridSizeButtonProps = {
  gameGridSize: GameGridSize;
  setGameGridSize: (size: GameGridSize) => void;
}