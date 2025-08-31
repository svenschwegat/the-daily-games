import type { Game } from '../types/GameTypes';
import GameGridImage from './GameGridImage';
import { Card, CardBody, CardFooter, Divider, Link } from '@heroui/react'

export default function GameGridCard({ game }: { game: Game }) {
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
      <CardFooter className="flex gap-4 justify-center">
        <Link
          isExternal
          showAnchorIcon
          isBlock
          href={game.link}
        >
          Play {game.name}
        </Link>
      </CardFooter>
    </Card>
  );
}