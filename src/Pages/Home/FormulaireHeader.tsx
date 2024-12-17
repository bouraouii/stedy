import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import myImage from "../../Image/call.svg";
import Image from "../../Image/addrese.svg";
import axios from "axios";
import errorToast from "../../Constant/ErrorToast";
import { generateUUID } from "../../Constant/data";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

const FormulaireHeader = () => {
  const [formData, setFormData] = useState({
    object: "RPO",
    name: "",
    firstName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    
    setIsLoading(true);
     // Reset any previous response message
     

    try {
      const response = await axios.post('http://localhost:5000/api/v1/pushCommand', {[generateUUID()]:formData});
      
      // Handle success
      if (response.data.error === true) {
        console.log(`Erreur: ${response.data.message}`);
       
      } else {
       
        errorToast("Identifiants incorrects.", "success");
        setFormData({
          object: "RPO",
          name: "",
          firstName: "",
          email: "",
          phone: "",
          company: "",
          message: "",}
        )
      }
    } catch (error) {
      // Handle error
      console.error('An error occurred:', error);
      console.log("Une erreur est survenue, veuillez réessayer.");
      
    } finally {
      setIsLoading(false); // Disable loading state after request is done
    }
  }; 
  const dataSlice: any = useSelector((state: RootState) => state.data.data);

  
  

  return (
    <Container id="contact-form" className="contact-page mt-5">
      <Row>
        {/* Formulaire de Contact */}
        <Col md={6}>
          <div className="form-card p-4 shadow-sm">
            <h2 className="mb-3">Formulaire de contact</h2>
            <p className="text-muted mb-4">
              Une réponse vous sera faite sous 24h
            </p>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="object">
                  Objet <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="select"
                  name="object"
                  id="object"
                  value={formData.object}
                  onChange={handleChange}
                  required
                >
                  <option value="RPO">RPO</option>
                  <option value="Demande d'information(s)">
                    Demande d'information(s)
                  </option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="name">
                  Nom <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="firstName">
                  Prénom <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Prénom"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">
                  Email <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="nom@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">
                  Téléphone <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="0600000000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="company">Entreprise</Label>
                <Input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Nom de votre entreprise"
                  value={formData.company}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">
                  Message <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button
                color="primary"
                type="submit"
                className="w-100"
                disabled={isLoading}
              >
                {isLoading ? "Envoi en cours..." : "Envoyer"}
              </Button>
            </Form>
           
          </div>
        </Col>

        {/* Carte de Contact */}
        <Col md={6}>
          <div className="contact-card p-4 shadow-sm">
            <h3 className="mb-3">Contact - Localisation</h3>
            <p>
              <img
                src={myImage}
                alt="Description de l'image"
                className="mx-3"
              />
             {dataSlice[11].contactInfo[0].tilte}
            </p>
            <p>
              <img src={Image} alt="Description de l'image" className="mx-3" />
              {dataSlice[11].contactInfo[1].title}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="blue-icon mx-2"
                style={{ color: "blue" }}
              />
              {dataSlice[11].contactInfo[2].title}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormulaireHeader;
