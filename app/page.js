import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import Card from "./components/card/Card";
import { getWeekTop10 } from "./utils/requests";

export default async function HomePage() {
  const movies = await getWeekTop10();

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Week Top 10</h1>
      <div className="row g-4">
        {movies.map((movie) => {
          const imgUrl = movie.primaryImage.imageUrl;
          const id = movie.id;
          const title = movie.originalTitleText.text;
          const description = movie.plot.plotText.plainText;
          return (
            <div className="col-md-4 col-lg-3" key={id}>
              <Card
                imageUrl={imgUrl}
                id={id}
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
