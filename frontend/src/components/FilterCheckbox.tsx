interface FilterCheckboxProps {
    id: number;
    label: string;
    filterColumn: string;
    currentlySelected: number[]
    setCurrentlySelected: (selected: number[]) => void;
}

export default function FilterCheckbox({ id, label, filterColumn, currentlySelected, setCurrentlySelected }: FilterCheckboxProps) {
    const isChecked = currentlySelected.includes(id);

    const handleChange = () => {
        if (id === 0) {
            // Selecting "All" resets to only [0]
            setCurrentlySelected([0]);
        } else {
            let newSelected;
            if (isChecked) {
                newSelected = currentlySelected.filter((catId) => catId !== id);
                if (newSelected.length === 0) newSelected = [0]; // fallback to all
            } else {
                newSelected = currentlySelected.filter((catId) => catId !== 0).concat(id);
            }
            setCurrentlySelected(newSelected);
        }
    };
    return (
        <div className="flex items-center">
            <input
                id={`checkbox-${filterColumn}-${id}`}
                type="checkbox" 
                className="w-4 h-4 bg-gray-100 mr-2"
                checked={isChecked}
                onChange={handleChange}
            />
            <label htmlFor={`checkbox-${filterColumn}-${id}`} className="text-gray-700">
                {label}
            </label>
        </div>
    );
}