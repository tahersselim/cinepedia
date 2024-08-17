import styles from "./page.module.css";
import Card from "./components/card/Card";
import { getWeekTop10 } from "./utils/requests";

export default async function HomePage() {
  const movies = await getWeekTop10();

  return (
    <div className="container my-3">
      <h1>Week Top 10</h1>
      <div className="d-flex flex-wrap gap-3">
        {movies.map((movie) => {
          const imgUrl = movie.primaryImage.imageUrl;
          const id = movie.id;
          const title = movie.originalTitleText.text;
          const description = movie.plot.plotText.plainText;
          return (
            <Card
              key={id}
              imageUrl={imgUrl}
              id={id}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}
