import React from "react";
import { Input, Select, SelectItem } from "@heroui/react";

import { filterNamingScheme } from '../utils/FilterNamingScheme';

import type { Filter, FilterKey } from "@/types/FilterTypes";
import type { AddGameModalProps } from "@/types/GameTypes";

export default function AddGameModalContent({ games, filterContent }: AddGameModalProps) {
  games; // Todo for autocompleting name
  return (
    <div className="flex flex-col min-w-sm gap-4">
      <Input label="Name" name="name" isRequired type="text" />
      <Input label="Description" name="description" isRequired type="text" />
      <Input label="Preview Image" name="file" type="file" />
      <Input label="Game URL" name="link" isRequired type="url" defaultValue="https://"/>

      {Object.entries(filterContent).map((filterGroup) => {
        return (addSelects(filterGroup));
      })}
      <Input label="Answer is exact (1/0)" name="is_exact_answer" isRequired type="number"/>
    </div>
  );
}

function addSelects(filterGroup: [string, Filter[]]) {
  const [key, filterElements] = filterGroup as [FilterKey, Filter[]];
  return (
    <Select
      key={key}
      name={filterNamingScheme[key as FilterKey].id_column}
      label={filterNamingScheme[key as FilterKey].label}
      isRequired
    >
      {filterElements.map((element) => {
        return (
          <SelectItem key={element.id}>
            {element.name}
          </SelectItem>
        );
      })}
    </Select>
  );
}