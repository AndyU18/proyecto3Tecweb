import React from 'react';

const Home = () => {
  // Estilos en línea
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      margin: '0',
      padding: '0',
    },
    banner: {
      position: 'relative',
      textAlign: 'center',
      marginBottom: '50px',
    },
    bannerImage: {
      width: '100%',
      height: 'auto',
      filter: 'brightness(70%)',
    },
    bannerText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
      textAlign: 'center',
    },
    ctaButton: {
      backgroundColor: '#ff6f61',
      color: 'white',
      padding: '15px 30px',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
      marginTop: '20px',
    },
    ctaButtonHover: {
      backgroundColor: '#e55b4c',
    },
    section: {
      padding: '20px',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      marginBottom: '30px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, boxShadow 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardTitle: {
      fontSize: '1.5rem',
      margin: '15px 0',
    },
    cardText: {
      padding: '0 15px',
      color: '#666',
    },
    cardButton: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      margin: '15px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    },
    cardButtonHover: {
      backgroundColor: '#0056b3',
    },
    testimonialCard: {
      margin: '10px auto',
      maxWidth: '600px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: 'white',
      textAlign: 'left',
    },
    testimonialText: {
      fontStyle: 'italic',
      marginBottom: '10px',
    },
    testimonialAuthor: {
      color: '#666',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      {/* Banner principal */}
      <div style={styles.banner}>
        <img
          src="https://via.placeholder.com/1500x500"
          alt="Banner Llamita Sport"
          style={styles.bannerImage}
        />
        <div style={styles.bannerText}>
          <h1>Bienvenidos a Llamita Sport</h1>
          <p>Todo lo que necesitas para tu vida deportiva, en un solo lugar.</p>
          <button
            style={{
              ...styles.ctaButton,
              ':hover': styles.ctaButtonHover,
            }}
          >
            Explorar Catálogo
          </button>
        </div>
      </div>

      {/* Productos destacados */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Productos Destacados</h2>
        <div style={styles.grid}>
          {/* Producto 1 */}
          <div style={styles.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Zapatillas deportivas"
              style={styles.cardImage}
            />
            <h3 style={styles.cardTitle}>Zapatillas Deportivas</h3>
            <p style={styles.cardText}>
              Máxima comodidad y rendimiento en cada paso. Diseñadas para atletas exigentes.
            </p>
            <button style={styles.cardButton}>Ver Más</button>
          </div>
          {/* Producto 2 */}
          <div style={styles.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Camisetas oficiales"
              style={styles.cardImage}
            />
            <h3 style={styles.cardTitle}>Camisetas Oficiales</h3>
            <p style={styles.cardText}>
              Viste los colores de tu equipo favorito con estilo y calidad premium.
            </p>
            <button style={styles.cardButton}>Ver Más</button>
          </div>
          {/* Producto 3 */}
          <div style={styles.card}>
            <img
              src="https://via.placeholder.com/300"
              alt="Accesorios de entrenamiento"
              style={styles.cardImage}
            />
            <h3 style={styles.cardTitle}>Accesorios de Entrenamiento</h3>
            <p style={styles.cardText}>
              Equipamiento versátil para llevar tus entrenamientos al siguiente nivel.
            </p>
            <button style={styles.cardButton}>Ver Más</button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Lo que dicen nuestros clientes</h2>
        <div style={styles.testimonialCard}>
          <p style={styles.testimonialText}>
            "Llamita Sport tiene los mejores productos. He mejorado mi rendimiento gracias a ellos."
          </p>
          <span style={styles.testimonialAuthor}>- Juan Pérez, Corredor Profesional</span>
        </div>
        <div style={styles.testimonialCard}>
          <p style={styles.testimonialText}>
            "Servicio impecable y productos de excelente calidad. ¡Altamente recomendado!"
          </p>
          <span style={styles.testimonialAuthor}>- María López, Entrenadora Personal</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
