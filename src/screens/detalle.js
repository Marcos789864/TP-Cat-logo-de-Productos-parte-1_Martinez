import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Agua from '../img/Agua.jpg';
import Nesquick from '../img/Nesquick.jpg';
import Lays from '../img/Lays.jpg';
import rexona from '../img/rexona.jpg';
import panBimbo from '../img/panBimbo.jpg';
import Colgate from '../img/Colgate.jpg';
import oreo from '../img/oreos.jpg';
import flanCasero from '../img/flancasero.jpg';
import papaFritas from '../img/PapasFritas.jpg';

const productos = [
  { id: '1', nombre: 'Agua villa vicencio', foto: Agua },
  { id: '2', nombre: 'Cereales nesquick', foto: Nesquick },
  { id: '3', nombre: 'Papas lays flamin hot', foto: Lays },
  { id: '4', nombre: 'Rexona', foto: rexona },
  { id: '5', nombre: 'Pan Blanco Bimbo Artesano', foto: panBimbo },
  { id: '6', nombre: 'Pasta dental Colgate Sensitive', foto: Colgate },
  { id: '7', nombre: 'Galletitas oreo', foto: oreo },
  { id: '8', nombre: 'Flan casero con dulce de leche', foto: flanCasero },
  { id: '9', nombre: 'Papa fritas Mc-cain', foto: papaFritas },
];

const Detalle = () => {
  const { id } = useParams();
  const product = productos[id - 1];

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <img src={product.foto} alt={product.nombre} style={styles.image} />
        <div style={styles.details}>
          <h2 style={styles.productName}>{product.nombre}</h2>
          <p style={styles.price}>$500</p>
          <div style={styles.buttonContainer}>
            <button style={styles.button}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    padding: '16px',
    background: "#f6f8fa",
    maxWidth: '1200px',
    margin: '8% auto',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },

  content: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
  },

  image: {
    width: '400px',
    height: '400px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },

  details: {
    textAlign: 'left',
    padding: '20px',
    maxWidth: '50%',
  },

  productName: {
    fontWeight: 'bold',
    fontSize: '24px',
    margin: '10px 0',
  },

  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    margin: '10px 0',
  },

  buttonContainer: {
    marginTop: '150px',
  },

  button: {
    padding: '10px 20px',
    width: '100%',
    background: '#93c7ba',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
};

export default Detalle;
