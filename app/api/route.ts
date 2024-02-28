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
  results.map((result) => {
    const abilities = result.abilities.map((ability: OriginalAbility) => {
      return { name: ability.ability.name, is_hidden: ability.is_hidden };
    });

    const types = result.types.map((type: OriginalType) => {
      return { name: type.type.name };
    });

    const stats = result.stats.map((stat: OriginalStat) => {
      return { base_stat: stat.base_stat, stat_name: stat.stat.name };
    });

    pokemons.push({
      id: Number(result.id),
      name: result.name,
      types,
      stats,
      height: result.height,
      weight: result.weight,
      abilities,
    });
  });

  return NextResponse.json(pokemons);
}
