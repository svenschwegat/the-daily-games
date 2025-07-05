import type { FilterCheckboxProps } from '../types/FilterTypes';

export default function FilterCheckbox({ id, label, filterKey, selected, dispatch }: FilterCheckboxProps) {
    const isChecked = selected.includes(id);

    const handleChange = () => {
        if (id === 0) {
            // Selecting "All" resets to only [0]
            dispatch({ type: 'RESET_FILTERS', key: filterKey});
        } else {
            let newSelected;
            if (isChecked) {
                dispatch({ type: 'TOGGLE_FILTER_VALUE', key: filterKey, value: id });
            } else {
                
            }
        }
    };
    return (
        <div className="flex items-center">
            <input
                id={`checkbox-${filterKey}-${id}`}
                type="checkbox" 
                className="w-4 h-4 bg-gray-100 mr-2"
                checked={isChecked}
                onChange={handleChange}
            />
            <label htmlFor={`checkbox-${filterKey}-${id}`} className="text-gray-700">
                {label}
            </label>
        </div>
    );
}