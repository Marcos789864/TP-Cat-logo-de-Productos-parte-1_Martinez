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
              placeholder='Nombre'
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
              placeholder='Gmail'
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
              placeholder='Mensaje'
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
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    background: "#e9ecef",
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: "7%",
    maxHeight: '900px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  
  title: {
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '2rem',
    color: '#333',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  formGroup: {
    margin: '15px 0',
  },

  label: {
    display: 'block',
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#555',
  },

  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    fontSize: '1rem',
  },

  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    minHeight: '100px',
    resize: 'vertical',
    fontSize: '1rem',
  },

  button: {
    padding: '14px 24px', 
    borderRadius: '5px', 
    border: 'none',
    background: '#93c7ba', 
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px', 
    transition: 'background 0.3s',
    marginTop: '20px',
  },
};

export default Home;

