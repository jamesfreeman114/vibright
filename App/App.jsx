import { Route, Routes } from "react-router-dom"
import { Bio } from "../Bio/Bio"
import { Home } from "../Home/Home"
import { Merch } from "../Merch/Merch"
import { Socials } from "../Socials/Socials"
import { Contact } from "../Contact/Contact"

export const App = () => {
    return (
    <Routes>
        <Route 
            index element={<Home/>}/>
        
            <Route path="bio" element={<Bio />}/>
            <Route path="merch" element={<Merch />}></Route>
            <Route path="socials" element={<Socials />}></Route>
            <Route path="contact" element={<Contact />} />
            
    
    
  
    </Routes>)
}

