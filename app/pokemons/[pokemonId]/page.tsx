import Image from "next/image";
import getAllPokemons from "@/lib/getAllPokemons";

type Props = {
  params: { pokemonId: string };
};

export default function DisplayPokemon({ params: { pokemonId } }: Props) {
  const content = (
    <section>
      <Image
        src={`/sprites/${pokemonId}.svg`}
        alt="Pokemon"
        width={80}
        height={80}
      />
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
