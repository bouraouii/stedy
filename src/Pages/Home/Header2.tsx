import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { RootState } from "../../features/store";

import "./Style.css";

function Header2() {
  const dataSlice: any = useSelector((state: RootState) => state.data.data);

  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container
      fluid
      className="py-5"
      style={{ background: "linear-gradient(to bottom, #fff5f5, white)" }}
    >
      {/* Section principale */}
      <Row>
        {/* Colonne de gauche : Texte */}
        <Col
          md="6"
          className="d-flex flex-column justify-content-center mb-5 mb-md-0"
        >
          <h1 className="mb-4">{dataSlice[7].title}</h1>
          <p className="text-muted">{dataSlice[7].content}</p>
          {dataSlice[7].subSections.map((value: any) => (
            <div key={value.id}>
              {" "}
              {/* Ajoutez une clé unique pour chaque élément */}
              <ul className="text-muted list-unstyled">
                <li className="mb-3">🔹{value.title}</li>
              </ul>
            </div>
          ))}

          <Button
            color="primary"
            className="mt-4 shadow"
            onClick={scrollToContactForm}
          >
            Obtenir un devis
          </Button>
        </Col>

        {/* Colonne de droite : Cartes */}
        <Col md="6" className="d-flex flex-column align-items-center">
          {/* Texte "2 formules" */}
          <h5 className="text-muted mb-3">2 formules</h5>

          {/* Ligne des cartes */}
          <div
            className="d-flex flex-wrap justify-content-center gap-3 mb-4"
            style={{ flexWrap: "wrap" }}
          >
            {/* Carte 1 */}
            <Card
              className="shadow-sm border-primary"
              style={{ flex: "1", minWidth: "300px", maxWidth: "300px" }}
            >
              <div className="bg-primary text-white text-center py-3 rounded-top">
                <CardTitle tag="h5" className="mb-0">
                  {dataSlice[8].title}
                </CardTitle>
              </div>
              <h5 className="border-bottom my-2 mx-1 ">
                {dataSlice[8].subTitle}
              </h5>
              <CardBody>
                {dataSlice[8].sections.map((value: any) => (
                  <div>
                    <ul className="list-unstyled text-muted">
                      <li>{value.title}</li>
                    </ul>
                  </div>
                ))}
              </CardBody>
            </Card>

            {/* Carte 2 */}
            <Card
              className="shadow-sm border-primary"
              style={{ flex: "1", minWidth: "300px", maxWidth: "300px" }}
            >
              <div className="bg-primary text-white text-center py-3 rounded-top">
                <CardTitle tag="h5" className="mb-0">
                 {dataSlice[9].title}
                </CardTitle>
              </div>
              <h5 className="border-bottom my-2 mx-1 ">
                {dataSlice[9].subTitle}
              </h5>
              <CardBody>
              {dataSlice[9].sections.map((value: any) => (
                  <div>
                    <ul className="list-unstyled text-muted">
                      <li>{value.title}</li>
                    </ul>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>

          {/* Carte Durée de la prestation */}
          <div className="w-100 d-flex justify-content-center">
            <Card
              className="shadow-sm border-primary"
              style={{ maxWidth: "300px", flex: "1" }}
            >
              <div className="bg-primary text-white text-center py-3 rounded-top">
                <CardTitle tag="h5" className="mb-0">
                {dataSlice[10].title}
                </CardTitle>
              </div>
              <CardBody>
                <p className="text-muted">
                  <strong>{dataSlice[10].options[0].title} :</strong> {dataSlice[10].options[0].subTitle}
                </p>
                <p className="text-muted mt-3">
                <strong>{dataSlice[10].options[1].title} :</strong> {dataSlice[10].options[1].subTitle}
                </p>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header2;
