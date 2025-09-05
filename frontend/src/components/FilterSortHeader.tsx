import FilterDrawer from "./FilterDrawer";
import FilterChips from "./FilterChips";
import type { FiltersProps } from '../types/FilterTypes';
import type { SortDropdownProps } from '../types/SortTypes';
import SortDropdown from "./SortDropdown";


export default function FilterSortHeader({ filterContent, filters, dispatch, sortOrder, setsortOrder }: FiltersProps & SortDropdownProps) {
  return (
    <div id="FilterSortHeader" className="flex flex-grid justify-between w-full h16 p-4">
      <FilterDrawer
        filterContent={filterContent}
        filters={filters}
        dispatch={dispatch}
      />
      <SortDropdown 
        sortOrder={sortOrder}
        setsortOrder={setsortOrder}
      />
      <FilterChips
        filterContent={filterContent}
        selectedFilterIds={filters}
        dispatch={dispatch}
      />
    </div>
  );
}