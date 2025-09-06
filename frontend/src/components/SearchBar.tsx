import { Autocomplete, AutocompleteItem } from "@heroui/react";
import type { SearchBarProps } from "../types/SearchTypes";

export default function SearchBar({ games, setSearchValue }: SearchBarProps) {
  return (
    <Autocomplete
      label="Search Games"
      allowsCustomValue
      onInputChange={(value) => { setSearchValue(value) }}
    >
      {games.map((game) => {
        return (
          <AutocompleteItem key={game.id}>
            {game.name}
          </AutocompleteItem>
        );
      })}
    </Autocomplete>
  )
}