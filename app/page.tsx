import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <div className="w-1/2 border border-black mb-8 bg-white rounded p-4">
        <p>
          This project lists the first 151 Pokemons from{" "}
          <Link
            className="underline text-blue-600 hover:text-red-800 visited:text-purple-600 "
            href="https://pokeapi.co/"
            target="_blank"
          >
            https://pokeapi.co/
          </Link>
          , considering that this api is going to shut down the service, so we
          do not know whether or not we can fetch data from it next time.
          Therefore, all fetched data would be inserted in <i>Sqlite</i> db
          using <i>Prisma ORM</i> and after that data is loaded from local
          database.
        </p>
        <br />
        <p>
          If this is the first time running this application, first, data will
          be fetched and inserted into db, thus it&aposs gonna be a bit slow
          depending on your connection quality. Data insertion happens just once
          meaning that if there is data in database, it is loaded from db not
          the api.
        </p>
      </div>

      <Link
        className="underline text-blue-400 hover:text-blue-800 hover:font-bold visited:text-purple-600"
        href="http://localhost:3000/pokemons"
      >
        .../pokemons
      </Link>
    </main>
  );
}
