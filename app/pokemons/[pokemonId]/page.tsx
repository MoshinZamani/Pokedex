import Image from "next/image";
import getAllPokemons from "@/lib/getAllPokemons";
import getPokemon from "@/lib/getPokemon";
import BarChart from "@/app/components/BarChart";

type Props = {
  params: { pokemonId: string };
};

export default async function DisplayPokemon({ params: { pokemonId } }: Props) {
  const pokemonData = getPokemon(pokemonId);
  const pokemon = await pokemonData;

  const content = (
    <section className="flex w-4/5 items-center mt-4 border border-black">
      <div className="relative mr-8">
        <Image
          src={`/sprites/${pokemonId}.svg`}
          alt={pokemon.name}
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col">
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
              <li key={ability.name}>
                {idx + 1}.&nbsp;{ability.ability.name}
                {ability.is_hidden && <span>&nbsp;(hidden ability)</span>}
              </li>
            ))}
          </ul>
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
