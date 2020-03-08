
import React from "react"
import Nav from "./nav"
import Welcome from "./welcome"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"



class portfolio extends React.Component{

    render(){
        return(
            <div className="portfolio">
                <Nav />
                <Welcome />
                <About />
                <Projects />
                <Contact />
            </div>
        )
    }
    
}

export default portfolio