import { useState } from "react";
import '../assets/css/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    motivo: "compra",
    novedades: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado con éxito ✔️");
  };

  return (
    <main>
      <section id="contacto">
        <h2>Contacto</h2>

        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />

          <label>Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tuemail@email.com"
            required
          />

          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="11 1234-5678"
          />

          <label>Comentario:</label>
          <textarea
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje..."
          ></textarea>

          <label>Motivo de contacto:</label>
          <select
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
          >
            <option value="compra">Consulta por compra</option>
            <option value="soporte">Soporte técnico</option>
            <option value="otro">Otro</option>
          </select>

          <p>¿Deseas recibir novedades?</p>
          <label>
            <input type="radio" name="novedades" value="si" onChange={handleChange} />
            Sí
          </label>
          <label>
            <input type="radio" name="novedades" value="no" onChange={handleChange} />
            No
          </label>

          <div className="botones">
            <button type="submit">Enviar</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </section>
    </main>
  );
}
