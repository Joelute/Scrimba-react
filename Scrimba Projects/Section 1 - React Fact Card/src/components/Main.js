

export default function Main({darkMode, toggleDarkMode}) {
    return (
        <main className={darkMode? 'dark' : ''}>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is well maintained by Facebook</li>
            </ul>
        </main>
    )
}