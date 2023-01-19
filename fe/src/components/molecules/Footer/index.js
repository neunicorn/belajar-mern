import React from "react";
import "./footer.css";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <img src="https://i.imgur.com/4ZQZQ9r.png" alt="logo" width={30} />
        </div>
        <div>
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
