import React from "react";

export default function CustomerReviews() {
  const reviews = [
    { name: "Juan Pérez", stars: 5, comment: "¡Excelente calidad y diseño!" },
    { name: "María López", stars: 4, comment: "Muy cómoda la ropa, volveré a comprar." },
    { name: "Carlos Sánchez", stars: 5, comment: "¡Gran servicio al cliente y entrega rápida!" },
  ];

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Comentarios de nuestros clientes</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        {reviews.map((review, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              width: "250px",
            }}
          >
            <p><strong>{review.name}</strong></p>
            <p>{'⭐'.repeat(review.stars)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
