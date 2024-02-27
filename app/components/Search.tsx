"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    // If there is a search term, set the "query" parameter and remove "page" parameter
    if (term) {
      params.set("query", term);
      params.delete("page");
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300); // The callback is debounced with a 300ms delay.

  return (
    <div className="flex justify-center w-9/12 mt-4 mb-n-2">
      <label htmlFor="search" className="mr-2 self-center">
        Search :
      </label>
      <input
        id="search"
        placeholder="Search pokemons"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        className="rounded p-2"
      />
    </div>
  );
}
