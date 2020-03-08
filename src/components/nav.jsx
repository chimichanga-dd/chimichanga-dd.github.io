
import React from "react"

const Nav = () => {
    return(
        <nav className="nav-bar">
            <ul className="nav-bar-links">
                <li key={"About"}><a href="#About">About</a></li>
                <li key={"Projects"}><a href="#Projects">Projects</a></li>
                <li key={"Contact"}><a href="#Contact">Contact</a></li>
            </ul>
            
        </nav>
    )
}

export default Nav