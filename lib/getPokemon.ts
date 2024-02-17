export default async function getPokemon(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) throw new Error("Something went wrong");

  return res.json();
}
