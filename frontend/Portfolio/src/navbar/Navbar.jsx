import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="image.logo" alt="logo" />
      </div>

      <ul className="navbar__links">
        {["home", "about", "work", "skills", "contact"].map((i) => (
          <li className="flex p-text" key={i}>
            <div />
            <a href="{i}">{i}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
