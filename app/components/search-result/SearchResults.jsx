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
    <div className="container my-5">
      <h1 className="mb-4">Search Results for: {searchText}</h1>

      <div className="mb-3">
        <label htmlFor="sortSelect" className="form-label">Sort By</label>
        <select
          id="sortSelect"
          className="form-select"
          aria-label="Sort by"
          onChange={(e) => filterMovies(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="year">Release Year</option>
        </select>
      </div>

      <div className="row g-4">
        {filteredMovies && filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => {
            const imgUrl = movie.image;
            const id = movie.id;
            const title = movie.title;
            return (
              <div className="col-12 col-md-6 col-lg-4" key={id}>
                <Card imageUrl={imgUrl} id={id} title={title} />
              </div>
            );
          })
        ) : (
          <div className="alert alert-info">No results found.</div>
        )}
      </div>
    </div>
  );
}
