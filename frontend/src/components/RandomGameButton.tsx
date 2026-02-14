import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons";
import type { Game } from "../types/GameTypes";
import GameGridCard from "./GameGridCard";

interface RandomGameModalProps {
  games: Game[];
}

export default function RandomGameModal({ games }: RandomGameModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [randomGame, setRandomGame] = React.useState(games[0] as Game);

  const selectRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * games.length);
    const randomGame = games[randomIndex];
    setRandomGame(randomGame);
    onOpen();
  }

  return (
    <>
      <Button
        isIconOnly
        onPress={selectRandomGame}
      >
        <ButtonIcon type="die" width={24} height={24} color="#000000" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Chosen random game
              </ModalHeader>
              <ModalBody>
                <GameGridCard 
                  game={randomGame}
                  favoriteGames={new Set<number>()}
                  setFavoriteGames={() => {}}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
