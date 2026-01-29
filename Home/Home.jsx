import { Route, Routes } from "react-router"
import { Link } from "react-router"
import { Bio } from "../Bio/Bio"
import "./Home.css"

export const Home = () => {

    return(
        <section className="homepage-container">
            <h1 className="homepage-welcome">Vibright</h1>
                <ul className="homepage-links">
                    <li className="homepage-link-item">
                        <Link to={`/bio`}>Bio</Link>
                    </li>
                    <li className="homepage-link-item">
                        <Link to={`/merch`}>Merch</Link>
                    </li>
                    <li className="homepage-link-item">
                        <Link to={`/socials`}>Socials</Link>
                    </li>

                </ul>
</section>)
}