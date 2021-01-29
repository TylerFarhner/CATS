import {  Link } from 'react-router-dom'
import './Header.css'
// import logoImage from '../../images/logoImage.jpg'

export default function Header(){
    return (
        <header className="Header">
            <nav>
                <ul className="NavLinks">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="About">About</Link></li>
                        <li><Link to="Gallery">Gallery</Link></li>
                        {/* <li><Link to="Creations">Creations</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}