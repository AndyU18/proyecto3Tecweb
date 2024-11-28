import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  // Estado para manejar los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
        setFormData({ name: "", phone: "", email: "", message: "" }); // Limpiar formulario
      } else {
        alert("Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al procesar tu solicitud.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Contáctanos</h1>

      <div style={styles.container}>
        {/* Formulario de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.formContainer}
        >
          <h2 style={styles.formTitle}>¡Hablemos!</h2>
          <p style={styles.formSubtitle}>
            Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Nombre de Contacto</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Celular</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                required
                placeholder="Ingresa tu celular"
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
                placeholder="Ingresa tu email"
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              style={styles.submitButton}
            >
              Enviar
            </motion.button>
          </form>
        </motion.div>

        {/* Mapa de ubicación */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.mapContainer}
        >
          <h2 style={styles.mapTitle}>Nuestra Ubicación</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1912.7790523596866!2d-68.12064225472258!3d-16.497898464268175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1732762074775!5m2!1ses-419!2sbo"
            width="100%"
            height="670"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#f5f5f5",
    padding: "2rem",
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    textAlign: "center",
    margin: "1rem 0",
    fontSize: "2.5rem",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    padding: "2rem 0",
    flexWrap: "wrap",
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    minWidth: "300px",
    maxWidth: "500px",
  },
  formTitle: {
    fontSize: "1.8rem",
    color: "#007bff",
    marginBottom: "0.5rem",
  },
  formSubtitle: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "0.5rem",
    color: "#444",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
  },
  textarea: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
    minHeight: "150px",
  },
  submitButton: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  mapContainer: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "600px",
    textAlign: "center",
  },
  map: {
    borderRadius: "8px",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  mapTitle: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#007bff",
  },
};

export default ContactPage;