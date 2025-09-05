import FilterDrawer from "./FilterDrawer";
import FilterChips from "./FilterChips";
import type { FiltersProps } from '../types/FilterTypes';
import type { SortDropdownProps } from '../types/SortTypes';
import SortDropdown from "./SortDropdown";

export default function FilterSortHeader({ filterContent, filters, dispatch, sortOrder, setSortOrder }: FiltersProps & SortDropdownProps) {
  return (
    <div id="FilterSortHeader" className="flex flex-wrap justify-items-start w-full h16 gap-4 p-4">
      <SortDropdown 
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
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