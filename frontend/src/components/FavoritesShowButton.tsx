import { Button } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons"
import { FavoritesShowButtonProps } from "@/types/FavoritesTypes";
import { useState } from "react";

export default function FavoritesShowButton({showFavorites, setShowFavorites}: FavoritesShowButtonProps) {
  const [color, setColor] = useState("#000000");

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
    setColor(showFavorites ? "#000000" : "#b74949ff");
  }

  return (
    <Button
      isIconOnly
      onPress={toggleFavorites}
    >
      <ButtonIcon type="heart" width={24} height={24} color={color} />
    </Button>
  );
}