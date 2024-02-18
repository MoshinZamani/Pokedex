import getAllPokemons from "@/lib/getAllPokemons";
import DisplayPokemon from "../components/DisplayPokemon";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { Suspense } from "react";
import { BarChartSkeleton } from "../components/Skeleton";

type Props = {
  searchParams?: {
    query?: string;
    page?: string;
  };
};

export default async function Pokemons({ searchParams }: Props) {
  const pokemonsData: Promise<Pokemon[]> = getAllPokemons();
  const pokemons = await pokemonsData;

  const pageSize = 20;

  const query = searchParams?.query || "";
  let filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.startsWith(query.toLowerCase())
  );

  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(filteredPokemons.length / 20);
  if (filteredPokemons.length > 20) {
    filteredPokemons = filteredPokemons.slice(
      (currentPage - 1) * 20,
      (currentPage - 1) * 20 + 19
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <Search />
      <Suspense fallback={<BarChartSkeleton />}>
        <DisplayPokemon
          pokemons={filteredPokemons}
          query={query}
          currentPage={currentPage}
        />
      </Suspense>
      <Pagination totalPages={totalPages} currentPage={currentPage - 1} />
    </div>
  );
}
