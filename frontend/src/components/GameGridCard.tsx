import GameGridImage from './GameGridImage';
import { Card, CardBody, CardFooter, Divider, Link } from '@heroui/react'
import FavoritesAddButton from '@/components/FavoritesAddButton';
import type { GameGridCardProps } from '../types/GameTypes';

export default function GameGridCard({ game, favoriteGames, setFavoriteGames }: GameGridCardProps) {
  return (
    <Card isPressable>
      <CardBody>
        <GameGridImage game={game} />
        <div className="text-xl font-bold text-gray-700 truncate text-center">
          {game.name}
        </div>
        <div className="text-center line-clamp-2">
          {game.description}
        </div>

      </CardBody>
      <Divider />
      <CardFooter className="flex gap-4 justify-around">
        <Link
          isExternal
          showAnchorIcon
          isBlock
          href={game.link}
        >
          Play {game.name}
        </Link>
        <FavoritesAddButton 
          gameId={game.id}
          favoriteGames={favoriteGames}
          setFavoriteGames={setFavoriteGames}
        />
      </CardFooter>
    </Card>
  );
}