"use client";

import Link from "next/link";
import Image from "next/image";
import { FaSortUp } from "react-icons/fa6";
import { FaSortDown, FaSort } from "react-icons/fa";
import totalStat from "@/lib/totalStat";
import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Pagination from "./Pagination";

type Props = {
  pokemons: Pokemon[];
  totalPages: number;
  currentPage: number;
};

type StatsSort = {
  stat: number;
  order: boolean;
};

export default function DisplayPokemon({
  pokemons,
  totalPages,
  currentPage,
}: Props) {
  const [idSort, setIdSort] = useState<null | boolean>(false);
  const [nameSort, setNameSort] = useState<null | boolean>(null);
  const [hpSort, setHpSort] = useState<null | boolean>(null);
  const [attackSort, setAttackSort] = useState<null | boolean>(null);
  const [defenseSort, setDefenseSort] = useState<null | boolean>(null);
  const [spDefenseSort, setSpDefenseSort] = useState<null | boolean>(null);
  const [spAttackSort, setSpAttackSort] = useState<null | boolean>(null);
  const [speedSort, setSpeedSort] = useState<null | boolean>(null);

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleIdSort = (): void => {
    setNameSort(null);
    setHpSort(null);
    setAttackSort(null);
    setDefenseSort(null);
    setSpAttackSort(null);
    setSpDefenseSort(null);
    setSpeedSort(null);

    let idSortedPokemons: Pokemon[] = [];

    if (idSort) {
      setIdSort((prev) => !prev);
      idSortedPokemons = pokemons.sort((a, b) => {
        if (a["id"] < b["id"]) return -1;
        return 1;
      });
    } else {
      setIdSort((prev) => !prev);
      idSortedPokemons = pokemons.sort((a, b) => {
        if (a["id"] > b["id"]) return -1;
        return 1;
      });
    }
    pokemons = idSortedPokemons;
  };

  const handleNameSort = (): void => {
    setIdSort(null);
    setHpSort(null);
    setAttackSort(null);
    setDefenseSort(null);
    setSpAttackSort(null);
    setSpDefenseSort(null);
    setSpeedSort(null);

    let nameSortedPokemons: Pokemon[] = [];

    if (!nameSort) {
      setNameSort((prev) => !prev);
      nameSortedPokemons = pokemons.sort((a, b) => {
        if (a["name"] < b["name"]) return -1;
        return 1;
      });
    } else {
      setNameSort((prev) => !prev);
      nameSortedPokemons = pokemons.sort((a, b) => {
        if (a["name"] > b["name"]) return -1;
        return 1;
      });
    }
    pokemons = nameSortedPokemons;
  };

  const handleHpSort = (): void => {
    setIdSort(null);
    setNameSort(null);
    setAttackSort(null);
    setDefenseSort(null);
    setSpAttackSort(null);
    setSpDefenseSort(null);
    setSpeedSort(null);

    let hpSortedPokemons: Pokemon[] = [];

    if (!hpSort) {
      setHpSort((prev) => !prev);
      hpSortedPokemons = pokemons.sort((a, b) => {
        if (a.stats[0].base_stat < b.stats[0].base_stat) return -1;
        return 1;
      });
    } else {
      setHpSort((prev) => !prev);
      hpSortedPokemons = pokemons.sort((a, b) => {
        if (a.stats[0].base_stat > b.stats[0].base_stat) return -1;
        return 1;
      });
    }
    pokemons = hpSortedPokemons;
  };

  const handleAttackSort = (): void => {
    setIdSort(null);
    setNameSort(null);
    setHpSort(null);
    setDefenseSort(null);
    setSpAttackSort(null);
    setSpDefenseSort(null);
    setSpeedSort(null);

    let attackSortedPokemons: Pokemon[] = [];

    if (!attackSort) {
      setAttackSort((prev) => !prev);
      attackSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[1].base_stat < b.stats[1].base_stat) return -1;
        return 1;
      });
    } else {
      setAttackSort((prev) => !prev);
      attackSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[1].base_stat > b.stats[1].base_stat) return -1;
        return 1;
      });
    }
    pokemons = attackSortedPokemons;
  };
  const handleDefenseSort = (): void => {
    setIdSort(null);
    setNameSort(null);
    setAttackSort(null);
    setHpSort(null);
    setSpAttackSort(null);
    setSpDefenseSort(null);
    setSpeedSort(null);

    let defenseSortedPokemons: Pokemon[] = [];

    if (!defenseSort) {
      setDefenseSort((prev) => !prev);
      defenseSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[2].base_stat < b.stats[2].base_stat) return -1;
        return 1;
      });
    } else {
      setDefenseSort((prev) => !prev);
      defenseSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[2].base_stat > b.stats[2].base_stat) return -1;
        return 1;
      });
    }
    pokemons = defenseSortedPokemons;
  };

  const handleSpAttackSort = (): void => {
    setIdSort(null);
    setNameSort(null);
    setAttackSort(null);
    setHpSort(null);
    setDefenseSort(null);
    setSpDefenseSort(null);
    setSpeedSort(null);

    let spAttackSortedPokemons: Pokemon[] = [];

    if (!spAttackSort) {
      setSpAttackSort((prev) => !prev);
      spAttackSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[3].base_stat < b.stats[3].base_stat) return -1;
        return 1;
      });
    } else {
      setSpAttackSort((prev) => !prev);
      spAttackSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[3].base_stat > b.stats[3].base_stat) return -1;
        return 1;
      });
    }
    pokemons = spAttackSortedPokemons;
  };
  const handleSpDefenseSort = (): void => {
    setIdSort(null);
    setNameSort(null);
    setAttackSort(null);
    setHpSort(null);
    setDefenseSort(null);
    setSpAttackSort(null);
    setSpeedSort(null);

    let spDefenseSortedPokemons: Pokemon[] = [];

    if (!spDefenseSort) {
      setSpDefenseSort((prev) => !prev);
      spDefenseSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[4].base_stat < b.stats[4].base_stat) return -1;
        return 1;
      });
    } else {
      setSpDefenseSort((prev) => !prev);
      spDefenseSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[4].base_stat > b.stats[4].base_stat) return -1;
        return 1;
      });
    }
    pokemons = spDefenseSortedPokemons;
  };

  const handleSpeedSort = (): void => {
    setIdSort(null);
    setNameSort(null);
    setAttackSort(null);
    setHpSort(null);
    setDefenseSort(null);
    setSpAttackSort(null);
    setSpDefenseSort(null);

    let speedSortedPokemons: Pokemon[] = [];

    if (!speedSort) {
      setSpeedSort((prev) => !prev);
      speedSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[5].base_stat < b.stats[5].base_stat) return -1;
        return 1;
      });
    } else {
      setSpeedSort((prev) => !prev);
      speedSortedPokemons = pokemons.sort((a, b) => {
        // @ts-expect-error
        if (a.stats[5].base_stat > b.stats[5].base_stat) return -1;
        return 1;
      });
    }
    pokemons = speedSortedPokemons;
  };

  return (
    <main className="display_main relative overflow-x-auto shadow-md sm:rounded-lg w-9/12 my-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col">
              <div
                onClick={handleIdSort}
                className="flex items-end justify-evenly"
              >
                Id
                {idSort === null ? (
                  <FaSort />
                ) : !idSort ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </div>
            </th>
            <th></th>

            <th
              onClick={handleNameSort}
              scope="col"
              className="flex items-end justify-evenly px-6 py-3"
            >
              Name
              {nameSort === null ? (
                <FaSort />
              ) : !nameSort ? (
                <FaSortUp />
              ) : (
                <FaSortDown />
              )}
            </th>
            <th>Type</th>
            <th>
              <div className="flex items-end justify-evenly">Total</div>
            </th>
            <th>
              <div
                onClick={handleHpSort}
                className="flex items-end justify-evenly"
              >
                HP
                {hpSort === null ? (
                  <FaSort />
                ) : !hpSort ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </div>
            </th>
            <th>
              <div
                onClick={handleAttackSort}
                className="flex items-end justify-evenly"
              >
                Attack
                {attackSort === null ? (
                  <FaSort />
                ) : !attackSort ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </div>
            </th>
            <th>
              <div
                onClick={handleDefenseSort}
                className="flex items-end justify-evenly"
              >
                Defense
                {defenseSort === null ? (
                  <FaSort />
                ) : !defenseSort ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </div>
            </th>
            <th>
              <div
                onClick={handleSpAttackSort}
                className="flex items-end justify-evenly"
              >
                Sp. Attack
                {spAttackSort === null ? (
                  <FaSort />
                ) : !spAttackSort ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </div>
            </th>
            <th>
              <div
                onClick={handleSpDefenseSort}
                className="flex items-end justify-evenly"
              >
                Sp. Defense
                {spDefenseSort === null ? (
                  <FaSort />
                ) : !spDefenseSort ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </div>
            </th>
            <th>
              <div
                onClick={handleSpeedSort}
                className="flex items-end justify-evenly"
              >
                Speed
                {speedSort === null ? (
                  <FaSort />
                ) : !speedSort ? (
                  <FaSortUp />
                ) : (
                  <FaSortDown />
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => {
            return (
              <tr
                key={pokemon.name}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-sky-200"
              >
                <td className="px-6 " key={pokemon.name}>
                  {pokemon.id}
                </td>
                <td className="relative px-6 py-8">
                  <Image
                    src={`/sprites/${pokemon.id}.svg`}
                    alt={pokemon.name}
                    fill
                    priority
                  />
                </td>

                <td className="px-6 w-0.5 font-bold text-left text-blue-900">
                  <Link
                    className="ml-5 hover:text-red-500 hover:underline"
                    href={`/pokemons/${pokemon.id}`}
                  >
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Link>
                </td>

                <td>
                  {pokemon.types.map((type) => (
                    <p key={type.type.name}>
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
                <td className="text-center">{totalStat(pokemon.stats)}</td>
                {pokemon.stats.map((stat) => (
                  <td className="text-center" key={stat.stat.name}>
                    {stat.base_stat}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center pt-2">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setIdSort={setIdSort}
          setNameSort={setNameSort}
          setHpSort={setHpSort}
          setAttackSort={setAttackSort}
          setDefenseSort={setDefenseSort}
          setSpAttackSort={setSpAttackSort}
          setSpDefenseSort={setSpDefenseSort}
          setSpeedSort={setSpeedSort}
        />
      </div>
    </main>
  );
}
