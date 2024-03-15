import Image from "next/image";
import Link from "next/link";
import { getAllPokemons, getPokemon } from "@/script/script";
import { IoArrowBack } from "react-icons/io5";
import BarChart from "@/app/components/BarChart";
import totalStat from "@/lib/totalStat";
import PokemonDetails from "@/app/components/PokemonDetails";
import capitalFirstLetter from "@/lib/capitalFirstLetter";

type Props = {
  params: { pokemonId: number };
};

export async function generateMetadata({ params: { pokemonId } }: Props) {
  const pokemonData: Promise<Pokemon> = getPokemon(pokemonId);
  const pokemon = await pokemonData;

  return {
    title: capitalFirstLetter(pokemon.name),
    description: `Details of ${pokemon.name}`,
  };
}

// Main component for displaying a Pokémon. It fetches Pokémon data and renders the UI accordingly.
export default async function DisplayPokemon({ params: { pokemonId } }: Props) {
  const pokemonData: Promise<Pokemon> = getPokemon(pokemonId);
  const pokemon = await pokemonData;

  const content = (
    <>
      <section className="mt-8">
        <Link href="http://localhost:3000/pokemons">
          <IoArrowBack />
        </Link>
      </section>
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
          <BarChart stats={pokemon.stats} />

          <p className="font-bold mt-5">
            Total : &nbsp;{totalStat(pokemon.stats)}
          </p>
        </div>
      </section>
    </>
  );
  return content;
}

// Function to generate static paths for Next.js static generation feature.
// It fetches all Pokémons to create paths for static generation.
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
