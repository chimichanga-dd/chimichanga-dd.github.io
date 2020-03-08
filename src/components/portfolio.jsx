
import React from "react"
import Nav from "./nav"
import Welcome from "./welcome"
import About from "./about"
import Projects from "./projects"



class portfolio extends React.Component{

    render(){
        return(
            <div className="portfolio">
                <Nav />
                <Welcome />
                <About />
                <Projects />
            </div>
        )
    }
    
}

export default portfolio