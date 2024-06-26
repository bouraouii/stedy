import React from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar: React.FC = () => {
  const options = [
    { value: "français", label: "français" },
    { value: "anglais", label: "anglais" },
  ];

  const [traduction, setTraduction] = React.useState(options[0]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/resume">
              Resume
            </Nav.Link>
          </Nav>
          <Select
            options={options}
            value={traduction}
            onChange={(e: any) => setTraduction(e)}
            className="mx-2"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
