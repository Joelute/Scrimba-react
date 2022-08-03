import Die from './component/Die';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti'

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
      <main className='game'>
        {tenzies && <Confetti></Confetti>}
        {playGame ?
         <div className='game--board'>
          <div className='score--container'>
            <div className='score--time'>
              <h1 className='score--title'>Time</h1>
              <h2 className='score--value'>{timer}</h2>
            </div>
            <div className='score--rolls'>
              <h1 className='score--title'>Total rolls</h1>
              <h2 className='score--value'>{totalRoll}</h2>
            </div>
          </div>
          <div className='die--container'>
            {dieElement}
          </div>
          <button className='game--button' onClick={tenzies? newGame: rollDice}>{tenzies? 'New Game': 'Roll'}</button>
        </div> :
        <div className='game--board'>
          <h1 className='game--title'>Tenzies</h1>
          <h2 className='game--description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
          <button className='game--button' onClick = {startGame}>Play</button>
        </div>
        }

      </main>
  );
}

export default App;
