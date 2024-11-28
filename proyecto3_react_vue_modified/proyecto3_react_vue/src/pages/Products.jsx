import React, { useState } from 'react';
import './Products.css';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const Products = () => {
    const [products] = useState([
        { id: 1, name: 'Camiseta Deportiva', price: 20, category: 'Ropa', image: '/assets/shirt.jpg' },
        { id: 2, name: 'Pantalón Deportivo', price: 30, category: 'Ropa', image: '/assets/pants.jpg' },
        { id: 3, name: 'Zapatillas Running', price: 50, category: 'Calzado', image: '/assets/shoes.jpg' },
        { id: 4, name: 'Sudadera', price: 40, category: 'Ropa', image: '/assets/hoodie.jpg' },
        { id: 5, name: 'Mochila Deportiva', price: 35, category: 'Accesorios', image: '/assets/backpack.jpg' },
    ]);
    const [filter, setFilter] = useState('');
    const [cart, setCart] = useState([]);

    const filteredProducts = filter
        ? products.filter(product => product.category === filter)
        : products;

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="products">
            <header className="header">
                <h1>Tienda Deportiva</h1>
                <div className="cart">
                    <FaShoppingCart size={24} />
                    <span>{cart.length}</span>
                </div>
            </header>

            <motion.div
                className="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="carousel-title">Destacados</h2>
                <div className="carousel-container">
                    {products.slice(0, 3).map((product) => (
                        <motion.div
                            key={product.id}
                            className="carousel-card"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="products-section">
                <h1 className="products-title">Productos Deportivos</h1>
                <div className="filters">
                    {['', 'Ropa', 'Calzado', 'Accesorios'].map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={filter === category ? 'active' : ''}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        >
                            {category === '' ? 'Todos' : category}
                        </motion.button>
                    ))}
                </div>
                <motion.div
                    className="products-grid"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            className="product-card"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                            <button className="add-to-cart" onClick={() => addToCart(product)}>
                                Agregar al carrito
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <footer className="footer">
                <p>© 2024 Tienda Deportiva - Todos los derechos reservados</p>
                <p>
                    <a href="#privacy">Política de Privacidad</a> | <a href="#terms">Términos y Condiciones</a>
                </p>
            </footer>
        </div>
    );
};

export default Products;
