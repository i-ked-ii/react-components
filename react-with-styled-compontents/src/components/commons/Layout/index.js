import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <>
      <Header notHome={props.notHome} />
      {props.children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  notHome: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
Layout.defaultProps = {
};
export default Layout;
