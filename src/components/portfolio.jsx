
import React from "react"
import Welcome from "./welcome"
import About from "./about"
import Projects from "./projects"


class portfolio extends React.Component{

    render(){
        return(
            <div className="portfolio">
                <Welcome />
                <About />
                <Projects />
            </div>
        )
    }
    
}

export default portfolio