import React, { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
function Header() {
  
    const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
   
   <header className="bg-blue-500">
      <div>Header</div>
      <div className="cursor-pointer flex relative" onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
}

export default Header;
