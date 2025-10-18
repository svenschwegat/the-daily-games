import { Button } from "@heroui/react";
import { ButtonIcon } from "@/icons/ButtonIcons";
import type { GameGridSizeButtonProps } from "../types/GameTypes";

export default function GameGridSizeButton({ gameGridSize, setGameGridSize }: GameGridSizeButtonProps) {

  return (
    <>
      <Button
        isIconOnly
        onPress={() => setGameGridSize(gameGridSize === 'lg' ? 'sm' : 'lg')}
      >
        <ButtonIcon type={`grid_${gameGridSize}`} width={24} height={24} color="#000000" />
      </Button>
    </>);
}