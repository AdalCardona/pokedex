import react from "react";

function NavBar({ onChange, value }) {
  return (
    <div className="bg-red-500 p-5 flex justify-between">
      <h1 className="text-white font-bold text-xl">Pokédex</h1>
      <form>
        <input
          name="search"
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Ejemplo: Pikachu"
          className="p-1"
        />
        <button className="bg-red-900 text-white py-1 px-3 font-semibold">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default NavBar;
