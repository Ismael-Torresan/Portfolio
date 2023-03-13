import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Social = () => {
  return (
    <div className="social">
      <div>
        <BsGithub />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
};

export default Social;
