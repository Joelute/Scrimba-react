import React, {useState, useRef, useEffect} from "react";

export default function useGame(startingTime = 10) {


    const [text, setText] = useState('')
    const [timer, setTimer] = useState(startingTime)
    const [isRunning, setIsRunning] = useState(false)
    const [word, setWord] = useState(0)

    const inputRef = useRef(null)

    const updateText = (event) => {
        setText(prevState => event.target.value)
    }

    const countWords = (text) => {
        const wordArr = text.trim().split(' ')
        console.log(wordArr)
        return (wordArr.filter(word => word != '').length)
    }

    const startGame = () => {
        setIsRunning(prevState => true)
        setTimer(prevState => startingTime)
        setText(prevState => '')
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    const endGame = () => {
        setIsRunning(false)
        setWord(prevState => countWords(text))
    }
    
    useEffect(() => {
        if (isRunning && timer > 0) {
        setTimeout(() => (setTimer(prevState => prevState - 1)), 1000);
        } else if (timer === 0) {
        endGame()
        }
    } , [timer, isRunning])

    return {
        text,
        timer,
        isRunning,
        word,
        startGame,
        updateText,
        inputRef
    }
}