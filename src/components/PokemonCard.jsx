import React from "react";

const PokemonCard = React.memo(({ pokemon }) => {
  const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p># {pokemonId}</p>
    </div>
  );
});

export default PokemonCard;
