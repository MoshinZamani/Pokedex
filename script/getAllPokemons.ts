import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
