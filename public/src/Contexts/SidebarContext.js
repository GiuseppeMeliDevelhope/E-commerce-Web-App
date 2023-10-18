import React, { useState,createContext, useEffect } from "react";


export const SidebarContext = createContext();
function SidebarProvider ({children}) {

    const [isOpen, setIsOpen] = useState(
        JSON.parse(localStorage.getItem("sidebarIsOpen")) || false
      )
    
      const handleClose = () => {
        setIsOpen(false);
      }
    
      const handleOpen = () => {
        setIsOpen(true);
      }
    

    return <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose, handleOpen}}>
         {children}
    </SidebarContext.Provider>
}

export default SidebarProvider;