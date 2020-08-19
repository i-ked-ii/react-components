import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaPinterestP,
  FaHeart,
} from "react-icons/fa";
import { FooterStyle } from "./style";

const Footer = () => {
  return (
    <FooterStyle className="footer_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                <Link to="/">
                  <img src="assets/img/logo2.png" alt="" />
                </Link>
                <div className="d-lg-block d-none">
                  <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                    <div className="collapse navbar-collapse offset">
                      <Nav className="nav navbar-nav menu_nav mx-auto">
                        <NavItem>
                          <NavLink className="text-white" href="#">
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="text-white" href="#">
                            About
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="text-white" href="#">
                            Portfolio
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="text-white" href="#">
                            BLog
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink className="text-white" href="#">
                            Services
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="footer_social mt-lg-0 mt-4">
                <Link to="/">
                  <FaFacebookF />
                </Link>
                <Link to="/">
                  <FaTwitter />
                </Link>
                <Link to="/">
                  <FaSkype />
                </Link>
                <Link to="/">
                  <FaPinterestP />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            {`Copyright © ${new Date().getFullYear()}
            All rights reserved | This template is made with `}
            <FaHeart /> by
            <Link to="https://colorlib.com">Colorlib</Link>
          </p>
        </div>
      </div>
    </FooterStyle>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
Footer.defaultProps = {
  className: "",
};
export default Footer;
