import './App.css';
import {useState, useEffect} from 'react'
import Quiz from './components/Quiz';
import { nanoid } from 'nanoid'

function App() {

  const [start, setStart] = useState(true)
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)

  const [trivia, setTrivia] = useState([])

  const handleStart = () => {
    setStart(prevState => !prevState)
    setFirst(prevState => !prevState)
  }

  const handleSelect = (quizId, id) => {
    
    setTrivia(prevState =>
      prevState.map(triviaLoop => {
        if (triviaLoop.id === quizId) {
          const triviaArray = triviaLoop.allAnswer.map(answerLoop => answerLoop.id === id? {...answerLoop, isSelect: !answerLoop.isSelect} : {...answerLoop, isSelect: false})
          return {...triviaLoop, allAnswer: triviaArray}
        }else {
          return triviaLoop
        }
      })
    )
  }

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
    .then(res => res.json())
    .then(data => data.results.map(result => {
      const answerArray = []
      answerArray.push({
        answer: result.correct_answer,
        id: nanoid(),
        isCorrect: true,
        isSelect: false
      })
      result.incorrect_answers.map(incorrectAnswers => {
        answerArray.push({
          answer: incorrectAnswers,
          id: nanoid(),
          isCorrect: false,
          isSelect: false
        })
        return []
      })
      setTrivia(prevState => [...prevState, {
        question: result.question,
        allAnswer: answerArray,
        id: nanoid()
      }])
      return []
    }
    ))
    }, [])

  const quizElement = trivia.map(quiz => 
    <Quiz question={quiz.question} allAnswer = {quiz.allAnswer}  id = {quiz.id} handleSelect = {handleSelect}/>
  )

  return (
    <div className='App'>
      {start && 
      <div className="start">
        <h1 className ='start--title'>Quizzical</h1>
        <h2 className='start--description'>Some description if needed</h2>
        <button className='start--button' onClick={handleStart}>Start quiz</button>
      </div>}
      {first && 
        <div className='quiz--main'>
          {quizElement}
          <button className='submit--button'>Check Answers</button>
        </div>}
    </div>
  );
}

export default App;
