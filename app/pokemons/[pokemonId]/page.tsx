import Image from "next/image";
import getAllPokemons from "@/lib/getAllPokemons";
import getPokemon from "@/lib/getPokemon";
import BarChart from "@/app/components/BarChart";
import totalStat from "@/lib/totalStat";

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
        <p className="font-extrabold text-blue-600 font-mono border-b border-gray-400 p-3 text-center">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </p>
        <p className="font-semibold text-gray-800 border-b border-gray-400 p-3">
          Id : &nbsp;{pokemonId}
        </p>
        <p className="font-semibold text-gray-800 border-b border-gray-400 p-3">
          Height :&nbsp; {pokemon.height}
        </p>
        <p className="font-semibold text-gray-800 border-b border-gray-400 p-3">
          Weight: &nbsp;{pokemon.weight}
        </p>
        <p className="font-semibold text-gray-800 border-b border-gray-400 p-3">
          Abilities :
          <ul className="list-none">
            {pokemon.abilities.map((ability, idx) => (
              <li key={ability.ability.name}>
                {idx + 1}.&nbsp;{ability.ability.name}
                {ability.is_hidden && <span>&nbsp;(hidden ability)</span>}
              </li>
            ))}
          </ul>
        </p>
      </div>
      <div className="w-1/2 ml-10">
        <BarChart stats={pokemon.stats} />
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
