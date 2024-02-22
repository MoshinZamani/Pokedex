import { main, deleteAll } from "@/script/script";

export default async function callApi() {
  const pokemonsData = await fetch(`http://localhost:3000/api`);
  const pokemons = await pokemonsData.json();

  main(pokemons);
}
