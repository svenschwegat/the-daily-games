import { FilterKey, FilterChipsProps } from "@/types/FilterTypes";
import { Chip } from "@heroui/react";
import { FilterIcon } from "@/icons/FilterIcons";

export default function FilterChips({ filterContent, selectedFilterIds, dispatch }: FilterChipsProps) {
  const onClose = (key: FilterKey, id: number) => {
    dispatch({ type: 'TOGGLE_FILTER_VALUE', key: key as FilterKey, value: id });
  }
  
  return (
    <div id="FilterChips" className="flex flex-wrap gap-2">
      {Object.entries(selectedFilterIds).map(([key, ids]) => (
        <>
          {ids.map(id => {
            const filterItem = filterContent[key as FilterKey].find(f => f.id === id && id !== 0);
            return filterItem ? (
              <Chip 
                size="sm" 
                color="secondary"
                startContent={<FilterIcon type={key as FilterKey} width={20} height={20} color="#ffffff" />}
                onClose={() => onClose(key as FilterKey, id)}
              >
                {filterItem.name}
              </Chip>
            ) : null;
          })}
        </>
      ))}
    </div>
  );
}