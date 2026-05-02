import { usePokemons } from "../hooks/usePokemons"; // Наш кастомный хук
import PokemonCard from "../components/PokemonCard";
import "./App.css";

function App() {
  const { pokemons, loading, error } = usePokemons();

  if (loading) return <h1 className="status">Загрузка...</h1>;
  if (error) return <h1 className="status error">{error}</h1>;

  return (
    <div className="container">
      <h1>PokeDex</h1>
      <div className="pokemon-grid">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
