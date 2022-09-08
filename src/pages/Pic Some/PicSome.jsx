import styled from 'styled-components'
import { ContextProvider } from './useContext'
import {Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import Header from './component/Header'

export default function App() {
    
    return (
        <ContextProvider>
            <Container>
                <Header />
                <Routes>
                    <Route exact path = '/' element = {<Photos />} />
                    <Route path = '/cart' element = {<Cart />} />
                </Routes>
            </Container>
        </ContextProvider>
    )
}

const Container = styled.div`
    font-family: 'Oswald', sans-serif;
    margin-left: 5rem;
    a {
        text-decoration: none;
        color: #EFFBFE
    }
`