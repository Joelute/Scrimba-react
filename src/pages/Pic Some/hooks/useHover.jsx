import {useState} from 'react'

function useHover() {

    const [hovered, setHovered] = useState(false)

    const enter = () => {
        setHovered(true)
    }

    const leave = () => {
        setHovered(false)
    }

    
}

export default useHover