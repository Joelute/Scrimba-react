export default function Answer({answer , id , isCorrect, isSelect, quizId, handleSelect}) {
    
    const styles = {
        border : isSelect ? 'none': '',
        backgroundColor : isSelect ? '#D6DBF5' : '#F5F7FB'
    }

    return (
        <div className="answer" style = {styles} onClick = {() => handleSelect(quizId,id)}>{answer}</div>
    )
}