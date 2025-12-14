import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Productos from "./components/Products";
import "./assets/css/styles.css";
import ProductDetail from "./components/ProductDetail";



function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/productos/:id" element={<ProductDetail />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
