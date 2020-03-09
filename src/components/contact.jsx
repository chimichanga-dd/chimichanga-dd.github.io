
import React from "react"
import hs from "../images/hs2.jpg";
import linkedIn from "../images/LinkedIn-Logos/LI-In-Bug.png";
import gitHub from "../images/GitHubMark/GitHub-Mark-64px.png"


const Contact = () => {

    return(
        <div id="Contact" className="contact-container">
            <h2 className="section-header">
                Contact
            </h2>
            <div className="line-break"></div>
            <div className="contact-list-container">
                <ul className="contact-list-top">
                    <li><a href="https://www.linkedin.com/in/david-d-b36589190/" target="_blank" alt="linkedin link"><img src={linkedIn} alt={"linkedIn logo"} className="logo" /></a></li>
                    <li><img src={hs} alt="headshot" className="contact-headshot" /></li>
                    <li><a href="https://github.com/chimichanga-dd" target="_blank" alt="github link"><img src={gitHub} alt={"gitHub logo"} className="logo" /></a></li>
                </ul>
                <ul className="contact-list-bottom">
                    <li className="contact-email">
                        <a href="mailto:chimichanga@g.ucla.edu" target="_blank" alt="email address" rel="noopener">chimichanga@g.ucla.edu</a>
                    </li>
                </ul>
            </div>
        </div>
    )


}

export default Contact

