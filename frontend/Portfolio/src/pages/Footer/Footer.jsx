import React, { useState } from "react";
import { client } from "../../client";

import "./Footer.scss";
import Wrapper from "../component/Wrapper";
import MotionWrapper from "../component/MotionWrapper";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: username,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 style={{ marginTop: "1rem" }} className="head-text">
        Let's chat
      </h2>
      <div className="footer-cards">
        <div className="footer-card">
          <img src={mail} alt="email" />
          <a className="p-text" href="mailto:ismael_torresan@live.com">
            Ismael_Torresan@live.com
          </a>
        </div>
        <div className="footer-card">
          <img src={phone} alt="email" />
          <a className="p-text" href="tel:+55 (54) 992389595">
            +55 (54) 992389595
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="footer-form flex">
          <div className="flex">
            <input
              className="p-text"
              type="text"
              placeholder="Name"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <input
              className="p-text"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Message"
              value={message}
              name="message"
              onChange={handleChange}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h4 className="head-text">Thank you for getting in touch!</h4>
        </div>
      )}
    </>
  );
};

export default Wrapper(MotionWrapper(Footer, "footer"), "contact", "primarybg");
