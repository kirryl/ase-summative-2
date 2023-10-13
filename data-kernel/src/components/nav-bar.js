import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo-white.svg";

const NavBarDataKernel = () => {
  return (
    <Navbar className="navbar-expand-lg navbar-light bg-light fixed-bottom navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top color-white"
            alt="Data Kernel Logo"
          />
          {"   "}
          Data Kernel_
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBarDataKernel;
