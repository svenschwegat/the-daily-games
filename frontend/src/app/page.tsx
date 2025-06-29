import GameGrid from '@/components/GameGrid';

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
        <GameGrid games={games} />
      </main>
    </div>
  );
}
