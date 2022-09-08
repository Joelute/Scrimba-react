import MemeLogo from '../../../assets/MemeLogo.png'
import styles from '../style.module.css'

export default function Header() {
    return(
        <header className = {styles['header']}>
            <img className = {styles['header--logo']} src = {MemeLogo}></img>
            <h1 className = {styles['header--title']}>Meme Generator</h1>
            <h2 className = {styles['header--course']}>React Course - Project 3</h2>
        </header>
    )
}