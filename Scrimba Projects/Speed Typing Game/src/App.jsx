import { useEffect, useState, useRef } from 'react'
import useGame from './useGame.jsx'
import './App.css'

function App() {
  const {
    text,
    timer,
    isRunning,
    word,
    startGame,
    updateText,
    inputRef
  } = useGame(25)

  return (
    <div className="App">
      <h1 className = 'app--title'>How fast do you type?</h1>
      <textarea  ref = {inputRef} className='app--textarea' value={text} onChange={updateText} disabled = {!isRunning}></textarea>
      <h4 className='app--time'>Time remaining: {timer}</h4>
      <button className='app--start' onClick={startGame} disabled = {isRunning}>Start</button>
      <h1 className='app--words'>Word count: {word}</h1>
    </div>
  )
}

export default App
