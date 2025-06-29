import GameGrid from '@/components/GameGrid';
import Filters from '@/components/Filters';

async function getGames(){
  const data = await fetch(`${process.env.BACKEND_URL}/games`, { cache: 'no-store' });
  const games = await data.json();
  return games;
}

async function getCategories() {
  const data = await fetch(`${process.env.BACKEND_URL}/categories`, { cache: 'no-store' });
  const categories = await data.json();
  return categories;
}

export default async function Home() {
  const games = await getGames();
  const categories = await getCategories();
  if(!games || games.length === 0) {
    return <div className="flex justify-center items-center h-screen">No games available</div>;
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <main className="flex">
        <div className="w-1/4 p-4 bg-white shadow">
          <Filters categories={categories} />

        </div>
        <div className="w-3/4 p-4">
        <GameGrid games={games} />
        </div>
        
      </main>
    </div>
  );
}
