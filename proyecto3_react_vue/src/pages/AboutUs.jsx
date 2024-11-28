import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const [inView, setInView] = useState(false);

  const brands = [
    "/marcas/adidas.jpg",
    "/marcas/joma.jpg",
    "/marcas/lacoste.png",
    "/marcas/nike.jpg",
    "/marcas/north.png",
    "/marcas/puma.jpg",
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

  // Verifica si la sección está en vista
  const checkInView = () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setInView(true); // Marcar como visible
      } else {
        setInView(false);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkInView);
    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, []);

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
          animate={{ opacity: inView ? 1 : 0 }} // Desvanecerse al entrar en vista
          transition={{ duration: 1 }}
          style={styles.historySection}
          className="section" // Añadir clase para identificar la sección
        >
          <h2>Historia</h2>
          <p>
            Fundada en el año XXXX, nuestra tienda se ha dedicado a ofrecer los mejores productos de calidad para nuestros clientes. A lo largo de los años, hemos crecido y nos hemos consolidado como una marca de confianza en el mercado.
          </p>
        </motion.section>

        {/* Misión y Visión */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }} // Desvanecerse al entrar en vista
          transition={{ duration: 1 }}
          style={styles.missionVisionSection}
          className="section" // Añadir clase para identificar la sección
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
                <img
                  src={brand}
                  alt={`Marca ${index + 1}`}
                  style={styles.brandImage}
                  onLoad={() => console.log(`Imagen ${index + 1} cargada`)}
                />
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
    backgroundColor: '#f4f4f9', // Fondo claro
    padding: '2rem',
    minHeight: '100vh',
    fontFamily: '"Roboto Condensed", sans-serif', // Fuente para el texto
  },
  header: {
    backgroundColor: '#003366', // Fondo oscuro para el encabezado
    color: '#fff', // Texto blanco para el contraste
    padding: '4rem 2rem',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Lato", sans-serif', // Fuente para los títulos
  },
  title: {
    fontSize: '3rem', // Tamaño de fuente más grande
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.5rem', // Subtítulo con fuente mayor
    fontStyle: 'italic',
  },
  container: {
    marginTop: '2rem',
  },
  historySection: {
    marginBottom: '2rem',
    backgroundColor: '#ffffff', // Fondo blanco para secciones internas
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#333', // Texto oscuro para legibilidad
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
    backgroundColor: '#f9f9f9', // Fondo gris claro
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#333',
  },
  vision: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#333',
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
    width: '200px',
    height: '100px',
    objectFit: 'contain', 
    borderRadius: '8px',
  },
  testimonialsSection: {
    backgroundColor: '#ffffff', // Fondo blanco para testimonios
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#333',
  },
  testimonial: {
    marginBottom: '1rem',
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontWeight: 'bold',
  },
  p:{
    textAlign: 'center',
    color: '#333',
    fontSize: '1.5rem',
  }
};

export default AboutUs;
