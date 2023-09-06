// import { HashRouter, Switch, Route } from "react-router-dom";

import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

import Nav from "./nav";
import Welcome from "./welcome";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: (
          <div className="portfolio">
            <Nav />
            <Welcome />
            <About />
            <Projects />
            <Contact />
          </div>
        )
      },
      {
        path: "/resume",
        element: <Resume />
      }
    ]
  }
]);

const Portfolio = () => {
  return <RouterProvider router={router} />;
};

export default Portfolio;
