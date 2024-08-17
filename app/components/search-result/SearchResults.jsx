"use client";
import { useEffect, useState } from "react";
import Card from "../card/Card";

export default function SearchResults({ searchResult, searchText }) {
  const [filteredMovies, setFilteredMovies] = useState(searchResult);

  useEffect(() => {
    setFilteredMovies(searchResult);
  }, [searchResult]);

  const filterMovies = (filter) => {
    let sortedMovies = [];
    switch (filter) {
      case "year":
        sortedMovies = [...searchResult].sort(
          (a, b) => new Date(b.year) - new Date(a.year)
        );
        break;
      default:
        sortedMovies = searchResult;
        break;
    }
    setFilteredMovies(sortedMovies);
  };

  return (
    <div className="container my-3">
      <h1>Search Results for: {searchText}</h1>
      <div style={{ marginBottom: "10px" }}>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => filterMovies(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="year">Release Year</option>
        </select>
      </div>

      <div className="d-flex flex-wrap gap-3">
        {filteredMovies && filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => {
            const imgUrl = movie.image;
            const id = movie.id;
            const title = movie.title;
            return <Card key={id} imageUrl={imgUrl} id={id} title={title} />;
          })
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
