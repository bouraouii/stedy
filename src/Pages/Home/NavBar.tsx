import React from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import myImage from "../../Image/logo13.svg"
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavBar: React.FC = () => {
  const options = [
    { value: "français", label: "français" },
    { value: "anglais", label: "anglais" },
  ];

  const [traduction, setTraduction] = React.useState(options[0]);

  const login = JSON.parse(localStorage.getItem("login") || "{}");
  const navigate = useNavigate();
  
   const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/accueil">
          <img src={myImage} alt="Description de l'image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto "> {/* ms-auto pousse l'élément à droite */}
            <button className="btn btn-primary my-2 mx-2 " onClick={scrollToContactForm} style={{width:"25vh", }}>
              Contactez-nous
            </button>
            <button className="btn btn-primary my-2 mx-2 " 
            onClick={()=>{

              if(login.password==="test" && login.username==="test"){
               navigate("/saidBar")
              }else{
                 navigate("/login");
              }
              
            }} 
            style={{width:"25vh", }}>
             {login.password==="test" && login.username==="test"? "Access Website Admin":"Login"}
            </button>
          </Nav>
         
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavBar;
