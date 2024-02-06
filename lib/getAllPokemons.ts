export default async function getAllPokemons() {
  const res = await fetch("http://localhost:3000/api/");
  return res.json();
}
