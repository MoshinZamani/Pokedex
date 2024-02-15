"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center w-9/12 mt-4 mb-n-2">
      <label htmlFor="search" className="mr-2 self-center">
        Search :
      </label>
      <input
        placeholder="Search pokemons"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        className="rounded p-2"
      />
    </div>
  );
}
