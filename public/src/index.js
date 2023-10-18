import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './Contexts/ProductContext';
import SidebarProvider from './Contexts/SidebarContext';
import CartProvider, { CartContext } from './Contexts/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <SidebarProvider>
  <CartProvider>
   <ProductProvider>
    <React.StrictMode>
     <App />
  </React.StrictMode>
  </ProductProvider>
  </CartProvider>
 </SidebarProvider>
 
);


