import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header flex">
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
    </div>
  );
};

export default Header;
