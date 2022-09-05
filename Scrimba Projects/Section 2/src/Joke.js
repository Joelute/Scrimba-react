import { useState } from "react"

export default function Joke ({setup, punchline}) {

    const [isShown, setIsShown] = useState(false)

    const showPunchline = () => {
        setIsShown(prevState => !prevState)
    } 

    return (
        <div>
            <h3>{setup}</h3>
            {isShown && <p>{punchline}</p>}
            <button onClick={showPunchline}>{isShown ? 'Hide' : 'Show'} Punchline</button>
            <hr />
        </div>
    )
}