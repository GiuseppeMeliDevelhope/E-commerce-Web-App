import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import PaymentMethod from "./pages/Payment";
import PaymentOnDelivery from "./pages/PaymentOnDelivery";
import FinalPayment from "./pages/FinalPayment";
import ShippingCard from "./pages/ShippingCard";
import CartProvider from "./Contexts/CartContext";



function App() {
  

  return (
    <>
    <div className="overflow-hidden">
      <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<ProductDetails />}/>
          <Route path="/checkout" element={<PaymentMethod />}/>

          <Route path="/payment" element={<PaymentOnDelivery />}/>
          
          <Route path="/finalpay/:method" element={<FinalPayment />}/>
          <Route path="/shipping" element={<ShippingCard />}/>
         
        
        </Routes>
        <Sidebar />
        <Footer />
      </Router>

      </CartProvider>

    
    
    
    
    
    
    
    
    </div>
    </>
  );
}

export default App;
