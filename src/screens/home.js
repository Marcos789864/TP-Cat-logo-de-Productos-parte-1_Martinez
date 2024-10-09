import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import foto1 from '../img/PromoDia1.jpg';
import foto2 from '../img/promoImperial.jpg';
import foto3 from '../img/cuotasPicantes.jpg';
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

const carouselItems = [
  { id: '1', image: foto1 },
  { id: '2', image: foto2 },
  { id: '3', image: foto3 },
];

const Home = () => {
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

  const randomProductsTop = products.slice(0, 3);  
  const randomProductsBottom = products.slice(3);  

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
        {randomProductsTop.map(item => (
          <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.foto} alt={item.name} style={styles.productImage} />
              <p style={styles.productName}>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <h2 style={styles.title}>Nuestros productos destacados</h2>
      <Slider {...productCarouselSettings}>
        {products.map(item => (
          <div key={item.id} style={styles.carouselSlide}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.foto} alt={item.name} style={styles.productImage} />
              <p style={styles.productName}>{item.name}</p>
            </Link>
          </div>
        ))}
      </Slider>
      <h2 style={styles.title}>Más productos</h2>
      <div style={styles.productList}>
        {randomProductsBottom.map(item => (
          <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.foto} alt={item.name} style={styles.productImage} />
              <p style={styles.productName}>{item.name}</p>
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
    Width: '80%',
    margin: '0 auto',
    marginTop: "5%",
    borderRadius: 10,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginleft: '1%',
    marginright: '1%'
  },
  
  carouselSlide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  carouselImage: {
    width: '100%',
    height: '800',
    borderRadius: 10,
    objectFit: 'cover',
  },
  
  title: {
    textAlign: 'center',
    margin: '30px 0',
    fontSize: '2.5rem',
    color: '#333',
  },
  
  productList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  
  productCard: {
    width: "30%", 
    maxheight: '500px',
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
    height: 500,
    borderRadius: 8,
  },

  productName: {
    marginTop: 10,
    fontSize: '1rem', 
    color: '#555',
  },

  navItem: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: 600,
  },
};


export default Home;

