import React from "react";
import "./NavBar.css";
import "../../App.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <a href="#Home">#Home</a>
        </li>
        <li>
          <a href="#about">#About</a>
        </li>
        <li>
          <a href="#skills">#Skills</a>
        </li>
        <li>
          <a href="#projects">#Projects</a>
        </li>
        <li>
          <a href="#contact">#Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
