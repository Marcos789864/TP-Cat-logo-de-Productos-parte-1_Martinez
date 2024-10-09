import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import promoDia from '../img/PromoDia1.jpg';
import promoImperial from '../img/promoImperial.jpg';
import cuotasPicantes from '../img/cuotasPicantes.jpg';
import Agua from '../img/Agua.jpg';
import Nesquick from '../img/Nesquick.jpg';
import Lays from '../img/Lays.jpg';
import rexona from '../img/rexona.jpg';
import panBimbo from '../img/panBimbo.jpg';
import Colgate from '../img/Colgate.jpg';
import { Link } from 'react-router-dom';

const productos = [
  { id: '1', nombre: 'Agua villavicencio', foto: Agua },
  { id: '2', nombre: 'Cereales nesquick', foto: Nesquick },
  { id: '3', nombre: 'Papas lays flamin hot', foto: Lays },
  { id: '4', nombre: 'Rexona', foto: rexona },
  { id: '5', nombre: 'Pan Blanco Bimbo Artesano', foto: panBimbo },
  { id: '6', nombre: 'Pasta dental Colgate Sensitive', foto: Colgate },
];

const carouselItems = [
  { id: '1', image: promoDia },
  { id: '2', image: promoImperial },
  { id: '3', image: cuotasPicantes },
];

const Home = () => {

  const productosRecomendados = productos.slice(0, 3);  
  const masProductos = productos.slice(3);  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const productCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

 

  return (
    <div style={styles.container}>
      <Navbar />
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div key={item.id} style={styles.carouselSlide}>
            <img src={item.image} alt={`Carousel ${item.id}`} style={styles.carouselImage} />
          </div>
        ))}
      </Slider>
      <h2 style={styles.title}>Productos recomendados</h2>
      <div style={styles.productList}>
        {productosRecomendados.map(item => (
          <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.foto} alt={item.nombre} style={styles.productImage} />
              <p style={styles.productName}>{item.nombre}</p>
            </Link>
          </div>
        ))}
      </div>
      <h2 style={styles.title}>Nuestros productos destacados</h2>
      <Slider {...productCarouselSettings}>
        {productos.map(item => (
          <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.foto} alt={item.nombre} style={styles.productImage} />
              <p style={styles.productName}>{item.nombre}</p>
            </Link>
          </div>
        ))}
      </Slider>
      <h2 style={styles.title}>Más productos</h2>
      <div style={styles.productList}>
        {masProductos.map(item => (
          <div key={item.id} style={styles.productCard}>
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
  
  title: {
    textAlign: 'center',
    margin: '20px 0', 
    fontSize: '2rem', 
    color: '#333',
  },
  
  productList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  
  productCard: {
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
};

export default Home;
