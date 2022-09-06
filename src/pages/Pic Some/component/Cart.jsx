import styled from "styled-components"

function Cart() {
    return (
        <Container>
            <h1>Check out</h1>
        </Container>
    )
}

const Container = styled.main`
    padding: 10px;
    text-align: right;
    font-size: 1.3em;
    display: flex;
    justify-content: center;
`

export default Cart