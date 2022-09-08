export default function Card({img, rating, reviews, country, title, price, openSpots}) {
    let badgeText;
    if (openSpots == 0) {
        badgeText = 'SOLD OUT'
    } else if (country == 'Online') {
        badgeText = 'ONLINE'
    }

    return (
        
        <div className='card'>
            {badgeText && <div className = 'card--badge'>{badgeText}</div>}
            <img className = 'card--img'src={require(`../images/${img}`)} />
            <div className = 'card--description'>
                <img className = 'card--star' src = {require('../images/star.png')}></img>
                <span>{rating}</span>
                <span>({reviews}) • </span>
                <span>{country}</span>
            </div>
            <p className= 'card--title'>{title}</p>
            <p className= 'card--price'><b>From ${price}</b> / person</p>
        </div>
    )
}