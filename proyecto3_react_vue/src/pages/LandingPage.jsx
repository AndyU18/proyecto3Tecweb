import React from 'react';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import product1 from '/product1.jpg';
import product2 from '/product2.jpg';
import product3 from '/product3.jpg';
import product4 from '/product4.jpg';
import product5 from '/product5.jpg';
import product6 from '/product6.jpg';

const LandingPage = () => {
  const products = [
    { id: 1, name: 'Zapatillas Running', price: '$100', image: product1 },
    { id: 2, name: 'Balón de Fútbol', price: '$50', image: product2 },
    { id: 3, name: 'Camiseta Deportiva', price: '$25', image: product3 },
    { id: 4, name: 'Guantes de Boxeo', price: '$75', image: product4 },
    { id: 5, name: 'Mochila Deportiva', price: '$40', image: product5 },
    { id: 6, name: 'Reloj Fitness', price: '$120', image: product6 },
  ];

  const comments = [
    { id: 1, stars: '★★★★★', text: 'Excelente servicio y productos!', name: 'Juan' },
    { id: 2, stars: '★★★★☆', text: 'Buena calidad a precios justos.', name: 'María' },
    { id: 3, stars: '★★★★★', text: 'Superó mis expectativas!', name: 'Carlos' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <ReactPlayer
          url="/assets/video_hero_section.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={styles.video}
        />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Bienvenidos a Nuestra Tienda</h1>
          <p style={styles.heroDescription}>Encuentra los mejores productos aquí</p>
        </div>
      </section>

      {/* Banner */}
      <div style={styles.banner}>
        <h2>¡Oferta Exclusiva del Mes! Obtén hasta un 50% de descuento en tus compras</h2>
      </div>

      {/* Sobre Nosotros */}
      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>Sobre Nosotros</h2>
        <p style={styles.aboutText}>
          Somos una tienda comprometida con ofrecer productos de alta calidad para todos los amantes del deporte.
          Nuestro objetivo es que encuentres lo mejor en un solo lugar. ¡Gracias por confiar en nosotros!
        </p>
      </section>

      {/* Categorías Destacadas */}
      <section>
        <h2 style={styles.sectionTitle}>Categorías</h2>
        <div style={styles.categories}>
          <motion.div style={styles.categoryCard}>
            <img src={product1} alt="Calzado" style={styles.categoryImage} />
            <h3>Calzado</h3>
          </motion.div>
          <motion.div style={styles.categoryCard}>
            <img src={product4} alt="Ropa Deportiva" style={styles.categoryImage} />
            <h3>Ropa Deportiva</h3>
          </motion.div>
          <motion.div style={styles.categoryCard}>
            <img src={product2} alt="Accesorios" style={styles.categoryImage} />
            <h3>Accesorios</h3>
          </motion.div>
        </div>
      </section>

      {/* Productos */}
      <section>
        <h2 style={styles.sectionTitle}>Productos</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button style={styles.viewMoreButton}>Agregar al carrito</button>
            </div>
          ))}
        </Slider>
      </section>

      {/* Comentarios */}
      <section>
        <h2 style={styles.sectionTitle}>Comentarios</h2>
        <div style={styles.comments}>
          {comments.map((comment) => (
            <div key={comment.id} style={styles.commentCard}>
              <p>{comment.stars}</p>
              <p>"{comment.text}"</p>
              <p>- {comment.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div>
          <h4>Contacto</h4>
          <p>Email: contacto@tiendadeportiva.com</p>
          <p>Tel: +123 456 789</p>
        </div>
        <div>
          <h4>Síguenos</h4>
          <p>Facebook | Instagram | Twitter</p>
        </div>
        <div>
          <h4>Políticas</h4>
          <p>Privacidad | Términos</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  // Sección principal con video
  hero: {
    position: 'relative',
    height: '400px',
    backgroundColor: '#000', // Fondo negro como respaldo
  },
  heroContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para destacar texto
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparencia para el fondo del texto
    padding: '1rem',
    borderRadius: '8px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroDescription: {
    fontSize: '1.2rem',
    color: '#ddd',
  },

  // Banner de oferta
  banner: {
    background: 'rgba(255, 87, 34, 0.9)', // Transparencia ligera en naranja
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    margin: '1rem 0',
  },

  // Sección de títulos
  sectionTitle: {
    textAlign: 'center',
    margin: '2rem 0',
    color: '#333', // Gris oscuro
    fontWeight: 'bold',
    fontSize: '1.8rem',
  },

  // Sección de "Sobre Nosotros"
  aboutSection: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: 'rgba(244, 244, 244, 0.9)', // Fondo gris claro con transparencia
    color: '#555', // Texto oscuro
  },
  aboutText: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },

  // Categorías destacadas
  categories: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2rem',
  },
  categoryCard: {
    textAlign: 'center',
    flex: 1,
    margin: '0 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco con transparencia
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    transition: 'transform 0.2s ease',
  },
  categoryCardHover: {
    transform: 'scale(1.05)',
  },
  categoryImage: {
    width: '80%',
    maxHeight: '150px', // Límite para altura de imágenes
    objectFit: 'cover', // Mantiene proporción y recorta si es necesario
    borderRadius: '8px',
  },

  // Tarjetas de productos
  card: {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco con transparencia
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '1rem',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  cardHover: {
    transform: 'scale(1.02)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
  productImage: {
    width: '100%',
    maxHeight: '200px', // Límite de tamaño para las imágenes de producto
    objectFit: 'cover',
    borderRadius: '8px',
  },
  viewMoreButton: {
    backgroundColor: '#ff5722', // Naranja vibrante
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease',
  },
  viewMoreButtonHover: {
    backgroundColor: '#e64a19', // Color más oscuro al pasar el cursor
  },

  // Comentarios
  comments: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: 'rgba(249, 249, 249, 0.9)', // Fondo muy claro con transparencia
  },
  commentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco con transparencia
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '600px',
    textAlign: 'center',
    color: '#333',
  },

  // Footer
  footer: {
    backgroundColor: 'rgba(34, 34, 34, 0.9)', // Fondo oscuro con transparencia
    color: '#fff',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
};


export default LandingPage;
