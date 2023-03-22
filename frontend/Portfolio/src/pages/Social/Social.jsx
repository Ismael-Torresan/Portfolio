import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Social = () => {
  return (
    <div className="social">
      <div style={{ cursor: "pointer" }}>
        <BsGithub
          onClick={() => window.open("https://github.com/Ismael-Torresan")}
        />
      </div>
      <div style={{ cursor: "pointer" }}>
        <BsLinkedin
          onClick={() =>
            window.open("https://www.linkedin.com/in/Ismael-Torresan/")
          }
        />
      </div>
    </div>
  );
};

export default Social;
