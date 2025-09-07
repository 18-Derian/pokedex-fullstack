import { useState } from "react";
import { getPokemon } from "./services/api";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [name, setName] = useState("");

  const buscarPokemon = async () => {
    const data = await getPokemon(name.toLowerCase());
    setPokemon(data);
  };

  return (
    <div>
      <h1>Pokédex MVC</h1>
      <input
        type="text"
        placeholder="Escribe un Pokémon"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={buscarPokemon}>Buscar</button>

      {pokemon && (
        <div>
          <h2>{pokemon._name}</h2>
          <img src={pokemon._sprites.front_default} alt={pokemon._name} />
          <p>Altura: {pokemon._height}</p>
          <p>Peso: {pokemon._weight}</p>
          <p>Descripción: {pokemon._flavor_text_entries[0]}</p>
        </div>
      )}
    </div>
  );
}

export default App;