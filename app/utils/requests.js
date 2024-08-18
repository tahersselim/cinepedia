const API_KEY = process.env.NEXT_PUBLIC_KEY;

export const getWeekTop10 = async () => {
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
  const moviesList = await response.json();
  const movies = moviesList.data;
  return movies;
};

export const fanFavorite = async () => {
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
  const moviesList = await response.json();
  return moviesList.data.list;
};
