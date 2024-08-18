import SearchResults from "@/app/components/search-result/SearchResults";
import { searchMovies } from "@/app/utils/requests";

export default async function SearchPage({ searchParams }) {
  const searchText = searchParams.query || "No search query provided";
  const searchResult = await searchMovies(searchText);
  
  return (
   <SearchResults searchText={searchText} searchResult={searchResult}></SearchResults>
  );
}
