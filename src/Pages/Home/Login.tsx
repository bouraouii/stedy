import React, { useState } from "react";
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import errorToast from "../../Constant/ErrorToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Login() {


  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const jsonString = JSON.stringify(formData);
 

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut
    setError(""); // Réinitialise les erreurs

    // Validation simple (par exemple : tous les champs doivent être remplis)
    if (!formData.username || !formData.password) {
      setError("Both fields are required!");
    
      
      return;
    }
        
    if (formData.username === "test"&&formData.password==="test") {
        localStorage.setItem("login", jsonString);
        return navigate("/saidBar")
      }

  console.log("fdffdfddf");
  console.log("fdffdfddf");
    errorToast("Identifiants incorrects.", "error");
    
    // Insérer votre logique ici (par exemple : envoyer les données à une API)
  };

  return (
    <section>
    <ToastContainer />
    <div
      style={{
        height: "100vh", // Full page height
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        backgroundColor: "#f8f9fa", // Light background
      }}
    >
      <Card
        style={{
          width: "22rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardBody>
          <CardTitle tag="h4" className="text-center mb-4">
            Login
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-danger text-center" role="alert">
                {error}
              </div>
            )}
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <Button type="submit" color="primary" block>
              Login
            </Button>
          </Form>
        </CardBody>
           <Button  color="" onClick={()=> navigate("/")} >
              back
            </Button>
      </Card>
    </div>
    </section>
  );
}

