import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

const Carrito = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);  // Eliminar producto del carrito
  };

  const handleUpdateQuantity = (productId, quantity) => {
    updateQuantity(productId, quantity);  // Modificar la cantidad
  };

  return (
    
    <div style={styles.container}>
         <Navbar />
      <h1>Mi Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map(product => (
          <div key={product.id} style={styles.productItem}>
            <img src={product.images[0]} alt={product.title} style={styles.image} />
            <div>
              <p>{product.title}</p>
              <p>${product.price}</p>
              <p>
                Cantidad: 
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleUpdateQuantity(product.id, parseInt(e.target.value))}
                  min="1"
                />
              </p>
              <button onClick={() => handleRemove(product.id)}>Eliminar</button>
            </div>
          </div>
        ))
      )}
      <div style={styles.checkout}>
        <Link to="/checkout">Proceder al pago</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  productItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  checkout: {
    marginTop: '20px',
  },
};

export default Carrito;