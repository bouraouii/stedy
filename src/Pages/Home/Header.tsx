import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { data, splitTextIntoLines, structureData } from "../../Constant/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import errorToast from "../../Constant/ErrorToast";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

import ModalComponent from "../../Card/Card";

import "./Style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

function Header() {
  const [login, setLogin] = useState({ mail: "", password: "" });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleValidSubmit = (e: any) => {
    e.preventDefault();

    if (login.mail === data.name && login.password === data.password) {
      const jsonString = JSON.stringify(login);
      localStorage.setItem("login", jsonString);

      navigate("/accueil");
    } else {
      errorToast("Identifiants incorrects.", "error");
    }
  };

  const dataSlice = useSelector((state: RootState) => state.data.data);

  
  
  const chunks = splitTextIntoLines(structureData[1].title ?? "", 3);

  return (
    <section>
      <ToastContainer />
      <Container className="home-container text-center" id="home">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="intro-title">
              ESN
              <br />
              Next Generation
            </h1>

            {chunks.map((chunk, index) => (
              <p key={index} className="intro-desc mb-0 mb-sm-1 ">
                <span >
                  {chunk}                 
                </span>
              </p>
            ))}
          </div>
          <div className="d-block d-sm-none text-center my-4">

          </div>
        </div>

      </Container>

    </section>
  );
}

export default Header;
