import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <>
      <div className="navigation">
        {["home", "about", "work", "skills", "contact"].map((i) => (
          <div
            key={i}
            className="navigation-dot"
            href={i}
            style={active === i ? { backgroundColor: "#313BAC" } : {}}
          />
        ))}
        <div>asdkçlfjklasdjfkljaçsl</div>
      </div>
    </>
  );
};

export default NavigationDots;
