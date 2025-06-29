'use client';
import React from 'react';
interface category {
    id: number;
    name: string;
}

interface FiltersProps {
    categories: category[];
}

export default function Filters({categories}: FiltersProps){
    const [selectedCategories, setSelectedCategories] = React.useState<number[]>([0]) // 0 means all categories;

    return(
        <div>
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
                {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                        <input 
                            type="checkbox" 
                            id={`category-${category.id}`} 
                            className="w-4 h-4 bg-gray-100 mr-2"
                            onClick={(e) => {
                                setSelectedCategories((prev) => {
                                    if (e.currentTarget.checked) {
                                        return [...prev, category.id];
                                    }
                                    return prev.filter(id => id !== category.id);
                                });
                                // Here you can handle the category selection logic
                                console.log(`Category ${category.name} selected: ${e.currentTarget.checked}`);
                            }}
                        />
                        <label htmlFor={`category-${category.id}`} className="text-gray-700">
                            {category.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}