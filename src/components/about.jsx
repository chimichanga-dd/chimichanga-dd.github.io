import React from "react"

const About = () => {

    return(
        <div className="about-container">
            <div className="console-top">
                <div className="red-button fake-icon"></div>
                <div className="yellow-button fake-icon"></div>
                <div className="green-button fake-icon"></div>
            </div>
            <ul className="console-bottom">

                <li className="contact-info">
                    <div className="contact-info input">
                        <span className="arrow">></span>David.contactInfo
                    </div>
                    <div className="contact-info output">
                            ["<a href="mailto:chimichanga@g.ucla.edu" target="_blank" alt="email address">chimichanga@g.ucla.edu</a>",
                        "<a href="https://www.linkedin.com/in/david-d-b36589190/" target="_blank" alt="linkedin link">LinkedIn</a>"],
                        "<a href="https://github.com/chimichanga-dd" target="_blank" alt="github link">GitHub</a>"]
                    </div>
                </li>

                <li className="resume" key={"resume"}>
                    <div className="resume input">
                        <span className="arrow">></span>David.resume
                    </div>
                        <div className="resume output">
                            ["<a href="https://chimichanga-dd.github.io/resume/" target="_blank" alt="resume link">Resume</a>"]
                    </div>
                </li>

                <li className="education" key={"education"}>
                    <div className="education input">
                        <span className="arrow">></span>David.education
                    </div>
                        <div className="education output">
                            [" B.A. Geography - University of California Los Angeles", "Self Study - App Academy Full Stack Bootcamp"]
                    </div>
                </li>

                <li className="tech" key={"tech"}>
                    <div className="tech input">
                        <span className="arrow">></span>David.techStack
                    </div>
                        <div className="tech output">
                            ["Ruby", "HTML", "Javascript", "CSS", "Rails", "React", "Redux", "PostgreSQL", "Python", "GIS"]
                    </div>
                </li>

                <li className="interests" key={"interests"}>
                    <div className="interests input">
                        <span className="arrow">></span>David.interests
                    </div>
                        <div className="interests output">
                            ["Skateboarding", "Rock Climbing", "League of Legends", "Apparel"]
                    </div>
                </li>
                
                <li className="blank input" key={"blank"}>
                    <span className="arrow">></span><div className="blinker"></div>
                </li>
            </ul>
        </div>
    )


}

export default About