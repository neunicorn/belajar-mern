import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  ICFacebook,
  ICYoutube,
  ICInstagram,
  ICTwitter,
  xoxoLove,
} from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-icon">
          <div>
            <img src={xoxoLove} alt="logo" width={100} />
          </div>
          <div className="icon-png">
            <a href="https://www.youtube.com/" target="_blank">
              <Icon img={ICYoutube} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <Icon img={ICInstagram} />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <Icon img={ICTwitter} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Icon img={ICFacebook} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>
          Copyright &#169; 2018 - 2022 Zulfan's Company All Right Reserved
        </span>{" "}
      </div>
    </div>
  );
};

export default Footer;
