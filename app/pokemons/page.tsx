import DisplayPokemon from "../components/DisplayPokemon";
import Search from "../components/Search";
import { main } from "@/script/main";

type Props = {
  searchParams?: {
    query?: string;
    page?: string;
    column?: string;
    order?: string;
  };
};

// The functional component to render Pokemons list
export default async function Pokemons({ searchParams }: Props) {
  // Asynchronously fetch the pokemons data
  const pokemonsData: Promise<Pokemon[] | undefined> = main();
  const pokemons = await pokemonsData;

  // Define the number of items per page for pagination
  const pageSize = 20;

  // Extract and process query parameter for filtering
  const query = searchParams?.query?.toLowerCase() || "";
  let filteredPokemons = pokemons!.filter((pokemon) =>
    pokemon.name.startsWith(query)
  );

  // Determine the current page from the search parameters or default to the first page
  const currentPage = Number(searchParams?.page) || 1;
  // Calculate total number of pages for pagination
  const totalPages = Math.ceil(filteredPokemons.length / 20);

  // Paginate the filtered pokemons for the current page view
  if (filteredPokemons.length > 20) {
    filteredPokemons = filteredPokemons.slice(
      (currentPage - 1) * pageSize, // Start index for slicing
      (currentPage - 1) * pageSize + 19 // End index for slicing
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <Search /> {/* Component for handling search input */}
      <DisplayPokemon
        pokemons={filteredPokemons} // Pass the paginated list of pokemons
        totalPages={totalPages} // Total pages for pagination controls
        currentPage={currentPage - 1} // Current active page
      />
    </div>
  );
}
