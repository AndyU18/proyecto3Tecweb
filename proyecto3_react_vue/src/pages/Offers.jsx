import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"; // Asegúrate de que la ruta sea correcta

const OffersPage = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: '$100', image: 'assets/product1.jpg' },
    { id: 2, name: 'Producto 2', price: '$150', image: 'assets/product2.jpg' },
    { id: 3, name: 'Producto 3', price: '$200', image: 'assets/product3.jpg' },
    { id: 4, name: 'Producto 4', price: '$250', image: 'assets/product4.jpg' },
    { id: 5, name: 'Producto 5', price: '$300', image: 'assets/product5.jpg' },
    { id: 6, name: 'Producto 6', price: '$350', image: 'assets/product6.jpg' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="offers-page">
      <h1>Ofertas</h1>
      <Slider {...settings}>
        {products.map(product => (
          <motion.div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersPage;