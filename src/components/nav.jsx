
import React from "react"

const Nav = () => {
    return(
        <nav className="nav-bar">
            <ul className="nav-bar-link-container">
                <li key={"About"}>
                    <a href="#About" className="nav-bar-link">About</a>
                    </li>
                <li key={"Projects"}>
                    <a href="#Projects" className="nav-bar-link">Projects</a>
                </li>
                <li key={"Contact"}>
                    <a href="#Contact" className="nav-bar-link">Contact</a>
                </li>
            </ul>
            
        </nav>
    )
}

export default Nav