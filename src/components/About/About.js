import React from "react";
import "./about.scss";

const AboutComp = ({
  heading,
  subHeading,
  textParagraph,
  children,
  flipped,
}) => {
  return (
    <div className={flipped ? "about flipped" : "about"}>
      <div className="text-box">
        <h2>{heading}</h2>
        <h4>{subHeading}</h4>
        <div className="content">{textParagraph}</div>
      </div>

      <div className="icon">{children}</div>
    </div>
  );
};

export default AboutComp;
