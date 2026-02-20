import { useEffect, useState } from "react";

function useLocalStorage(key='wishlist', initialValue=[]) {
    const getSavedWishList = () => {
        const saved = localStorage.getItem(key)
        if(saved) {
            return JSON.parse(saved)
        }
        return initialValue
    }
    const [wishList, setWishList] = useState(getSavedWishList)

    const saveNewValue = (newValue) => setWishList(newValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(wishList))
    }, [key, wishList])

    return [wishList, saveNewValue]
}

export default useLocalStorage
