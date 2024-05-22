import { InsertPokemons } from "./InsertPokemons";
import { getAllPokemons } from "./getAllPokemons";

// Inserts all fetched Pokemons into Sqlite DB
export async function main() {
  try {
    // Loads data from db
    const pokemons = await getAllPokemons();

    // Checks if data exists in db, otherwise will load from api and insert data
    if (pokemons?.length === 0) {
      const pokemonsData = await fetch("http://localhost:3000/api");
      const pokemons: Pokemon[] = await pokemonsData.json();

      // Loads and inserts pokemons in db
      await InsertPokemons(pokemons);
    }
    return await getAllPokemons();
  } catch (error) {
    console.error(error);
    return [];
  }
}
