import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

const urlApiCategories = "https://dummyjson.com/products/categories";
const urlApiSearch = 'https://dummyjson.com/products/search?q=';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]); 
  const [tags, setTags] = useState([]); 
  const [productName, setProductName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await AsyncStorage.getItem("@Products");
        const parsedProducts = JSON.parse(products);
        
        const categoriesResponse = await axios.get(urlApiCategories);
        const categories = categoriesResponse.data;

        setProductos(parsedProducts);
        setFilteredProductos(parsedProducts); 
        setTags(categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategorySelect = (category) => { 
    if (category) {
      const filtered = productos.filter(product => product.category === category.slug);
      setFilteredProductos(filtered);
    } else {
      setFilteredProductos(productos);
    }
  };

  const handleSearchChange = async (event) => {
    setProductName(event.target.value);
    try {
      const response = await axios.get(urlApiSearch + event.target.value);
      setFilteredProductos(response.data.products);  
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}> Nuestros productos</h1>
      <Navbar />

      {/* Buscador separado de los tags */}
      <div style={styles.searchContainer}>
        <div style={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={productName}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
          <button onClick={handleSearchChange} style={styles.searchButton}>
            🔍
          </button>
        </div>
      </div>

      {/* Etiquetas (tags) */}
      <div style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <div 
            key={index} 
            style={styles.tagItem}
            onClick={() => handleCategorySelect(tag)} 
          >
            {tag.name}  
          </div>
        ))}

        <div 
          style={styles.tagItem}
          onClick={() => handleCategorySelect(null)} 
        >
          Todos
        </div>
      </div>

      {/* Productos filtrados */}
      <div style={styles.productList}>
        {filteredProductos.map(item => (
          <div key={item.id} style={styles.cardProducto}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img 
                src={item.images[0]} 
                alt={item.title} 
                style={styles.productImage} 
              />
              <p style={styles.productName}>{item.title}</p>
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
    borderRadius: 15,
  },
  titulo: {
    textAlign: 'center',
    margin: '20px 0',
    marginTop: '5%',
  },
  searchContainer: {
    marginBottom: '20px',  // Asegura el espaciado entre el buscador y los tags
  },
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',  // Limita el ancho del search
    margin: '0 auto',  // Centra el buscador
  },
  searchInput: {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '25px',
    outline: 'none',
    boxSizing: 'border-box',
    marginRight: '10px',
  },
  searchButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '25px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '18px',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  tagsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '20px',
    gap: '10px',
  },
  tagItem: {
    backgroundColor: '#f0f0f0',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.1)',
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
  navItem: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 20,
    fontWeight: 550,
  },
};

export default Productos;
