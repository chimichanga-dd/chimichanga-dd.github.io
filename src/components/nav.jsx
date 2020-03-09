
import React from "react"
import $ from "jquery"

const jqueryScroll = (eleID) => {
    $('html, body').animate({
        scrollTop: $(`#${eleID}`).offset().top
    },800)
}


const Nav = () => {

    return(
        <nav className="nav-bar">
            <ul className="nav-bar-link-container">
                <li key={"About"}>
                    <button
                        onClick={(e) => { e.preventDefault(); jqueryScroll("About")}}
                    >
                        About
                    </button>
                    </li>
                <li key={"Projects"}>
                    <button
                     onClick={(e) => {e.preventDefault(); jqueryScroll("Projects")}}
                    >
                        Projects
                    </button>
                </li>
                <li key={"Contact"}>
                    <button
                        onClick={(e) => { e.preventDefault(); jqueryScroll("Contact")}}
                    >
                        Contact
                    </button>
                </li>
            </ul>
            
        </nav>
    )
}

export default Nav