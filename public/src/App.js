import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import PaymentMethod from "./pages/Payment";
import PaymentOnDelivery from "./pages/PaymentOnDelivery";



function App() {


  return (
    <>
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<ProductDetails />}/>
          <Route path="/checkout" element={<PaymentMethod />}/>
          <Route path="/payment" element={<PaymentOnDelivery />}/>
          
        
        </Routes>
        <Sidebar />
        <Footer />
      </Router>

    
    
    
    
    
    
    
    
    </div>
    </>
  );
}

export default App;
