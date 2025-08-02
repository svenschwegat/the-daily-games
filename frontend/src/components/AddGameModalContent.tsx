import React from "react";
import { Input, Select, SelectItem } from "@heroui/react";
import type { Filter } from "@/types/FilterTypes";

export default function AddGameModalContent() {
    const categories: Filter[] = [{id: 1, name: "A"}, {id: 2, name: "B"}]; // Placeholder
    return (
        <div className="flex flex-col gap-4">
            <Input label="Name" type="text" />
            <Input label="Description" type="text" />
            <Input label="Preview Image" type="file" />
            <Input label="Game URL" type="url" />

            <Select label="Category" placeholder="Select a category">
                {categories.map((category: Filter) => (
                    <SelectItem key={category.id}>
                        {category.name}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );

}