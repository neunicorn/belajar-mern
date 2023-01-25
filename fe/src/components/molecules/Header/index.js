import React from "react";
import "./header.css";
import { xoxoLove } from "../../../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to={"/"}>
          <img src={xoxoLove} alt="logo" width={40} />
        </Link>
        <h2>Nasya Blog</h2>
      </div>
      <div className="header_nav">log out</div>
    </div>
  );
};

export default Header;
