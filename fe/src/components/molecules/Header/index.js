import React from "react";
import "./header.css";
import { xoxoLove } from "../../../assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header_logo">
        <img
          src={xoxoLove}
          alt="logo"
          width={40}
          onClick={() => navigate("/")}
        />

        <h2 onClick={() => navigate("/")}>Nasya Blog</h2>
      </div>
      <div className="header_nav" onClick={() => navigate("/login")}>
        log out
      </div>
    </div>
  );
};

export default Header;
