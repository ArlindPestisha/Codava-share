import React from "react";
import "./service-card.scss";
import { Link } from "gatsby";

const ServiceCard = (props) => {
  const {
    projectTitle,
    projectLink,
    projectImg,
    text,
    testimonial,
    name,
    altText,
    flipped,
  } = props;
  return (
    <section className={flipped ? "service-card flipped" : "service-card"}>
      <div className="card-img">{projectImg}</div>
      <div className="card-text">
        <Link to={projectLink}>
          <h4 className="service-title">{projectTitle}</h4>
        </Link>
        <p>{text}</p>
        <p>{testimonial}</p>
        <p>{name}</p>
      </div>
    </section>
  );
};

export default ServiceCard;
