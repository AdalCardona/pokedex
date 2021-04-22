import { useState, useEffect } from "react";
import "./Pokemons.css";

function Pokemon({ url }) {
  const [pokemon, setPokemon] = useState({ sprites: {}, types: [] });
  const [back, setBack] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((json) => {
        setPokemon(json);
      });
  }, []);

  const getTypeColor = (type) => {
    const TYPE_COLORS = {
      water: "blue-500",
      fire: "red-500",
      grass: "green-600",
      bug: "green-400",
      normal: "gray-400",
      electric: "yellow-400",
      ground: "yellow-600",
      poison: "purple-500",
      fighting: "red-600",
      fairy: "pink-200",
      psychic: "pink-300",
      rock: "yellow-800",
      ghost: "purple-800",
    };
    return TYPE_COLORS[type] || "gray-500";
  };
  const color = getTypeColor(pokemon.types[0]?.type.name);
  const valorBack = back ? false : true;
  return (
    <div className="m-auto w-full sm:w-1/2 h-16 mb-52 md:w-1/2 lg:w-3/12 xl:w-1/4 p-3 ">
      <div className={`carta bg-${color}  w-full h-64 rounded-xl relative`}>
        <h2 className="absolute left-5 top-5 text-center capitalize">
          {pokemon.name}
        </h2>
        <div className="flex flex-row mt-1 absolute top-10 left-5">
          {pokemon.types.map((type) => {
            return (
              <span
                className={`${type.type.name} bg-yellow-500 rounded p-1 text-white mx-2`}
              >
                {type.type.name}
              </span>
            );
          })}
        </div>
        <button
          className="bg-yellow-500 rounded p-1 text-white mx-2 absolute top-20 left-5"
          onClick={() => setBack(valorBack)}
        >
          Back
        </button>
        {back && (
          <img
            src={pokemon.sprites.back_default}
            alt={pokemon.name}
            className="block mx-auto py-5 w-32 absolute bottom-0 right-1"
          />
        )}
        {back === false && (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="block mx-auto py-5 w-32 absolute bottom-0 right-1"
          />
        )}
      </div>
    </div>
  );
}

export default Pokemon;
