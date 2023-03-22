import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Social = () => {
  return (
    <div className="social">
      <div
        onClick={() => window.open("https://github.com/Ismael-Torresan")}
        style={{ cursor: "pointer" }}
      >
        <BsGithub />
      </div>
      <div
        onClick={() =>
          window.open("https://www.linkedin.com/in/Ismael-Torresan/")
        }
        style={{ cursor: "pointer" }}
      >
        <BsLinkedin />
      </div>
    </div>
  );
};

export default Social;
