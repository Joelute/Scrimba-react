import EarthLogo from '../../../assets/EarthLogo.png'
import styles from '../TravelJournal.module.css'

export default function Navbar () {
    return (
        <nav className = {styles['nav']}>
            <img className = {styles['nav--img']} src = {EarthLogo}></img>
            <h1 className = {styles['nav--title']}>my travel journal.</h1>
        </nav>
    )
}