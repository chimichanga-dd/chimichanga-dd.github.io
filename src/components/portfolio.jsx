
import { HashRouter, Switch, Route } from "react-router-dom";

import React from "react";
import Nav from "./nav";
import Welcome from "./welcome";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";


class portfolio extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                    <Route path="/">
                        <div className="portfolio">
                            <Nav />
                            <Welcome />
                            <About />
                            <Projects />
                            <Contact />
                        </div>
                    </Route>
                </Switch>
            </HashRouter>
        )
    }

}

export default portfolio