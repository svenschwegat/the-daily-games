import Cookies from 'js-cookie';

export function getCookieFavorites() {
  const cookies = Cookies.get('favoriteGames')
  const favoriteGames = cookies ? new Set(cookies.split(',').map(Number)) : new Set<number>();
  return favoriteGames;
}

export function setCookieFavorites(favoriteGames: Set<number>) {
  const favoriteGamesArray = Array.from(favoriteGames);
  Cookies.set('favoriteGames', favoriteGamesArray.join(','), { expires: 365 });
}
