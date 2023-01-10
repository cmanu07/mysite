import { createContext, useState } from "react";
import { ListOfProducts } from "../constants";

export const ECommShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < ListOfProducts.length + 1; i += 1) {
        cart[i] = 0
    }
    return cart
}

export const ECommShopContextProvider = (props) => {
    
    const [searchQuery , setSearchQuery] = useState(() => '')
    const [cartPopupButton, setCartPopupButton] = useState(() => false)
    const [cartItems, setCartItems] = useState(() => getDefaultCart())
    const [activeCategoryPage, setActiveCategoryPage] = useState(() => '')
    const [filteredList, setFilteredList] = useState(() => ListOfProducts)

    
    const addToCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = { cartItems, addToCart, removeFromCart,
        cartPopupButton, setCartPopupButton,
        searchQuery ,setSearchQuery,
        activeCategoryPage, setActiveCategoryPage,
        filteredList, setFilteredList
    }

    return  <ECommShopContext.Provider value = {contextValue}>
                {props.children}
            </ECommShopContext.Provider>
}