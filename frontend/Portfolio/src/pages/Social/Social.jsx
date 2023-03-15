import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Social = () => {
  return null;
  return (
    <div className="social">
      <div style={{ cursor: "pointer" }}>
        <BsGithub
          onClick={() => window.open("https://github.com/Ismael-Torresan")}
        />
      </div>
      {/* <div>
        <FaFacebookF />
      </div> */}
      <div style={{ cursor: "pointer" }}>
        <BsLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ismael-torresan-a68206243/"
            )
          }
        />
      </div>
    </div>
  );
};

export default Social;
