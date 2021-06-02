import React from "react";
import "./hero.scss";
import { Link } from "gatsby";

const Hero = (props) => {
  const {
    heading,
    shortText,
    background,
    toggleButton,
    fullHero,
    brandText,
    icon,
  } = props;
  return (
    <div className={fullHero ? "heroFull" : "hero"}>
      <div className="hero-inner">
        <h1>{heading}</h1>
        <p>{shortText}</p>
        <p className="brand">{brandText}</p>
        {toggleButton && (
          <div className="button">
            <Link to="/contact">
              <button className="hero-button">SAY HI</button>
            </Link>
          </div>
        )}
      </div>
      <div className="hero-img">{icon}</div>
    </div>
  );
};

export default Hero;
