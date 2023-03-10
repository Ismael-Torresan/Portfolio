import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import circle from "../../images/circle.svg";
import profile from "../../images/profile.png";
import sass from "../../images/sass.png";
import python from "../../images/python.png";
import react from "../../images/react.png";

const scale = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const images = [python, react, sass];

const Header = () => {
  return (
    <div id="home" className="header flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header-info"
      >
        <div className="header-badge">
          <div className="badge-cmp flex">
            <span>wave emoji or whatever</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ismael</h1>
            </div>
          </div>
          <div className="tag-cmp flex">
            <p className="p-text">Full stack Developer</p>
            {/* <p className="p-text">Freelancer</p> */}
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="header-img"
      >
        <img src={profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variant={scale}
        whileInView={scale.whileInView}
        className="header-circles"
      >
        {images.map((circle, index) => (
          <div key={circle} className="circle-cmp flex">
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
