import "./Bio.css"
import bioPic from "/src/assets/Bio.png"
import { bioText } from "../../../database"

export const Bio = () => {

    const copy = bioText()

    return(

    <section className ="bio-container">
    <img className="bio-header" src={bioPic} alt="image text" />
    <p className="bio-text">{copy}</p>
    </section>
    )
}