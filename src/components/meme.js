import React from "react"
import "./meme.css"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        coverImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    function handleCHange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const random = Math.floor(Math.random()*allMemes.length);
        const url = allMemes[random].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            coverImage: url
        }))
    }


    return (
        <main className="container">
            <div className="form">
                <div className="inputs">
                    <input
                        value={meme.topText}
                        name="topText"
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        onChange={handleCHange}
                    />
                    <input
                        value={meme.bottomText}
                        name="bottomText"
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        onChange={handleCHange}
                    />
                </div>
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.coverImage} alt="meme" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}