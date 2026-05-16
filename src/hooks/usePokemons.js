import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/pokemonApi";

export const usePokemons = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(),
  });

  return {
    pokemons: data || [],
    loading: isLoading,
    error: isError ? error.message : null,
  };
};
