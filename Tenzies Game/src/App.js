import Die from './component/Die';
import './App.css';
import { useState } from 'react';
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

  return (
      <main className='game'>
        <div className='game--board'>
          <h1 className='game--title'>Tenzies</h1>
          <h2 className='game--description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
          <div className='die--container'>
            {dieElement}
          </div>
          <button className='game--button' onClick={rollDice}>Roll</button>
        </div>
      </main>
  );
}

export default App;
