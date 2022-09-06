import { createContext, useEffect, useState } from "react";
import data from "../Travel Journal/data";
const Context = createContext()

function ContextProvider ({children}) {
    
    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res => res.json())
        .then(data => setAllPhotos(prevState => data))
        
    }, [])
    
    return(
        <Context.Provider value={allPhotos}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context as ContextConsumer}