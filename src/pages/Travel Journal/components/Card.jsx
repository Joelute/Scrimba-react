import PinIcon from '../../../assets/PinIcon.png'
import styles from '../TravelJournal.module.css'

export default function Card ({title,location,googleMapsUrl,startDate,endDate,description,imageUrl}) {
    return (
        <div className = {styles['card']}>
            <img className = {styles['card--img']}src= {imageUrl}></img>
            <div className = {styles['card--info']}>
                <div className = {styles['card--header']}>
                    <img className = {styles['card--icon']} src = {PinIcon}></img>
                    <h2 className = {styles['card--location']}>{location}</h2>
                    <a className = {styles['card--map']} href = {googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className = {styles['card--title']}>{title}</h1>
                <h2 className = {styles['card--date']}>{startDate} - {endDate}</h2>
                <p className = {styles['card--description']}>{description}</p>
            </div>
        </div>
    )
}