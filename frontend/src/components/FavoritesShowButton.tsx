import { Button } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons"
import { FavoritesShowButtonProps } from "@/types/FavoritesTypes";
import { useState, useEffect } from "react";

export default function FavoritesShowButton({showFavorites, setShowFavorites}: FavoritesShowButtonProps) {
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setColor(showFavorites ? "#b74949ff" : "#000000");
  }, [showFavorites]);

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
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