import React from "react";
import NavigationDots from "../NavigationDots/NavigationDots";
import Social from "../Social/Social";

const Wrapper = (Component, idName, classNames) =>
  function HOC() {
    console.log(idName);
    console.log(classNames);
    return (
      <div
        id={idName}
        style={{ display: "flex", flexDirection: "column-reverse" }}
        className={`container ${classNames ? classNames : "primarybg"}`}
      >
        <Social />
        <div className="wrapper flex">
          <Component />

          {/* <div className="copyright">
            <p className="p-text">@2023 ISMAEL</p>
            <p className="p-text">All rights reserved</p>
          </div> */}
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default Wrapper;
