export type FavoritesAddButtonProps = {
  gameId: number
  favoriteGames: Set<number>;
  setFavoriteGames: (favorites: Set<number>) => void;
}

export type FavoritesShowButtonProps= {
    showFavorites: boolean;
    setShowFavorites: (show: boolean) => void;
}