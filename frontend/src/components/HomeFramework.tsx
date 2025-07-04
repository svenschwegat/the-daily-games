'use client';
import React from "react";
import GameGrid from "./GameGrid";
import Filters from "./Filters";
import type { Game } from "../types/GameTypes";
import type { FilterState, FilterAction } from "../types/FilterTypes"; 

interface HomeFrameworkProps {
    filterContent: Record<string, any>;
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

                if(updated.length === 0) {
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
        <div className='min-h-screen bg-gray-50'>
            <main className="flex">
                <div className="w-1/4 p-4 bg-white shadow">
                    <Filters
                        filterContent={filterContent}
                        filters={filters}
                        dispatch={dispatch}
                    />
                </div>
                <div className="w-3/4 p-4">
                    <GameGrid initialGames={games} filters={filters} />
                </div>
            </main>
        </div>
    );
}