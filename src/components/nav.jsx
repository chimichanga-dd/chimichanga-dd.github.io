
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
                    <a
                        onClick={(e) => { e.preventDefault(); jqueryScroll("About")}}
                    >
                        About
                    </a>
                    </li>
                <li key={"Projects"}>
                    <a
                     onClick={(e) => {e.preventDefault(); jqueryScroll("Projects")}}
                    >
                        Projects
                    </a>
                </li>
                <li key={"Contact"}>
                    <a
                        onClick={(e) => { e.preventDefault(); jqueryScroll("Contact")}}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            
        </nav>
    )
}

export default Nav