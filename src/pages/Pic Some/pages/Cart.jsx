import styled from "styled-components"
import { useContext, useState } from 'react'
import { Context } from '../useContext'
import CartItem from "../component/CartItem"

function Cart() {

    const { cartItems, removeCartItems } = useContext(Context)

    const [isLoading, setIsLoading] = useState(false)

    const cartItemElement = cartItems.map(item => {
        return(
            <CartItem key={item.id} item = {item}/>
        )
    })

    const placeOrder = () => {
        setIsLoading(true) 
        let seconds = 3
        setTimeout(() => {
            cartItems.map(item => removeCartItems(item.id))
            setIsLoading(false)
        }, 3000)

    }

    const totalCost = (cartItems.length*5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})
    return (
        <Container>
            <StyledH1>Check out</StyledH1>
            {cartItemElement}
            <TotalCost>Total: {totalCost}</TotalCost>  
            {cartItems.length > 0 ? 
            <OrderDiv>              
                <OrderButton onClick={placeOrder}>{isLoading? 'Loading...' : 'Place Order'}</OrderButton>
            </OrderDiv>:
            <p>You have no items in your cart</p>}
        </Container>
    )
}

const Container = styled.main`
    padding: 10px;
    text-align: right;
    font-size: 1.3em;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const StyledH1 = styled.h1`
    text-align: center;
`
const TotalCost = styled.h1`
    text-align: right;
    font-size: 1.3em;
`
const OrderDiv = styled.div`
    display: flex;
    justify-content: center;
`

const OrderButton = styled.button`
    border-color: #150605;
    cursor: pointer;
    padding: 15px;
    transition: all .2s ease-in-out;

    &:focus {
        outline: none;
    }
    &:disabled {
        border-color: lightgray;
    }
`

export default Cart