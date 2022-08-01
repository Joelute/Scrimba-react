
export default function Navbar () {
    return (
        <nav className = 'nav'>
            <img className = 'nav--img' src = {require('../images/logo.png')}></img>
            <h1 className = 'nav--title'>my travel journal.</h1>
        </nav>
    )
}