import React, { useState } from 'react'
import { createContext } from 'react'
import { productsDB } from '../data/DataBase'

export const ShopContext = createContext(null)


// export default const getDefaultCart = () => {
//   let cart = []
//   for (let i = 1; i < productsDB.length + 1; i++) {
//     cart[i] = 0
//   }
//   return cart
// }

export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState([])

  console.log("cartItem", cartItems)
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
  };
  const removeCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
  }


  const contextValue = {cartItems, addToCart, removeCart} 
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
