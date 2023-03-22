import React from "react";
// import NavigationDots from "../NavigationDots/NavigationDots";
import Social from "../Social/Social";

const Wrapper = (Component, idName, classNames) =>
  function HOC() {
    // console.log(idName);
    // console.log(classNames);
    return (
      <div
        id={idName}
        style={{ display: "flex", flexDirection: "column-reverse" }}
        className={`container ${classNames}`}
      >
        {/* <NavigationDots /> */}
        {/* <Social /> */}
        <div className="wrapper flex">
          <Component />
        </div>
      </div>
    );
  };

export default Wrapper;
