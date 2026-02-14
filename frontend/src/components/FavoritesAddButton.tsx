import React from "react";
import { Link, Button } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons";
import type { FavoritesAddButtonProps } from "@/types/FavoritesTypes";

export default function FavoritesAddButton({gameId, favoriteGames, setFavoriteGames}: FavoritesAddButtonProps) {
  const [color, setColor] = React.useState("#000000");

  const updateFavorites = (gameId: number) => {
    const newFavorites = new Set(favoriteGames);
    if (newFavorites.has(gameId)) {
      newFavorites.delete(gameId);
      setColor("#000000");
    } else {
      newFavorites.add(gameId);
      setColor("#b74949ff");
    }
    setFavoriteGames(newFavorites);
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