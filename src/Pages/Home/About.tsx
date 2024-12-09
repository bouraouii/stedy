import React from "react";
import { Card, CardBody, CardTitle, Button, Container, Row, Col } from "reactstrap";


function About() {

  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container fluid className="py-5" style={{ background: "linear-gradient(to bottom, #fff5f5, white)" }}>
      {/* Section principale */}
      <Row>
        {/* Colonne de gauche : Texte */}
        <Col md="6" className="d-flex flex-column justify-content-center mb-5 mb-md-0">
          <h1 className="mb-4">L'offre RPO by StedY</h1>
          <p className="text-muted">Une relation simple, une prestation complète</p>
          <ul className="text-muted list-unstyled">
            <li className="mb-3">🔹 Un interlocuteur unique, responsable de la prestation</li>
            <li className="mb-3">🔹 Un chef de projet, responsable du pilotage stratégique</li>
            <li className="mb-3">🔹 L’ensemble des outils RH fournis (Job Boards, LinkedIn Recruiter, ATS, Reports, ...)</li>
            <li className="mb-3">🔹 La prise en charge de l’administratif RH (gestion des contrats, onboarding, ...)</li>
            <li className="mb-3">🔹 Des points hebdomadaires de suivi de l’activité avec un retour à chaud sur les tendances du marché</li>
            <li className="mb-3">🔹 Des points globaux avec report de l’activité (nombre de contacts, sociétés cibles, ...)</li>
          </ul>
          <Button color="primary" className="mt-4 shadow"onClick={scrollToContactForm}>Obtenir un devis</Button>
          
        </Col>

        {/* Colonne de droite : Cartes */}
        <Col md="6" className="d-flex flex-column align-items-center">
          {/* Texte "2 formules" */}
          <h5 className="text-muted mb-3">2 formules</h5>

          {/* Ligne des cartes */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4" style={{ flexWrap: "wrap" }}>
            {/* Carte 1 */}
            <Card className="shadow-sm border-primary" style={{ flex: "1", minWidth: "300px", maxWidth: "300px" }}>
              <div className="bg-primary text-white text-center py-3 rounded-top">
                <CardTitle tag="h5" className="mb-0">Sourcing Specialist</CardTitle>
              </div>
              <CardBody>
                <ul className="list-unstyled text-muted">
                  <li>Sourcing</li>
                  <li>Qualifications à distance</li>
                  <li>Gestion de la relation avec le business et les RH</li>
                  <li>Suivi RH (reporting)</li>
                </ul>
              </CardBody>
            </Card>

            {/* Carte 2 */}
            <Card className="shadow-sm border-primary" style={{ flex: "1", minWidth: "300px", maxWidth: "300px" }}>
              <div className="bg-primary text-white text-center py-3 rounded-top">
                <CardTitle tag="h5" className="mb-0">Talent Acquisition Specialist</CardTitle>
              </div>
              <CardBody>
                <ul className="list-unstyled text-muted">
                  <li>Sourcing</li>
                  <li>Entretiens physiques</li>
                  <li>Onboarding</li>
                  <li>Gestion de la relation avec le business</li>
                  <li>Admin RH</li>
                  <li>Campus management</li>
                  <li>Communication RH</li>
                </ul>
              </CardBody>
            </Card>
          </div>

          {/* Carte Durée de la prestation */}
          <div className="w-100 d-flex justify-content-center">
            <Card className="shadow-sm border-primary" style={{ maxWidth: "300px", flex: "1" }}>
              <div className="bg-primary text-white text-center py-3 rounded-top">
                <CardTitle tag="h5" className="mb-0">Durée de la prestation</CardTitle>
              </div>
              <CardBody>
                <p className="text-muted">
                  <strong>Déterminée :</strong> prestation de 1 ou plusieurs mois avec date de fin, renouvelable.
                </p>
                <p className="text-muted mt-3">
                  <strong>Indéterminée :</strong> avec préavis de fin de 1 mois.
                </p>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  ) 
  
}

export default About;
