import Image from "next/image";
import getAllPokemons from "@/lib/getAllPokemons";
import getPokemon from "@/lib/getPokemon";
import BarChart from "@/app/components/BarChart";
import totalStat from "@/lib/totalStat";
import { Suspense } from "react";
import PokemonDetails from "@/app/components/PokemonDetails";
import { BarChartSkeleton } from "@/app/components/Skeleton";
import { Metadata } from "next";

export async function generateMetadata({ params: { pokemonId } }: Props) {
  const pokemonData: Promise<OriginalPokemon> = getPokemon(pokemonId);
  const pokemon = await pokemonData;

  return {
    title: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    description: `Details of ${pokemon.name}`,
  };
}

type Props = {
  params: { pokemonId: string };
};

export default async function DisplayPokemon({ params: { pokemonId } }: Props) {
  const pokemonData: Promise<OriginalPokemon> = getPokemon(pokemonId);
  const pokemon = await pokemonData;

  const content = (
    <section className="flex w-4/5 items-center mt-4 flex-wrap">
      <div className="flex justify-center relative p-8 w-full ">
        <Image
          src={`/sprites/${pokemonId}.svg`}
          alt={pokemon.name}
          width={400}
          height={400}
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
  const pokemonsData: Promise<Pokemon[]> = getAllPokemons();
  const pokemons = await pokemonsData;

  return pokemons.map((pokemon) => {
    return {
      pokemonId: pokemon.id.toString(),
    };
  });
}
