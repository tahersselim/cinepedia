import Link from "next/link";

export default function Card({ imageUrl, id, title, description }) {
  return (
    <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-4">
      <Link className="text-decoration-none" href={`/movies/${id}`}>
        <div className="card h-100 shadow-sm">
          <img
            className="card-img-top"
            style={{
              width: "38vh",
              height: "350px",
              objectFit: "fill",
            }}
            src={imageUrl?imageUrl:"/sorry.jpg"}
            alt={title}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-dark">{title}</h5>
            <p
              className="card-text text-muted flex-grow-1 custom-scrollbar"
              style={{
                overflowY: "auto",
                maxHeight: "100px", 
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
