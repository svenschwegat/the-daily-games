import React from "react";

import FilterDrawer from "./FilterDrawer";
import FilterChips from "./FilterChips";
import SortDropdown from "./SortDropdown";
import SearchBar from "./SearchBar";
import AddGameModal from "./AddGameModal";
import RandomGameModal from "./RandomGameButton";

import type { FiltersProps } from '../types/FilterTypes';
import type { SortDropdownProps } from '../types/SortTypes';
import type { Game } from "../types/GameTypes";

export default function FilterSortHeader({
  filterContent, filters, dispatch,
  sortOrder, setSortOrder,
  setSearchValue,
  games
}: FiltersProps & SortDropdownProps & { setSearchValue: (value: string) => void } & { games: Game[] }) {
  const showAddGameModal = false; // Placeholder

  return (
    <div id="FilterSortHeader" className="flex flex-wrap items-center w-full gap-4 p-4 lg:pl-20 lg:pr-20 justify-between">
      <div id="SortAndFilterButtons" className="flex items-center gap-4">
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