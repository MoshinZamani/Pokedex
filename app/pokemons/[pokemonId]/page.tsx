import Image from "next/image";
import { getAllPokemons, getPokemon } from "@/script/script";

import BarChart from "@/app/components/BarChart";
import totalStat from "@/lib/totalStat";
import { Suspense } from "react";
import PokemonDetails from "@/app/components/PokemonDetails";
import { BarChartSkeleton } from "@/app/components/Skeleton";

type Props = {
  params: { pokemonId: number };
};

export async function generateMetadata({ params: { pokemonId } }: Props) {
  //@ts-expect-error
  const pokemonData: Promise<Pokemon> = getPokemon(pokemonId);
  const pokemon = await pokemonData;

  return {
    title: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    description: `Details of ${pokemon.name}`,
  };
}

export default async function DisplayPokemon({ params: { pokemonId } }: Props) {
  //@ts-expect-error
  const pokemonData: Promise<Pokemon> = getPokemon(pokemonId);
  const pokemon = await pokemonData;

  const content = (
    <section className="flex items-center mt-4 sm:flex-col sm:w-full md:flex-row md:flex-wrap md:w-4/5">
      <div className="flex justify-center p-8 w-full ">
        <Image
          src={`/sprites/${pokemonId}.svg`}
          alt={pokemon.name}
          width="0"
          height="0"
          priority
          className="w-1/2 h-auto"
        />
      </div>
      <div className="flex flex-col w-1/3 m-8">
        <PokemonDetails pokemon={pokemon} />
      </div>
      <div className="w-1/2 ml-10">
        <Suspense fallback={<BarChartSkeleton />}>
          <BarChart stats={pokemon.stats} />
        </Suspense>
        <p className="font-bold mt-5">
          Total : &nbsp;{totalStat(pokemon.stats)}
        </p>
      </div>
    </section>
  );
  return content;
}

export async function generateStaticParams() {
  //@ts-expect-error
  const pokemonsData: Promise<Pokemon[]> = getAllPokemons();
  const pokemons = await pokemonsData;

  return pokemons.map((pokemon) => {
    return {
      pokemonId: pokemon.id.toString(),
    };
  });
}
