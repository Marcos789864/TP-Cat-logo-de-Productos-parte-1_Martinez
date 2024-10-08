import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import foto1 from '../img/1.jpg';
import foto2 from '../img/MedioAficheClasesHogar7.jpg';
import foto3 from '../img/ofertas coto fin de semana.jpg';
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
    slidesToShow: 3, // Mostrar 3 productos a la vez
    slidesToScroll: 1, // Mover un producto a la vez
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

  // Productos random para las secciones
  const randomProductsTop = products.slice(0, 3);  // Primeros 3 productos
  const randomProductsBottom = products.slice(3);  // Productos restantes

  return (
    <div style={styles.container}>
      <Navbar />
      
      {/* Carrusel Principal */}
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div key={item.id} style={styles.carouselSlide}>
            <img src={item.image} alt={`Carousel ${item.id}`} style={styles.carouselImage} />
          </div>
        ))}
      </Slider>
      
      {/* Sección de productos (parte superior) */}
      <h2 style={styles.title}>Productos recomendados</h2>
      <div style={styles.productList}>
        {randomProductsTop.map(item => (
          <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.image} alt={item.name} style={styles.productImage} />
              <p style={styles.productName}>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Carrusel de productos (centro) */}
      <h2 style={styles.title}>Nuestros productos destacados</h2>
      <Slider {...productCarouselSettings}>
        {products.map(item => (
          <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.image} alt={item.name} style={styles.productImage} />
              <p style={styles.productName}>{item.name}</p>
            </Link>
          </div>
        ))}
      </Slider>

      {/* Sección de productos (parte inferior) */}
      <h2 style={styles.title}>Más productos</h2>
      <div style={styles.productList}>
        {randomProductsBottom.map(item => (
          <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.image} alt={item.name} style={styles.productImage} />
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
    background: "#eaeaea",
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: "5%",
    borderRadius: 10,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  
  carouselSlide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  carouselImage: {
    width: '100%',
    height: 500,
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
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    textAlign: "center",
    padding: 16,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },

  productImage: {
    width: '80%', 
    height: 'auto',
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

