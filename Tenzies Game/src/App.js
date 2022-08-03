import Die from './component/Die';
import './App.css';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti'

function App() {

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

  const [tenzies, setTenzies] = useState(false)

  const changeHeld = (id) => {
    setDice(prevDice => 
      prevDice.map(die => {
        return die.id === id ? {...die, isHeld : !die.isHeld} : die
      })
    )
  }

  const dieElement = dice.map(die =>
      <Die value={die.value} id={die.id} isHeld={die.isHeld} changeHeld={changeHeld}></Die>
    )
  
  const rollDice = () => {
    setDice(prevDice => 
      prevDice.map(die => {
        return die.isHeld? die : {...die, value: Math.ceil(Math.random()*6)}
      })
    )
  }

  const newGame = () => {
    setDice(allNewDie)
    setTenzies(false)
  }

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSame = dice.every(die => die.value === firstValue)
    if (allHeld && allSame) {
      setTenzies(true)
    }
  }, [dice])

  return (
      <main className='game'>
        {tenzies && <Confetti></Confetti>}
        <div className='game--board'>
          <h1 className='game--title'>Tenzies</h1>
          <h2 className='game--description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
          <div className='die--container'>
            {dieElement}
          </div>
          <button className='game--button' onClick={tenzies? newGame: rollDice}>{tenzies? 'New Game': 'Roll'}</button>
        </div>
      </main>
  );
}

export default App;
