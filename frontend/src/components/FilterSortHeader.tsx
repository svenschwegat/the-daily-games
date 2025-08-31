import FilterDrawer from "./FilterDrawer";
import FilterChips from "./FilterChips";
import type { FiltersProps } from '../types/FilterTypes';

export default function FilterSortHeader({ filterContent, filters, dispatch }: FiltersProps) {
  return (
    <div id="FilterSortHeader" className="flex flex-grid justify-between w-full h16 p-4">
      <FilterDrawer
        filterContent={filterContent}
        filters={filters}
        dispatch={dispatch}
      />
      <FilterChips
        filterContent={filterContent}
        selectedFilterIds={filters}
        dispatch={dispatch}
      />
    </div>
  );
}