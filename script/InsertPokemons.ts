import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Inserts Pokemons in DB
export async function InsertPokemons(pokemons: Pokemon[]) {
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
