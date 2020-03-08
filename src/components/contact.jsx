
import React from "react"
import hs from "../images/hs2.jpg";
import linkedIn from "../images/LinkedIn-Logos/LI-In-Bug.png";
import gitHub from "../images/GitHubMark/GitHub-Mark-64px.png"

const Contact = () => {

    return(
        <div className="contact-container">
            <h2 className="section-header">
                Contact
            </h2>
            <div className="line-break"></div>
            <ul className="contact-list">
                <li><img src={linkedIn} alt={"linkedIn logo"} className="logo"/></li>
                <li><img src={hs} alt="headshot" className="contact-headshot" /></li>
                <li><img src={gitHub} alt={"gitHub logo"} className="logo"/></li>
            </ul>
        </div>
    )


}

export default Contact

