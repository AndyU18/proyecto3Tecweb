import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Captura el 'uid' desde la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://api.fbi.gov/wanted/v1/list");
        const item = response.data.items.find((p) => p.uid === id);

        if (item) {
          setProduct(item);
        } else {
          setError("Producto no encontrado.");
        }
      } catch {
        setError("Error al cargar el producto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Cargando producto...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <img src={product.images?.[0]?.large || "https://via.placeholder.com/300"} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description || "Sin descripción disponible."}</p>
      <a href={product.url} target="_blank" rel="noopener noreferrer">
        Ver más detalles
      </a>
    </div>
  );
};

export default ProductDetail;
