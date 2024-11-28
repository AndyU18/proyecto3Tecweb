import React from "react";
import "../App.css"; // Asegúrate de que la ruta sea correcta

const FBIWantedList = () => {
  const products = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    price: `$${(i + 1) * 10}`,
    image: `productocarru${i + 1}.jpg`,
    description: `Descripción del Producto ${i + 1}`,
  }));

  return (
    <div className="products-page">
      <h1 className="products-title">Productos</h1>
      <p className="products-subtitle">Conoce nuestra increíble variedad de productos</p>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button className="buy-button" onClick={() => alert(`¡Has comprado: ${product.name}!`)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default FBIWantedList;