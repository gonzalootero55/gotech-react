import { Link } from "react-router-dom";

export default function Card({ img, title, description, id }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <Link to={`/productos/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}
