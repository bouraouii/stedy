import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import myImage from "../../Image/logo13.svg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { decryptage } from "../../Constant/Cryptage";
import { setData } from "../../features/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import errorToast from "../../Constant/ErrorToast";

type TypingProps = {
  setTesting: React.Dispatch<React.SetStateAction<boolean>>;
  testing: boolean;
};

const NavBar: React.FC<TypingProps> = ({ setTesting, testing }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataSlice = useSelector((state: RootState) => state.data.data);

  let user = "";
  let password = "";

  // Récupération et décryptage des données utilisateur
  try {
    const encryptedUser = localStorage.getItem("user") || "{}";
    const encryptedPassword = localStorage.getItem("password") || "{}";

    user = decryptage(encryptedUser);
    password = decryptage(encryptedPassword);
  } catch (error) {
    console.error("Erreur lors du décryptage des données : ", error);
  }

  // Fonction pour récupérer les données via fetch
  const fetchData = async () => {
   
    try {
      const response = await fetch(
        "https://backandstedy-29.onrender.com/api/v1/getTreeAdmin"
      );
      const data = await response.json();
     

      if (data && data.text) {
        dispatch(setData(data.text));
      }
    } catch (error) {
      errorToast("Une erreur est survenue, veuillez réessayer.", "error");
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      setTesting(true);
    }
  };

  // Appel de fetchData avec useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // Fonction pour faire défiler jusqu'au formulaire de contact
  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {testing && (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={NavLink} to="/accueil">
              <img src={myImage} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* Bouton Contactez-nous */}
                <button
                  className="btn btn-primary my-2 mx-2"
                  onClick={scrollToContactForm}
                  style={{ width: "25vh" }}
                >
                  Contactez-nous
                </button>
                {/* Bouton Login / Admin */}
                <button
                  className="btn btn-primary my-2 mx-2"
                  onClick={() =>
                    password === "test" && user === "test"
                      ? navigate("/saidBar")
                      : navigate("/login")
                  }
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
      )}
    </>
  );
};

export default NavBar;
