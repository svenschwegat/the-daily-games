import React from "react";

import FilterDrawer from "./FilterDrawer";
import FilterChips from "./FilterChips";
import SortDropdown from "./SortDropdown";
import SearchBar from "./SearchBar";
import AddGameModal from "./AddGameModal";
import RandomGameModal from "./RandomGameButton";
import GameGridSizeButton from "./GameGridSizeButton";

import type { Filter, FilterKey, FilterAction } from '../types/FilterTypes';
import type { SortKey } from '../types/SortTypes';
import type { Game, GameGridSize } from "../types/GameTypes";

type FilterSortHeaderProps = {
  filterContent: Record<FilterKey, Filter[]>,
  filters: Record<FilterKey, number[]>,
  dispatch: (action: FilterAction) => void,
  sortOrder: Set<SortKey>,
  setSortOrder: (key: Set<SortKey>) => void,
  setSearchValue: (value: string) => void,
  games: Game[],
  gameGridSize: GameGridSize,
  setGameGridSize: (size: GameGridSize) => void
}

export default function FilterSortHeader({
  filterContent, filters, dispatch,
  sortOrder, setSortOrder,
  setSearchValue,
  games, gameGridSize, setGameGridSize
}: FilterSortHeaderProps) {
  const showAddGameModal = false; // Placeholder

  return (
    <div id="FilterSortHeader" className="flex flex-wrap items-center w-full gap-4 p-4 lg:pl-20 lg:pr-20 justify-between">
      <div id="SortAndFilterButtons" className="flex flex-wrap items-center gap-2">
        <SortDropdown
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <FilterDrawer
          filterContent={filterContent}
          filters={filters}
          dispatch={dispatch}
        />
        {showAddGameModal && 
        <AddGameModal 
          games={games} 
          filterContent={filterContent} 
        />}
        <RandomGameModal
          games={games}
        />
        <GameGridSizeButton 
          gameGridSize={gameGridSize}
          setGameGridSize={setGameGridSize}
        />
      </div>
      <div id="FilterChips" className="w-full sm:flex-1 sm:flex sm:justify-center">
        <FilterChips
          filterContent={filterContent}
          selectedFilterIds={filters}
          dispatch={dispatch}
        />
      </div>
      <div id="SearchBar" className="flex items-center justify-end">
        <SearchBar
          games={games}
          setSearchValue={setSearchValue}
        />
      </div>
    </div>
  );
}