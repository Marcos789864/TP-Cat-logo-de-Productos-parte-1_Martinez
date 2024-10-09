import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
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
    setFormData({
      nombre: '',
      correo: '',
      mensaje: '',
    });
  };

  return (
    <div style={styles.contenedor}>
      <Navbar />
      <h2 style={styles.titulo}>Contacto</h2>
      <form onSubmit={handleSubmit} style={styles.formulario}>
        <div style={styles.Form}>
          <label style={styles.labelDesign}>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder='Nombre'
            />
          </label>
        </div>
        <div style={styles.grupoFormulario}>
          <label style={styles.labelDesign}>
            Correo electrónico:
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder='Gmail'
            />
          </label>
        </div>
        <div style={styles.grupoFormulario}>
          <label style={styles.labelDesign}>
            Mensaje:
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              style={styles.textarea}
              placeholder='Mensaje'
            />
          </label>
        </div>
        <button type="submit" style={styles.boton}> Enviar</button>
      </form>
    </div>
  );
};

const styles = {
  contenedor: {
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
  
  titulo: {
    textAlign: 'center',
    margin: '20px 0',
    fontSize: '2rem',
    color: '#333',
  },

  formulario: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  Form: {
    margin: '15px 0',
  },

  labelDesign: {
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

  boton: {
    padding: '14px 24px', 
    borderRadius: '5px', 
    border: 'none',
    background: '#93c7ba', 
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px', 
    marginTop: '20px',
  },
};

export default Contacto;


