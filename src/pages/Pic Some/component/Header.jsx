import styled from "styled-components"
import {Link} from 'react-router-dom'

function Header() {
    return (
        <StyledHeader>
            <Link to='/picsome/'><h2>Pic Some</h2></Link>
            <Link to='/picsome/cart'><ShoppingIcon></ShoppingIcon></Link>
        </StyledHeader>
    )
}

const ShoppingIcon = styled.i.attrs(() => ({ className: "ri-shopping-cart-line ri-fw ri-2x" }))``

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--pink);
    color: var(--light-blue);
    padding: 0 2rem;
    -webkit-box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
    -moz-box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
    box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
`

export default Header