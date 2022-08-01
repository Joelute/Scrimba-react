export default function Header() {
    return(
        <header className = 'header'>
            <img className = 'header--logo' src = {require('../images/logo.png')}></img>
            <h1 className = 'header--title'>Meme Generator</h1>
            <h2 className = 'header--course'>React Course - Project 3</h2>
        </header>
    )
}