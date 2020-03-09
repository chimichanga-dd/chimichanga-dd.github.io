
import React from "react"


const Nav = () => {

    return(
        <nav className="nav-bar">
            <ul className="nav-bar-link-container">
                <li key={"About"}>
                    <button
                     onClick={(e) => {e.preventDefault(); }}
                    >
                        About
                    </button>
                    </li>
                <li key={"Projects"}>
                    <button
                     onClick={(e) => {e.preventDefault(); }}
                    >
                        Projects
                    </button>
                </li>
                <li key={"Contact"}>
                    <button
                        onClick={(e) => { e.preventDefault(); }}
                    >
                        Contact
                    </button>
                </li>
            </ul>
            
        </nav>
    )
}

export default Nav