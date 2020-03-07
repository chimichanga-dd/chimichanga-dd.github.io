

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
        tech: ["HTML5", "CSS3", "SASS", "Javascript", "ES6", "Rails", "React", "Babel", "PostgreSQL"],
        links:{
            live: "https://lord-of-the-gram.herokuapp.com/",
            source: "https://github.com/chimichanga-dd/LordOfTheGram"
        },
        demo: demo_lotg
    },
    {
        name: "1024",
        description: `Lord of the Gram is a clone of the popular social media app - InstaGram. 
                      It features accounts and posts made by fictional characters from the Lord
                      of the Rings book. Post your own content, follow other users, scroll through
                      your feed and like the posts you like!`,
        tech: ["HTML5", "CSS3", "SASS", "Javascript", "ES6", "Rails", "React", "Babel", "PostgreSQL"],
        links:{
            live: "https://lord-of-the-gram.herokuapp.com/",
            source: "https://github.com/chimichanga-dd/LordOfTheGram"
        },
        demo: demo_1024
    }

]

const Projects = () => {

    return(
        <div className="projects-container">
            {projectList.map( (proj) => {
                    return(
                        <div className={`proj`} key={proj.name}>
                            <div className="proj-pic">
                                <img src={proj.demo} alt={`demo for ${proj.name}`} className="proj-demo"/>
                            </div>
                            <div className="proj-info">
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
                                    <a href={proj.links.live} target="_blank" className="live-link">Live</a>
                                    <a href={proj.links.source} target="_blank" className="source-link">Source</a>
                                </div>
                            </div>
                        </div>
                    )
            })}
        </div>
    )

}

export default Projects