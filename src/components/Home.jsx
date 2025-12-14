import '../assets/css/styles.css';
import "../App.css";
import joystick from "../assets/img/joystick.jpg";
import teclado from "../assets/img/teclado y mouse.jpg";
import auriculares from "../assets/img/auriculares.jpg";
import mousepad from "../assets/img/mousepad.jpg";

export default function Home() {
  return (
    <>
      <section id="hero">
        <img src={joystick} alt="Banner GoTech" />
        <h2 className="titulo-home">Bienvenido a GoTech</h2>
        <p className="subtitulo-home">
          Accesorios electrónicos de calidad al mejor precio.
        </p>
      </section>

      <section className="productos">
        <h2>Productos Destacados</h2>
        <div className="grid">
          <div className="card">
            <img src={teclado} alt="Teclado y Mouse" />
            <h3>Combo Teclado + Mouse</h3>
            <p>$10.500</p>
            <button>Comprar</button>
          </div>

          <div className="card">
            <img src={auriculares} alt="Auriculares" />
            <h3>Auriculares Gamer</h3>
            <p>$8.000</p>
            <button>Comprar</button>
          </div>

          <div className="card">
            <img src={mousepad} alt="Mousepad" />
            <h3>Mousepad XL</h3>
            <p>$3.000</p>
            <button>Comprar</button>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Sobre GoTech</h2>
        <p>
          En <strong>GoTech</strong> ofrecemos accesorios electrónicos de calidad,
          seleccionados para mejorar tu experiencia gamer y de oficina.
          ¡Siempre al mejor precio!
        </p>
      </section>
    </>
  );
}
