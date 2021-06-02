import React from "react";
import Nav from "../Nav/Nav";
import BurgerNav from "../Nav/BurgerNav";
import { Link } from "gatsby";
import "./header.scss";
import Codava from "../../assets/icons/codava-black.svg";
import useWindowSize from "../../../utils/useWindowSize";
const Header = () => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <Codava />
          </Link>
        </div>
        {width < 1024 && <BurgerNav />}
        <Nav />
      </div>
    </>
  );
};

export default Header;
