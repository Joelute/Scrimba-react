import React, {useState} from 'react';

export default function Meme () {

    const [meme, setMeme] = useState({
        topText:'',
        bottomText:'',
        randomImage: ''
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    const getRandomMeme = () => {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
            })
        )    
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className = 'main'>
            <div className = 'form'>
                <input className = 'form--input' type = 'text' placeholder = 'Top text' value = {meme.topText} name = 'topText' onChange={handleChange}></input>
                <input className = 'form--input' type = 'text' placeholder = 'Bottom text' value= {meme.bottomText} name = 'bottomText' onChange={handleChange}></input>
                <button className = 'form--button' onClick = {getRandomMeme}>Get a new meme image</button>
            </div>
            <div classname = 'meme'>
                <img className = 'meme--img' src = {meme.randomImage}></img>
                <h1 className='meme--text top'>{meme.topText}</h1>
                <h1 className='meme--text bottom'>{meme.bottomText}</h1>
            </div>
            
        </div>
    )
}
