const API_KEY = process.env.NEXT_PUBLIC_KEY;
// const API_SEARCHKEY = process.env.NEXT_PUBLIC_SEARCH_KEY;

export const getWeekTop10 = async () => {
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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check if data and data.data exist and are valid
    if (data && Array.isArray(data.data)) {
      return data.data;
    } else {
      console.warn("Unexpected response structure:", data);
      return []; // Return an empty array if the structure is not as expected
    }
  } catch (error) {
    console.error("Error fetching week top 10 movies:", error);
    return []; // Return an empty array if an error occurs
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
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check if data and data.data exist and are valid
    if (data && data.data && Array.isArray(data.data.list)) {
      return data.data.list;
    } else {
      console.warn("Unexpected response structure:", data);
      return []; // Return an empty array if the structure is not as expected
    }
  } catch (error) {
    console.error("Error fetching fan favorites:", error);
    return []; // Return an empty array if an error occurs
  }
};

// export const searchMovies = async (searchText) => {
//   const encodedSearchText = encodeURIComponent(searchText);
//   const response = await fetch(
//     `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${encodedSearchText}`,
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": API_SEARCHKEY,
//         "x-rapidapi-host": "imdb188.p.rapidapi.com",
//       },
//     }
//   );
//   const moviesList = await response.json();

//   return moviesList;
// };
