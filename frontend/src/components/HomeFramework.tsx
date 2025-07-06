'use client';
import React from "react";
import GameGrid from "./GameGrid";
import Filters from "./Filters";
import type { Game } from "../types/GameTypes";
import type { Filter, FilterState, FilterAction } from "../types/FilterTypes";

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

    return (
        <div className='flex bg-gray-50'>
            <div id="filter-wrapper" className="p-4 shadow min-w-2xs max-w-2xs h-full left-0 right-0 fixed overflow-y-auto pb-20"> 
                {/* h-full overflow-y-auto min-w-2xs p-4 bg-white shadow*/}
                <Filters
                    filterContent={filterContent}
                    filters={filters}
                    dispatch={dispatch}
                />
            </div>
            <div id="game-grid-wrapper" className="h-full overflow-y-auto left-70 min-w-3/4 max-w-9/10 overflow-y-scroll fixed pb-20">
                <GameGrid
                    initialGames={games}
                    filters={filters}
                />
            </div>
        </div>
    );
}