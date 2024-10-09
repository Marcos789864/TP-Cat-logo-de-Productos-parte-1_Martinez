import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
import { Link } from 'react-router-dom';

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

const Productos = () => {
  return (
    <div style={styles.container}>
      <h1 style = {styles.titulo}> Nuestros productos</h1>
      <Navbar />
      <div style={styles.productList}>
    {productos.map(item => (
    <div key={item.id} style={styles.cardProducto}>
      <Link style={styles.navItem} to={`/detalle/${item.id}`}>
        <img src={item.foto} alt={item.nombre} style={styles.productImage} />
        <p style={styles.productName}>{item.nombre}</p>
      </Link>
    </div>
    ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    padding: 16,
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: "4%",
    borderRadius:15,
  },
  
  titulo: {
    textAlign: 'center',
    margin: '20px 0',
    marginTop: '5%',
  },

  searchInput: {
    display: 'block',
    margin: '20px auto',
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  
  productList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: '4%',
    minHeight: '200px', 
  },
  
 cardProducto: {
    width: "30%",
    borderRadius: 10,
    textAlign: "center",
    padding: 8,
    boxShadow: '2px 5px 4px 2px rgba(0, 0, 0, 0.1)',
  },
  
  productImage: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 4,
  },
  
  productName: {
    marginBottom: 10,
    fontSize: 20,
  },

  noResults: {
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    fontSize: 18,
    color: '#888',
  },
  navItem:{
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 20,
    fontWeight: 550,
  }, 
};

export default Productos;
