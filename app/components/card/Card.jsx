import Link from "next/link";
export default function Card({ imageUrl, id, title, description }) {
  return (
    <div className="col-md-3 d-flex align-items-stretch mb-4">
      <Link className="text-decoration-none" href={`/movies/${id}`}>
        <div className="card h-100">
          <img
            className="card-img-top"
            style={{
              width: "100%",
              height: "350px",
              objectFit: "fill",
            }}
            src={imageUrl}
            alt={title}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p
              className="card-text flex-grow-1 custom-scrollbar"
              style={{
                overflowY: "auto",
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
