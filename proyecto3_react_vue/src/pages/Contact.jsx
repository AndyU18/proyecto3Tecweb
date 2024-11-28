import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Contáctanos</h1>

      <div style={styles.container}>
        {/* Formulario de contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.formContainer}
        >
          <h2 style={styles.formTitle}>Formulario de Contacto</h2>
          <form style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Nombre de Contacto</label>
              <input type="text" style={styles.input} required placeholder="Ingresa tu nombre" />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Celular</label>
              <input type="text" style={styles.input} required placeholder="Ingresa tu celular" />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input type="email" style={styles.input} required placeholder="Ingresa tu email" />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Mensaje</label>
              <textarea style={styles.textarea} required placeholder="Escribe tu mensaje"></textarea>
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

        {/* Mapa de Google */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.imageContainer}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1912.7790523596866!2d-68.12064225472258!3d-16.497898464268175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1732762074775!5m2!1ses-419!2sbo"
            width="100%"
            height="680"
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
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    margin: '2rem 0',
    fontSize: '2.5rem',
    color: '#333',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    padding: '2rem',
    flexWrap: 'wrap',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
    maxWidth: '500px',
  },
  formTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    color: '#555',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
  },
  textarea: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    minHeight: '150px',
  },
  submitButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    transition: 'background-color 0.3s ease',
  },
  submitButtonHover: {
    backgroundColor: '#0056b3',
  },
  imageContainer: {
    flex: 1,
  },
  map: {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ContactPage;
