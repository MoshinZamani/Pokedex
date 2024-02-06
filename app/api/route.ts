import { NextResponse } from "next/server";

export async function GET() {
  const promises = [];
  for (let i = 1; i < 152; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  const resolvedPromises = Promise.all(promises.map((promise) => promise));
  const results = await resolvedPromises;
  const pokemons: Pokemon[] = [];
  results.map((result) =>
    pokemons.push({
      id: result.id,
      name: result.name,
      types: result.types,
      stats: result.stats,
    })
  );

  return NextResponse.json(pokemons);
}

// export async function GET() {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//   return Response.json(res);
// }
