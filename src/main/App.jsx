import { usePokemons } from "../hooks/usePokemons";
import PokemonCard from "../components/PokemonCard";
import "./App.css";

function App() {
  const { pokemons, loading, error } = usePokemons();

  return (
    <div className="container">
      <h1>PokeDex (React Query)</h1>

      {loading && <h1 className="status">Загрузка покемонов...</h1>}
      {error && <h1 className="status error">Произошла ошибка: {error}</h1>}

      {!loading && !error && (
        <div className="pokemon-grid">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
