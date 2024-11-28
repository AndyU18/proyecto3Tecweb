import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importamos Link de react-router-dom
import '../styles/Footer.css'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Enlaces rápidos */}
        <div className="footer-section links">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li>
              <Link to="/" aria-label="Ir a la página de inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/products" aria-label="Ir a la tienda online">Tienda Online</Link>
            </li>
            <li>
              <Link to="/contact" aria-label="Ir a contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/offers" aria-label="Ver ofertas">Ofertas</Link>
            </li>
            <li>
              <Link to="/about-us" aria-label="Conocer sobre nosotros">Sobre Nosotros</Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Suscripción al boletín */}
        <div className="footer-section newsletter">
          <h4>Suscríbete a nuestro boletín</h4>
          <form>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              aria-label="Correo electrónico"
            />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="footer-rights">
        <p>© 2024 Todos los derechos reservados. Todos los productos están garantizados.</p>
      </div>

      {/* Enlaces legales */}
      <div className="footer-legal">
        <Link to="#privacy" aria-label="Política de privacidad">Política de Privacidad</Link>
        <Link to="#terms" aria-label="Términos y condiciones">Términos y Condiciones</Link>
      </div>
    </footer>
  );
};

export default Footer;
