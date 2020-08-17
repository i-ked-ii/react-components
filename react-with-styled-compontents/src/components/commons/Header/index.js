import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { HeaderStyle } from "./style";

const Header = ({ props, notHome }) => {
  const pathname = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <HeaderStyle className={`${notHome === true ? "header_inner_page" : ""}`}>
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Navbar expand="lg">
              <NavbarBrand href="/" className="navbar-brand logo_h">
                <img src="assets/img/logo.png" alt="" />
              </NavbarBrand>
              <NavbarBrand href="/" className="navbar-brand logo_inner_page">
                <img src="assets/img/logo2.png" alt="" />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="nav navbar-nav menu_nav" navbar>
                  <NavItem active={pathname === "/" ? true : false}>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem active={pathname === "/about" ? true : false}>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem active={pathname === "/portfolio" ? true : false}>
                    <NavLink href="/portfolio">Portfolio</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Pages
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Services</DropdownItem>
                      <DropdownItem>Portfolio Details</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Blog
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Blog</DropdownItem>
                      <DropdownItem>Blog Details</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem active={pathname === "/contact" ? true : false}>
                    <NavLink href="/contact">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
