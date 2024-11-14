import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

const Carrito = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);  
  };

  const handleUpdateQuantity = (productId, quantity) => {
    updateQuantity(productId, quantity);  
  };



  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.header}>
        <h1>Mi Carrito</h1>
      </div>
      {cart.length === 0 ? (
        <p style={styles.emptyCartMessage}>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.productDetails}>
                <img 
                  src={product.images[0]} 
                  alt={product.title} 
                  style={styles.productImage} 
                />
                <div style={styles.textContainer}>
                  <h3 style={styles.productName}>{product.title}</h3>
                  <p style={styles.productPrice}>${product.price}</p>
                  <div style={styles.quantityContainer}>
                    <label htmlFor="quantity" style={styles.quantityLabel}>Cantidad:</label>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) => handleUpdateQuantity(product.id, parseInt(e.target.value))}
                      min="1"
                      style={styles.quantityInput}
                    />
                  </div>
                  <button 
                    onClick={() => handleRemove(product.id)} 
                    style={styles.removeButton}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={styles.checkoutContainer}>
        <Link to="/checkout" style={styles.checkoutLink}>Proceder al pago</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    maxWidth: '1100px',
    margin: '0 auto',
    marginTop: '100px', // space below navbar
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  emptyCartMessage: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#777',
  },
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    padding: '20px',
    transition: 'transform 0.3s ease',
  },
  productDetails: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  productImage: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 10px 0',
  },
  productPrice: {
    fontSize: '16px',
    fontWeight: '500',
    margin: '0 0 10px 0',
    color: '#333',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  quantityLabel: {
    fontSize: '14px',
    fontWeight: '500',
  },
  quantityInput: {
    width: '60px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  removeButton: {
    backgroundColor: '#ff3b30',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  removeButtonHover: {
    backgroundColor: '#ff1a1a',
  },
  checkoutContainer: {
    marginTop: '40px',
    textAlign: 'center',
  },
  checkoutLink: {
    textDecoration: 'none',
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '15px 30px',
    borderRadius: '25px',
    fontSize: '18px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
  },
  checkoutLinkHover: {
    backgroundColor: '#388e3c',
  },
};

export default Carrito;