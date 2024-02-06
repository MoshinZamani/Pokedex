import getAllPokemons from "@/lib/getAllPokemons";
import DisplayPokemon from "../components/DisplayPokemon";

export default async function Pokemons() {
  const pokemonsData: Promise<Pokemon[]> = getAllPokemons();
  const pokemons = await pokemonsData;

  return (
    <>
      <DisplayPokemon pokemons={pokemons} />
    </>
  );
}
