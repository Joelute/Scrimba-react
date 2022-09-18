import EarthLogo from '../../../assets/EarthLogo.png'
import styled from 'styled-components'


export default function Navbar () {
    return (
        <NavContainer>
            <NavImg src = {EarthLogo}></NavImg>
            <NavTitle>my travel journal.</NavTitle>
        </NavContainer>
    )
}

const NavContainer = styled.nav`

    display: flex;
    background-color: #F55A5A;
    height: 5rem;
    align-items: center;
    justify-content: center;
    width:100%;
`

const NavImg = styled.img.attrs(props => ({ src: props.src }))`

    max-width: 2em;
    height: 2em;
    margin-right: 1em;

    @media (min-width: 768px) {
        max-width: 2.5em;
        height: 2.5em;
    }
`

const NavTitle = styled.h1`

    font-size: 1.25rem; 
    color: #FFFFFF;
    font-weight: 500;

    @media (min-width: 768px) {
        font-size: 1.5rem; 
    }
`

