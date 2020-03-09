

import React from "react";
import demo_lotg from "../images/demo/lotg_demo.png";
import demo_1024 from "../images/demo/1024_demo.png";

const projectList = [
    {
        name: "Lord of the Gram",
        description: `Lord of the Gram is a clone of the popular social media app - InstaGram. 
                      It features accounts and posts made by fictional characters from the Lord
                      of the Rings book. Post your own content, follow other users, scroll through
                      your feed and like the posts you like!`,
        tech: ["HTML5", "CSS3", "SASS", "Javascript", "ES6", "Rails", "React", "Redux", "Babel", "PostgreSQL"],
        links:{
            live: "https://lord-of-the-gram.herokuapp.com/",
            source: "https://github.com/chimichanga-dd/LordOfTheGram"
        },
        demo: demo_lotg
    },
    {
        name: "1024",
        description: `1024 is a clone of a clone (2048) of a clone (1024) of a game (threes).
                      A player slides tiles using arrow keys, combining those that have the same value.
                      Create a "1024" and win the game before running out of space.`,
        tech: ["HTML5", "CSS3", "Javascript", "ES6", "React", "Babel"],
        links:{
            live: "https://ten-twenty-four.herokuapp.com/",
            source: "https://github.com/chimichanga-dd/1024"
        },
        demo: demo_1024
    }

]

const Projects = () => {

    return(
        <div id="Projects" className="projects-container">
            <h2 className="section-header">
                Projects
            </h2>
            <div className="line-break"></div>
            {projectList.map( (proj) => {
                    return(
                        <div className={`proj`} key={proj.name}>
                            <div className="proj-pic">
                                <img src={proj.demo} alt={`demo for ${proj.name}`} className="proj-demo"/>
                            </div>
                            <h3 className={"proj-name"}>{proj.name}</h3>
                            <div className={"proj-description"}>{proj.description}</div>
                            <ul className={"proj-tech"}>
                                {proj.tech.map((tech, idx) => {
                                    return (
                                        <li className="tech-buttons" key={`tech-${idx}`}>
                                            {tech}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="proj-links">
                                <a href={proj.links.live} target="_blank" className="live-link">Demo</a>
                                <a href={proj.links.source} target="_blank" className="source-link">Source</a>
                            </div>
                        </div>
                    )
            })}
        </div>
    )

}

export default Projects