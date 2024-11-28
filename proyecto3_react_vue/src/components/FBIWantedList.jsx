import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FBIWantedList = () => {
  const [wantedList, setWantedList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.fbi.gov/wanted/v1/list", {
          params: { page: 1 }, // Cambia la página si deseas paginación
        });
        setWantedList(response.data.items);
      } catch (err) {
        setError("Error al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {wantedList.map((item) => (
        <div
          key={item.uid}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            maxWidth: "300px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={item.images?.[0]?.large || "https://via.placeholder.com/300"}
            alt={item.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <h3>{item.title}</h3>
          <p>{item.description?.substring(0, 100) || "Sin descripción"}...</p>
          <Link
            to={`/product/${item.uid}`}
            style={{
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FBIWantedList;
