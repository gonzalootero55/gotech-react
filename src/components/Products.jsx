import '../assets/css/cards.css';
import Card from "./Card";
import products from "../data/products";

export default function Productos() {
  return (
    <div className="page">
      <section id="productos">
        <h2>Nuestros Productos</h2>

        <div className="card-container">
          {products.map((p) => (
            <Card 
              key={p.id}
              id={p.id}
              img={p.img}
              title={p.title}
              description={p.description}
            />
          ))}
        </div>

      </section>
    </div>
  );
}
