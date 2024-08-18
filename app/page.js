import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card/Card";
import { fanFavorite, getWeekTop10 } from "./utils/requests";

export default async function HomePage() {
  const movies = await getWeekTop10();
  const fanfavorite = await fanFavorite();

  const safeMovies = Array.isArray(movies) ? movies : [];
  const safeFanfavorite = Array.isArray(fanfavorite) ? fanfavorite : [];
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Week Top 10</h1>
      <div className="row g-4">
        {safeMovies.length > 0 ? (
          safeMovies.map((movie) => {
            const imgUrl = movie.primaryImage.imageUrl;
            const id = movie.id;
            const title = movie.originalTitleText.text;
            const description = movie.plot.plotText.plainText;
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
      <div className="container my-5">
        <h1 className="mb-4 text-center">Fan Favorite</h1>
      </div>
      <div className="row g-4">
        {safeFanfavorite.length > 0 ? (
          safeFanfavorite.map((movie) => {
            const imgUrl = movie.primaryImage.imageUrl;
            const id = movie.id;
            const title = movie.originalTitleText.text;
            const description = movie.plot.plotText.plainText;
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
          <p>No fan favorites available</p>
        )}
      </div>
    </div>
  );
}