import React, {createContext, useContext, useState} from "react";

const CartContex = createContext();

export const ContexProvider = ({children}) => {
  const [cart, setCart] = useState([])
  return (
    <CartContex.Provider value={{cart, setCart}}>
      {
        children
      }
    </CartContex.Provider>
  )
}

export const useCartContex = () => {
  return useContext(CartContex)
}