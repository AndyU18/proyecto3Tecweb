import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Inicio</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about-us" style={styles.navLink}>Nosotros</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/products" style={styles.navLink}>Productos</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/offers" style={styles.navLink}>Ofertas</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contáctanos</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed', // Fija el navbar en la parte superior.
    top: 0,
    left: 0,
    width: '100%', // Ocupar todo el ancho de la pantalla.
    backgroundColor: '#333',
    padding: '1rem',
    zIndex: 1000, // Garantiza que quede encima de otros elementos.
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center', // Centra los elementos horizontalmente.
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#aaa', // Cambia el color al pasar el mouse (opcional).
  },
};

export default Navbar;
