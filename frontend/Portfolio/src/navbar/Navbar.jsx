import React, { useState } from "react";
import "./Navbar.scss";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
// import name from "../images/name.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="meu_logo"></div>
        {/* <img src={name} alt="logo" /> */}
      </div>

      <ul className="navbar__links">
        {["home", "about", "works", "skills", "contact"].map((i) => (
          <li className="flex p-text" key={i}>
            <div />
            <a href={`#${i}`}>{i}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__menu">
        {!toggleMenu ? (
          <RxHamburgerMenu size={30} onClick={() => setToggleMenu(true)} />
        ) : (
          <>
            <RxCross2
              size={30}
              className="svg"
              onClick={() => setToggleMenu(false)}
            />
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <section className="list">
                <ul>
                  {["home", "about", "works", "skills", "contact"].map((i) => (
                    <li key={i}>
                      <a href={`#${i}`} onClick={() => setToggleMenu(false)}>
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
