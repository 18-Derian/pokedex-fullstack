import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/pokemons?offset=0&limit=20")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results); // la API trae results[]
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar pokemons:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando pokémons...</p>;

  return (
    <div>
      <h1>Lista de Pokémons</h1>
      <ul>
        {pokemons.map((p) => {
          // obtener el ID desde la URL que manda la API
          const id = p.url.split("/")[6];
          return (
            <li key={p.name}>
              <Link to={`/pokemon/${id}`}>{p.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonList;
