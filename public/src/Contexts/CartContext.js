import React, { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

function CartProvider ({children}) {

 const [cart, setCart] = useState([]);
 
 const addToCart = (id) =>{
   console.log(`item ${id} added to the cart`);
 }

    return (
    <CartContext.Provider value={{addToCart}}>
          {children}
    </CartContext.Provider>
    )
}

export default CartProvider;