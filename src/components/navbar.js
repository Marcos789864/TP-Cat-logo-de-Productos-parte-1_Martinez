import React, { useState } from 'react';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div style={styles.navbar}>
      <div style={styles.logoContainer}>
       <Link to="/"><img src={logo} alt="Logo" style={styles.logo} /></Link> 
      </div>
      <div style={styles.navItems}>
        <Link style={styles.navItem} to="/productos">Productos</Link>
        <Link style={styles.navItem} to="/contacto">Contacto</Link>
       
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
    padding: '10px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
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
  dropdown: {
    position: 'relative',
  },
  dropdownContent: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    marginTop: '10px',
    borderRadius: '4px',
    padding: '5px 0',
    marginRight: '2%',
  },
  dropdownItem: {
    display: 'block',
    padding: '10px 15px',
    color: '#333',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
  },
};

export default Navbar;




