import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPokemon } from "../services/api";
import SearchBar from "../components/SearchBar";
import PokemonCard from "../components/PokemonCard";
import PaginationButtons from "../components/PaginationButtons";

function Home() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (name) {
      fetchPokemon(name);
    }
  }, [name]);

  const fetchPokemon = async (name) => {
    const data = await getPokemon(name);
    setPokemon(data);
  };

  const handleSearch = (searchName) => {
    navigate(`/pokemon/${searchName}`);
  };

  return (
    <div>
      <h1>Pokédex MVC</h1>
      <SearchBar onSearch={handleSearch} />
      {pokemon && (
        <>
          <PokemonCard pokemon={pokemon} />
          <PaginationButtons
            currentId={pokemon._id}
            onNavigate={(id) => navigate(`/pokemon/${id}`)}
          />
        </>
      )}
    </div>
  );
}

export default Home;
