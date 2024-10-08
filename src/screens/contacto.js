import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Formulario enviado:', formData);
    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <h2 style={styles.title}>Contacto</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Mensaje:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
          </label>
        </div>
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    padding: 16,
    background: "#f6f8fa",
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: "4%",
    borderRadius: 15,
  },
  
  title: {
    textAlign: 'center',
    margin: '20px 0',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  formGroup: {
    margin: '10px 0',
    width: '100%',
  },

  label: {
    display: 'block',
    marginBottom: 5,
  },

  input: {
    width: '95%',
    padding: 8,
    borderRadius: 5,
    border: '1px solid #ccc',
  },

  textarea: {
    width: '95%',
    padding: 8,
    borderRadius: 5,
    border: '1px solid #ccc',
    minHeight: 100,
  },

  button: {
    padding: '12px 20px', // Tamaño del botón
    borderRadius: '25px', // Más redondeado
    border: 'none',
    background: '#FF6F61', // Color rojo suave
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px', // Tamaño de fuente
    transition: 'background 0.3s',
  },

  buttonHover: {
    background: '#FF4C3B', // Color más oscuro al pasar el mouse
  },
};

export default Home;
