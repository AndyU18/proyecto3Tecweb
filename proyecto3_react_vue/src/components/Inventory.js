import React, { useState } from 'react';
import './Inventory.css';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');
  
  const addProduct = () => {
    if (newProduct.trim()) {
      setProducts([...products, newProduct]);
      setNewProduct('');
    }
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="inventory">
      <h1>Gestión de Inventario</h1>
      <input 
        type="text" 
        placeholder="Nombre del producto"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button onClick={addProduct}>Agregar Producto</button>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product}
            <button onClick={() => deleteProduct(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
