import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import myImage from "../../Image/call.svg"
import Image from "../../Image/addrese.svg"








const ContactPage = () => {
  return (
    <Container id="contact-form" className="contact-page mt-5">
      <Row>
        {/* Formulaire de Contact */}
        <Col md={6}>
          <div className="form-card p-4 shadow-sm">
            <h2 className="mb-3">Formulaire de contact</h2>
            <p className="text-muted mb-4">Une réponse vous sera faite sous 24h</p>
            <Form>
              <FormGroup>
                <Label for="object">Objet <span style={{color:"red"}}>*</span></Label>
                <Input type="select" name="object" id="object">
                  <option value="RPO">RPO</option>
                  <option value="Autre">demande d'information(s)</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="name">Nom <span style={{color:"red"}}>*</span></Label>
                <Input type="text" name="name" id="name" placeholder="Nom" required />
              </FormGroup>
              <FormGroup>
                <Label for="firstName">Prénom <span style={{color:"red"}}>*</span></Label>
                <Input type="text" name="firstName" id="firstName" placeholder="Prénom" required />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email <span style={{color:"red"}}>*</span></Label>
                <Input type="email" name="email" id="email" placeholder="nom@mail.com" required />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Téléphone <span style={{color:"red"}}>*</span></Label>
                <Input type="tel" name="phone" id="phone" placeholder="0600000000" required />
              </FormGroup>
              <FormGroup>
                <Label for="company">Entreprise</Label>
                <Input type="text" name="company" id="company" placeholder="Nom de votre entreprise" />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message <span style={{color:"red"}}>*</span></Label>
                <Input type="textarea" name="message" id="message" placeholder="Votre message" required />
              </FormGroup>
              <Button color="primary" type="submit" className="w-100">
                Envoyer
              </Button>
            </Form>
          </div>
        </Col>

        {/* Carte de Contact */}
        <Col md={6}>
      <div className="contact-card p-4 shadow-sm">
        <h3 className="mb-3">Contact - Localisation</h3>
        <p>
         <img src={myImage} alt="Description de l'image"   className="mx-3"/>
          04 91 11 87 70
        </p>
        <p>
          
          <img src={Image} alt="Description de l'image"   className="mx-3"/>
          contact@stedy.io
        </p>
        <p>
          <i className="fas fa-map-marker-alt" style={{ color: '#007bff', marginRight: '10px' }}></i>
          <FontAwesomeIcon icon={faLocationDot} className="blue-icon mx-2"  style={{color:"blue"}}/>
          10 Place de la Joliette, 13002 Marseille
        </p>
      </div>
    </Col>
      </Row>
             
    

      <style>{`
  .contact-page .form-card, .contact-page .contact-card {
    padding: 30px;
    text-align: left;
    background-color: #fff; /* Assurez-vous que le fond est blanc */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Ombre visible et forte */
    border-radius: 10px; /* Ajoute des bords arrondis pour un effet visuel */
  }

  .contact-page .form-card {
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .contact-page .contact-card {
    padding: 30px;
    text-align: left;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .contact-page h2, .contact-page h3 {
    font-weight: bold;
  }

  .contact-page p {
    margin-bottom: 15px;
  }

  .contact-page i {
    color: #007bff;
  }

  .contact-page button {
    width: 100%;
  }

  @media (max-width: 768px) {
    .contact-page .form-card, .contact-page .contact-card {
      margin-bottom: 20px;
    }
  }
`}</style>


    </Container>
  );
};

export default ContactPage;
