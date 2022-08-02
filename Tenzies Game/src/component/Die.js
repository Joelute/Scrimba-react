export default function Die({value, id, isHeld, changeHeld}) {
    const styles = {
        backgroundColor : isHeld? '#59E391' : 'white'
    }

    return (
        <div className='game--die' onClick={() => changeHeld(id)} style = {styles}>
            <h2 className = 'die--number'>{value}</h2>
        </div>
    )
}