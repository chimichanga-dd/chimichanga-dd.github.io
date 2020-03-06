import React from "react"

const About = () => {

    return(
        <div className="about-container">
            <div className="console-top">
                <div className="red-button"></div>
                <div className="yellow-button"></div>
                <div className="green-button"></div>
            </div>
            <div className="console">
                <div className="contact-info input">
                    David.contactInfo
                </div>
                <div className="contact-info output">
                    ["<a href="mailto:chimichanga@g.ucla.edu" target="_blank" alt="email address">chimichanga@g.ucla.edu</a>",
                    "<a href="https://www.linkedin.com/in/david-d-b36589190/" target="_blank" alt="linkedin link">LinkedIn</a>"],
                    "<a href="https://github.com/chimichanga-dd" target="_blank" alt="github link">GitHub</a>"]
                </div>
                <div className="resume input">David.resume</div>
                <div className="resume output">
                    ["<a href="https://chimichanga-dd.github.io/resume/" target="_blank" alt="resume link">Resume</a>"]
                </div>
                <div className="education input">David.education</div>
                <div className="education output">
                    [" B.A. Geography - University of California Los Angeles", "Self Study - App Academy Full Stack Bootcamp"]
                </div>
                <div className="tech input">David.techStack</div>
                <div className="tech output">
                    ["Ruby", "HTML", "Javascript", "CSS", "Rails", "React", "Redux", "PostgreSQL", "Python", "GIS"]
                </div>
                <div className="interests input">David.interests</div>
                <div className="interests output">
                    ["Skateboarding", "Rock Climbing", "League of Legends", "Apparel"]
                </div>
            </div>
        </div>
    )


}

export default About