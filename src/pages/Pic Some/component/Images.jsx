import { useState } from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'
import {useContext} from 'react'
import { Context } from "../useContext"
import isInCart from '../utils/isInCart'



function Images ({className, img, id, isFavorite}) {

    const {cartItems, toggleFavourite, addCartItems, removeCartItems} = useContext(Context)
    const [hovered, setHovered] = useState(false)

    const cartIcon = () => {
        if (isInCart(cartItems, id)) {
            return (
                <StyledCart onClick={() => removeCartItems(id)} />
            )
        } 
        return (
            <StyledPlus onClick={() => addCartItems(img, id, isFavorite)}/>
        )
    }

    console.log(id)
    
    return (
        <StyledDiv className={className} 
            onMouseEnter = {() => setHovered(true)}
            onMouseLeave = {() => setHovered(false)}>
            {hovered && <div>
                {isFavorite? <StyledFilledHeart onClick={() => toggleFavourite(id)}/> :<StyledHeart onClick={() => toggleFavourite(id)}/>}
                {cartIcon()}
            </div>}
            <StyledImage src={img} />
        </StyledDiv>
    )
}

Images.propType = {
    className: PropTypes.string,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
}

const StyledDiv = styled.div`
    position: relative;
    &.wide {
        grid-column: span 2;
    }
    
    &.tall {
        grid-row: span 2;
    }
    
    &.big {
        grid-column: span 2;
        grid-row: span 2;
    }
`
const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const StyledHeart = styled.i.attrs(() => ({ className: 'ri-heart-line' }))`
    color: #EA453C;
    font-size: 1.2rem;
    position: absolute;
    top: 5px;
    left: 5px;
    cursor: pointer;
`

const StyledFilledHeart = styled.i.attrs(() => ({ className: 'ri-heart-fill'}))`
    opacity: .7;
    color: #EA453C;
    font-size: 1.2rem;
    position: absolute;
    top: 5px;
    left: 5px;
    cursor: pointer;
`

const StyledPlus = styled.i.attrs(() => ({ className: 'ri-add-circle-line' }))`
    color: #ACE6EC;
    font-size: 1.2rem;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
`
const StyledCart = styled.i.attrs(() => ({ className: 'ri-shopping-cart-fill' }))`
    color: #ACE6EC;
    font-size: 1.2rem;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
`
export default Images