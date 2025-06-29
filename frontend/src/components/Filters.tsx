'use client';
import React from 'react';
import FilterCheckbox from './FilterCheckbox';

interface Filter {
    id: number;
    name: string;
    description?: string;
    link?: string;
}

interface FiltersProps {
    filters: Record<string, any>;
}

export default function Filters({filters}: FiltersProps){
    const [selectedCategories, setSelectedCategories] = React.useState<number[]>([0]);
    const [selectedPublishers, setSelectedPublishers] = React.useState<number[]>([0]);
    const [selectedQuizStyles, setSelectedQuizStyles] = React.useState<number[]>([0]);
    const [selectedAnswerTypes, setSelectedAnswerTypes] = React.useState<number[]>([0]);
    const [selectedLanguages, setSelectedLanguages] = React.useState<number[]>([0]);

    if(filters.length === 0){ return; }
    return(
        <div>
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
                {filters.categories.map((category: Filter) => (
                    <div key={category.id} className="flex items-center">
                        <FilterCheckbox 
                            id={category.id} 
                            label={category.name} 
                            filterColumn='category_id'
                            currentlySelected={selectedCategories}
                            setCurrentlySelected={setSelectedCategories}
                        />
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-bold mb-4">Quiz Styles</h2>
            <div className="space-y-2">
                {filters.quiz_styles.map((item: Filter) => (
                    <div key={item.id} className="flex items-center">
                        <FilterCheckbox 
                            id={item.id} 
                            label={item.name} 
                            filterColumn='quiz_style_id'
                            currentlySelected={selectedQuizStyles}
                            setCurrentlySelected={setSelectedQuizStyles}
                        />
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-bold mb-4">Answer Types</h2>
            <div className="space-y-2">
                {filters.answer_types.map((item: Filter) => (
                    <div key={item.id} className="flex items-center">
                        <FilterCheckbox 
                            id={item.id} 
                            label={item.name} 
                            filterColumn='answer_type_id'
                            currentlySelected={selectedAnswerTypes}
                            setCurrentlySelected={setSelectedAnswerTypes}
                        />
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-bold mb-4">Languages</h2>
            <div className="space-y-2">
                {filters.languages.map((item: Filter) => (
                    <div key={item.id} className="flex items-center">
                        <FilterCheckbox 
                            id={item.id} 
                            label={item.name} 
                            filterColumn='language_id'
                            currentlySelected={selectedLanguages}
                            setCurrentlySelected={setSelectedLanguages}
                        />
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-bold mb-4">Publishers</h2>
            <div className="space-y-2">
                {filters.publishers.map((item: Filter) => (
                    <div key={item.id} className="flex items-center">
                        <FilterCheckbox 
                            id={item.id} 
                            label={item.name} 
                            filterColumn='publisher_id'
                            currentlySelected={selectedPublishers}
                            setCurrentlySelected={setSelectedPublishers}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}