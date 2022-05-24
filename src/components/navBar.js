import "./navBar.css"

export default function NavBar() {
    return (
        <header className="header">
            <div className="container am">
                <img
                    src="/images/trollFace.png"
                    className="header--image"
                />
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">React Course - Project 3</h4>
            </div>
        </header>
    )
}