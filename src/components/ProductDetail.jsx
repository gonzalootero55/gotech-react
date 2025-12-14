import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find(p => p.id === id);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <section className="productos">
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} style={{ maxWidth: "300px" }} />
      <p>{product.description}</p>
      <button>Comprar</button>
    </section>
  );
}
