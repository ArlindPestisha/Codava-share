import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby";
import React from "react";
import "./burger-nav.scss";

class BurgerNav extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <>
        <div className="burger-nav">
          <Menu right noOverlay>
            <Link className="menu-item" to="/">
              Home
            </Link>
            <Link className="menu-item" to="/services">
              Services
            </Link>
            <Link className="menu-item" to="/about">
              About
            </Link>
            <Link className="menu-item" to="/contact">
              Contact
            </Link>
          </Menu>
        </div>
      </>
    );
  }
}

export default BurgerNav;
