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

interface FilterIterationProps {
    items: Record<string, any>;
    title?: string;
    filterColumn: string;
    selected: number[];
    setSelected: (selected: number[]) => void;
}

function iterateFilterCheckboxes({items, title, filterColumn, selected, setSelected}: FilterIterationProps) {
    return (
        <div>
            <h2 className="text-xl font-bold mt-4 mb-1">{title}</h2>
            <div className="space-y-1">
                {items.map((item: Filter) => (
                    <div key={item.id} className="flex items-center">
                        <FilterCheckbox
                            id={item.id}
                            label={item.name}
                            filterColumn={filterColumn}
                            currentlySelected={selected}
                            setCurrentlySelected={setSelected}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
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
            {iterateFilterCheckboxes({
                items: filters.categories, 
                title: 'Categories', 
                filterColumn: 'category_id', 
                selected: selectedCategories, 
                setSelected: setSelectedCategories
            })}
            {iterateFilterCheckboxes({
                items: filters.quiz_styles, 
                title: 'Quiz styles', 
                filterColumn: 'quiz_style_id', 
                selected: selectedQuizStyles, 
                setSelected: setSelectedQuizStyles
            })}
            {iterateFilterCheckboxes({
                items: filters.quiz_styles, 
                title: 'Answer Types', 
                filterColumn: 'answer_type_id', 
                selected: selectedAnswerTypes, 
                setSelected: setSelectedAnswerTypes
            })}
            {iterateFilterCheckboxes({
                items: filters.quiz_styles, 
                title: 'Languages', 
                filterColumn: 'language_id', 
                selected: selectedLanguages, 
                setSelected: setSelectedLanguages
            })}
            {iterateFilterCheckboxes({
                items: filters.quiz_styles, 
                title: 'Publishers', 
                filterColumn: 'publisher_id', 
                selected: selectedPublishers, 
                setSelected: setSelectedPublishers
            })}
        </div>
    )
}