import React , {useEffect , useState} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

const urlApiCategories = "https://dummyjson.com/products/categories";


const Productos = () => {


  const [productos,setProductos] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await AsyncStorage.getItem("@Products");
        console.log("productos" + JSON.parse(products));
        const tags = await axios.get(urlApiCategories);
        setProductos(JSON.parse(products));
        setTags(tags.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}> Nuestros productos</h1>
      <Navbar />

      <div style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <div key={index} style={styles.tagItem}>
            {tag.name}
          </div>
        ))}
      </div>
      
      <div style={styles.productList}>
  {productos.map(item => (
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