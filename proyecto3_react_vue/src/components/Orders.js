import React, { useState } from 'react';
import './Orders.css';

const Orders = () => {
  const [order, setOrder] = useState({
    name: '',
    product: '',
    quantity: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (order.name && order.product && order.quantity > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="orders">
      <h1>Realizar Pedido</h1>
      {submitted ? (
        <p>¡Pedido realizado con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input 
              type="text" 
              name="name" 
              value={order.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Producto:
            <input 
              type="text" 
              name="product" 
              value={order.product} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Cantidad:
            <input 
              type="number" 
              name="quantity" 
              value={order.quantity} 
              onChange={handleChange} 
              min="1" 
              required 
            />
          </label>
          <button type="submit">Enviar Pedido</button>
        </form>
      )}
    </div>
  );
};

export default Orders;
