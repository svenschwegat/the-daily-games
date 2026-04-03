import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons";
import { sortNamingScheme } from "@/utils/SortNamingScheme";
import useIsMobile from "@/utils/isMobile";
import type { SortKey, SortDropdownProps } from "@/types/SortTypes";

export default function SortDropdown({ sortOrder, setSortOrder }: SortDropdownProps) {
  const [isMobile, setIsMobile] = useState(true);
  useIsMobile(setIsMobile);

  const buttonName = isMobile ? '' : `Sort - ${sortNamingScheme[sortOrder.values().next().value as SortKey].short_label}`;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly={isMobile}
          color={'secondary'}
          startContent={<ButtonIcon type={'sort'} width={20} height={20} color="#ffffff" />}
        >
          {buttonName}
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