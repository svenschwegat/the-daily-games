interface Game {
  id: number;
  name: string;
  description: string;
  category_id: number;
  publisher_id: number;
  quiz_style_id: number;
  answer_type_id: number;
  is_exact_answer: number;
  language_id: number;
  link: string;
  picture_link: string | null;
  ranking: number | null;
}

interface GameGridProps {
  games: Game[];
}

export default function GameGrid({games}: GameGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {games.map((game: Game) => (
        <div key={game.id} className="p-4 border rounded-lg m-2">
          <a href={game.link} target="_blank" className="text-xl font-bold">{game.name}</a>
          <p className="text-gray-700">{game.description}</p>
        </div>
      ))}
    </div>
  );
}
