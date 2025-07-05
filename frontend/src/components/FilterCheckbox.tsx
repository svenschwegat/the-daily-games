import type { FilterCheckboxProps } from '../types/FilterTypes';

export default function FilterCheckbox({ id, label, filterKey, selected, dispatch }: FilterCheckboxProps) {
    const isChecked = selected.includes(id);

    const handleChange = () => {
        if (id === 0) {
            // Selecting "All" resets to only [0]
            dispatch({ type: 'RESET_FILTER', key: filterKey});
        } else {
            dispatch({ type: 'TOGGLE_FILTER_VALUE', key: filterKey, value: id });
            if(selected.length === 1 && selected.includes(0)){
                // If only "All" was selected, replace it with the current id
                dispatch({ type: 'SET_FILTER', key: filterKey, values: [id] });
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