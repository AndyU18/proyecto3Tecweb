import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoad } from 'react-lazyload';
import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';

// Importaciones de imágenes y estilos
import '../styles/SobreNosotros.css';
import backgroundHero from '../assets/images/Deportes.jpg';;
import teamCollage from '../assets/images/team1.png';
import innovationImage from '../assets/images/LaboratorioTextil.jpg';
import sustainabilityImage from '../assets/images/Sostenible.jpg';

function SobreNosotros() {
  const [activeSection, setActiveSection] = useState('mission');

  // Secciones de la historia de la empresa
  const companyTimeline = [
    {
      year: 2010,
      title: "Fundación",
      description: "Comenzamos con una visión: revolucionar la ropa deportiva desde un pequeño taller en Barcelona."
    },
    {
      year: 2015,
      title: "Primera Colección Innovadora",
      description: "Lanzamos nuestra primera línea de ropa con tecnología de termorregulación, cambiando el mercado deportivo."
    },
    {
      year: 2020,
      title: "Compromiso Sostenible",
      description: "Convertimos el 100% de nuestra producción en procesos sostenibles y materiales reciclados."
    }
  ];

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
            { 
              icon: "🌍", 
              value: 75, 
              suffix: "%", 
              label: "Materiales Reciclados" 
            },
            { 
              icon: "⚡", 
              value: 40, 
              suffix: "K", 
              label: "Atletas Equipados" 
            },
            { 
              icon: "🏆", 
              value: 12, 
              suffix: "+", 
              label: "Premios de Innovación" 
            }
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
            { 
              id: 'mission', 
              title: 'Nuestra Misión', 
              icon: '🚀' 
            },
            { 
              id: 'innovation', 
              title: 'Innovación', 
              icon: '💡' 
            },
            { 
              id: 'sustainability', 
              title: 'Sostenibilidad', 
              icon: '🍃' 
            }
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

      {/* Equipo y Cultura */}
      <section className="team-culture">
        <div className="team-collage">
          <img src={teamCollage} alt="Equipo Deportivo" />
        </div>
        <div className="culture-description">
          <h2>Nuestra Cultura</h2>
          <p>
            Somos un equipo de atletas, ingenieros, diseñadores y soñadores. 
            Nuestra pasión va más allá de crear ropa: buscamos inspirar, 
            empujar límites y democratizar el alto rendimiento.
          </p>
        </div>
      </section>

      {/* Add this section in the SobreNosotros.jsx file, just before the final-cta section */}
{/* Store Location Section */}
<section className="store-location">
  <div className="store-location-container">
    <div className="store-info">
      <h2>Contamos con Tienda Física</h2>
      <p>
        Visítanos en el Coliseo de la UCB, donde podrás experimentar nuestra 
        última tecnología en ropa deportiva, probar nuestras prendas y recibir 
        asesoramiento personalizado de nuestros expertos.
      </p>
      <div className="store-details">
        <div className="store-address">
          <h3>Dirección</h3>
          <p>Calle 2 de obrajes</p>
          <p>La paz, Bolivia</p>
        </div>
        <div className="store-hours">
          <h3>Horario</h3>
          <p>Lunes a Viernes: 10:00 - 20:00</p>
          <p>Sábados: 10:00 - 14:00</p>
          <p>Domingos: Cerrado</p>
        </div>
        <div className="store-contact">
          <h3>Contacto</h3>
          <p>Teléfono: +34 931 234 567</p>
          <p>Email: tienda@sportrevolution.com</p>
        </div>
      </div>
    </div>
    <div className="store-map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0683820782874!2d-68.1145714891005!3d-16.52264504124335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses-419!2sbo!4v1732768667596!5m2!1ses-419!2sbo" 
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

      {/* Llamado a la Acción Final */}
      <section className="final-cta">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cta-content"
        >
          <h2>¿Listo para Unirte a la Revolución?</h2>
          <p>Descubre cómo nuestra ropa puede transformar tu rendimiento.</p>
          <button className="cta-button">Explorar Colección</button>
        </motion.div>
      </section>
    </div>
  );
}

export default SobreNosotros;