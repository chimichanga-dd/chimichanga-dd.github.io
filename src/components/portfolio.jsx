
import React from "react"
import Welcome from "./welcome"
import About from "./about"


class portfolio extends React.Component{

    render(){
        return(
            <div className="portfolio">
                <Welcome />
                <About />
            </div>
        )
    }
    
}

export default portfolio