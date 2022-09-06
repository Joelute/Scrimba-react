import styled from "styled-components"

function Photos() {
    return (
        <Container>
            <h1>Images go here</h1>
        </Container>
    )
}

const Container = styled.main`
    padding: 10px;
    display: grid;
    grid-gap: 2px;
    grid-auto-rows: 100px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-flow: dense;
`

export default Photos