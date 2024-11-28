import React from 'react';
import { useParams } from 'react-router-dom';
import "../App.css"; // Asegúrate de que la ruta sea correcta

const ProductDetail = () => {
  const { id } = useParams();
  const products = [
    { id: 1, name: 'Producto 1', price: '$100', image: 'product1.jpg', description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: '$150', image: 'product1.jpg', description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: '$200', image: 'product1.jpg', description: 'Descripción del Producto 3' },
    { id: 4, name: 'Producto 4', price: '$250', image: 'product1.jpg', description: 'Descripción del Producto 4' },
    { id: 5, name: 'Producto 5', price: '$300', image: 'product1.jpg', description: 'Descripción del Producto 5' },
    { id: 6, name: 'Producto 6', price: '$350', image: 'product1.jpg', description: 'Descripción del Producto 6' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;