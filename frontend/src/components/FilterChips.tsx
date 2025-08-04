import { FilterKey, FilterChipsProps } from "@/types/FilterTypes";
import { Chip } from "@heroui/react";

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
                startContent={<img src={`/symbol_${key}.svg`} height={20} width={20} />}
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