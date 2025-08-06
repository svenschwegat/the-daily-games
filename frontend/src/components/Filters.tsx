'use client';
import React from 'react';
import FilterCheckbox from './FilterCheckbox';
import FilterChips from './FilterChips';
import { Accordion, AccordionItem } from '@heroui/react';
import type { FilterKey, Filter, FiltersProps, CreateFilterCheckboxProps } from '../types/FilterTypes';
import { filterNamingScheme } from '../utils/FilterNamingScheme';
import { FilterIcon } from '@/icons/FilterIcons';

function createFilterCheckboxes({ items, selected, dispatch, filterKey }: CreateFilterCheckboxProps) {
  return (
    <div>
      {items[filterKey].map((item: Filter) => (
        <div key={item.id} className="flex items-center p-1">
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
  );
}

export default function Filters({ filterContent, filters, dispatch }: FiltersProps) {
  return (
    <>
      <FilterChips filterContent={filterContent} selectedFilterIds={filters} dispatch={dispatch} />
      <Accordion selectionMode="multiple" defaultExpandedKeys={[filterNamingScheme.categories.key]}>
        {(Object.keys(filterNamingScheme) as Array<FilterKey>).map((key) => {
          const filter = filterNamingScheme[key];
          return (
            <AccordionItem
              startContent={<FilterIcon type={key} width={24} height={24} color="#000000"/>}
              key={filter.key}
              aria-label={filter.label}
              title={filter.label}
            >
              {createFilterCheckboxes({
                items: filterContent,
                selected: filters,
                dispatch: dispatch,
                filterKey: filter.key,
                title: filter.label,
              })}
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}