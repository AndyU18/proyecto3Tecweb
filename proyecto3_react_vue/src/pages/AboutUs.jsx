import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Importando el slider de react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const brands = [
    "https://via.placeholder.com/200x100?text=Marca+1",
    "https://via.placeholder.com/200x100?text=Marca+2",
    "https://via.placeholder.com/200x100?text=Marca+3",
    "https://via.placeholder.com/200x100?text=Marca+4",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={styles.pageContainer}>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={styles.header}
      >
        <h1 style={styles.title}>Acerca de Nosotros</h1>
        <p style={styles.subtitle}>Conoce nuestra historia, misión, visión y las marcas que representamos</p>
      </motion.header>

      <div style={styles.container}>
        {/* Historia de la tienda */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.historySection}
        >
          <h2>Historia</h2>
          <p>
            Fundada en el año XXXX, nuestra tienda se ha dedicado a ofrecer los mejores productos de calidad para nuestros clientes. A lo largo de los años, hemos crecido y nos hemos consolidado como una marca de confianza en el mercado.
          </p>
        </motion.section>

        {/* Misión y Visión */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.missionVisionSection}
        >
          <div style={styles.missionVisionContainer}>
            <div style={styles.mission}>
              <h3>Misión</h3>
              <p>
                Nuestra misión es ofrecer productos de alta calidad que mejoren la vida de nuestros clientes, basándonos en principios de sostenibilidad y ética en cada una de nuestras acciones.
              </p>
            </div>
            <div style={styles.vision}>
              <h3>Visión</h3>
              <p>
                Nuestra visión es ser reconocidos como líderes en el sector, brindando soluciones innovadoras y adaptándonos a las necesidades cambiantes de nuestros clientes.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Carrusel de Marcas */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.brandsSection}
        >
          <h2>Marcas que Representamos</h2>
          <Slider {...settings}>
            {brands.map((brand, index) => (
              <div key={index} style={styles.sliderItem}>
                <img src={brand} alt={`Marca ${index + 1}`} style={styles.brandImage} />
              </div>
            ))}
          </Slider>
        </motion.section>

        {/* Testimonios */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.testimonialsSection}
        >
          <h2>Testimonios</h2>
          <div style={styles.testimonial}>
            <p>"Excelente atención y productos de calidad. Definitivamente una tienda de confianza." - Cliente A</p>
          </div>
          <div style={styles.testimonial}>
            <p>"Me encanta la variedad y la rapidez en las entregas. ¡Recomendados al 100%!" - Cliente B</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#f4f4f9',
    padding: '2rem',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '4rem 2rem',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
  },
  container: {
    marginTop: '2rem',
  },
  historySection: {
    marginBottom: '2rem',
  },
  missionVisionSection: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    marginBottom: '2rem',
  },
  missionVisionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  mission: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  vision: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  brandsSection: {
    marginBottom: '2rem',
  },
  sliderItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  testimonialsSection: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  testimonial: {
    marginBottom: '1rem',
  },
};

export default AboutUs;
