import React ,{ useEffect ,useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Detalle = () => {

  const { id } = useParams();
  const [producto,setProducto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await AsyncStorage.getItem("@Products");
        const parsedProducts = JSON.parse(products);
        console.log("data" + JSON.stringify(parsedProducts[(id-1)]));
        console.log("Data 3 "+ JSON.stringify(parsedProducts[2]));

        setProducto(parsedProducts[(id-1)]);     
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 


  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <img src={producto.images} alt={producto.title} style={styles.image} />
        <div style={styles.details}>
          <h2 style={styles.productName}>{producto.title}</h2>
          <p style={styles.price}>{producto.price}</p>
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
