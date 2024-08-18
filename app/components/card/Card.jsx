import Link from "next/link";

export default function Card({ imageUrl, id, title, description }) {
  return (
    <div className="col-12 col-md-6 col-lg-8 d-flex align-items-stretch mb-4">
      <Link className="text-decoration-none w-100" href={`/movies/${id}`}>
        <div className="card h-100 shadow-sm d-flex flex-column">
          <img
            className="card-img-top"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "250px",
              objectFit: "fill", // Consider using "cover" for better image filling
            }}
            src={imageUrl ? imageUrl : "/sorry.jpg"}
            alt={title}
          />
          <div className="card-body d-flex flex-column flex-grow-1">
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
