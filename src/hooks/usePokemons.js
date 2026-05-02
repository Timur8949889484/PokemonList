import { useState, useEffect } from "react";
import { getPokemons } from "../api/pokemonApi";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPokemons();
        setPokemons(data);
      } catch (err) {
        setError("Не удалось загрузить данные", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return { pokemons, loading, error };
};
