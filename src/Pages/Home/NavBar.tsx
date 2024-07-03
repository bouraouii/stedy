import React from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavBar: React.FC = () => {
  const options = [
    { value: "français", label: "français" },
    { value: "anglais", label: "anglais" },
  ];

  const [traduction, setTraduction] = React.useState(options[0]);

  const login = JSON.parse(localStorage.getItem("login") || "{}");
  const navigate = useNavigate();
  console.log("🚀 ~ login:", login);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/accueil">
          Accueil
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!login.mail && (
              <>
                <Nav.Link as={NavLink} to="/" end>
                  LOGIN
                </Nav.Link>
              </>
            )}

            {login.mail && (
              <>
                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={NavLink} to="/projects">
                  Projects
                </Nav.Link>
                <Nav.Link as={NavLink} to="/resume">
                  Resume
                </Nav.Link>
              </>
            )}
          </Nav>
          <div className="d-flex">
            <Select
              options={options}
              value={traduction}
              onChange={(e: any) => setTraduction(e)}
              className=""
            />
            {login.mail && (
              <Button
                color="danger"
                className="mx-5"
                onClick={() => {
                  localStorage.clear();
                  navigate("");
                }}
              >
                Déconnection
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
