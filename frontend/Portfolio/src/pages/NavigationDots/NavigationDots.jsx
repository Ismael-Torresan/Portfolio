/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <>
      <div className="navigation">
        {["home", "about", "works", "skills", "contact"].map((i) => (
          <div
            key={i}
            className="navigation-dot"
            href={i}
            style={active === i ? { backgroundColor: "#313BAC" } : {}}
          />
        ))}
      </div>
    </>
  );
};

export default NavigationDots;
