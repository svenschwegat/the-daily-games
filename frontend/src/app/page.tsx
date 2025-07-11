import HomeFramework from "@/components/HomeFramework";
import type { Filter } from "@/types/FilterTypes";

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
  const filterContent = filterTypes.reduce((acc, type, idx) => {
    acc[type] = filterResults[idx];
    return acc;
  }, {} as Record<string, Filter[]>);

  return (
      <div>
        <HomeFramework filterContent={filterContent} games={games} />
      </div>
  );
}