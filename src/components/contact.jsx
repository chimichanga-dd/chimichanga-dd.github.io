
import React from "react"
import hs from "../images/hs2.jpg";

const Contact = () => {

    return(
        <div className="contact-container">
            <h2 className="section-header">
                Contact
            </h2>
            <div className="line-break"></div>
            <ul className="contact-list">
                <li>LinkedIn</li>
                <li><img src={hs} alt="headshot"/></li>
                <li>Github</li>
            </ul>
        </div>
    )


}

export default Contact

