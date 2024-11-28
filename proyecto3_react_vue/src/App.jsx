import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import AboutUs from './pages/AboutUs';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SobreNosotros from './pages/SobreNosotros';



const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Navbar />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/about-us" element={<SobreNosotros />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Asegura que el contenedor ocupe toda la pantalla.
  },
  content: {
    flex: 1, // Permite que este área crezca para llenar el espacio disponible.
  },
};

export default App;
