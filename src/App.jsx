import { Route, Routes, Outlet } from "react-router-dom"
import { Bio } from "./components/Bio/Bio"
import { Home } from "./components/Home/Home"
import { Merch } from "./components/Merch/Merch"
import { Socials } from "./components/Socials/Socials"
import { Contact } from "./components/Contact/Contact"
import { NavBar } from "./components/NavBar/NavBar"


export const App = () => {
    return (
    <Routes>
        <Route
                path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }>

        
            <Route index element={<Home/>}/>
        
                
        
            <Route path="bio" element={<Bio />}/>
                <Route path="merch" element={<Merch />}></Route>
                <Route path="socials" element={<Socials />}></Route>
                <Route path="contact" element={<Contact />} />

        </Route>
    
    
  
    </Routes>)
}

