import { NextResponse } from "next/server";
import totalStat from "@/lib/totalStat";

export async function GET() {
  const promises = [];
  for (let i = 1; i < 152; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  const resolvedPromises = Promise.all(promises.map((promise) => promise));
  const results = await resolvedPromises;
  const pokemons: Pokemon[] = [];
  results.map((result) => {
    pokemons.push({
      id: result.id,
      name: result.name,
      types: result.types,
      stats: result.stats,
      height: result.height,
      weight: result.weight,
      abilities: result.abilities,
    });
  });

  return NextResponse.json(pokemons);
}
