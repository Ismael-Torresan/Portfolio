import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Social = () => {
  return (
    <div className="social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default Social;
