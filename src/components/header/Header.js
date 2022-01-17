import Message from "components/message/Message"
import "./header.css"

export default function Header(){
    return(
        <header className="App-header">
            <h1>Met the ART.</h1>
            <p>
                Every time you see a painting <br/> you see a different artist.
            </p>
            <Message className="header-message">
                Find new Artworks every time you visit this website.
            </Message>
        </header>
    )
}