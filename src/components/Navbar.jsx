import { Link } from "react-router-dom";
import logo from "../assets/img/logo gotech.jpg";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo GoTech" />
        </Link>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
