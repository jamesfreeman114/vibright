import { Link } from "react-router"
import "./NavBar.css"

export const NavBar = () => {

    return ( <ul className="navbar">
                    <li className="navbar-item">
                        <Link className="navbar-link" to={`/`}>Home</Link>
                    </li>
                    
                    <li className="navbar-item">
                        <Link className="navbar-link" to={`/bio`}>Bio</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to={`/merch`}>Merch</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to={`/socials`}>Socials</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-link" to={`/contact`}>Contact</Link>
                        
                    </li>

                   

                </ul>)

}