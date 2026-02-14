import { Button } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons"

export default function FavoritesShowButton() {

  const filterFavorites = () => {
    console.log('test');
  }

  return (
    <Button
      isIconOnly
      onPress={filterFavorites}
    >
      <ButtonIcon type="heart" width={24} height={24} color="#000000" />
    </Button>
  );
}