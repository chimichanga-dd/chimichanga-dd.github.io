import React from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./components/portfolio";

document.addEventListener("DOMContentLoaded", () => {
  let portfolioContainer = document.getElementById("portfolio-container");
  createRoot(portfolioContainer).render(<Portfolio />);
});
