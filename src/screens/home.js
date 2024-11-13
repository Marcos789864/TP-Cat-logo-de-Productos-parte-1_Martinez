import React, { useRef, useEffect, useState,  } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import promoDia from '../img/PromoDia1.jpg';
import promoImperial from '../img/promoImperial.jpg';
import cuotasPicantes from '../img/cuotasPicantes.jpg';

import axios from 'axios';
import { Link } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

const urlApi = "https://dummyjson.com/products";



const carouselItems = [
  { id: '1', image: promoDia },
  { id: '2', image: promoImperial },
  { id: '3', image: cuotasPicantes },
];

const Home = () => {
 
  const [productos,setProductos] = useState([]);
  const [CarrouselItems,setCarrouselItems] = useState([]);
  const sliderRef = useRef(null);
  const sliderRefRecomendados = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urlApi); 
        console.log("response" + JSON.stringify(response.data.products,null,2));
        console.log("normal" + response.data.products);
        try{
          await AsyncStorage.setItem('@Products', JSON.stringify(response.data.products,null,2));       
        } catch(error)
        {
          console.error("failes to storeProducts");
        }
        setProductos(response.data.products);     
        setCarrouselItems(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  

  const CarrouselPromos = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CarrouselProductos = {
    slidesToShow: 3, 
    slidesToScroll: 1,  
  };

  const CarrouselProductosRecomendados= {
    slidesToShow: 3, 
    slidesToScroll: 1,  
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goRecomendadoNext= () =>{
  sliderRefRecomendados.current.slickNext();
  };

  const goRecomendadoPrev = () => {
    sliderRefRecomendados.current.slickPrev();
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <Slider {...CarrouselPromos}>
        {carouselItems.map(item => (
          <div key={item.id} style={styles.carouselSlide}>
            <img src={item.image} alt={`Carousel ${item.id}`} style={styles.carouselImage} />
          </div>
        ))}
      </Slider >
       <h2 style={styles.titulo}>Productos recomendados</h2>
       <div style={styles.carouselContainer}>
       <button style={{ ...styles.boton, ...styles.leftButton }} onClick={goRecomendadoPrev}>◀</button>
      <Slider  ref={sliderRefRecomendados} {...CarrouselProductosRecomendados}>
        {productos.map(item => (
          <div key={item.id} style={styles.producto}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.images[0]} alt={item.images[0]} style={styles.productImage} />
              <p style={styles.productName}>{item.title}</p>
            </Link>
          </div>
        ))}
      </Slider>
      <button style={{ ...styles.boton, ...styles.rightButton }} onClick={goRecomendadoNext}>▶</button>
      </div>
      <h2 style={styles.titulo}>Nuestros productos destacados</h2>
      <div style={styles.carouselContainer}>
        <button style={{ ...styles.boton, ...styles.leftButton }} onClick={goToPrev}>◀</button>
        <Slider ref={sliderRef} {...CarrouselProductos}>
          {productos.map(item => (
            <div key={item.id} style={styles.productCardCarousel}>
              <Link style={styles.navItem} to={`/detalle/${item.id}`}>
                <img src={item.images[0]} alt={item.images[0]} style={styles.productImageCarousel} />
                <p style={styles.NombreProductoCarrousel}>{item.title}</p>
              </Link>
            </div>
          ))}
        </Slider>
        <button style={{ ...styles.boton, ...styles.rightButton }} onClick={goToNext}>▶</button>
      </div>
      <h2 style={styles.titulo}>Más productos</h2>
      <div style={styles.Listado}>
        {productos.map(item => (
          <div key={item.id} style={styles.producto}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.images[0]} alt={item.images[0]} style={styles.productImage} />
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
    fontFamily: 'Arial, sans-serif',
    padding: 20,
    width: '70%', 
    margin: '0 auto',
    marginTop: "5%",
    borderRadius: 10,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  
  carouselSlide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  carouselImage: {
    width: '100%',
    height: 'auto', 
    borderRadius: 10,
    objectFit: 'cover',
  },
  
  titulo: {
    textAlign: 'center',
    margin: '20px 0', 
    fontSize: '2rem', 
    color: '#333',
  },
  
  Listado: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  
  producto: {
    width: "25%", 
    maxHeight: '400px', 
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    textAlign: "center",
    padding: 16,
    border: '2px solid #f0f0f0', 
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },

  productImage: {
    width: '80%', 
    height: 300, 
    borderRadius: 8,
    objectFit: 'cover',
  },

  productName: {
    marginTop: 10,
    fontSize: '0.9rem', 
    color: '#555',
  },

  navItem: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem', 
    fontWeight: 600,
  },

  carouselContainer: {
    position: 'relative',
    padding: '0 10px',
  },

  boton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.8)',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },

  leftButton: {
    left: '15px',
  },

  rightButton: {
    right: '15px',
  },

  productCardCarousel: {
    backgroundColor: "#fff",
    borderRadius: 10,
    textAlign: "center",
    padding: 16,
    margin: '0 10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },

  productImageCarousel: {
    width: '80%', 
    height: '300px', 
    borderRadius: 8,
    objectFit: 'cover',
  },

  NombreProductoCarrousel: {
    marginTop: 10,
    fontSize: '1rem', 
    color: '#555',
    textAlign: 'center', 
  },
};

export default Home;
