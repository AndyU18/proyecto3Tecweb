import React, { useEffect } from "react"; // Asegúrate de importar useEffect
import '../styles/SobreNosotros.css';
import { initScrollAnimations, initParallaxEffect } from '../components/ScrollAnimations';
import LazyLoad from 'react-lazyload';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importa las imágenes
import teamImage1 from '../assets/images/team1.png';
import teamImage2 from '../assets/images/team2.jpg';

function SobreNosotros() {
  // Se inicializan las animaciones de scroll y parallax cuando el componente se monta
  useEffect(() => {
    initScrollAnimations();
    initParallaxEffect();
  }, []);

  // Manejador para cuando las imágenes se carguen completamente
  const handleImageLoad = (event) => {
    event.target.classList.add('loaded');
  };

  return (
    <div className="about-us-page">
      {/* Sección de Misión con Efecto Parallax */}
      <section className="our-mission parallax" data-speed="2">
        <h2>Nuestra Misión</h2>
        <div className="mission-item">
          <p>Nuestra misión es entregar productos de la más alta calidad...</p>
        </div>
        <div className="mission-item">
          <p>Nos enfocamos en la sostenibilidad y la responsabilidad social...</p>
        </div>
      </section>

      {/* Sección de Equipo */}
      <section className="our-team">
        <h2>Conoce al Equipo</h2>
        <div className="team-member">
          <LazyLoad height={100} offset={100} once>
            <img
              src={teamImage1} // Usa la imagen importada
              alt="John Doe - CEO"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </LazyLoad>
          <p>John Doe - CEO</p>
        </div>
        <div className="team-member">
          <LazyLoad height={100} offset={100} once>
            <img
              src={teamImage2} // Usa la imagen importada
              alt="Jane Smith - Directora de Marketing"
              loading="lazy"
              onLoad={handleImageLoad}
            />
          </LazyLoad>
          <p>Jane Smith - Directora de Marketing</p>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          dynamicHeight
        >
          <div className="testimonial">
            <p>"¡Esta empresa proporciona un servicio excepcional! Altamente recomendado."</p>
            <span>- Cliente 1</span>
          </div>
          <div className="testimonial">
            <p>"Sus productos son de primera. ¡Definitivamente volveré a comprar!"</p>
            <span>- Cliente 2</span>
          </div>
        </Carousel>
      </section>

      {/* Llamado a la acción */}
      <section className="call-to-action parallax" data-speed="4">
        <h2>¿Quieres saber más sobre nosotros?</h2>
        <button className="cta-button">Únete Ahora</button>
      </section>
    </div>
  );
}

export default SobreNosotros;
