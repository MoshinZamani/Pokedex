import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main(pokemons: Pokemon[]) {
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
          // @ts-expect-error
          create: pokemon.stats,
        },
      },
    });
  });
  try {
    const result = await prisma.$transaction(transactions);
    return result;
  } catch (error) {
    console.error(`Error : ${error}`);
  }
}

export async function getAllPokemons() {
  try {
    // Fetch all records from the Pokemon table
    // @ts-expect-error
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

export async function deleteAll() {
  try {
    // Fetch all records from the Pokemon table
    await prisma.ability.deleteMany({});
    await prisma.type.deleteMany({});
    await prisma.stat.deleteMany({});
    await prisma.pokemon.deleteMany({});
  } catch (error) {
    console.error("Error fetching data from tables:", error);
  }
}
