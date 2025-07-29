'use client';
import React from 'react';
import FilterCheckbox from './FilterCheckbox';
import type { Filter, FiltersProps, CreateFilterCheckboxProps }  from '../types/FilterTypes';

function createFilterCheckboxes({ items, selected, dispatch, filterKey, title }: CreateFilterCheckboxProps) {
    return (
        <div>
            <h2 className="text-xl font-bold mt-4 mb-1">{title}</h2>
            <div className="space-y-1">
                {items[filterKey].map((item: Filter) => (
                    <div key={item.id} className="flex items-center">
                        <FilterCheckbox
                            id={item.id}
                            label={item.name + (item.count ? ` (${item.count})` : '')} 
                            filterKey={filterKey}
                            selected={selected[filterKey]} 
                            dispatch={dispatch}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Filters({ filterContent, filters, dispatch }: FiltersProps){
    return(
        <div>
            {createFilterCheckboxes({
                items: filterContent,
                selected: filters, 
                dispatch: dispatch,
                filterKey: 'categories',
                title: 'Categories',
            })}
            {createFilterCheckboxes({
                items: filterContent,
                selected: filters, 
                dispatch: dispatch,
                filterKey: 'quiz_styles',
                title: 'Quiz Styles',
            })}
            {createFilterCheckboxes({
                items: filterContent,
                selected: filters, 
                dispatch: dispatch,
                filterKey: 'answer_types',
                title: 'Answer Types',
            })}
            {createFilterCheckboxes({
                items: filterContent,
                selected: filters, 
                dispatch: dispatch,
                filterKey: 'languages',
                title: 'Languages',
            })}
            {createFilterCheckboxes({
                items: filterContent,
                selected: filters, 
                dispatch: dispatch,
                filterKey: 'publishers',
                title: 'Publishers',
            })}
        </div>
    )
}