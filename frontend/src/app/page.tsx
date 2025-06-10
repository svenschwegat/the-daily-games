async function getGames(){
  const data = await fetch(`${process.env.BACKEND_URL}/games`, { cache: 'no-store' });
  const games = await data.json();
  return games;
}

export default async function Home() {
  const games = await getGames();
  console.log('games', games);
  return (
    <div >
      <main>
        <div className="grid grid-cols-4 gap-4 p-4">
          {games.map((game: any) => (
            <div key={game.id} className="p-4 border rounded-lg m-2">
              <h2 className="text-xl font-bold">{game.name}</h2>
              <p className="text-gray-700">{game.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
