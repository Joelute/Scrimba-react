import './App.css';
import {useState, useEffect} from 'react'
import Quiz from './components/Quiz';
import { nanoid } from 'nanoid'

function App() {

  const [start, setStart] = useState(true)
  const [first, setFirst] = useState(false)
  const [score, setScore] = useState({
    shown: false,
    score: 0,
    total: 0
  })

  const [trivia, setTrivia] = useState([])
  /* Trivia object = [{
    allAnswer: [{
      answer: string
      isCorrect: bool
      isSelect: bool
      id: id
    }]
    question: string
    id: id
  }]
  */
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

  const handleSubmit = () => {
    setScore(prevState => {
      const total = trivia.length
      let score = 0;
      trivia.map(triviaLoop => 
        triviaLoop.allAnswer.map(answerLoop => {
          if (answerLoop.isCorrect && answerLoop.isSelect) {
            score = score + 1
            return 0
          } else {
            return 0
          }
        }
      ))
      return {
        ...prevState,
        score: score,
        total: total,
        shown: true
      }
    })
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
          <div className='submit'>
            {score.shown ? <h1 className='submit--score'>You scored {score.score}/{score.total} correct answers</h1>: ''}
            <button className='submit--button' onClick={handleSubmit}>Check Answers</button>
          </div>
        </div>}
    </div>
  );
}

export default App;
