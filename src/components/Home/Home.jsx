import { Route, Routes } from "react-router"
import { Link } from "react-router"
import { Bio } from "../Bio/Bio"
import "./Home.css"
import logo from "/src/assets/Logo.png"
import { NavBar } from "../NavBar/NavBar"

export const Home = () => {

    return(
        <section className="homepage-container">
                
                    {/* <NavBar /> */}
                
                
                 <img 
                        className="homepage-logo"
                        src={logo}

                    />
</section>)
}