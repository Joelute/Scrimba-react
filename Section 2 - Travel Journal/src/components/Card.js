export default function Card ({title,location,googleMapsUrl,startDate,endDate,description,imageUrl}) {
    return (
        <div className = 'card'>
            <img className = 'card--img'src= {imageUrl}></img>
            <div className = 'card--info'>
                <div className = 'card--header'>
                    <img className = 'card--icon' src = {require('../images/icon.png')}></img>
                    <h2 className = 'card--location'>{location}</h2>
                    <a className = 'card--map' href = {googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className = 'card--title'>{title}</h1>
                <h2 className = 'card--date'>{startDate} - {endDate}</h2>
                <p className = 'card--description'>{description}</p>
            </div>
        </div>
    )
}