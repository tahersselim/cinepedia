export default function SearchPage({ searchParams }) {
  const searchText = searchParams.query || "No search query provided";

  return (
    <div className="container mt-5">
      <div className="alert alert-dark">
        <h4 className="alert-heading">Search Results</h4>
        <p>{searchText}</p>
        <hr />
        <p className="mb-0">No results found.</p>
      </div>
    </div>
  );
}
