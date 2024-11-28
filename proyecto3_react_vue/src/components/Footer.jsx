import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Tu Compañía. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333', // Fondo oscuro para contrastar
    color: '#fff', // Texto en blanco
    textAlign: 'center',
    padding: '1rem 0', // Espaciado interno
    position: 'relative', // Asegura que no se superponga al contenido
    width: '84vw', // Toma todo el ancho de la ventana
  },
};

export default Footer;
