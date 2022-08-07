export default function Die({value, id, isHeld, changeHeld, disabled}) {
    const styles = {
        backgroundColor : isHeld? '#59E391' : 'white',
        cursor : disabled? 'default' : 'pointer'
    }

    return (
        <div className='game--die' onClick={disabled? '' : () => changeHeld(id)} style = {styles}>
            <h2 className = 'die--number'>{value}</h2>
        </div>
    )
}