import Answer from "./Answer"

export default function Quiz({question, allAnswer, id, handleSelect}) {
    
    allAnswer.sort(function(a, b){
        let x = a.answer.toLowerCase();
        let y = b.answer.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });


    const answerElement = allAnswer.map(possibleAnswer => 
            <Answer answer= {possibleAnswer.answer} id = {possibleAnswer.id} isCorrect = {possibleAnswer.isCorrect} isSelect = {possibleAnswer.isSelect} quizId = {id} handleSelect={handleSelect}></Answer>
        )



    return(
        <div className="quiz">
            <h1 className="quiz--question">{question}</h1>
            <div className='answer--container'>
                {answerElement}
            </div>
            <hr/>
        </div>
    )
}