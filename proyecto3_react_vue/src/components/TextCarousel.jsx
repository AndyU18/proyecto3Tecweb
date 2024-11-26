import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TextCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const messages = [
    "Descubre nuestra nueva colección de invierno",
    "¡Grandes ofertas en ropa deportiva!",
    "Calidad y estilo en un solo lugar",
    "Compra ahora y obtén envío gratuito",
    "Llamita Sports: Pasión por el deporte",
  ];

  return (
    <div style={{ background: "#f8f8f8", padding: "10px 0", textAlign: "center" }}>
      <Slider {...settings}>
        {messages.map((msg, idx) => (
          <h3 key={idx} style={{ fontSize: "1.5rem", color: "#333" }}>
            {msg}
          </h3>
        ))}
      </Slider>
    </div>
  );
}
