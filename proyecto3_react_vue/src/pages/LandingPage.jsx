import React from 'react';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LandingPage = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: '$100', image: 'product1.jpg' },
    { id: 2, name: 'Producto 2', price: '$150', image: 'product2.jpg' },
    { id: 3, name: 'Producto 3', price: '$200', image: 'product3.jpg' },
    { id: 4, name: 'Producto 4', price: '$250', image: 'product4.jpg' },
    { id: 5, name: 'Producto 5', price: '$300', image: 'product5.jpg' },
    { id: 6, name: 'Producto 6', price: '$350', image: 'product6.jpg' },
  ];

  const comments = [
    { id: 1, stars: '★★★★★', text: 'Excelente servicio!', name: 'Juan' },
    { id: 2, stars: '★★★★☆', text: 'Buena calidad.', name: 'María' },
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
          config={{
            youtube: {
              playerVars: {
                controls: 0,           // Desactivar los controles de YouTube
                showinfo: 0,           // Desactivar el título
                modestbranding: 1,     // Ocultar el logo de YouTube
                rel: 0,                // Desactivar videos relacionados
                fs: 0,                 // Desactivar la opción de pantalla completa
                iv_load_policy: 3,     // Desactivar las anotaciones (en caso de que el video las tenga)
              },
            },
          }}
        />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Bienvenidos a Nuestra Tienda</h1>
          <p style={styles.heroDescription}>Encuentra los mejores productos aquí</p>
        </div>
      </section>

      {/* Carrusel de Texto */}
      <div style={styles.textCarousel}>
        <marquee>¡Oferta del día! Descuentos exclusivos en productos seleccionados 🚀</marquee>
      </div>

      {/* Productos */}
      <section>
        <h2 style={styles.sectionTitle}>Productos</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
          <div style={styles.card}>
            <button style={styles.viewMoreButton}>Ver más</button>
          </div>
        </Slider>
      </section>

      {/* Imagen y Texto con Animación */}
      <section style={styles.imageTextSection}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="about-us.jpg" alt="Nosotros" style={styles.image} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.textContainer}
        >
          <h2>Sobre Nosotros</h2>
          <p>Conoce más sobre nuestra misión y valores.</p>
        </motion.div>
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

      {/* Ofertas */}
      <section style={styles.offers}>
        <h2 style={styles.sectionTitle}>Ofertas</h2>
        <marquee>¡No te pierdas nuestras promociones exclusivas! 🎉</marquee>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    position: 'relative',
    height: '70vh',
    overflow: 'hidden',
  },
  video: {
    objectFit: 'cover',
  },
  heroContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
  },
  heroTitle: {
    fontSize: '3rem',
    margin: 0,
  },
  heroDescription: {
    fontSize: '1.5rem',
    margin: 0,
  },
  textCarousel: {
    backgroundColor: '#f8f8f8',
    padding: '1rem 0',
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  sectionTitle: {
    textAlign: 'center',
    margin: '2rem 0',
  },
  card: {
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '8px',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  viewMoreButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imageTextSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    margin: '4rem 0',
    padding: '0 2rem',
  },
  image: {
    width: '50%',
    borderRadius: '8px',
  },
  textContainer: {
    flex: 1,
  },
  comments: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  commentCard: {
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    textAlign: 'center',
    width: '200px',
  },
  offers: {
    backgroundColor: '#f8f8f8',
    padding: '1rem 0',
    textAlign: 'center',
  },
};

export default LandingPage;
