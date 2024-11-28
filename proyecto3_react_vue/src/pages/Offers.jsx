import React, { useState } from 'react';
import { motion } from 'framer-motion';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';
import "../App.css"; // Asegúrate de que la ruta sea correcta

const OffersPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Zapatillas Running', price: '$100', image: product1, description: 'Zapatillas ideales para correr largas distancias con la mejor comodidad.' },
    { id: 2, name: 'Balón de Fútbol', price: '$50', image: product2, description: 'Balón profesional, ideal para partidos de alta competencia.' },
    { id: 3, name: 'Camiseta Deportiva', price: '$25', image: product3, description: 'Camiseta transpirable para mejorar tu rendimiento.' },
    { id: 4, name: 'Guantes de Boxeo', price: '$75', image: product4, description: 'Guantes duraderos y cómodos para boxeo amateur y profesional.' },
    { id: 5, name: 'Mochila Deportiva', price: '$40', image: product5, description: 'Espaciosa y resistente, ideal para transportar tus accesorios deportivos.' },
    { id: 6, name: 'Reloj Fitness', price: '$120', image: product6, description: 'Controla tu actividad física con este reloj inteligente de última generación.' },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleBuyClick = (product) => {
    alert(`¡Has comprado: ${product.name}!`);
  };

  return (
    <div className="offers-page">
      <h1>Ofertas Exclusivas</h1>
      <p className="subtitle">Descubre los mejores descuentos en productos deportivos.</p>
      
      {/* Grid de productos */}
      <div className={`product-grid ${selectedProduct ? 'blurred' : ''}`}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="card"
            onClick={() => handleCardClick(product)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button
              className="buy-button"
              onClick={(e) => {
                e.stopPropagation();
                handleBuyClick(product);
              }}
            >
              Comprar
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal de producto */}
      {selectedProduct && (
        <div className={`modal show`}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="product-image"
            />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OffersPage;
