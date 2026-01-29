import { Route, Routes } from "react-router"
import { Link } from "react-router"
import { Bio } from "../Bio/Bio"

export const Home = () => {

    return(
        <section>
            <h1>Vibright</h1>
                <ul>
                    <li>
                        <Link to={`/bio`}>Bio</Link>
                    </li>
                    <li>
                        <Link to={`/merch`}>Merch</Link>
                    </li>
                    <li>
                        <Link to={`/socials`}>Socials</Link>
                    </li>

                </ul>
</section>)
}