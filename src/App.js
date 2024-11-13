import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import Productos from './screens/productos.js';
import Detalle from './screens/detalle';
import Contacto from './screens/contacto';
import { CartProvider} from './contexts/CartContext.js';
import Carrito from './screens/carrito.js';

function App() {
  return (
    <CartProvider>
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/carrito' element={<Carrito/>}></Route>
      </Routes>
      
    </Router>
    </CartProvider>
  );
}

export default App;
