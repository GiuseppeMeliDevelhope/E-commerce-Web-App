import React, {useContext} from "react";

import { useParams } from "react-router";

import { CartContext } from "../Contexts/CartContext";

import { ProductContext } from "../Contexts/ProductContext";
function ProductDetails(){

const { id } = useParams();
const { products } = useContext(ProductContext);
const { addToCart } = useContext(CartContext);




    return(
        <div>

        </div>
    )
   
}

export default ProductDetails;