import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/inventory">Inventario</Link></li>
      <li><Link to="/orders">Pedidos</Link></li>
      <li><Link to="/contacts">Contactos</Link></li>
    </ul>
  </nav>
);

export default Navbar;
