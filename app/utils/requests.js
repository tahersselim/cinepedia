const API_KEY = process.env.NEXT_PUBLIC_KEY;

export const getTop100 = async () => {
  try {
    const response = await fetch(
      "https://imdb188.p.rapidapi.com/api/v1/getWeekTop10",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "imdb188.p.rapidapi.com",
        },
      }
    );

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    const movies = data?.data ?? []; // Use optional chaining and default to an empty array

    return Array.isArray(movies) ? movies : []; // Ensure the result is an array
  } catch (error) {
    console.error("Failed to fetch week top 10:", error);
    return []; // Return an empty array in case of an error
  }
};
export const fanFavorite = async () => {
  try {
    const response = await fetch(
      "https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "imdb188.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    const movieList = data?.data?.list ?? [];

    return Array.isArray(movieList) ? movieList : [];
  } catch (error) {
    console.error("Failed to fetch fan favorites:", error);
    return [];
  }
};
