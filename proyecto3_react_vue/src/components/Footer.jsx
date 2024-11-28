import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Información de la tienda */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Sobre Nosotros</h4>
          <p style={styles.text}>
            Somos tu tienda de deportes favorita. Encuentra todo lo que necesitas para mantenerte activo, desde ropa deportiva hasta equipos de última tecnología.
          </p>
        </div>

        {/* Recursos y categorías */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Categorías</h4>
          <ul style={styles.list}>
            <li><a href="/equipos" style={styles.link}>Equipos deportivos</a></li>
            <li><a href="/ropa" style={styles.link}>Ropa deportiva</a></li>
            <li><a href="/calzado" style={styles.link}>Calzado</a></li>
            <li><a href="/accesorios" style={styles.link}>Accesorios</a></li>
            <li><a href="/ofertas" style={styles.link}>Ofertas especiales</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Contáctanos</h4>
          <ul style={styles.list}>
            <li style={styles.iconText}>
              <FaPhoneAlt style={styles.icon} /> +34 91 603 6188
            </li>
            <li style={styles.iconText}>
              <FaEnvelope style={styles.icon} /> contacto@tiendadeportes.com
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Síguenos</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" style={styles.socialLink} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" style={styles.socialLink} aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" style={styles.socialLink} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" style={styles.socialLink} aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>
          © 2024 Tienda Deportes. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222", // Fondo oscuro
    color: "#fff", // Texto claro
    padding: "2rem 1rem", // Espaciado interno
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "2rem",
  },
  section: {
    flex: "1 1 calc(25% - 1rem)", // Ajusta el ancho de las secciones
    minWidth: "200px",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
    color: "#f4b400", // Color destacado (puedes cambiarlo según tu tema)
  },
  text: {
    fontSize: "0.9rem",
    lineHeight: "1.6",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.9rem",
    lineHeight: "1.8",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#f4b400",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.9rem",
    lineHeight: "1.8",
  },
  icon: {
    marginRight: "0.5rem",
    color: "#f4b400",
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
  },
  socialLink: {
    color: "#fff",
    fontSize: "1.5rem",
    transition: "color 0.3s ease",
  },
  socialLinkHover: {
    color: "#f4b400",
  },
  bottomBar: {
    borderTop: "1px solid #444",
    marginTop: "2rem",
    paddingTop: "1rem",
    textAlign: "center",
  },
  bottomText: {
    fontSize: "0.8rem",
    color: "#aaa",
  },
};

export default Footer;
