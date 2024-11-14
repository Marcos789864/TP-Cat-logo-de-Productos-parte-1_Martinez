import React, { useState, useContext, useEffect } from 'react';
import logo from '../img/logo.jpg';
import Carrito from '../img/Carrito-removebg-preview.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';  

const Navbar = () => {
  const { cart } = useContext(CartContext);  
  const [isDropdownVisible, setDropdownVisible] = useState(false);  

  const [totalValue, setTotalValue] = useState(0)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };
 
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalValue(newTotal);
  }, [cart]);

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

        <div style={styles.carritoContainer} onClick={toggleDropdown}>
          <img src={Carrito} alt="Carrito" style={styles.carrito} />
          {totalItems > 0 && (
            <div style={styles.cartCount}>
              {totalItems}  
            </div>
          )}
        </div>

        {/* Dropdown visibility logic */}
        {isDropdownVisible && (
          <div style={styles.dropdown}>
            <div style={styles.dropdownContent}>
              {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} style={styles.dropdownItem}>
                    <img src={item.images} alt={item.title} style={styles.itemImage} />
                    <span>{item.title}</span> 
                    <span style={styles.quantity}> x{item.quantity}</span> 
                  </div>
                ))
              )}
              <p>Total Price: {totalValue}</p>
            </div>
            <Link to="/carrito" style={styles.dropdownButton}>
              Ir al carrito
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '80px',
    width: 'auto',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px', // Slightly more space between items
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
    ':hover': {
      backgroundColor: '#4CAF50',
    }
  },
  carritoContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  carrito: {
    height: '40px', // Reduce size slightly for better alignment
    width: 'auto',
    objectFit: 'contain',
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
  dropdown: {
    position: 'absolute',
    top: '70px', // Position the dropdown below the carrito icon
    right: '0', // Align dropdown to the right edge of the screen
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '350px', // Increased width for better readability
    zIndex: 2,
    padding: '15px', // Added more padding for spacing
    maxHeight: '300px',
    overflowY: 'auto',
  },
  dropdownContent: {
    maxHeight: '200px',
    overflowY: 'auto',
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #ddd',
  },
  itemImage: {
    width: '50px',  // Slightly larger image for better visibility
    height: '50px',  
    objectFit: 'cover', 
    marginRight: '10px', 
    borderRadius: '4px', 
  },
  quantity: {
    fontSize: '14px',
    color: '#888',
  },
  dropdownButton: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '4px',
    marginTop: '10px',
    fontWeight: 'bold',
  },
};

export default Navbar;