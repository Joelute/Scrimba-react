import styled from 'styled-components'

export default function Die({value, id, isHeld, changeHeld, disabled}) {
    const styles = {
        backgroundColor : isHeld? '#59E391' : 'white',
        cursor : disabled? 'default' : 'pointer'
    }

    return (
        <GameDie onClick={disabled? '' : () => changeHeld(id)} style = {styles}>
            <DieNumber>{value}</DieNumber>
        </GameDie>
    )
}

const GameDie = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 4px;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
    background-color: white;
`

const DieNumber = styled.h2` 
    font-size: 2rem;
    display: flex;
    justify-content: center;
    margin: 0;
    align-items: center;
    height: 100%;
`