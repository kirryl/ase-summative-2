import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo-white.svg";

const NavBarDataKernel = () => {
  return (
    <Navbar className="navbar-expand-lg fixed-bottom navbar-dark bg-dark bg-opacity-0">
      <Container>
        <Navbar.Brand href="/">
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
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="https://github.com/kirryl/ase-summative-2/tree/main#readme">
            About
          </Nav.Link>
          <NavDropdown
            title="Data Export"
            id="basic-nav-dropdown"
            className="dropup"
          >
            <NavDropdown.Item href="/country-export">
              Countries
            </NavDropdown.Item>
            <NavDropdown.Item>TBC</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarDataKernel;
