import { createContext, useState } from "react";
import { TVProductsList } from "../constants";

export const ECommShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < TVProductsList.length; i += 1) {
        cart[i] = 0
    }
    return cart
}

export const ECommShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(() => getDefaultCart())
    
    const addToCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}))
        console.log(cartItems)
    }
    const removeFromCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = { cartItems, addToCart, removeFromCart }

    return  <ECommShopContext.Provider value = {contextValue}>
                {props.children}
            </ECommShopContext.Provider>
}