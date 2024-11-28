import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../App.css"; // Asegúrate de que la ruta sea correcta

const OffersPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Producto 1', price: '$100', image: 'product1.jpg', description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: '$150', image: 'product1.jpg', description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: '$200', image: 'product1.jpg', description: 'Descripción del Producto 3' },
    { id: 4, name: 'Producto 4', price: '$250', image: 'product1.jpg', description: 'Descripción del Producto 4' },
    { id: 5, name: 'Producto 5', price: '$300', image: 'product1.jpg', description: 'Descripción del Producto 5' },
    { id: 6, name: 'Producto 6', price: '$350', image: 'product1.jpg', description: 'Descripción del Producto 6' },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleBuyClick = (product) => {
    alert(`Compraste: ${product.name}`);
  };

  return (
    <div className="offers-page">
      <h1>Ofertas</h1>
      <div className={`product-grid ${selectedProduct ? 'blurred' : ''}`}>
        {products.map(product => (
          <motion.div key={product.id} className="card" onClick={() => handleCardClick(product)}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button className="buy-button" onClick={(e) => { e.stopPropagation(); handleBuyClick(product); }}>Comprar</button>
          </motion.div>
        ))}
      </div>

      {selectedProduct && (
        <div className={`modal show`}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
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