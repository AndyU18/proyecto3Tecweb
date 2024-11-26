import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";

export default function ProductSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  const products = [
    { id: 1, name: "Camiseta Running", price: "$25", image: "/products/camiseta.jpg" },
    { id: 2, name: "Pantalón Yoga", price: "$35", image: "/products/pantalon.jpg" },
    { id: 3, name: "Chaqueta Deportiva", price: "$55", image: "/products/chaqueta.jpg" },
    { id: 4, name: "Zapatos Running", price: "$75", image: "/products/zapatos.jpg" },
    { id: 5, name: "Guantes de Gimnasio", price: "$15", image: "/products/guantes.jpg" },
    { id: 6, name: "Gorra Deportiva", price: "$10", image: "/products/gorra.jpg" },
  ];

  return (
    <div style={{ padding: "20px 0" }}>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <Card style={{ width: "18rem", margin: "0 auto" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
        <div>
          <Card style={{ width: "18rem", margin: "0 auto", textAlign: "center" }}>
            <Card.Body>
              <Card.Title>Ver más</Card.Title>
              <button
                onClick={() => (window.location.href = "/productos")}
                style={{
                  background: "#ff5722",
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Ver más
              </button>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </div>
  );
}
