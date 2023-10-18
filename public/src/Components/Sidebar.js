import React, { useContext, useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const { isOpen, handleClose, handleOpen } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount, calculateDiscount } =
    useContext(CartContext);
  const [discountMessage, setDiscountMessage] = useState(false);

  const location = useLocation();
  const discount = calculateDiscount(cart);

  useEffect(() => {
    handleClose();
  }, [location]);

  const handleCheckout = () => {
    if (cart.length === 0) {
      window.alert(
        "The cart is empty. Add items to your cart before checkout."
      );
    }
  };

  const handleDiscount = () => {
    if (cart.length === 0) {
      window.alert(
        "The cart is empty. Add items to your cart before checkout."
      );
    } else {
      // Check if a discount is applied
      if (discount > 0) {
        setDiscountMessage(true);

        // Reset the discount message after 3 seconds (adjust the time as needed)
        setTimeout(() => {
          setDiscountMessage(false);
        }, 3000);
      }
    }
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }   w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]  `}
    >
      {discountMessage && (
        <div className="bg-green-500 text-white p-2 text-center">
          Discount applied! You saved {parseFloat(discount).toFixed(2)}€.
        </div>
      )}
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        {/* icon} */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[560px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>
            {parseFloat(total - discount).toFixed(2)}€
          </div>
          {discount > 0 && (
            <div className="uppercase font-semibold">
              <span className="mr-2">Discount:</span>
              {parseFloat(discount).toFixed(2)}€
            </div>
          )}
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-yellow-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          View cart
        </Link>
        <Link
          to={cart.length === 0 ? "#" : "/checkout"}
          className={`${
            cart.length === 0 ? "bg-gray-500" : "bg-primary"
          } flex p-4 justify-center items-center text-white w-full font-medium`}
          onClick={handleCheckout}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
