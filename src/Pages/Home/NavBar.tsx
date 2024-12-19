import React from "react";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import myImage from "../../Image/logo13.svg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { decryptage } from "../../Constant/Cryptage";
import { setData } from "../../features/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";

type typeing={

  setTesting: React.Dispatch<React.SetStateAction<boolean>>; 
}



const NavBar: React.FC<typeing> = ({setTesting}) => {
  let user = "";
  let password = "";

  try {
    const encryptedUser = localStorage.getItem("user") || "{}";
    const encryptedPassword = localStorage.getItem("password") || "{}";

    // Ajout d'une vérification et d'une gestion des erreurs
    user = decryptage(encryptedUser);
    password = decryptage(encryptedPassword);
  } catch (error) {
    console.error("Erreur lors du décryptage des données : ", error);
  }

  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataSlice = useSelector((state: RootState) => state.data.data);

  const fetchData = async () => {
    try {
      const response = await fetch("https://backandstedy-29.onrender.com/api/v1/getTreeAdmin");
      const data = await response.json();

      if (data && data.text) {
        dispatch(setData(data.text)); // Envoi des données dans Redux via setData
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  if (Object.keys(dataSlice).length === 0) {
   
    fetchData();
  }else{
    setTesting(true)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/accueil">
          <img src={myImage} alt="Description de l'image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {" "}
            {/* ms-auto pousse l'élément à droite */}
            <button
              className="btn btn-primary my-2 mx-2 "
              onClick={scrollToContactForm}
              style={{ width: "25vh" }}
            >
              Contactez-nous
            </button>
            <button
              className="btn btn-primary my-2 mx-2 "
              onClick={() => {
                if (password === "test" && user === "test") {
                  navigate("/saidBar");
                } else {
                  navigate("/login");
                }
              }}
              style={{ width: "25vh" }}
            >
              {password === "test" && user === "test"
                ? "Access Website Admin"
                : "Login"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
