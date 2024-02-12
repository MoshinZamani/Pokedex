import Link from "next/link";
import Image from "next/image";
import { FaSortUp } from "react-icons/fa6";
import { FaSortDown, FaSort } from "react-icons/fa";

type Props = {
  pokemons: Pokemon[];
};

const total = (stats: Stat[]) => {
  const sum = (a: number[]) => a.reduce((x, y) => x + y);
  const totalAmount = sum(stats.map((stat: Stat) => Number(stat.base_stat)));
  return totalAmount;
};

export default function DisplayPokemon({ pokemons }: Props) {
  return (
    <main className="display_main relative overflow-x-auto shadow-md sm:rounded-lg w-9/12 my-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col">
              <div className="flex items-end justify-evenly">
                Id <FaSortUp />
              </div>
            </th>

            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th>Type</th>
            <th>
              <div className="flex items-end justify-evenly">
                Total
                <FaSort />
              </div>
            </th>
            <th>
              <div className="flex items-end justify-evenly">
                HP
                <FaSort />
              </div>
            </th>
            <th>
              <div className="flex items-end justify-evenly">
                Attack
                <FaSort />
              </div>
            </th>
            <th>
              <div className="flex items-end justify-evenly">
                Defense
                <FaSort />
              </div>
            </th>
            <th>
              <div className="flex items-end justify-evenly">
                Sp. Attack
                <FaSort />
              </div>
            </th>
            <th>
              <div className="flex items-end justify-evenly">
                Sp. Defense
                <FaSort />
              </div>
            </th>
            <th>
              <div className="flex items-end justify-evenly">
                Speed
                <FaSort />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => {
            return (
              <tr
                key={pokemon.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="relative px-6 py-4">
                  <Link className="mr-32" href={`/pokemons/${pokemon.id}`}>
                    {pokemon.id}
                  </Link>
                  <Image
                    src={`/sprites/${pokemon.id}.svg`}
                    alt={pokemon.name}
                    fill
                    priority
                  />
                </td>

                <td className="px-6 py-4">{pokemon.name}</td>
                <td>
                  {pokemon.types.map((type) => (
                    <p>
                      {
                        <Image
                          src={`/types/${type.type.name}.png`}
                          width={60}
                          height={30}
                          alt={type.type.name}
                          className="mb-1"
                        />
                      }
                    </p>
                  ))}
                </td>
                <td>{total(pokemon.stats)}</td>
                {pokemon.stats.map((stat) => (
                  <td>{stat.base_stat}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
