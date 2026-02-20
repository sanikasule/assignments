import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const WishListContext = createContext(null)

function WishListProvider({children}) {
    const [wishList, setWishList] = useLocalStorage('my-wishlist', [])

    const addToWishList = (product) => {
        return setWishList(prev => [...prev, product])
    }

    const removeFromWishList = (productId) => {
        return setWishList(wishList.filter(product => product.id !== productId))
    }

    const clearWishList = () => {
        return setWishList([])
    }

    const getWishListCount = () => {
        return wishList.length
    }

    return (
        <WishListContext.Provider value={{wishList, addToWishList, removeFromWishList, clearWishList, getWishListCount}}>
            {children}
        </WishListContext.Provider>
    )
}

function useWishList() {
    return useContext(WishListContext)
}

export {useWishList, WishListProvider}