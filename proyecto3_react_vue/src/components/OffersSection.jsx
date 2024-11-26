import React from "react";

export default function OffersSection() {
  return (
    <section style={{ padding: "40px", background: "#ffebee", textAlign: "center" }}>
      <h2>¡Ofertas exclusivas!</h2>
      <p>Aprovecha hasta un 50% de descuento en productos seleccionados.</p>
      <button
        onClick={() => (window.location.href = "/ofertas")}
        style={{
          background: "#d32f2f",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Ver Ofertas
      </button>
    </section>
  );
}
