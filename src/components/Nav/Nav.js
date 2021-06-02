import { Link } from "gatsby";
import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <>
      <div className="container-link">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default Nav;
