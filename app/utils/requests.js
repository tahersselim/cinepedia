const API_KEY = process.env.NEXT_PUBLIC_KEY;
const API_SEARCHKEY = process.env.NEXT_PUBLIC_SEARCH_KEY;

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

export const searchMovies = async (searchText) => {
  const encodedSearchText = encodeURIComponent(searchText);
  const response = await fetch(
    `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${encodedSearchText}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": API_SEARCHKEY,
        "x-rapidapi-host": "imdb188.p.rapidapi.com",
      },
    }
  );
  const moviesList = await response.json();
  return moviesList.data;
};



