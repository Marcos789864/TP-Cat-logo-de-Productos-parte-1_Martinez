import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import producto1 from '../img/Agua.jpg';
import producto2 from '../img/Nesquick.jpg';
import producto3 from '../img/Lays.jpg';
import producto4 from '../img/rexona.jpg';
import producto5 from '../img/panBimbo.jpg';
import producto6 from '../img/Colgate.jpg';


const products = [
  { id: '1', name: 'Agua villa vicencio', foto: producto1 },
  { id: '2', name: 'Leche larga vida', foto: producto2 },
  { id: '3', name: 'Leche liviana', foto: producto3 },
  { id: '4', name: 'Leche extra prebioticos', foto: producto4 },
  { id: '5', name: 'Pan Blanco Bimbo Artesano 500 Gr.', foto: producto5 },
  { id: '6', name: 'Pasta dental Colgate Sensitive', foto: producto6 },
];

const Detalle = ({ navigation }) => {
  const { id } = useParams();
  const product = products[id - 1];

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.title}>Detalle del producto</h1>
      <div style={styles.content}>
        <img src={product.foto} alt={product.name} style={styles.image} />
        <div style={styles.numberContainer}>
          
          <p style={styles.productName}>{product.name}</p>
          <p style={styles.number}>${id * 100}</p>
          <button style= {styles.button}> <p>Agregar</p></button>
        </div>
        
      </div>
      
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
  
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
  },

  numberContainer: {
    textAlign: 'left',
    width: '50%', 
  },

  title: {
    margin: '20px 0',
    textAlign:"center",
  },

  productName: {
    fontWeight: 'bold',
    fontSize: '30px',
  },

  number: {
    fontSize: '30px',
    fontWeight: 'bold',
  },

  button:
  {
    position: 'absolute',
    bottom: 0,
    height: '2.5rem',
    width: '230px',
    borderRadius: '20px',
    cursor: 'pointer',
  },

  buttonp:
  {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
};

export default Detalle;
