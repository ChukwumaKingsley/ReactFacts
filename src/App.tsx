import './App.css'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { useState } from 'react'

export default function App() {
    const [darkMode, setDarkMode] = useState("")
    
    function toggleTheme() {
        setDarkMode(prevTheme => {
            const theme = prevTheme === "dark" ? "" : "dark"
            return theme
        })
    }
    
    return (
        <div className="container">
            <Navbar onClick={toggleTheme} darkMode={darkMode}/>
            <Main onClick={toggleTheme} darkMode={darkMode}/>
        </div>
    )
}
