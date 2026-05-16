const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const getPokemons = async (limit = 20) => {
  try {
    const response = await fetch(`${BASE_URL}?limit=${limit}`);

    if (!response.ok) {
      throw new Error("Ошибка при получении данных с сервера");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
