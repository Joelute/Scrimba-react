import dieStyles from '../Tenzies.module.css'

export default function Die({value, id, isHeld, changeHeld, disabled}) {
    const styles = {
        backgroundColor : isHeld? '#59E391' : 'white',
        cursor : disabled? 'default' : 'pointer'
    }

    return (
        <div className={dieStyles['game--die']} onClick={disabled? '' : () => changeHeld(id)} style = {styles}>
            <h2 className = {dieStyles['die--number']}>{value}</h2>
        </div>
    )
}