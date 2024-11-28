import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';

// Importaciones de imágenes y estilos
import '../styles/SobreNosotros.css';
import backgroundHero from '/Deportes.jpg';
import teamCollage from '/team1.png';
import innovationImage from '/LaboratorioTextil.jpg';
import sustainabilityImage from '/Sostenible.jpg';
import logo from '/logo.png'; // Asegúrate de tener esta imagen

function SobreNosotros() {
  const [activeSection, setActiveSection] = useState('mission');
  const [inView, setInView] = useState(false);

  // Secciones de la historia de la empresa
  const companyTimeline = [
    {
      year: 2010,
      title: "Fundación",
      description: "Comenzamos con una visión: revolucionar la ropa deportiva desde un pequeño taller en Barcelona.",
    },
    {
      year: 2015,
      title: "Primera Colección Innovadora",
      description: "Lanzamos nuestra primera línea de ropa con tecnología de termorregulación, cambiando el mercado deportivo.",
    },
    {
      year: 2020,
      title: "Compromiso Sostenible",
      description: "Convertimos el 100% de nuestra producción en procesos sostenibles y materiales reciclados.",
    },
  ];

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
    <div className="about-us-advanced">
      {/* Hero Parallax Section */}
      <Parallax bgImage={backgroundHero} strength={500}>
        <div className="hero-section">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Más que Ropa. Una Revolución Deportiva.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Innovación. Rendimiento. Sostenibilidad.
          </motion.p>
        </div>
      </Parallax>

      {/* Métricas de Impacto */}
      <section className="impact-metrics">
        <div className="metric-grid">
          {[
            { icon: "🌍", value: 75, suffix: "%", label: "Materiales Reciclados" },
            { icon: "⚡", value: 40, suffix: "K", label: "Atletas Equipados" },
            { icon: "🏆", value: 12, suffix: "+", label: "Premios de Innovación" },
          ].map((metric, index) => (
            <div key={index} className="metric-item">
              <div className="metric-icon">{metric.icon}</div>
              <CountUp
                end={metric.value}
                suffix={metric.suffix}
                className="metric-value"
              />
              <p className="metric-label">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Navegación Interactiva */}
      <section className="interactive-sections">
        <div className="section-navigation">
          {[
            { id: 'mission', title: 'Nuestra Misión', icon: '🚀' },
            { id: 'innovation', title: 'Innovación', icon: '💡' },
            { id: 'sustainability', title: 'Sostenibilidad', icon: '🍃' },
          ].map(section => (
            <button
              key={section.id}
              className={`section-nav-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="section-icon">{section.icon}</span>
              {section.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode='wait'>
          {activeSection === 'mission' && (
            <motion.div
              key="mission"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="section-content"
            >
              <h2>Nuestra Misión</h2>
              <p>
                Transformamos el potencial humano a través de ropa deportiva inteligente.
                Cada prenda es un ecosistema de innovación diseñado para liberar la máxima
                expresión del rendimiento atlético.
              </p>
            </motion.div>
          )}

          {activeSection === 'innovation' && (
            <motion.div
              key="innovation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="section-content"
            >
              <img src={innovationImage} alt="Laboratorio de Innovación" />
              <h2>Laboratorio de Innovación</h2>
              <p>
                Nuestro centro de investigación combina inteligencia artificial,
                biomecánica y diseño textil avanzado para crear ropa que se adapta
                y evoluciona con el atleta.
              </p>
            </motion.div>
          )}

          {activeSection === 'sustainability' && (
            <motion.div
              key="sustainability"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="section-content"
            >
              <img src={sustainabilityImage} alt="Compromiso Sostenible" />
              <h2>Compromiso Sostenible</h2>
              <p>
                Más allá de producir ropa, creamos soluciones que respetan
                el planeta. Cada prenda cuenta con una huella de carbono neutra
                y un ciclo de vida completamente circular.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Timeline de la Empresa */}
      <section className="company-timeline">
        <h2>Nuestra Evolución</h2>
        <div className="timeline-container">
          {companyTimeline.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{event.year}</h3>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SobreNosotros;
