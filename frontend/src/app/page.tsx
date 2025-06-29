import GameGrid from '@/components/GameGrid';
import Filters from '@/components/Filters';

async function getGames(){
  const data = await fetch(`${process.env.BACKEND_URL}/games`, { cache: 'no-store' });
  const games = await data.json();
  return games;
}

async function getFilter(filterType: string){
  const data = await fetch(`${process.env.BACKEND_URL}/filters/${filterType}`, { cache: 'no-store' });
  const filter = await data.json();
  return filter;
}

export default async function Home() {
  const games = await getGames();
  const filterTypes: string[] = ['categories', 'publishers', 'quiz_styles', 'answer_types', 'languages'];
  const filterResults = await Promise.all(filterTypes.map(type => getFilter(type)));
  const filters = filterTypes.reduce((acc, type, idx) => {
    acc[type] = filterResults[idx];
    return acc;
  }, {} as Record<string, any>);
  const filteredGames = games;
  console.log('filters', filters);

  if(!games || games.length === 0) {
    return <div className="flex justify-center items-center h-screen">No games available</div>;
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <main className="flex">
        <div className="w-1/4 p-4 bg-white shadow">
          <Filters 
            filters={filters}
          />

        </div>
        <div className="w-3/4 p-4">
          <GameGrid games={filteredGames} />
        </div>
        
      </main>
    </div>
  );
}