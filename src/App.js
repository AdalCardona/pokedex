import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Pokemon from "./components/Pokemons.js";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((result) => result.json())

      .then((json) => {
        setPokemons(json.results);
      });
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const filterPokemons = () => {
    const buscar = search.toLowerCase();
    return pokemons.filter((pokemon) => pokemon.name.startsWith(buscar));
  };

  const data = filterPokemons();
  return (
    <div>
      <NavBar onChange={handleChange} value={search} />
      <Pokemons data={data} />
    </div>
  );
}
function Pokemons({ data }) {
  return (
    <div className="flex flex-wrap my-4">
      {data.map((pokemon) => (
        <Pokemon key={pokemon.url} {...pokemon} />
      ))}
    </div>
  );
}

export default App;
