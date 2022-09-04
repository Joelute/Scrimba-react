import Profile from '../../../assets/profile.jpg'
import styles from '../BusinessCard.module.css'


export default function Info() {
    return (
        <div className={`${styles['card']} ${styles['card--top']}`}>
            <img className={styles['info--profile']} src={Profile}></img>
            <h1 className={styles['info--name']}>Joseph Ho</h1>
            <h1 className={styles['info--job']}>Full-stack Developer</h1>
            <div className={styles['info--div--button']}>
                <button className = {styles['info--button']}><i className={`uil uil-envelope ${styles['info--i--icon']}`}></i> Email</button>
                <button className = {styles['info--button']}><i className={`uil uil-linkedin ${styles['info--i--icon']}`}></i> Linkedin</button>
            </div>
        </div>
    )
}