import Cookies from 'js-cookie';
import React from 'react';

export function getCookie(cookieName: string) {
  const cookie = Cookies.get(cookieName);
  if (typeof cookie !== 'string') {
    return null;
  }

  switch (cookieName) {
    case 'favoriteGames':
      if (cookie === undefined || cookie === '0' || cookie === '' || cookie === 'NaN') {
        return new Set<number>();
      }
      return new Set(cookie.split(',').map(Number));
    case 'showFavorites':
      return cookie === '1';
    default:
      return cookie;
  }
}

export function setCookie(cookieName: string, value: boolean | string | Set<number>) {
  if (typeof value === 'object') {
    const array = Array.from(value);
    Cookies.set(cookieName, array.join(','), { expires: 365 });
  } else if (typeof value === 'boolean') {
    Cookies.set(cookieName, value ? '1' : '0', { expires: 365 });
  } else {
    Cookies.set(cookieName, value, { expires: 365 });
  }
}

export function useUpdateCookieAfterSsr(cookieName: string, value: boolean | string | Set<number>, mounted: boolean) {
  React.useEffect(() => {
    if (mounted) {
      setCookie(cookieName, value);
    }
  }, [cookieName, value, mounted]);
}