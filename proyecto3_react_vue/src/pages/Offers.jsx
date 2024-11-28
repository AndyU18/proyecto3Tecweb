import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../App.css"; // Asegúrate de que la ruta sea correcta

const OffersPage = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: '$100', image: 'product1.jpg' },
    { id: 2, name: 'Producto 2', price: '$150', image: 'product1.jpg' },
    { id: 3, name: 'Producto 3', price: '$200', image: 'product1.jpg' },
    { id: 4, name: 'Producto 4', price: '$250', image: 'product1.jpg' },
    { id: 5, name: 'Producto 5', price: '$300', image: 'product1.jpg' },
    { id: 6, name: 'Producto 6', price: '$350', image: 'product1.jpg' },
  ];

  return (
    <div className="offers-page">
      <h1>Ofertas</h1>
      <div className="product-grid">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <motion.div className="card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;