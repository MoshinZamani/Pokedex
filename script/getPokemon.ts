import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
