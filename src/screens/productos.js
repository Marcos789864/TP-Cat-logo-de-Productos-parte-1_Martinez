import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import producto1 from '../img/Agua.jpg';
import producto2 from '../img/Nesquick.jpg';
import producto3 from '../img/Lays.jpg';
import producto4 from '../img/rexona.jpg';
import producto5 from '../img/panBimbo.jpg';
import producto6 from '../img/Colgate.jpg';
import { Link } from 'react-router-dom';

const products = [
  { id: '1', name: 'Agua villa vicencio', foto: producto1 },
  { id: '2', name: 'Leche larga vida', foto: producto2 },
  { id: '3', name: 'Leche liviana', foto: producto3 },
  { id: '4', name: 'Leche extra prebioticos', foto: producto4 },
  { id: '5', name: 'Pan Blanco Bimbo Artesano 500 Gr.', foto: producto5 },
  { id: '6', name: 'Pasta dental Colgate Sensitive', foto: producto6 },
];

const Home = () => {
const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <Navbar />

      <div style={styles.productList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.foto} alt={item.name} style={styles.productImage} />
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
    marginTop: '4%',
    minHeight: '200px', 
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
