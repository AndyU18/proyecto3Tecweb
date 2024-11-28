import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo from '../assets/logo.png';

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
        <img src={logo} alt="Logo de la tienda" style={{ width: '500px' }} /> 
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
          Fundada en el año 2024, nuestra tienda nació con el propósito de ofrecer productos de alta calidad y un servicio excepcional a nuestros clientes. Desde el principio, nos comprometimos a ser más que solo un negocio, sino una marca que se construye sobre la confianza, la calidad y la satisfacción de quienes confían en nosotros.

Con el tiempo, hemos trabajado incansablemente para crear una experiencia de compra única que combine productos innovadores con una atención personalizada, adaptándonos siempre a las necesidades y gustos de nuestros clientes. Nuestra tienda no solo se ha centrado en ofrecer productos de calidad, sino también en construir relaciones duraderas con nuestra comunidad, brindando un servicio postventa inigualable y resolviendo siempre las inquietudes de nuestros clientes.

A lo largo de los años, nos hemos enfrentado a desafíos y hemos aprendido de cada uno de ellos, lo que nos ha permitido crecer y evolucionar. Cada paso que hemos dado ha sido guiado por el deseo de ser mejores y de seguir ofreciendo lo mejor para quienes nos eligen. Gracias al apoyo continuo de nuestros clientes y el esfuerzo constante de nuestro equipo, hoy nos encontramos consolidados como una marca de confianza en el mercado, reconocida por su compromiso con la calidad y la excelencia.

Hoy en día, seguimos manteniendo nuestros valores fundamentales: ofrecer productos de calidad, brindar un excelente servicio al cliente y adaptarnos a las nuevas tendencias y necesidades del mercado. Nuestra historia continúa, y seguimos trabajando con pasión para superar las expectativas de nuestros clientes en cada compra.
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
        backgroundColor: '#1a1a1a', // Fondo oscuro
        padding: '2rem',
        minHeight: '100vh',
        fontFamily: '"Roboto Condensed", sans-serif', // Fuente para el texto
        color: '#f4f4f9', // Texto claro para contraste
    },
    header: {
        backgroundColor: '#1a1a1a', // Fondo oscuro para el encabezado
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
        backgroundColor: '#333333', // Fondo oscuro para secciones internas
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#f4f4f9', // Texto claro para legibilidad
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
        backgroundColor: '#4d4d4d', // Fondo gris oscuro
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#f4f4f9',
    },
    vision: {
        flex: 1,
        backgroundColor: '#4d4d4d',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#f4f4f9',
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
        backgroundColor: '#333333', // Fondo oscuro para testimonios
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#f4f4f9',
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
        color: '#f4f4f9',
        fontSize: '1.5rem',
    }
};

export default AboutUs;
