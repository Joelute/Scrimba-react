import styled from "styled-components"
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../useContext'

function Header() {

    const {cartItems} = useContext(Context)

    return (
        <StyledHeader>
            <Link to='/picsome/'><h2>Pic Some</h2></Link>
            <Link to='/picsome/cart'>{cartItems.length ? <FilledCart/>: <ShoppingCart />}</Link>
        </StyledHeader>
    )
}

const ShoppingCart = styled.i.attrs(() => ({ className: "ri-shopping-cart-line ri-fw ri-2x" }))``

const FilledCart = styled.i.attrs(() => ({ className: 'ri-shopping-cart-fill ri-fw ri-2x'}))``

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F47B6E;
    color: #EFFBFE;
    padding: 0 2rem;
    -webkit-box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
    -moz-box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
    box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
`

export default Header