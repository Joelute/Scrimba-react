import Profile from '../../../assets/profile.jpg'

export default function Info() {
    return (
        <div className='card'>
            <img className='info-profile'src={Profile}></img>
            <h1 className='info--name'>Joseph Ho</h1>
            <h1 className='info--job'>Full-stack Developer</h1>
            <div>
                <button className = 'info--button'>Email</button>
                <button className = 'info--button'>Linkedin</button>
            </div>
        </div>
    )
}