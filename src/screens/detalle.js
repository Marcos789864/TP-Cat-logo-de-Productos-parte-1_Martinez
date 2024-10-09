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
import flanCasero from '../img/flancasero.jpg'
import papaFritas from '../img/PapasFritas.jpg'


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

const Detalle = ({ navigation }) => {
  const { id } = useParams();
  const product = productos[id - 1];
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <img src={product.foto} alt={product.name} style={styles.image} />
        <div style={styles.numberContainer}>    
          <p style={styles.productName}>{product.nombre}</p>
          <p style={styles.number}>$500</p>
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
