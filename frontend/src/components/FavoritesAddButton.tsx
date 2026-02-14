import React from "react";
import { Link, Button } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons";

type FavoritesAddButton = {
  gameId: number
}
export default function FavoritesAddButton({gameId}: FavoritesAddButton) {
  const [favorites, setFavorites] = React.useState([] as number[]);
  const [color, setColor] = React.useState("#000000");

  const updateFavorites = (gameId: number) => {
    console.log(gameId);
    const newColor = color === "#000000" ? "#b74949ff" : "#000000";
    setColor(newColor);
  };

  return (
    <Button
      key={`fav_${gameId}`}
      id={`fav_${gameId}`}
      isIconOnly
      as={Link}
      onPress={() => updateFavorites(gameId)}
    >
      <ButtonIcon type="heart" width={24} height={24} color={color} />
    </Button>
  );
}