import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons";
import { sortNamingScheme } from "@/utils/SortNamingScheme";
import type { SortKey, SortDropdownProps } from "@/types/SortTypes";

export default function SortDropdown({ sortOrder, setSortOrder }: SortDropdownProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          color={'secondary'}
          startContent={<ButtonIcon type={'sort'} width={20} height={20} color="#ffffff" />}
        >
          Sort - {sortNamingScheme[sortOrder.values().next().value as SortKey].short_label}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Sort Games"
        selectionMode="single"
        selectedKeys={sortOrder}
        onSelectionChange={(keys) => {
          setSortOrder(keys as Set<SortKey>);
        }}
      >
        {(Object.keys(sortNamingScheme) as Array<SortKey>).map((key) => {
          const sortOption = sortNamingScheme[key];
          return (
            <DropdownItem key={sortOption.key}>
              {sortOption.label}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}