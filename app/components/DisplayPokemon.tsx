import Link from "next/link";
import Image from "next/image";

type Props = {
  pokemons: Pokemon[];
};

export default function DisplatPokemon({ pokemons }: Props) {
  return (
    <main className="relative overflow-x-auto shadow-md sm:rounded-lg w-9/12 my-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sprite
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <>
              <tr
                key={pokemon.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th scope="row" className="px-6 py-4">
                  <Image
                    src={`/sprites/${pokemon.id}.svg`}
                    alt={pokemon.name}
                    width={40}
                    height={40}
                  />
                </th>
                <td className="px-6 py-4">
                  <Link href={`/pokemons/${pokemon.id}`}>{pokemon.id}</Link>
                </td>
                <td className="px-6 py-4">{pokemon.name}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </main>
  );
}
