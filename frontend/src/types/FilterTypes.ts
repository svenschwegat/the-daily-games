export type FilterKey = 'categories' | 'quiz_styles' | 'answer_types' | 'languages' | 'publishers';

export interface Filter {
    id: number;
    name: string;
    description?: string;
    link?: string;
}

// useReducer state and action types for filters
export type FilterState = {
    categories: number[];
    publishers: number[];
    quiz_styles: number[];
    answer_types: number[];
    languages: number[];
};

export type FilterAction =
    | { type: 'SET_FILTER'; key: FilterKey; values: number[] }
    | { type: 'RESET_FILTERS'; key: FilterKey }
    | { type: 'TOGGLE_FILTER_VALUE'; key: FilterKey; value: number };

// Props for the Filters component
export interface FiltersProps {
    filters: Record<FilterKey, number[]>;
    filterContent: Record<FilterKey, Filter[]>;
    dispatch: (action: FilterAction) => void;
}

export interface CreateFilterCheckboxProps {
    items: Record<FilterKey, Filter[]>;
    selected: Record<FilterKey, number[]>;
    dispatch: (action: FilterAction) => void;
    filterKey: FilterKey;
    title: string;
}

// Props for the FilterCheckbox component
export interface FilterCheckboxProps {
    id: number;
    label: string;
    filterKey: FilterKey;
    selected: number[];
    dispatch: (action: FilterAction) => void;
}