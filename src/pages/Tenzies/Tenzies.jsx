import Die from './component/Die';
import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti'
import styled from 'styled-components';


function App() {

  const [totalRoll, setTotalRoll] = useState(0)
  const [tenzies, setTenzies] = useState(false)
  const [playGame, setPlayGame] = useState(false)
  const [timer, setTimer] = useState(0)
  const countRef = useRef(null)

  const handleTimer = () => {
    countRef.current = setInterval(() => {
      setTimer(prevState => prevState + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(countRef.current)
  }

  const resetTimer = () => {
    clearInterval(countRef.current)
    setTimer(prevState => 0)
  }

  const allNewDie = () => {
    const dieArray = []
    for (let i = 0; i < 10; i++) {
      dieArray.push({
        value: Math.ceil(Math.random()*6),
        isHeld: false,
        id: i
      })
    }
    return dieArray
  }

  const [dice, setDice] = useState(allNewDie)
  
  // Maps through dice and if the die id is equal to id provided
  // Switch isHeld
  const changeHeld = (id) => {
    setDice(prevDice => 
      prevDice.map(die => {
        return die.id === id ? {...die, isHeld : !die.isHeld} : die
      })
    )
  }

  // Maps through dice and renders dice onto board
  const dieElement = dice.map(die =>
      <Die value={die.value} id={die.id} isHeld={die.isHeld} changeHeld={changeHeld} disabled = {tenzies}></Die>
    )
  
  // Rolls the dice and handles totalRoll state
  const rollDice = () => {
    setDice(prevDice => 
      prevDice.map(die => {
        return die.isHeld? die : {...die, value: Math.ceil(Math.random()*6)}
      })
    )
    setTotalRoll(prevState => prevState + 1)
  }

  // Function handler for restarting the game
  const newGame = () => {
    setDice(allNewDie)
    setTenzies(false)
    setTotalRoll(prevState => 0)
    resetTimer()
    handleTimer()
    
  }

  // function Handler for play button and starting the game
  const startGame = () => {
    setPlayGame(true)
    handleTimer()
  }

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSame = dice.every(die => die.value === firstValue)
    if (allHeld && allSame) {
      setTenzies(true)
      stopTimer()
    }
  }, [dice])

  return (
    <Container>

        {tenzies && <Confetti></Confetti>}
        {playGame ?
         <GameBoard>
          <ScoreContainer>
            <div>
              <ScoreTitle>Time</ScoreTitle>
              <ScoreValue>{timer}</ScoreValue>
            </div>
            <div>
              <ScoreTitle>Total rolls</ScoreTitle>
              <ScoreValue>{totalRoll}</ScoreValue>
            </div>
          </ScoreContainer>
          <DieContainer>
            {dieElement}
          </DieContainer>
          <GameButton onClick={tenzies? newGame: rollDice}>{tenzies? 'New Game': 'Roll'}</GameButton>
        </GameBoard> :
        <GameBoard>
          <GameTitle>Tenzies</GameTitle>
          <GameDescription>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</GameDescription>
          <GameButton onClick = {startGame}>Play</GameButton>
        </GameBoard>
        }
    </Container>
      
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  margin-left: 5em;
  font-family: Karla, sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;

`

const GameBoard = styled.div`
  display: flex;
  padding: 4em;
  border-radius: .75em;
  background-color: #f5f5f5;
  height: 35em;
  width: 90%;
  max-width: 35em;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 .25rem 0 rgba(0, 0, 0, .5);
`

const ScoreContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap:8em;
  margin-bottom: 4rem;
`

const ScoreTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 100;
  margin-top: 0;

`

const ScoreValue = styled.h2`
  text-align: center;
  font-weight: 100;
  color: #4A4E74;
  font-size: 2.5rem;
  margin-top: 0;

`

const DieContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 2em;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    gap:1.2em;
  }
`

const GameButton = styled.div`
  display: flex;
  margin-top: 2rem;
  height: 3rem;
  width: 14rem;
  font-size: 2.5rem;
  color: #ffffff;
  background-color: #5035FF;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.15);

`

const GameTitle = styled.h1`
  color: #2B283A;
  font-size: 3rem;
  margin-top: 5rem;
  text-align: center;
`

const GameDescription = styled.h2`
  color: #4A4E74;
  font-size: 1.5rem;
  margin: 0 0 4rem 0;
  text-align: center;
  font-weight: 100;
`