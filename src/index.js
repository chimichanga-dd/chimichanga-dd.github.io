import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./components/portfolio"


document.addEventListener("DOMContentLoaded", () => {
    let portfolioContainer = document.getElementById("portfolio-container");
    ReactDOM.render(<Portfolio />, portfolioContainer)
})
