import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { data } from "../../Constant/data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import errorToast from "../../Constant/ErrorToast";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import "./Style.css";
import Modal from "../../Modal/Modal";
import ModalComponent from "../../Modal/Modal";

function Login() {
  const [login, setLogin] = useState({ mail: "", password: "" });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const notifySuccess = () =>
    toast.success("Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "custom-toast-success",
    });

  const navigate = useNavigate();
  const handleValidSubmit = (e: any) => {
    e.preventDefault();

    if (login.mail === data.name && login.password === data.password) {
      const jsonString = JSON.stringify(login);
      localStorage.setItem("login", jsonString);
      navigate("/accueil");
      notifySuccess();
    } else {
      errorToast("Identifiants incorrects.");
    }
  };

  return (
    <section>
      <ToastContainer />
      <Container fluid className="home-section home-container" id="home">
        <Container className="home-content" style={{ width: "600px" }}>
          <Form className="login-form" onSubmit={handleValidSubmit}>
            <Form.Group controlId="formBasicEmail">
              <InputGroup>
                <InputText
                  id="email"
                  value={login.mail}
                  onChange={(e: any) =>
                    setLogin({ ...login, mail: e.target.value })
                  }
                  placeholder="Enter email"
                  className="login-input"
                  autoComplete="off"
                />
              </InputGroup>
              <InputGroup>
                <Password
                  value={login.password}
                  onChange={(e: any) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                  placeholder="Password"
                  feedback={false}
                  toggleMask
                />
              </InputGroup>
              <Button variant="primary" type="submit" className="my-2">
                Login
              </Button>
              <div>
                <li onClick={() => setIsOpen(true)}>
                  <Link to="">Enregistrement</Link>
                </li>

                <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </Form.Group>
          </Form>
        </Container>
      </Container>
    </section>
  );
}

export default Login;
