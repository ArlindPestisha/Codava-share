import React from "react";
import "./footer.scss";
import Fb from "../../assets/icons/facebook.svg";
import In from "../../assets/icons/instagram.svg";
import Tw from "../../assets/icons/twitter.svg";
import Ln from "../../assets/icons/linkedin.svg";

const Footer = (props) => {
  return (
    <div className="container">
      <div className="left">
        <h4>Codava</h4>
        <span>Codava Sweden AB 2021</span>
      </div>
      <div className="right">
        <Fb />
        <In />
        <Tw />
        <Ln />
      </div>
    </div>
  );
};

export default Footer;
