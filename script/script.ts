import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function InsertPokemons(pokemons: Pokemon[]) {
  try {
    const transactions = pokemons.map((pokemon) => {
      return prisma.pokemon.create({
        data: {
          id: Number(pokemon.id),
          name: pokemon.name,
          height: pokemon.height,
          weight: pokemon.weight,
          abilities: {
            create: pokemon.abilities,
          },
          types: {
            create: pokemon.types,
          },
          stats: {
            create: pokemon.stats,
          },
        },
      });
    });
    await prisma.$transaction(transactions);
  } catch (error) {
    console.error(error);
  }
}

// Inserts all fetched Pokemons into Sqlite DB
export async function main() {
  try {
    // Loads data from db
    const pokemons = await getAllPokemons();

    // Checks if data exists in db, otherwise will load and insert data
    if (pokemons?.length === 0) {
      const pokemonsData = await fetch("http://localhost:3000/api");
      const pokemons: Pokemon[] = await pokemonsData.json();

      // Loads and inserts pokemons in db
      await InsertPokemons(pokemons);
    }
    return await getAllPokemons();
  } catch (error) {
    console.error(error);
  }
}

// Gets all Pokemons from db
export async function getAllPokemons() {
  try {
    // Fetch all records from the Pokemon table
    const pokemons: Pokemon[] = await prisma.pokemon.findMany({
      include: {
        abilities: true, // Include related abilities for each Pokemon
        types: true,
        stats: true,
      },
    });
    return pokemons;
  } catch (error) {
    console.error("Error fetching data from tables:", error);
  }
}

// Gets Pokemon with the given id from db
export async function getPokemon(pokemonId: number) {
  const pokemon = await prisma.pokemon.findUnique({
    where: {
      id: Number(pokemonId),
    },
    include: {
      abilities: true,
      types: true,
      stats: true,
    },
  });
  if (!pokemon) {
    throw new Error(`Pokemon with ID ${pokemonId} not found.`);
  }
  return pokemon;
}
