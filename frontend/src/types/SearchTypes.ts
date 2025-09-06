import type { Game } from "./GameTypes";

export type SearchBarProps = {
  games: Game[];
  setSearchValue: (value: string) => void;
}