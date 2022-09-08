export default function Answer({answer , id , isCorrect, isSelect, quizId, handleSelect}) {
    
    const parseEntities = txt => new DOMParser().parseFromString(txt, 'text/html').body.innerText;

    const styles = {
        border : isSelect ? 'none': '',
        backgroundColor : isSelect ? '#D6DBF5' : '#F5F7FB'
    }

    return (
        <div className="answer" style = {styles} onClick = {() => handleSelect(quizId,id)}>{parseEntities(answer)}</div>
    )
}