import { Button } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons";

interface SearchButtonProps {
  toggleSearchBar: () => void;
}

export default function SearchButton({toggleSearchBar}: SearchButtonProps) {
  return (
    <Button
      isIconOnly
      onPress={toggleSearchBar}
    >
      <ButtonIcon type="search" width={24} height={24} color="#000000" />
    </Button>
  );
}