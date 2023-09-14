import React from "react";
import $ from "jquery";
import "../stylesheets/nav.css";

const jqueryScroll = (eleID) => {
  $("html, body").animate(
    {
      scrollTop: $(`#${eleID}`).offset().top
    },
    800
  );
};

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-link-container">
        <li key={"About"}>
          <a
            className="nav-bar-link"
            onClick={(e) => {
              e.preventDefault();
              jqueryScroll("About");
            }}
          >
            About
          </a>
        </li>
        <li key={"Projects"}>
          <a
            className="nav-bar-link"
            onClick={(e) => {
              e.preventDefault();
              jqueryScroll("Projects");
            }}
          >
            Projects
          </a>
        </li>
        <li key={"Contact"}>
          <a
            className="nav-bar-link"
            onClick={(e) => {
              e.preventDefault();
              jqueryScroll("Contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
