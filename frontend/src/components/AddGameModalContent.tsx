import React from "react";
import { Input, Select, SelectItem } from "@heroui/react";

import { filterNamingScheme } from '../utils/FilterNamingScheme';

import type { Filter, FilterKey } from "@/types/FilterTypes";
import type { AddGameModalProps } from "@/types/GameTypes";

export default function AddGameModalContent({ games, filterContent }: AddGameModalProps) {

  return (
    <div className="flex flex-col gap-4">
      <Input label="Name" type="text" />
      <Input label="Description" type="text" />
      <Input label="Preview Image" type="file" />
      <Input label="Game URL" type="url" />

      {Object.entries(filterContent).map((filterGroup) => {
        return (addSelects(filterGroup));
      })}
    </div>
  );
}

function addSelects(filterGroup: [string, Filter[]]) {
  const [key, filterElements] = filterGroup as [FilterKey, Filter[]];
  return (
    <Select
      key={key}
      label={filterNamingScheme[key as FilterKey].label}
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