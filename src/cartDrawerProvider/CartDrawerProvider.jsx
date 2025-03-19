import { createContext, useState } from "react"

export const DrawerContext = createContext(null);
const CartDrawerProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
      };
    
      const openDrawer = () => {
        setIsOpen(true);
      };
    
      const closeDrawer = () => {
        setIsOpen(false);
      };
      const info = {
        isOpen, toggleDrawer, openDrawer, closeDrawer
      }
  return (
    <DrawerContext.Provider value={info}>
        {children}
    </DrawerContext.Provider>
  )
}

export default CartDrawerProvider