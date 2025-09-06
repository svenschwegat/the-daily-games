'use client';
import React from "react";
import GameGrid from "./GameGrid";
import FilterSortHeader from "./FilterSortHeader";
import type { Game } from "../types/GameTypes";
import type { Filter, FilterState, FilterAction } from "../types/FilterTypes";
import type { SortKey } from "@/types/SortTypes";

interface HomeFrameworkProps {
  filterContent: Record<string, Filter[]>;
  games: Game[];
}

export default function HomeFramework({ filterContent, games }: HomeFrameworkProps) {
  const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
    switch (action.type) {
      case 'SET_FILTER':
        return {
          ...state,
          [action.key]: action.values,
        };
      case 'TOGGLE_FILTER_VALUE':
        const current = state[action.key];
        const exists = current.includes(action.value);

        let updated = exists
          ? current.filter((v) => v !== action.value)
          : [...current, action.value];

        if (updated.length === 0) {
          updated = [0];
        }

        return {
          ...state,
          [action.key]: updated,
        };
      case 'RESET_FILTER':
        return {
          ...state,
          [action.key]: [0],
        };
      case 'RESET_FILTERS':
        return {
          categories: [0],
          publishers: [0],
          quiz_styles: [0],
          answer_types: [0],
          languages: [0]
        }
      default:
        return state;
    }
  };

  const initialFilters = {
    categories: [0],
    publishers: [0],
    quiz_styles: [0],
    answer_types: [0],
    languages: [0]
  }

  const [filters, dispatch] = React.useReducer(filterReducer, initialFilters);
  const [sortOrder, setSortOrder] = React.useState(new Set(["recommended"]) as Set<SortKey>);
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div id="game-grid-wrapper">
      <FilterSortHeader
        filterContent={filterContent}
        filters={filters}
        dispatch={dispatch}

        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        
        setSearchValue={setSearchValue}
        games={games}
      />
      <GameGrid
        initialGames={games}
        filters={filters}
        sortOrder={sortOrder}
        searchValue={searchValue}
      />
    </div>
  );
}