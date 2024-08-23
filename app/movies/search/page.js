import Card from "@/app/components/card/Card"; // Import the Card component
import { Data } from "@/app/data/data"; // Import the Data function

// Function to get data

export const metadata = {
  title: "Cinepedia - Search Result",
  description:
    "Discover the ultimate guide to packed movies! Find top-rated thrillers, reviews, trailers, and release dates. Your one-stop shop for adrenaline-fueled entertainment.",
};

const getData = () => {
  const data = Data(); // Assuming Data() returns an array of movies

  if (data) {
    return data; 
  }
  return []; // Return an empty array if no data is found
};

// SearchPage Component
export default function SearchPage({ searchParams }) {
  const data = getData(); // Fetch the data
  const searchText = searchParams.query || "No search query provided"; // Get the search query from URL parameters
  const lowerSearchText = searchText.toLowerCase(); // Convert the search query to lowercase

  // Filter movies that match the search text (case-insensitive)
  const result = data.filter((movie) =>
    movie.title.toLowerCase().includes(lowerSearchText)
  );

  return (
    <div className="container mt-5">
      <div className="alert alert-dark">
        <h4 className="alert-heading">Search Results</h4>
        <p>{searchText}</p>
        <hr />
        {result.length > 0 ? (
          <p className="mb-0">{result.length} result(s) found.</p>
        ) : (
          <p className="mb-0">No results found.</p>
        )}
      </div>
      <div className="row g-4">
        {result.length > 0 ? (
          result.map((movie) => {
            const imgUrl = movie.image;
            const id = movie.id;
            const title = movie.title;
            const description = movie.description;
            return (
              <div className="col-md-4 col-lg-4" key={id}>
                <Card
                  imageUrl={imgUrl}
                  id={id}
                  title={title}
                  description={description}
                />
              </div>
            );
          })
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
}
