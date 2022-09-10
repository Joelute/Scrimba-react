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
        width: 10ch;
    }
`

const Blink = keyframes`
    50% {
        border-color: transparent;
    }
`
const Container = styled.div`
    display:flex;
    margin-left: 5rem;
    height: 100vh;
    align-items: center;
    justify-content: center;
`



const TypingDiv = styled.div`
    width: 0;
    font-size: 4rem;
    white-space: nowrap;
    overflow: hidden;
    animation:  ${Typing} 4s steps(144) infinite 1s,
                ${Blink} .5s step-end infinite alternate;
    border-right: 3px solid;
    `

