import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import AboutUs from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Navegación */}
        <Navbar />

        {/* Contenido Principal */}
        <main style={styles.content}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        {/* Pie de Página */}
        <Footer />
      </div>
    </Router>
  );
};

// Estilos en línea
const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa', // Fondo neutro para mejor presentación
  },
  content: {
    flex: 1,
    padding: '20px', // Margen interno para que no quede tan pegado a los bordes
  },
};

export default App;
