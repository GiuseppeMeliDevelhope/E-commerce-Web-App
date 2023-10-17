import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
function Header() {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-black py-4"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-[50px]">
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img
              alt="logo"
              className={`w-[60px] ${
                isActive ? "bg-yellow-500" : "bg-yellow-500"
              }  py-3 mt-3`}
              src={logo}
            />
          </div>
        </Link>
       
       <div className="flex items-center">
       <h1 className={`${isActive ? "hidden" : "text-white"} underline text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0`}>
        The Level Group
       </h1>
       </div>
       

        {/* cart */}

        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag
            className={`${
              isActive ? "text-black text-3xl" : "text-white text-3xl"
            }  `}
          />
          <div className="bg-yellow-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
