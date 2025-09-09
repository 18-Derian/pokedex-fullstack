function PokemonCard({ pokemon }) {
  return (
    <div>
      <h2>{pokemon._name}</h2>
      <img src={pokemon._sprites.front_default} alt={pokemon._name} />
      <p>Altura: {pokemon._height}</p>
      <p>Peso: {pokemon._weight}</p>
      <p>Descripción: {pokemon._flavor_text_entries[0]}</p>
    </div>
  );
}

export default PokemonCard;