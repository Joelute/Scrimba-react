import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
export default function () {


    return(
        <Container>
            <TypingDiv>
                Hello World.
            </TypingDiv>      
        </Container>
    )
}

const Typing = keyframes`
    0%, 20%, 100% {
        width: 0;
    }
    50%, 80%{
        width: 9.2ch;
    }
`

const Blink = keyframes`
    50% {
        border-color: transparent;
    }
`
const Container = styled.div`
    display:flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 601px) {
        margin-left: 5rem;
    }
`



const TypingDiv = styled.div`
    width: 0;
    font-size: 4rem;
    white-space: nowrap;
    overflow: hidden;
    animation:  ${Typing} 3s steps(144) infinite 1s,
                ${Blink} .5s step-end infinite alternate;
    border-right: 3px solid;
    `

