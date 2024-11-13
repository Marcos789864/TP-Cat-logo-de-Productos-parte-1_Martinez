import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Cargar el carrito desde LocalStorage al inicio
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Guardar el carrito en LocalStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      // Si el producto ya existe en el carrito, incrementamos la cantidad
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // Si el producto no está en el carrito, lo agregamos
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Función para modificar la cantidad de un producto en el carrito
  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};