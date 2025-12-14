import '../assets/css/gallery.css';
import teclado from "../assets/img/teclado y mouse.jpg";
import mousepad from "../assets/img/mousepad.jpg";
import auriculares from "../assets/img/auriculares.jpg";
import cargador from "../assets/img/cargador.jpg";

export default function Gallery() {
  return (
    <div className="page">
      <section id="galeria">
        <h2>Galería de Productos</h2>
        <div className="grid-gallery">
          <img src={teclado} alt="Teclado y Mouse" />
          <img src={mousepad} alt="Mousepad" />
          <img src={auriculares} alt="Auriculares" />
          <img src={cargador} alt="Cargador" />
        </div>
      </section>
    </div>
  );
}
