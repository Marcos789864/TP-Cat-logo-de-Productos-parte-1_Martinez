import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import producto1 from '../img/producto1.jpg';
import producto2 from '../img/producto2.jpg';
import producto3 from '../img/producto3.jpg';
import producto4 from '../img/producto4.jpg';
import producto5 from '../img/producto5.jpg';
import producto6 from '../img/producto6.jpg';
import producto7 from '../img/dulce.jpg';
import producto8 from '../img/calcio.jpg';
import producto9 from '../img/choco.jpg';
import { Link } from 'react-router-dom';

const products = [
  { id: '1', name: 'Leche extra proteina', image: producto1 },
  { id: '2', name: 'Leche larga vida', image: producto2 },
  { id: '3', name: 'Leche liviana', image: producto3 },
  { id: '4', name: 'Leche extra prebioticos', image: producto4 },
  { id: '5', name: 'Leche barista', image: producto5 },
  { id: '6', name: 'Leche menos calorias', image: producto6 },
  { id: '7', name: 'Dulce de leche', image: producto7 },
  { id: '8', name: 'Leche extra calcio', image: producto8 },
  { id: '9', name: 'Leche chocolatada', image: producto9 },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <Navbar />
      <h2 style={styles.title}>Productos</h2>
      <input
        type="text"
        placeholder="Buscar productos..."
        style={styles.searchInput}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div style={styles.productList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.image} alt={item.name} style={styles.productImage} />
              <p style={styles.productName}>{item.name}</p>
            </Link>
        </div>
          ))
        ) : (
          <p style={styles.noResults}>No se encontraron productos.</p>
        )}
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
    borderRadius:15,
  },
  
  title: {
    textAlign: 'center',
    margin: '20px 0',
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
    marginTop: 16,
    minHeight: '200px', // Establecer altura mínima
  },
  
  productCard: {
    width: "31%",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
    padding: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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

export default Home;
