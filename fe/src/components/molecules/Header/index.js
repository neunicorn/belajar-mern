import React from "react";
import "./header.css";
import { xoxoLove } from "../../../assets";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={xoxoLove} alt="logo" width={40} />
        <h2>Nasya Blog</h2>
      </div>
      <div className="header_nav">log out</div>
    </div>
  );
};

export default Header;
