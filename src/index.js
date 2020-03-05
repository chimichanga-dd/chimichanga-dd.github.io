import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main"


document.addEventListener("DOMContentLoaded", () => {
    let gameContainer = document.getElementById("portfolio-container");
    ReactDOM.render(<Main />, gameContainer)
})
