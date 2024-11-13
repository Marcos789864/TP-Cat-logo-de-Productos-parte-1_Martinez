import React, { useContext } from 'react';
import logo from '../img/logo.jpg';
import Carrito from '../img/Carrito-removebg-preview.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';  

const Navbar = () => {
  const { cart } = useContext(CartContext);  

  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={styles.navbar}>
      <div style={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>
      </div>
      <div style={styles.navItems}>
        <Link style={styles.navItem} to="/productos">Productos</Link>
        <Link style={styles.navItem} to="/contacto">Contacto</Link>

        {/* Carrito */}
        <Link to="/carrito">
          <div style={styles.carritoContainer}>
            <img src={Carrito} alt="Carrito" style={styles.carrito} />
            {totalItems > 0 && (
              <div style={styles.cartCount}>
                {totalItems}  
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#93c7ba',
    padding: '10px',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    height: '80px',
    width: 'auto',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  carrito: {
    height: '65px',
    width: 'auto',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  carritoContainer: {
    position: 'relative',
  },
  cartCount: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: '#f44336', 
    color: '#fff',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginRight: '2%',
  },
  navItem: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '600',
    padding: '10px 15px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};

export default Navbar;



