import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="http://localhost:3000/api">Call API</Link>
      <br />
      <Link href="http://localhost:3000/pokemons">Pokemons</Link>
    </main>
  );
}
