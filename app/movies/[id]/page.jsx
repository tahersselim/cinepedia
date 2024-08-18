import { fanFavorite, getWeekTop10 } from "@/app/utils/requests";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default async function MovieDetailsPage({ params }) {
  const movies = await getWeekTop10();
  const fanfavorite = await fanFavorite();
  // const searchmovies = await searchMovies(params.id);

  // const movieDetail = searchmovies.find((movie) => movie.id === params.id);
  // message:
  // 'You have exceeded the MONTHLY quota for Requests on your current plan, BASIC.
  //  Upgrade your plan at https://rapidapi.com/DataCrawler/api/imdb188'

  const fanfavoritemovieDetail = fanfavorite.find(
    (movie) => movie.id === params.id
  );

  const movieFromTop10 = movies.find((movie) => movie.id === params.id);

  if (!fanfavoritemovieDetail && !movieFromTop10) {
    return (
      <div className="container text-center my-5">
        <h2>Movie not found</h2>
      </div>
    );
  }

  // Display movie details from the week top 10 if available

  if (movieFromTop10) {
    const imgUrl =
      movieFromTop10.primaryImage?.imageUrl || "/default-image.jpg"; // Fallback image
    const title = movieFromTop10.originalTitleText?.text || "No Title";
    const ratingSummary = movieFromTop10.ratingsSummary || {};
    const releaseDate = movieFromTop10.releaseDate || {};
    const type = movieFromTop10.titleType?.text || "No Type";
    const plot = movieFromTop10.plot || {};
    const country =
      movieFromTop10.releaseDate?.country?.text || "Unknown Country";
    const Rating = movieFromTop10.titleCertificate || {};
    const currentRank =
      movieFromTop10.chartMeterRanking?.currentRank || "Not Ranked";

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <Image
              src={imgUrl}
              alt={title}
              width={400}
              height={600}
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-8">
            <h1 className="mb-3">{title}</h1>
            <h4 className="text-muted mb-4">
              {type} | {releaseDate.day}.{releaseDate.month}.{releaseDate.year}
            </h4>
            <p className="lead">
              {plot.plotText?.plainText || "No Plot Available"}
            </p>

            <h2 className="mt-4">Ratings Summary</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Aggregate Rating:</strong>{" "}
                {ratingSummary.aggregateRating || "No Rating"}
              </li>
              <li className="list-group-item">
                <strong>Top Ranking:</strong>{" "}
                {ratingSummary.topRanking?.rank
                  ? `#${ratingSummary.topRanking.rank}`
                  : "Not Ranked"}
              </li>
              <li className="list-group-item">
                <strong>Vote Count:</strong>{" "}
                {ratingSummary.voteCount?.toLocaleString() || "No Vote Count"}
              </li>
            </ul>

            <h3 className="mt-4">Additional Information</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Country:</strong> {country}
              </li>
              <li className="list-group-item">
                <strong>Rating:</strong> {Rating.rating || "No Rating"}
              </li>
              <li className="list-group-item">
                <strong>Certificate Country:</strong>{" "}
                {Rating.certificateCountry?.text || "No Certificate Country"}
              </li>
              <li className="list-group-item">
                <strong>Current Rank:</strong> {currentRank}
              </li>
              <li className="list-group-item">
                <strong>Link to IMDb:</strong>{" "}
                <a
                  href={plot.correctionLink?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IMDb
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  if (fanfavoritemovieDetail) {
    const imgUrl =
      fanfavoritemovieDetail.primaryImage?.imageUrl || "/default-image.jpg"; // Fallback image ;
    const title = fanfavoritemovieDetail.originalTitleText?.text || "No Title";
    const ratingSummary = fanfavoritemovieDetail.ratingsSummary || {};
    const releaseDate = fanfavoritemovieDetail.releaseDate || {};
    const type = fanfavoritemovieDetail.titleType?.text || "No Type";
    const plot = fanfavoritemovieDetail.plot || {};
    const country =
      fanfavoritemovieDetail.releaseDate?.country?.text || "Unknown Country";
    const Rating = fanfavoritemovieDetail.titleCertificate || {};
    const currentRank =
      fanfavoritemovieDetail.chartMeterRanking?.currentRank || "Not Ranked";

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <Image
              src={imgUrl}
              alt={title}
              width={400}
              height={600}
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-8">
            <h1 className="mb-3">{title}</h1>
            <h4 className="text-muted mb-4">
              {type} | {releaseDate.day}.{releaseDate.month}.{releaseDate.year}
            </h4>
            <p className="lead">
              {plot.plotText?.plainText || "No Plot Available"}
            </p>

            <h2 className="mt-4">Ratings Summary</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Aggregate Rating:</strong>{" "}
                {ratingSummary.aggregateRating || "No Rating"}
              </li>
              <li className="list-group-item">
                <strong>Top Ranking:</strong>{" "}
                {ratingSummary.topRanking?.rank
                  ? `#${ratingSummary.topRanking.rank}`
                  : "Not Ranked"}
              </li>
              <li className="list-group-item">
                <strong>Vote Count:</strong>{" "}
                {ratingSummary.voteCount?.toLocaleString() || "No Vote Count"}
              </li>
            </ul>

            <h3 className="mt-4">Additional Information</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Country:</strong> {country}
              </li>
              <li className="list-group-item">
                <strong>Rating:</strong> {Rating.rating || "No Rating"}
              </li>
              <li className="list-group-item">
                <strong>Certificate Country:</strong>{" "}
                {Rating.certificateCountry?.text || "No Certificate Country"}
              </li>
              <li className="list-group-item">
                <strong>Current Rank:</strong> {currentRank}
              </li>
              <li className="list-group-item">
                <strong>Link to IMDb:</strong>{" "}
                <a
                  href={plot.correctionLink?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IMDb
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
// Display movie details from the search results
//   if (movieDetail) {
//     const imgUrl = movieDetail.image || "/default-image.jpg"; // Fallback image
//     const title = movieDetail.title || "No Title";
//     const releaseDate = movieDetail.year || "Unknown Year";
//     const type = movieDetail.q || "No Type";
//     const plot = movieDetail.stars || "No Plot Available";

//     return (
//       <div className="container my-5">
//         <div className="row">
//           <div className="col-md-4">
//             <Image
//               src={imgUrl}
//               alt={title}
//               width={400}
//               height={600}
//               className="img-fluid rounded shadow-sm"
//             />
//           </div>
//           <div className="col-md-8">
//             <h1 className="mb-3">{title}</h1>
//             <h4 className="text-muted mb-4">
//               {type} | {releaseDate}
//             </h4>
//             <p className="lead">{plot}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
