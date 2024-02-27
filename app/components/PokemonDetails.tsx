import capitalFirstLetter from "@/lib/capitalFirstLetter";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonDetails({ pokemon }: Props) {
  return (
    <>
      <p className="font-extrabold text-blue-600 font-mono border-b border-gray-400 p-3 text-center">
        {capitalFirstLetter(pokemon.name)}
      </p>
      <p className="font-semibold text-gray-800 border-b border-gray-400 p-3">
        Id : &nbsp;{pokemon.id}
      </p>
      <p className="font-semibold text-gray-800 border-b border-gray-400 p-3">
        Height :&nbsp; {pokemon.height}
      </p>
      <p className="font-semibold text-gray-800 border-b border-gray-400 p-3">
        Weight: &nbsp;{pokemon.weight}
      </p>
      <div className="font-semibold text-gray-800 border-b border-gray-400 p-3">
        Abilities :
        <ul className="list-none">
          {pokemon.abilities.map((ability, idx) => (
            <li key={ability.name}>
              {idx + 1}.&nbsp;{ability.name}
              {ability.is_hidden && <span>&nbsp;(hidden ability)</span>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
