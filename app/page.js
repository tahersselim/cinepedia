import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card/Card";
import { Data } from "./data/data";
import { notFound } from "next/navigation";



const getData = () => {
  const data = Data(); 

  if (data) {
    return data; 
  }
  return null; 
};

export default function HomePage() {
 const data = getData();
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Top 100 OF ALL the Time</h1>
      <div className="row g-4">
        {data.length > 0 ? (
          data.map((movie) => {
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
