import { createContext, useEffect, useState } from "react";
import isInCart from "./utils/isInCart";

const Context = createContext()

function ContextProvider ({children}) {
    
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const toggleFavourite = (id) => {
        setAllPhotos(prevState => prevState.map(photo => {
            if (id == photo.id) {
                return ({
                    ...photo,
                    isFavorite: !photo.isFavorite
                })
            } else {
                return ({...photo})
            }
        }))
    }

    const addCartItems = (url, id, isFavorite) => {
        setCartItems(prevState => {
            return([
                ...prevState,
                {url, id, isFavorite}
            ])
        })
    }

    const removeCartItems = (id) => {
        setCartItems(prevState => {
            return(
                prevState.filter(item => item.id != id)
            )})
    }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res => res.json())
        .then(data => setAllPhotos(prevState => data))
    }, [])
    
    return(
        <Context.Provider value={{allPhotos, cartItems, toggleFavourite, addCartItems, removeCartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}