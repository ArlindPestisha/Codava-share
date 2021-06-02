import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layout.scss";

// styling needs to be applied

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
