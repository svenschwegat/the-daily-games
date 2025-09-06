import { Filter, FilterKey } from './FilterTypes';
import { SortKey } from './SortTypes';

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
}

export type GameGridProps = {
  initialGames: Game[];
  filters: Record<FilterKey, number[]>;
  sortOrder: Set<SortKey>;
  searchValue: string;
}

export type GameGridImageProps = {
  game: Game;
}

export type AddGameModalProps = {
  games: Game[];
  filterContent: Record<string, Filter[]>;
}