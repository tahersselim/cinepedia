import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Data } from "@/app/data/data";

const getData = () => {
  const data = Data();

  if (data) {
    return data;
  }
  return null;
};

export default function MovieDetailsPage({ params }) {
  const data = getData();

  const topmovieDetail = data.find((data) => data.id === params.id);
  console.log(topmovieDetail);

  if (!topmovieDetail) {
    return (
      <div className="container text-center my-5">
        <h2>Movie not found</h2>
      </div>
    );
  }

  const imgUrl = topmovieDetail.big_image;
  const title = topmovieDetail.title;
  const rating = topmovieDetail.rating;
  const rank = topmovieDetail.rating;

  const releaseDate = topmovieDetail.year || {};
  const type = topmovieDetail.genre[0] || "No Type";
  const plot = topmovieDetail.description || {};
  const country =
    topmovieDetail.releaseDate?.country?.text || "Unknown Country";
  const Rating = topmovieDetail.titleCertificate || {};
  const genre = topmovieDetail.genre || "No Genre";
  const imdbLink = topmovieDetail.imdb_link || "Not Ranked";

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
            {type} | {releaseDate}
          </h4>
          <p className="lead">{plot || "No Plot Available"}</p>

          <h2 className="mt-4">Ratings Summary</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Aggregate Rating:</strong> {rating || "No Rating"}
            </li>
            <li className="list-group-item">
              <strong>Top Ranking:</strong> {rank ? rank : "Not Ranked"}
            </li>
            <li className="list-group-item">
              <strong>Vote Count:</strong> {"No Vote Count"}
            </li>
          </ul>

          <h3 className="mt-4">Additional Information</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>genre: </strong>
              {""}
              {genre.map((gen, index) => (
                <span key={index}>
                  {gen}
                  {index < genre.length - 1 && <strong> | </strong>}
                </span>
              ))}
            </li>
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
              <strong>Current Rank:</strong> {rank}
            </li>
            <li className="list-group-item">
              <strong>Link to IMDb:</strong>{" "}
              <a
                href={imdbLink || "#"}
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
