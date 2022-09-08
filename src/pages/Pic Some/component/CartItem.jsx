import styled from "styled-components"
import {useContext, useState} from 'react'
import { Context } from "../useContext"

function CartItem({item}) {

    const [hovered, setHovered] = useState(false)
    const {removeCartItems} = useContext(Context)

    return (
        <StyledCartItem>
            {hovered? 
            <StyledHoverBin onMouseLeave={() => setHovered(false)} onClick={() => removeCartItems(item.id)}/>:
            <StyledBin onMouseEnter={() => setHovered(true)} />}
            <StyledImg src={item.url} width="130px" />
            <p>$5.99</p>
        </StyledCartItem>
    )
}

const StyledCartItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`

const StyledBin = styled.i.attrs(() => ({ className: "ri-delete-bin-line" }))`
    font-size: 1.3em;
    cursor: pointer;
`

const StyledHoverBin = styled.i.attrs(() => ({ className: 'ri-delete-bin-fill'}))`
    font-size: 1.3em;
    cursor: pointer;
`

const StyledImg = styled.img`
    margin-right: auto;
    margin-left: 10px;   
`



export default CartItem

