"use client";

import Link from "next/link";
import Image from "next/image";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa"; // Import sorting icons for visual cues
import totalStat from "@/lib/totalStat"; // Utility function to calculate total stats of a Pokémon
import { useMemo, useState } from "react";
import Pagination from "./Pagination";

type Props = {
  pokemons: Pokemon[];
  totalPages: number;
  currentPage: number;
};

type SortState = {
  column: string | null;
  direction: "desc" | "asc" | null;
};

export default function DisplayPokemon({
  pokemons,
  totalPages,
  currentPage,
}: Props) {
  const [sortState, setSortState] = useState<SortState>({
    column: null,
    direction: null,
  });

  // Unified sort handler that updates the sort state based on column and toggles direction
  const handleSort = (column: string): void => {
    const isAsc = sortState.column === column && sortState.direction === "asc";
    setSortState({
      column,
      direction: isAsc ? "desc" : "asc",
    });
  };

  const statsName: string[] = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
  ];

  // Use useMemo to sort Pokémon list based on current sort state
  const sortedPokemons = useMemo(() => {
    if (!sortState.column) return pokemons;
    const column = sortState.column;
    const sorted = [...pokemons].sort((a, b) => {
      if (sortState.column === "name") {
        return sortState.direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (statsName.includes(column)) {
        // Assuming all stats follow the same structure and are in the same order
        const index = a.stats.findIndex(
          (stat) => stat.stat_name === sortState.column
        );
        return sortState.direction === "asc"
          ? Number(a.stats[index].base_stat) - Number(b.stats[index].base_stat)
          : Number(b.stats[index].base_stat) - Number(a.stats[index].base_stat);
      } else {
        return sortState.direction === "asc" ? a.id - b.id : b.id - a.id;
      }
    });
    return sorted;
  }, [pokemons, sortState]);

  const getSortIcon = (column: string) => {
    if (sortState.column !== column) return <FaSort />;
    return sortState.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <main className="display_main relative overflow-x-auto shadow-md sm:rounded-lg w-9/12 my-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col">
              <div
                onClick={() => handleSort("id")}
                className="flex items-end justify-evenly"
              >
                Id
                {getSortIcon("id")}
              </div>
            </th>
            <th></th>

            <th
              onClick={() => handleSort("name")}
              scope="col"
              className="flex items-end justify-evenly px-6 py-3"
            >
              Name
              {getSortIcon("name")}
            </th>
            <th>Type</th>
            <th>
              <div className="flex items-end justify-evenly">Total</div>
            </th>
            <th>
              <div
                onClick={() => handleSort("hp")}
                className="flex items-end justify-evenly"
              >
                HP
                {getSortIcon("hp")}
              </div>
            </th>
            <th>
              <div
                onClick={() => handleSort("attack")}
                className="flex items-end justify-evenly"
              >
                Attack
                {getSortIcon("attack")}
              </div>
            </th>
            <th>
              <div
                onClick={() => handleSort("defense")}
                className="flex items-end justify-evenly"
              >
                Defense
                {getSortIcon("defense")}
              </div>
            </th>
            <th>
              <div
                onClick={() => handleSort("special-attack")}
                className="flex items-end justify-evenly"
              >
                Sp. Attack
                {getSortIcon("special-attack")}
              </div>
            </th>
            <th>
              <div
                onClick={() => handleSort("special-defense")}
                className="flex items-end justify-evenly"
              >
                Sp. Defense
                {getSortIcon("special-defense")}
              </div>
            </th>
            <th>
              <div
                onClick={() => handleSort("speed")}
                className="flex items-end justify-evenly"
              >
                Speed
                {getSortIcon("speed")}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPokemons.map((pokemon) => {
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
                    <p key={type.name}>
                      {
                        <Image
                          src={`/types/${type.name}.png`}
                          width={60}
                          height={30}
                          alt={type.name}
                          className="mb-1"
                        />
                      }
                    </p>
                  ))}
                </td>
                <td className="text-center">{totalStat(pokemon.stats)}</td>
                {pokemon.stats.map((stat) => (
                  <td className="text-center" key={stat.stat_name}>
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
          setSortState={setSortState}
        />
      </div>
    </main>
  );
}
