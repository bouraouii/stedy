import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { data } from "../../Constant/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import errorToast from "../../Constant/ErrorToast";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

import ModalComponent from "../../Modal/Modal";

import "./Style.css";

function Login() {
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
      <p className="intro-desc mb-0 mb-sm-5">
        StedY repense le métier de conseil en technologies et services
        numériques <br />
        pour délivrer plus de valeur, de transparence et d’engagement
        <br />
        à ses consultants comme à ses clients entreprises.
      </p>
    </div>
    <div className="d-block d-sm-none text-center my-4">
     
    </div>
  </div>
  
</Container>

    </section>
  );
}

export default Login;
